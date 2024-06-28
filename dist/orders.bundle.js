(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){localStorage.setItem("Orders",JSON.stringify(e))}function n(){const e=localStorage.getItem("Orders");return JSON.parse(e)}function r(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}e.d({},{wy:()=>a,_P:()=>d,MX:()=>u});const c=document.querySelector(".orders__cards");function o(){const e=document.querySelector(".orders__footer-totalPrice-value"),t=n(),c=document.querySelector(".orders__message"),o=document.querySelector(".orders__footer");if(null!==t&&0!==t.length){c.style.display="none",o.style.display="block";const n=t.reduce(((e,t)=>e+t.price*t.count),0);e.textContent=r(n)}else c.style.display="block",o.style.display="none"}function d(e){if(e.target.classList.contains("order-card__btn-plus")){const r=n(),c=e.currentTarget,d=+c.id,a=c.children[2].children[0].childNodes[1].children[0],i=c.children[2].children[1].children[0];r.forEach((e=>{e.id===d&&(e.count+=1,a.textContent=e.count,t(r),s(i,e),o())}))}}function a(e){if(e.target.classList.contains("order-card__btn-minus")){const r=n(),c=e.currentTarget,d=+c.id,a=c.children[2].children[0].children[1].children[0],u=c.children[2].children[1].children[0];r.forEach((e=>{e.id===d&&(e.count>1?(e.count-=1,a.textContent=e.count,t(r),s(u,e),o()):(i(c,d),o()))}))}}function s(e,t){const n=t.price*t.count;e.textContent=r(n)}function i(e,r){const c=n();e.remove(),t(c.filter((e=>e.id!==r)))}function u(e){const t=e.target.parentNode.parentNode;i(t,+t.id),o()}document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=n();e&&e.forEach((e=>{return t=e,void c.append(function(e){const t=document.createElement("div");return t.classList.add("order-card"),t.id=e.id,t.append(function(e){const t=document.createElement("div");return t.classList.add("order-card__image"),t.append(function(e){const t=document.createElement("img");return t.src=e.image,t}(e)),t}(e),function(e){const t=document.createElement("div");return t.classList.add("order-card__name"),t.append(function(e){const t=document.createElement("span");return t.textContent=e.name,t}(e)),t}(e),function(e){const t=document.createElement("div");return t.classList.add("order-card__info"),t.append(function(e){const t=document.createElement("div");return t.classList.add("order-card__counter"),t.append(function(){const e=document.createElement("div");return e.classList.add("order-card__container-minus"),e.append(function(){const e=document.createElement("button");return e.classList.add("order-card__btn-minus"),e.textContent="-",e}()),e}(),function(e){const t=document.createElement("div");return t.classList.add("order-card__count"),t.append(function(e){const t=document.createElement("span");return t.classList.add("order-card__count-value"),t.textContent=e.count,t}(e)),t}(e),function(){const e=document.createElement("div");return e.classList.add("order-card__container-plus"),e.append(function(){const e=document.createElement("button");return e.classList.add("order-card__btn-plus"),e.textContent="+",e}()),e}()),t}(e),function(e){const t=document.createElement("div");return t.classList.add("order-card__price"),t.append(function(e){const t=document.createElement("span");t.classList.add("order-card__price-value");const n=e.price*e.count;return t.textContent=r(n),t}(e)),t}(e)),t}(e),function(){const e=document.createElement("div");return e.classList.add("order-card__btnClose-container"),e.append(function(){const e=document.createElement("button");return e.classList.add("order-card__btnClose"),e.addEventListener("click",u),e}()),e}()),t.addEventListener("click",d),t.addEventListener("click",a),t}(t));var t}))}(),o()}))})();