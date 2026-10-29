/* ============ mount piece HTML ============ */
document.getElementById('g-onepager').innerHTML = ONEPAGER;
document.getElementById('g-cards').innerHTML    = CARDS;
document.getElementById('g-thumbs').innerHTML   = THUMBS;
/* scroll-strip review: same artboards at true feed scale in a list */
(function(){
  const wrap=document.getElementById('v-thumbs');
  const titles=[['Stop being the middleware','Playbook · 6 min read'],
                ['47 gaps, found for you','Guide · SEO · 4 min read'],
                ['One agent. Your whole loop','Product · 3 min read']];
  const strip=document.createElement('div');
  strip.innerHTML='<div class="subhead" style="margin-top:58px">Scroll test · <b>real feed scale</b> — what it looks like scrolling past</div>'+
    '<div class="strip" id="strip"></div>';
  wrap.appendChild(strip);
})();
document.getElementById('sh-cards').innerHTML   = 'Team set · <b>one template, four people, two front treatments</b> · trim 3.5×2in · +1/8in bleed · name leads, logo signs off at the bottom · content sits just inside safe';
document.getElementById('v-social').innerHTML =
  '<div class="subhead">In situ · <b>real platform chrome</b> — Instagram feed &amp; story, LinkedIn, X</div>'+
  '<div class="pgrid" style="gap:44px">'+MOCKUPS+'</div>'+
  '<div class="subhead" style="margin-top:62px">Artboards · <b>true size</b> · one template cascaded to every placement</div>'+
  '<div class="pgrid">'+ARTBOARDS+'</div>';
document.getElementById('dstage').innerHTML = DECK +
  '<div class="clickzone"><i id="cz-prev"></i><i id="cz-next" style="flex:2.2"></i></div>';

/* ============ config ============ */
const META={
  onepager:{t:'Sales one-pager',d:'trim 8.5×11in · doc 8.75×11.25in (+1/8in bleed) @96dpi',
    n:'Light-first, no button (print isn’t interactive). 8-col grid; dotted motif cropped off-canvas.',print:1},
  cards:{t:'Business cards',d:'trim 3.5×2in · doc 3.75×2.25in (+1/8in bleed) @300dpi',
    n:'Four people from one template. Guides off = trim; on = bleed. “Actual” is the only honest test.',print:1},
  social:{t:'Social',d:'1080² · 1080×1350 · 1080×1920 · 1200×630',
    n:'Type sized for the delivered feed, not the artboard. In-platform, static or in motion.',motion:1},
  thumbs:{t:'Blog thumbnails',d:'1200 × 630 px · OG / blog header',n:'One system, varied media. Animated.',motion:1},
  deck:{t:'Sales deck',d:'1280 × 720 px · 16:9 · 7 slides',n:'← → / space / click · F to present. Slides transition.',deck:1}
};
const stage=document.getElementById('stage'),info=document.getElementById('info');
const zoomctl=document.getElementById('zoomctl'),deckctl=document.getElementById('deckctl'),
      motionctl=document.getElementById('motionctl'),gtg=document.getElementById('gtg'),
      themectl=document.getElementById('themectl');
let view='onepager',zoom='one',motion=true,theme='tl';

/* ============ theme (light first) ============ */
function applyTheme(){
  document.querySelectorAll('.view').forEach(v=>{v.classList.remove('tl','td');v.classList.add(theme)});
  themectl.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.t===theme));
}

