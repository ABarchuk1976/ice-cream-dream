!function(){var e=document.querySelector("[data-modal-button]"),o=document.querySelector("[data-modal-button-close]"),d=document.querySelector("[data-modal]"),s=document.querySelector("[data-modal-backdrop]");e.addEventListener("click",(function(){d.classList.add("is-open"),s.classList.add("is-open"),document.body.classList.add("body-fixed")})),o.addEventListener("click",(function(){d.classList.remove("is-open"),s.classList.remove("is-open"),document.body.classList.remove("body-fixed")})),document.addEventListener("keydown",(function(e){var o=e.key;console.log(o),"Escape"===o&&(d.classList.remove("is-open"),s.classList.remove("is-open"),document.body.classList.remove("body-fixed"))}))}();
//# sourceMappingURL=index.d975f8f7.js.map
