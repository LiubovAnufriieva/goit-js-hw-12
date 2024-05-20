import{a as S,S as P,i as p}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const q="43230635-158e2f6795128fbec19d81d21",H="https://pixabay.com/api/";async function y(r,e){const i=new URLSearchParams({key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await S(`${H}?${i}`)).data}function g(r){return r.map(({webformatURL:e,largeImageURL:i,tags:s,likes:t,views:o,comments:l,downloads:b})=>`
    <li class="gallery-item">
    <div class="gallery-card">
      <a href="${i}">
        <img src="${e}" alt="${s}" class="gallery-img"></a>
      <div class="gallery-info-div">
        <ul class="info-item-list">
          <li class="info-item">
            <h2>Likes</h2>
            <p>${t}</p>
          </li>
          <li class="info-item">
            <h2>Views</h2>
            <p>${o}</p>
          </li>
          <li class="info-item">
            <h2>Comments</h2>
            <p>${l}</p>
          </li>
          <li class="info-item">
            <h2>Downloads</h2>
            <p>${b}</p>
          </li>
        </ul>
      </div>
      </div>
    </li>
  `).join("")}const v=document.querySelector(".search-form"),M=document.querySelector(".search-input"),h=document.querySelector(".gallery-list"),m=document.querySelector(".load-more-btn"),O=document.querySelector(".loader"),d=document.querySelector(".arrow-up-div");function $(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function a(){O.classList.toggle("hidden")}function c(){m.classList.add("hidden")}function w(){m.classList.remove("hidden")}let u=" ",n=1,f,L=new P(".gallery-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});v.addEventListener("submit",E);m.addEventListener("click",T);async function E(r){if(r.preventDefault(),u=M.value.trim(),u==="")return p.warning({title:"",position:"topCenter",message:"The field can not be empty!!!",timeout:3e3,pauseOnHover:!1});h.innerHTML="",n=1,m.classList.contains("hidden")||c(),a();try{const e=await y(u,n);e.hits.length===0?p.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}):(h.insertAdjacentHTML("beforeend",g(e.hits)),L.refresh(),f=e.totalHits/e.hits.length,n<f&&w())}catch(e){alert(e.message)}finally{v.reset()}a()}async function T(){n+=1,c(),a();try{const i=await y(u,n);h.insertAdjacentHTML("beforeend",g(i.hits)),L.refresh();const s=document.querySelector(".gallery-item");$(s),n>f&&i.totalHits&&(a(),c(),p.info({title:"",message:"We're sorry, but you've reached the end of search results!",position:"bottomRight",timeout:3e3,pauseOnHover:!1})),a(),w()}catch(i){alert(i.message),c()}finally{n>f&&(c(),a(),r())}function r(){return inputData.value=""}d.style.display="none",window.addEventListener("scroll",function(){window.scrollY>300?d.style.display="block":d.style.display="none"}),d.addEventListener("click",e);function e(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
