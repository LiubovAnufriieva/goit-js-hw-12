import{a as S,S as P,i as p}from"./assets/vendor-eded45c0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const q="43230635-158e2f6795128fbec19d81d21",H="https://pixabay.com/api/";async function y(i,o){const e=new URLSearchParams({key:q,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15});return(await S.get(`${H}?${e}`)).data}function g(i){return i.map(({webformatURL:o,largeImageURL:e,tags:s,likes:t,views:r,comments:a,downloads:b})=>`
    <li class="gallery-item">
    <div class="gallery-card">
      <a href="${e}">
        <img src="${o}" alt="${s}" class="gallery-img"></a>
      <div class="gallery-info-div">
        <ul class="info-item-list">
          <li class="info-item">
            <h2>Likes</h2>
            <p>${t}</p>
          </li>
          <li class="info-item">
            <h2>Views</h2>
            <p>${r}</p>
          </li>
          <li class="info-item">
            <h2>Comments</h2>
            <p>${a}</p>
          </li>
          <li class="info-item">
            <h2>Downloads</h2>
            <p>${b}</p>
          </li>
        </ul>
      </div>
      </div>
    </li>
  `).join("")}const v=document.querySelector(".search-form"),h=document.querySelector(".gallery-list"),m=document.querySelector(".load-more-btn"),M=document.querySelector(".loader"),d=document.querySelector(".arrow-up-div");function O(i){const o=i.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}function c(){M.classList.toggle("hidden")}function l(){m.classList.add("hidden")}function w(){m.classList.remove("hidden")}let u=" ",n=1,f,L=new P(".gallery-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});d.style.display="none";v.addEventListener("submit",$);m.addEventListener("click",T);async function $(i){i.preventDefault();const{searchRequest:o}=i.currentTarget.elements;if(u=o.value.trim(),!u)return p.warning({title:"",position:"topCenter",message:"The field can not be empty!!!",timeout:3e3,pauseOnHover:!1});h.innerHTML="",n=1,m.classList.contains("hidden")||l(),c();try{const e=await y(u,n);e.hits.length===0?p.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}):(h.insertAdjacentHTML("beforeend",g(e.hits)),L.refresh(),f=e.totalHits/e.hits.length,n<f&&w())}catch(e){alert(e.message)}finally{v.reset()}c()}async function T(){n+=1,l(),c();try{const e=await y(u,n);h.insertAdjacentHTML("beforeend",g(e.hits)),L.refresh();const s=document.querySelector(".gallery-item");O(s),n>f&&e.totalHits&&(c(),l(),p.info({title:"",message:"We're sorry, but you've reached the end of search results!",position:"bottomRight",timeout:3e3,pauseOnHover:!1})),c(),w()}catch(e){alert(e.message),l()}finally{n>f&&(l(),i())}function i(){return inputData.value=""}window.addEventListener("scroll",function(){window.scrollY>300?d.style.display="block":d.style.display="none"}),d.addEventListener("click",o);function o(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
