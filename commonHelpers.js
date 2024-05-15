import{a as P,S as q,i as m}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const H="43230635-158e2f6795128fbec19d81d21",M="https://pixabay.com/api/";async function g(r,e){const i=new URLSearchParams({key:H,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await P(`${M}?${i}`)).data}function v(r){return r.map(({webformatURL:e,largeImageURL:i,tags:s,likes:t,views:o,comments:l,downloads:S})=>`
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
            <p>${S}</p>
          </li>
        </ul>
      </div>
      </div>
    </li>
  `).join("")}const w=document.querySelector(".search-form"),y=document.querySelector(".search-input"),p=document.querySelector(".gallery-list"),f=document.querySelector(".load-more-btn"),O=document.querySelector(".loader"),d=document.querySelector(".arrow-up-div");function $(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function a(){O.classList.toggle("hidden")}function c(){f.classList.add("hidden")}function L(){f.classList.remove("hidden")}let h=" ",n=1,u,b=new q(".gallery-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});w.addEventListener("submit",E);f.addEventListener("click",T);async function E(r){if(r.preventDefault(),p.innerHTML="",n=1,f.classList.contains("hidden")||c(),y.value.trim()===" ")return m.warning({title:"",position:"topRight",message:"The field can not be empty!!!",timeout:3e3,pauseOnHover:!1});h=y.value.trim(),a();try{const e=await g(h,n);e.hits.length===0?m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}):(p.insertAdjacentHTML("beforeend",v(e.hits)),b.refresh(),u=e.totalHits/e.hits.length,n<u&&L())}catch(e){alert(e.message)}finally{w.reset()}a()}async function T(){n+=1,c(),a();try{const i=await g(h,n);p.insertAdjacentHTML("beforeend",v(i.hits)),b.refresh();const s=document.querySelector(".gallery-item");$(s),n>u&&i.totalHits&&(a(),c(),m.info({title:"",message:"We're sorry, but you've reached the end of search results!",position:"bottomRight",timeout:3e3,pauseOnHover:!1})),a(),L()}catch(i){alert(i.message),c()}finally{n>u&&(c(),a(),r())}function r(){return inputData.value=""}d.style.display="none",window.addEventListener("scroll",function(){window.scrollY>300?d.style.display="block":d.style.display="none"}),d.addEventListener("click",e);function e(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