/* ============ sizing ============ */
function scaleFor(f){
  const w=+f.dataset.w,h=+f.dataset.h,dpi=+(f.dataset.dpi||96);
  if(zoom==='one')return 1;
  if(zoom==='phys')return 96/dpi;
  return Math.min(1,(stage.clientWidth-92-54)/w,(stage.clientHeight-92-40)/h);
}
function layout(){
  const showBleed=document.getElementById('guides').checked;
  document.querySelectorAll('.view:not(.deckview) .pw > .frame').forEach(f=>{
    const w=+f.dataset.w,h=+f.dataset.h,s=scaleFor(f);
    const trim=+(f.dataset.trim||0);
    // The TRIM box is anchored: its size and position never change. Toggling guides
    // only reveals/hides the bleed *around* it, so the piece never moves under review.
    f.style.width=w+'px';f.style.height=h+'px';
    f.style.transform='translate('+(-trim*s)+'px,'+(-trim*s)+'px) scale('+s+')';
    const pw=f.parentElement;
    pw.style.width=((w-2*trim)*s)+'px';pw.style.height=((h-2*trim)*s)+'px';
    pw.style.overflow=showBleed?'visible':'hidden';pw.style.marginBottom='26px';
  });
  mountSlots(); buildStrip(); layoutDeck();
}
function layoutDeck(){
  const ds=document.getElementById('dstage');const W=1280,H=720,wrap=ds.parentElement;
  const s=Math.min((wrap.clientWidth-48)/W,(wrap.clientHeight-48)/H);
  ds.style.width=W+'px';ds.style.height=H+'px';ds.style.transform='scale('+s+')';
  ds.querySelectorAll('.dslide .frame').forEach(f=>{f.style.width=W+'px';f.style.height=H+'px'});
}
/* clone artboards into platform slots, scaled to the device */
function mountSlots(){
  document.querySelectorAll('.slot[data-src]').forEach(slot=>{
    const src=document.getElementById(slot.dataset.src); if(!src)return;
    const w=+src.dataset.w,h=+src.dataset.h;
    const availW=slot.clientWidth||slot.parentElement.clientWidth;
    if(!availW)return;
    const cover=slot.classList.contains('cover');
    const availH=cover?(slot.parentElement.clientHeight||770):null;
    const s=cover?Math.max(availW/w,availH/h):availW/w;   // true cover: fill, crop overflow
    let c=slot.firstElementChild;
    if(!c||!c.classList.contains('frame')){c=src.cloneNode(true);c.removeAttribute('id');slot.innerHTML='';slot.appendChild(c)}
    c.style.width=w+'px';c.style.height=h+'px';c.style.transformOrigin='top left';
    c.style.boxShadow='none';c.style.borderRadius='0';
    if(cover){
      slot.style.position='absolute';slot.style.inset='0';slot.style.height='auto';
      c.style.transform='translate('+((availW-w*s)/2)+'px,'+((availH-h*s)/2)+'px) scale('+s+')';
    }else{
      c.style.transform='scale('+s+')';
      slot.style.height=(h*s)+'px';
    }
  });
}

function buildStrip(){
  const host=document.getElementById('strip'); if(!host)return;
  const src=[...document.querySelectorAll('#g-thumbs > .pw > .frame')];
  const titles=[['Stop being the middleware','Playbook · 6 min read'],
                ['47 gaps, found for you','Guide · SEO · 4 min'],
                ['One agent. Your whole loop','Product · 3 min read']];
  host.innerHTML='';
  src.forEach((f,i)=>{
    const w=+f.dataset.w,h=+f.dataset.h,s=152/w;
    const row=document.createElement('div');row.className='row';
    const th=document.createElement('div');th.className='th';
    const c=f.cloneNode(true);
    c.style.width=w+'px';c.style.height=h+'px';c.style.transform='scale('+s+')';
    th.appendChild(c);th.style.height=(h*s)+'px';
    const m=document.createElement('div');m.className='meta';
    m.innerHTML='<b>'+(titles[i]?titles[i][0]:'')+'</b><span>'+(titles[i]?titles[i][1]:'')+'</span>';
    row.appendChild(th);row.appendChild(m);host.appendChild(row);
  });
}

/* ============ view switching ============ */
function setView(v){
  view=v;
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
  document.querySelectorAll('.view').forEach(s=>s.classList.toggle('on',s.id==='v-'+v));
  const m=META[v];
  info.innerHTML='<b>'+m.t+'</b><span class="px">'+m.d+'</span><span>'+m.n+'</span>'+
    (m.print?'<span class="legend"><span class="lg-b"><i></i>bleed</span><span class="lg-t"><i></i>trim / cut</span><span class="lg-s"><i></i>safe</span></span>':'');
  zoomctl.hidden=!!m.deck; deckctl.hidden=!m.deck; motionctl.hidden=!m.motion;
  gtg.style.display=m.print?'flex':'none';
  stage.style.overflow=m.deck?'hidden':'auto';
  layout(); stage.scrollTop=0;
  if(m.motion)applyMotion(true);
  if(m.deck)go(cur);
}
document.getElementById('tabs').onclick=e=>{const b=e.target.closest('button');if(b)setView(b.dataset.v)};
zoomctl.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  zoom=b.dataset.z;zoomctl.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));layout()};
themectl.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  theme=b.dataset.t;applyTheme();layout();if(META[view].motion)applyMotion(true)};
document.getElementById('guides').onchange=e=>{document.body.classList.toggle('guides-on',e.target.checked);layout()};

