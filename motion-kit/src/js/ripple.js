// motion-kit/src/js/ripple.js
export function initRipple() {
  document.addEventListener("click", function(e){
    const el = e.target.closest(".ripple");
    if(!el) return;

    const rect = el.getBoundingClientRect();
    const s = document.createElement("span");
    s.className = "ripple__circle";

    const size = Math.max(rect.width,rect.height);
    s.style.width = s.style.height = size+"px";
    s.style.left = (e.clientX - rect.left - size/2)+"px";
    s.style.top  = (e.clientY - rect.top - size/2)+"px";

    el.appendChild(s);

    requestAnimationFrame(()=> s.classList.add("ripple__animate"));
    s.addEventListener("animationend", ()=> s.remove());
  });
}
