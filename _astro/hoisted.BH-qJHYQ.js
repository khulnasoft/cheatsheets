import"./hoisted.CkU5j3AK.js";import{i as r}from"./preview.odIbT5DC.js";function i(s,e){const t=s.getAttribute("data-"+e);return JSON.parse(t||"{}")}function a(s,e){if(!window.localStorage)return;let t=JSON.parse(window.localStorage[s]||"{}");t=e(t),window.localStorage[s]=JSON.stringify(t)}function d(s){if(window.localStorage)return JSON.parse(window.localStorage[s]||"{}")}function c(s){a("dismissed",function(e){return e[s]=!0,e})}function l(s){const e=d("dismissed");return e&&e[s]}function u(){document.querySelectorAll("[data-js-dismiss]").forEach(s=>{const e=s.closest("[data-js-dismissable]"),t=i(e,"js-dismissable"),o=t&&t.id||"";s.addEventListener("click",n=>{c(o),n.preventDefault(),e&&e.parentNode&&e.parentNode.removeChild(e)})})}function m(){document.querySelectorAll("[data-js-dismissable]").forEach(s=>{const e=i(s,"js-dismissable").id||"";r()||l(e)?s.parentNode.removeChild(s):s.classList.remove("-hide")})}u();m();