/* ============ motion ============ */
function applyMotion(restart){
  const scope=document.getElementById(view==='thumbs'?'v-thumbs':'v-social');
  if(!scope)return;
  const t=[...scope.querySelectorAll('.frame')];
  t.forEach(x=>x.classList.remove('anim'));
  if(!motion)return;
  if(restart)void scope.offsetWidth;
  requestAnimationFrame(()=>t.forEach(x=>x.classList.add('anim')));
}
motionctl.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='replay'){applyMotion(true);return}
  motion=b.dataset.m==='motion';
  motionctl.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('on',x===b));
  applyMotion(true)};

/* ============ deck ============ */
const slides=[...document.querySelectorAll('.dslide')];let cur=0;
const countEl=document.getElementById('count'),film=document.getElementById('film');
slides.forEach((s,i)=>{
  const t=document.createElement('div');t.className='fthumb';t.dataset.i=i;
  const inner=document.createElement('div');inner.className='fin';
  inner.appendChild(s.querySelector('.frame').cloneNode(true));
  const fr=inner.firstChild;fr.style.width='1280px';fr.style.height='720px';
  fr.style.transform='scale(0.0969)';fr.style.transformOrigin='top left';fr.style.boxShadow='none';
  t.appendChild(inner);
  const n=document.createElement('span');n.className='fn2';n.textContent=i+1;t.appendChild(n);
  film.appendChild(t);
});
function go(i){
  const prevIdx=cur;
  cur=Math.max(0,Math.min(slides.length-1,i));
  slides.forEach((s,k)=>{
    s.classList.toggle('live',k===cur);
    if(k===cur&&prevIdx!==cur){s.classList.remove('trans');void s.offsetWidth;s.classList.add('trans')}
  });
  film.querySelectorAll('.fthumb').forEach((t,k)=>{t.classList.toggle('on',k===cur);
    t.className=t.className.replace(/\b(tl|td)\b/g,'').trim()+' '+theme});
  countEl.textContent=(cur+1)+' / '+slides.length;
  document.getElementById('prev').disabled=cur===0;
  document.getElementById('next').disabled=cur===slides.length-1;
  const a=film.querySelector('.fthumb.on');if(a)a.scrollIntoView({block:'nearest',inline:'nearest',behavior:'smooth'});
}
document.getElementById('prev').onclick=()=>go(cur-1);
document.getElementById('next').onclick=()=>go(cur+1);
document.getElementById('cz-prev').onclick=()=>go(cur-1);
document.getElementById('cz-next').onclick=()=>go(cur+1);
film.onclick=e=>{const t=e.target.closest('.fthumb');if(t)go(+t.dataset.i)};
document.getElementById('present').onclick=()=>{
  const el=document.getElementById('v-deck');
  if(!document.fullscreenElement)el.requestFullscreen?.();else document.exitFullscreen?.()};
addEventListener('keydown',e=>{
  if(view!=='deck')return;
  if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();go(cur+1)}
  if(e.key==='ArrowLeft'){e.preventDefault();go(cur-1)}
  if(e.key==='f'||e.key==='F')document.getElementById('present').click()});
addEventListener('resize',layout);
document.addEventListener('fullscreenchange',layoutDeck);

/* ============ canvas audit — measure content vs the safe box ============
   Every artboard in the view is measured, screen formats included: a screen
   piece has an interior margin and a platform UI-safe zone just as a printed
   one has a safe line. `data-safe` carries the REQUIRED minimum inset in
   artboard px — one value, or CSS-order "t r b l" — so the audit tests the
   design against the standard rather than against its own padding (which it
   can never fail). Print frames default to trim + another 1/8in.
   The audit reports its own coverage: a "clean" over zero frames is a broken
   audit, not a pass. `?audit=selftest` proves it can still fail.          */
