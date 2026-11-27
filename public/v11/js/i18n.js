/* v11 TH/EN toggle. Key: localStorage "bss-lang" (same as v10).
   - Pages with span.th / span.en (blog) switch by CSS via html[data-lang].
   - Pages copied verbatim from the live site (home, musicforbrand) are translated at runtime from a
     dictionary (window.BSS_DICT) so the original markup and scripts stay untouched. A MutationObserver
     also translates text the page's own scripts generate later (estimator summary etc.).
   With no saved choice, each page opens in its live language (home EN, musicforbrand TH, blog TH). */
(function(){
  var KEY='bss-lang', root=document.documentElement;
  var nativeLang=root.getAttribute('data-native-lang')||'th';
  var D=window.BSS_DICT||null, lang;
  try{lang=localStorage.getItem(KEY)}catch(e){}
  if(lang!=='th'&&lang!=='en') lang=nativeLang;
  var orig=new WeakMap(), written=new WeakMap(), attrOrig=new WeakMap();
  var exact={}, phrases=[], srcRe=null;
  if(D){
    exact=D.exact||{};
    phrases=(D.phrases||[]).slice().sort(function(a,b){return b[0].length-a[0].length});
    srcRe=D.from==='th'?/[\u0e00-\u0e7f]/:/[A-Za-z]/;
  }
  function norm(s){return s.replace(/\s+/g,' ').trim()}
  function tr(s){
    if(!s||!srcRe||!srcRe.test(s)) return s;
    var m=s.match(/^(\s*)([\s\S]*?)(\s*)$/), core=m[2], key=norm(core);
    if(Object.prototype.hasOwnProperty.call(exact,key)) return m[1]+exact[key]+m[3];
    if(D.from!=='th') return s; /* English source: exact matches only */
    var out=core;
    (D.regex||[]).forEach(function(r){out=out.replace(new RegExp(r[0],'g'),r[1])});
    for(var i=0;i<phrases.length;i++){ if(out.indexOf(phrases[i][0])>-1) out=out.split(phrases[i][0]).join(phrases[i][1]); }
    return m[1]+out+m[3];
  }
  function want(){return D&&lang===D.to}
  var SKIP={SCRIPT:1,STYLE:1,NOSCRIPT:1,TEXTAREA:1};
  function doText(n){
    var p=n.parentNode; if(!p||SKIP[p.nodeName]||(p.closest&&p.closest('[data-no-i18n]'))) return;
    var cur=n.data;
    if(written.get(n)!==cur) orig.set(n,cur); /* page script changed it: new original */
    var o=orig.get(n); var next=want()?tr(o):o;
    if(next!==cur){ n.data=next; }
    written.set(n,next);
  }
  var ATTRS=['placeholder','title','aria-label','alt'];
  function doEl(el){
    if(el.closest&&el.closest('[data-no-i18n]')) return;
    var store=attrOrig.get(el)||{};
    ATTRS.forEach(function(a){
      if(!el.hasAttribute(a)) return;
      var v=el.getAttribute(a), rec=store[a];
      if(!rec||rec.w!==v) rec={o:v};
      var next=want()?tr(rec.o):rec.o; rec.w=next; store[a]=rec;
      if(next!==v) el.setAttribute(a,next);
    });
    attrOrig.set(el,store);
  }
  function walk(node){
    if(node.nodeType===3){doText(node);return}
    if(node.nodeType!==1) return;
    doEl(node); if(SKIP[node.nodeName]) return;
    var w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null);
    var n; while((n=w.nextNode())){ if(n.nodeType===3) doText(n); else doEl(n); }
  }
  var titleOrig=null;
  function apply(){
    root.setAttribute('data-lang',lang); root.lang=lang;
    document.querySelectorAll('[data-lang-btn]').forEach(function(b){
      var on=b.getAttribute('data-lang-btn')===lang; b.classList.toggle('active',on); b.setAttribute('aria-pressed',on?'true':'false');
    });
    if(D){
      if(titleOrig===null) titleOrig=document.title;
      document.title=want()?tr(titleOrig):titleOrig;
      busy=true; walk(document.body); busy=false;
    }
  }
  var busy=false;
  if(D&&window.MutationObserver){
    new MutationObserver(function(muts){
      if(busy) return; busy=true;
      muts.forEach(function(m){
        if(m.type==='characterData') doText(m.target);
        else if(m.type==='attributes') doEl(m.target);
        else m.addedNodes.forEach(walk);
      });
      busy=false;
    }).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
    /* summary-card image is drawn on a canvas: translate its text too */
    var CR=window.CanvasRenderingContext2D&&CanvasRenderingContext2D.prototype;
    if(CR){['fillText','strokeText','measureText'].forEach(function(fn){var f=CR[fn];CR[fn]=function(t){var a=[].slice.call(arguments);if(want()&&typeof t==='string')a[0]=tr(t);return f.apply(this,a)}})}
  }
  function set(l){lang=l;try{localStorage.setItem(KEY,l)}catch(e){}apply()}
  document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-lang-btn]');if(b){e.preventDefault();set(b.getAttribute('data-lang-btn'))}});
  window.BSS_I18N={tr:tr,set:set,get:function(){return lang}};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply); else apply();
})();
