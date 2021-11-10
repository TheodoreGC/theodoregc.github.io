// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".website-footer.svelte-svovd7{flex-shrink:0;align-self:center;font-size:0.8rem;margin:2rem 0}.website-media-list.svelte-svovd7{list-style-type:none;padding:0;display:flex;justify-content:center}.website-media-list-item-link.svelte-svovd7{padding:12px;color:white}.website-media-list-item-link.svelte-svovd7:hover{color:var(--highlight-color)}.website-footer-copyright.svelte-svovd7{font-size:0.8rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}