function safeBox(f){
  const trim=+(f.dataset.trim||0);
  if(f.dataset.safe){
    const p=f.dataset.safe.trim().split(/[\s,]+/).map(Number);
    return p.length===1?{t:p[0],r:p[0],b:p[0],l:p[0]}:{t:p[0],r:p[1],b:p[2],l:p[3]};
  }
  const s=trim?trim*2:0;
  return {t:s,r:s,b:s,l:s};
}
function auditFrames(){
  // source artboards only — never the clones inside device mockups, the
  // filmstrip or the scroll strip, which are scaled copies of these.
  return [...document.querySelectorAll('.view.on .frame[data-w]')]
    .filter(f=>!f.closest('.slot,.fin,.th'));
}
function auditCanvas(){
  const rows=[]; const frames=auditFrames(); const seen=[];
  frames.forEach(f=>{
    const w=+f.dataset.w, sb=safeBox(f);
    const fr=f.getBoundingClientRect(), sc=fr.width/w;
    const L=fr.left+sb.l*sc, T=fr.top+sb.t*sc, R=fr.right-sb.r*sc, B=fr.bottom-sb.b*sc;
    seen.push((f.id||f.className.slice(0,14))+' ['+sb.t+' '+sb.r+' '+sb.b+' '+sb.l+']');
    f.querySelectorAll('*').forEach(el=>{
      // decoration is allowed out of the box; review overlays aren't content;
      // .bleed marks media that is DELIBERATELY run off the edge
      if(el.closest('.bgwash,.bgdots,.bggrid,.bgnum,.guide,.glab,.bgring,.safez,.bleed')) return;
      // <use> has no meaningful box of its own — the parent <svg> carries the
      // real bounds, and measuring the use element reports a phantom overflow.
      if(el.tagName==='use'||el.tagName==='USE') return;
      const cs=getComputedStyle(el);
      if(cs.position==='absolute'&&el.parentElement===f) return;
      if(cs.visibility==='hidden'||cs.display==='none') return;
      // Measure LEAVES and skinned boxes, not layout containers. A full-width
      // flex column always touches the artboard edge while its content sits
      // safely inside its padding — flagging it is noise, and noise is how an
      // audit gets ignored. A box with a background or border IS visible, so
      // it's measured even when it has children.
      const skin = cs.backgroundImage!=='none'
        || (cs.backgroundColor!=='rgba(0, 0, 0, 0)' && cs.backgroundColor!=='transparent')
        || parseFloat(cs.borderTopWidth)>0 || parseFloat(cs.borderLeftWidth)>0
        || parseFloat(cs.borderRightWidth)>0 || parseFloat(cs.borderBottomWidth)>0;
      if(el.children.length && !skin) return;
      const r=el.getBoundingClientRect(); if(!r.width||!r.height) return;
      const over=[];
      if(r.left<L-.6)  over.push('left '+((L-r.left)/sc).toFixed(0));
      if(r.top<T-.6)   over.push('top '+((T-r.top)/sc).toFixed(0));
      if(r.right>R+.6) over.push('right '+((r.right-R)/sc).toFixed(0));
      if(r.bottom>B+.6)over.push('bottom '+((r.bottom-B)/sc).toFixed(0));
      if(over.length) rows.push((f.id||'frame')+' › '
        +(el.className&&typeof el.className==='string'?el.className.slice(0,20):el.tagName)
        +' · '+(el.textContent||'').trim().slice(0,26)+' → '+over.join(', ')+'px');
    });
  });
  const uniq=[...new Set(rows)];
  let box=document.getElementById('auditbox');
  if(!box){box=document.createElement('div');box.id='auditbox';
    box.style.cssText='position:fixed;right:12px;bottom:12px;max-width:520px;max-height:58vh;overflow:auto;z-index:999;background:#12100c;border:1px solid #E0533A;border-radius:8px;padding:12px 14px;font:11px/1.5 ui-monospace,monospace;color:#ffd9cf';
    document.body.appendChild(box);}
  const type=auditType();
  box.innerHTML='<b style="color:#E0533A">CANVAS AUDIT · '+view+'</b><br>'+
    '<span style="color:#8d8d8d">measured '+frames.length+' artboard(s) · safe [t r b l]: '+seen.join(' | ')+'</span><br>'+
    (frames.length===0? '<b style="color:#E0533A">NO ARTBOARDS MEASURED — the audit is not running on this view.</b>'
      : uniq.length? uniq.length+' overflow(s) past safe:<br>• '+uniq.slice(0,26).join('<br>• ')
                   : '<span style="color:#8ED96B">clean — all content inside safe</span>')+
    (type.length? '<br><b style="color:#E0533A">'+type.length+' under the type floor:</b><br>• '+type.slice(0,14).join('<br>• ')
                : '');
  return uniq.concat(type);
}
/* ============ type-size audit — the other thing eyes get wrong ============
   A canvas audit catches spills; it says nothing about type that's simply too
   small for the delivered size. On a 300dpi card, 25px is 6pt — invisible in
   the hand and perfectly comfortable on screen. Convert to the real unit and
   hold the floor: ~7pt for contact/role lines on print, ~10pt for a name.  */
