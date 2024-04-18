import{S as b,a as L,i as l}from"./assets/vendor-06b1bbdf.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function d(e){const a=document.querySelector(".gallery"),o=e.map(({webformatURL:t,largeImageURL:r,tags:s,likes:y,views:g,comments:p,downloads:m})=>`
  
        <div class="gallery-card">
            <li class="gallery-items">
                <a href="${r}">
                <img src="${t}" alt="${s}" class="gallery-img"></a>
                <div class="card-text-div">
                    <ul class="card-text-list">
                        <li class="card-text">
                            <h2>Likes</h2>
                            <p>${y}</p>
                        </li>
                        <li class="card-text">
                            <h2>Views</h2>
                            <p>${g}</p>
                        </li>
                        <li class="card-text">
                            <h2>Comments</h2>
                            <p>${p}</p>
                        </li>
                        <li class="card-text">
                            <h2>Downloads</h2>
                            <p>${m}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>`).join("");a.insertAdjacentHTML("beforeend",o),new b(".gallery a",{captionsData:"alt",captionDelay:150,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}).refresh()}const S="43230635-158e2f6795128fbec19d81d21",q="https://pixabay.com/api/",w=document.querySelector(".loader"),v=document.querySelector(".load-btn");async function u(e,a=1){try{const{data:o}=await L(`${q}`,{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}});o.total||l.error({title:"Error",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),d(o.hits)}catch{l.error({title:"Error",position:"topRight",message:"Failed to fetch images. Please try again later."})}finally{w.hidden=!0,v.hidden=!1}}const h=document.querySelector(".search-form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-btn");h.addEventListener("submit",$);n.hidden=!0;i.hidden=!0;function $(e){e.preventDefault(),f.innerHTML="",n.hidden=!1;const{searchRequest:a}=e.currentTarget.elements;let o=a.value;u(o),h.reset()}i.addEventListener("click",x);async function x(){page+=1,i.disabled=!0,R(),n.hidden=!0;try{const e=await u(searchQuery,page=1);f.insertAdjacentHTML("beforeend",d(e.results)),n.hidden=!0,i.hidden=!1,i.disabled=!1;const o=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"}),e.page>=page.totalPa&&(i.hidden=!0)}catch(e){alert(e.message)}finally{n.hidden=!0}}function P(){const e=document.querySelector(".gallery-card");return e?e.getBoundingClientRect().height:0}function R(){const e=P();e>0&&window.scrollBy(0,e*2)}
//# sourceMappingURL=commonHelpers.js.map
