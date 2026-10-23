/* Optional, dependency-free behavior for XFact tabs. Other components use native HTML. */
export function initTabs(root=document){
  for(const list of root.querySelectorAll('[data-xf-tabs]')){
    if(list.dataset.xfReady)continue;
    list.dataset.xfReady='true';
    const tabs=[...list.querySelectorAll('[role="tab"]')];
    function activate(tab,focus=false){
      for(const item of tabs){const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;const panel=document.getElementById(item.getAttribute('aria-controls'));if(panel)panel.hidden=!active;}
      if(focus)tab.focus();
    }
    tabs.forEach(tab=>{tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',event=>{
      const rtl=getComputedStyle(list).direction==='rtl';
      const index=tabs.indexOf(tab);let next;
      if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;
      else if(event.key==='ArrowRight')next=(index+(rtl?-1:1)+tabs.length)%tabs.length;
      else if(event.key==='ArrowLeft')next=(index+(rtl?1:-1)+tabs.length)%tabs.length;
      if(next!==undefined){event.preventDefault();activate(tabs[next],true);}
    });});
    activate(tabs.find(tab=>tab.getAttribute('aria-selected')==='true')||tabs[0]);
  }
}