function auditType(){
  const rows=[];
  auditFrames().forEach(f=>{
    const dpi=+(f.dataset.dpi||96), print=f.classList.contains('print');
    const floor=print?7:0;                      // pt floor, print formats
    if(!floor) return;
    f.querySelectorAll('*').forEach(el=>{
      if(el.closest('.guide,.glab,.bgnum,.safez')) return;
      if(el.children.length) return;             // leaves carry the text
      const txt=(el.textContent||'').trim(); if(!txt) return;
      const px=parseFloat(getComputedStyle(el).fontSize);
      const pt=px/dpi*72;
      if(pt<floor) rows.push(txt.slice(0,26)+' → '+pt.toFixed(1)+'pt ('+px.toFixed(0)+'px @'+dpi+'dpi, floor '+floor+'pt)');
    });
  });
  return [...new Set(rows)];
}
/* prove the audit can fail: plant a known violation, confirm it's caught */
function auditSelfTest(){
  const f=auditFrames()[0];
  if(!f) return auditCanvas();
  const probe=document.createElement('div');
  probe.className='audit-probe';
  probe.style.cssText='position:relative;margin-left:-400px;width:200px;height:40px;background:#E0533A';
  probe.textContent='PROBE';
  f.appendChild(probe);
  const caught=auditCanvas().some(r=>r.includes('audit-probe'));
  probe.remove();
  const found=auditCanvas();
  document.getElementById('auditbox').innerHTML=
    '<b style="color:'+(caught?'#8ED96B':'#E0533A')+'">SELF-TEST · '+view+' · probe '+(caught?'CAUGHT':'MISSED — AUDIT IS BLIND')+'</b><br>'+
    '<span style="color:#8d8d8d">then measured clean-state: '+found.length+' violation(s)</span>'+
    (found.length?'<br>• '+found.slice(0,26).join('<br>• '):'');
  return {caught,found};
}
/* ============ boot · ?v=&z=&s=&t=&guides=0&motion=0 ============ */
const q=new URLSearchParams(location.search);
if(q.get('t')==='td'||q.get('t')==='dark')theme='td';
if(q.get('guides')==='0')document.getElementById('guides').checked=false;
document.body.classList.toggle('guides-on',document.getElementById('guides').checked);
if(q.get('motion')==='0'){motion=false;motionctl.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('on',x.dataset.m==='static'))}
const qz=q.get('z');if(qz&&['fit','one','phys'].includes(qz)){zoom=qz;
  zoomctl.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.z===qz))}
applyTheme();
cur=q.get('s')?+q.get('s')-1:0;
setView(META[q.get('v')]?q.get('v'):'onepager');
document.fonts.ready.then(()=>{layout();if(META[view].motion)applyMotion(true);
  const a=q.get('audit');
  if(a==='selftest')setTimeout(auditSelfTest,400);
  else if(a==='1')setTimeout(auditCanvas,400);});
setTimeout(()=>{layout();if(META[view].motion)applyMotion(true)},240);
