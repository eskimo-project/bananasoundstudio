/* Static re-implementation of the live site's FeaturedCarousel (Next.js client component):
   auto-advances every 4.2s, centres the active slide, and plays the muted trailer only on the active slide.
   v11.3: "Watch trailer" plays the trailer with sound + controls over the whole slide (text hidden);
   X button or Esc closes it and restores the slide; auto-advance pauses while a trailer plays. */
(function(){
  var slider=document.querySelector('.featured-slider'); if(!slider) return;
  var slides=[].slice.call(slider.querySelectorAll('.featured-slide')); if(!slides.length) return;
  var active=0, timer=null, playing=null;
  function idOf(s){var a=s.querySelector('a.featured-pill[href*="watch?v="]');return a?a.getAttribute('href').split('v=')[1].split('&')[0]:null}
  function setActive(i){
    active=i;
    slides.forEach(function(s,k){
      var f=s.querySelector('.featured-video-frame'); if(!f) return;
      var ifr=f.querySelector('iframe'), id=idOf(s);
      var want=k===i&&id&&s!==playing;
      if(want&&!ifr){
        ifr=document.createElement('iframe');
        ifr.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist='+id+'&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1';
        ifr.title=(s.querySelector('h3')||{}).textContent+' trailer background';
        ifr.allow='autoplay; encrypted-media; picture-in-picture'; ifr.tabIndex=-1; f.appendChild(ifr);
      } else if(!want&&ifr){ifr.remove()}
    });
  }
  function centre(i){var s=slides[i];slider.scrollTo({left:s.offsetLeft-(slider.clientWidth-s.offsetWidth)/2,behavior:'smooth'})}
  function start(){ if(slides.length>1&&!timer) timer=setInterval(function(){var n=(active+1)%slides.length;setActive(n);centre(n)},4200); }
  function stop(){ if(timer){clearInterval(timer);timer=null} }
  function closePlayer(){
    if(!playing) return;
    var s=playing; playing=null;
    var p=s.querySelector('.featured-player'); if(p) p.remove();
    s.classList.remove('is-playing');
    setActive(active); start();
    var pill=s.querySelector('a.featured-pill'); if(pill) pill.focus({preventScroll:true});
  }
  function openPlayer(s){
    var id=idOf(s); if(!id) return;
    if(playing) closePlayer();
    stop(); playing=s; active=slides.indexOf(s); setActive(active); /* removes the muted background iframe */
    s.classList.add('is-playing');
    var p=document.createElement('div'); p.className='featured-player';
    var ifr=document.createElement('iframe');
    ifr.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&controls=1&playsinline=1&rel=0&modestbranding=1';
    ifr.title=(s.querySelector('h3')||{}).textContent+' trailer';
    ifr.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    ifr.setAttribute('allowfullscreen',''); ifr.referrerPolicy='strict-origin-when-cross-origin';
    var x=document.createElement('button'); x.type='button'; x.className='featured-player-close'; x.setAttribute('aria-label','Close trailer'); x.innerHTML='&times;';
    x.addEventListener('click',closePlayer);
    p.appendChild(ifr); p.appendChild(x); s.appendChild(p); x.focus({preventScroll:true});
    /* keep the close button clear of the fixed site header */
    var nav=document.querySelector('.site-nav'), nb=nav?nav.getBoundingClientRect().bottom+8:0, top=s.getBoundingClientRect().top;
    if(top<nb) window.scrollBy({top:top-nb,behavior:'smooth'});
  }
  slides.forEach(function(s){
    var a=s.querySelector('a.featured-pill[href*="watch?v="]');
    if(a) a.addEventListener('click',function(e){ if(e.metaKey||e.ctrlKey||e.shiftKey||e.button===1) return; e.preventDefault(); openPlayer(s); });
  });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&playing) closePlayer(); });
  slider.addEventListener('scroll',function(){
    var mid=slider.scrollLeft+slider.clientWidth/2,best=active,d=1/0;
    slides.forEach(function(s,k){var x=Math.abs(mid-(s.offsetLeft+s.offsetWidth/2));if(x<d){d=x;best=k}});
    if(best!==active){ if(playing&&slides[best]!==playing) closePlayer(); setActive(best); }
  },{passive:true});
  setActive(0); start();
  window.BSS_CAROUSEL={isPlaying:function(){return !!playing},timerOn:function(){return !!timer}};
})();
