import{S as L,a as b,i as n}from"./assets/vendor-06b1bbdf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(r){const o=document.querySelector(".gallery"),a=r.map(({webformatURL:e,largeImageURL:t,tags:s,likes:p,views:y,comments:m,downloads:g})=>`
  
        <div class="gallery-card">
            <li class="gallery-items">
                <a href="${t}">
                <img src="${e}" alt="${s}" class="gallery-img"></a>
                <div class="card-text-div">
                    <ul class="card-text-list">
                        <li class="card-text">
                            <h2>Likes</h2>
                            <p>${p}</p>
                        </li>
                        <li class="card-text">
                            <h2>Views</h2>
                            <p>${y}</p>
                        </li>
                        <li class="card-text">
                            <h2>Comments</h2>
                            <p>${m}</p>
                        </li>
                        <li class="card-text">
                            <h2>Downloads</h2>
                            <p>${g}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>`).join("");o.insertAdjacentHTML("beforeend",a),new L(".gallery a",{captionsData:"alt",captionDelay:150,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}).refresh()}const S="43230635-158e2f6795128fbec19d81d21",v="https://pixabay.com/api/";async function u(r,o=1){try{const{data:a}=await b(`${v}`,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}});a.total||n.error({title:"Error",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),d(a.hits)}catch{n.error({title:"Error",position:"topRight",message:"Failed to fetch images. Please try again later."})}}const h=document.querySelector(".search-form"),f=document.querySelector(".gallery"),i=document.querySelector(".loader"),c=document.querySelector(".load-btn");h.addEventListener("submit",q);i.hidden=!0;function q(r){r.preventDefault(),f.innerHTML="",i.hidden=!1;const{searchRequest:o}=r.currentTarget.elements;let a=o.value;u(a),h.reset()}c.addEventListener("click",w);async function w(){page+=1,c.disabled=!0,i.hidden=!0;try{const r=await u(searchQuery,page=1);f.insertAdjacentHTML("beforeend",d(r.results)),i.hidden=!0,c.hidden=!1;const a=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"}),r.page>=500&&(i.hidden=!0)}catch(r){alert(r.message)}finally{i.hidden=!0}}
//# sourceMappingURL=commonHelpers.js.map
