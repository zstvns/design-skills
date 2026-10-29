/* PLACE the delivered lockup — one locked element, from its canonical path.
   Nothing here sets the wordmark, picks a gap, or recolours: the ground only
   selects which delivered file is placed. */
const LOGO_DIR='../.agents/assets/logo';
const LOCKUP_AR=140.04/753.23;
function lk(w, ground){
  const h=+(w*LOCKUP_AR).toFixed(2);
  const cls='mark'+(ground==='dark'?' onDark':'');
  return `<span class="${cls}" style="width:${w}px;height:${h}px">`
       + `<img class="vl" src="${LOGO_DIR}/logo-lockup.svg" width="${w}" height="${h}">`
       + `<img class="vd" src="${LOGO_DIR}/logo-lockup-inverse.svg" width="${w}" height="${h}" style="position:absolute;inset:0">`
       + `</span>`;
}
/* place the locked icon: the GROUND picks the delivered variant, never CSS colour */
function mk(px, ground){
  const cls = 'mark' + (ground==='dark' ? ' onDark' : '');
  return `<span class="${cls}" style="width:${px}px;height:${px}px">`
       + `<svg class="vl" width="${px}" height="${px}"><use href="#mg-icon-black"/></svg>`
       + `<svg class="vd" width="${px}" height="${px}" style="position:absolute;inset:0"><use href="#mg-icon-white"/></svg>`
       + `</span>`;
}
/* ============================================================
   Magister collateral — piece templates
   Doc sizes are BLEED size; trim sits 1/8in inside.
   ============================================================ */

/* print guides for a piece: bleed = frame edge, trim inset, safe inset */
function guides(trim, safe, labelLeft){
  return `<div class="guide g-trim" style="inset:${trim}px"></div>
  <div class="guide g-safe" style="inset:${safe}px"></div>
  <span class="glab b" style="top:2px;left:2px">bleed 1/8″</span>
  <span class="glab t" style="top:${trim+5}px;left:${trim+5}px">trim</span>
  <span class="glab s" style="top:${safe+5}px;left:${labelLeft}px">safe 1/8″</span>`;
}

/* ---------------- 01 · ONE-PAGER ----------------
   8.5×11in trim → 8.75×11.25in doc @96dpi = 840×1080
   trim inset 12 · safe inset 24 · interior margin 96 (generous, well past safe)
   8-col grid, varied spans per band, background wash + cropped rings      */
const ONEPAGER = `
<div class="pw"><div class="cap">sales one-pager · trim 8.5×11in · +1/8in bleed</div>
 <div class="frame print" data-w="840" data-h="1080" data-dpi="96" data-trim="12" style="padding:86px">
   <div class="bgwash" style="top:-180px;right:-220px;width:760px;height:640px"></div>
   <div class="bgdots" style="right:-360px;top:-300px;width:900px;height:900px"></div>
   ${guides(12,24,72)}

   <div style="position:relative;height:100%;display:flex;flex-direction:column">
     <!-- header -->
     <div style="display:flex;justify-content:space-between;align-items:baseline">
       <span class="ey" style="font-size:10.5px">Autonomous marketing agent</span>
       <span class="mono" style="font-size:10.5px;color:var(--txt3)">2026</span>
     </div>

     <!-- HERO band · 5 + 3 -->
     <div style="display:grid;grid-template-columns:5fr 3fr;gap:30px;margin-top:34px;align-items:start">
       <div>
         <h1 style="font-size:47px;font-weight:700;line-height:1.02">Stop being the middleware.</h1>
         <p style="color:var(--txt2);font-size:14.5px;margin-top:16px;line-height:1.6;max-width:38ch">Describe the work in plain English. It executes across 100+ real tools, then hands it back for your approval before anything ships.</p>
         <div style="margin-top:22px">
           <div class="mono" style="font-size:14px;color:var(--txt);font-weight:600;letter-spacing:.02em">
             magistermarketing.com/start <span class="acc">→</span></div>
           <div class="mono" style="font-size:11px;color:var(--txt3);margin-top:5px">Free plan · no credit card</div>
         </div>
       </div>
       <div style="display:flex;flex-direction:column;gap:13px;padding-top:5px">
         ${[['bolt','Ships while you sleep'],['hub','100+ real integrations'],['verified','Nothing ships unapproved']].map(([i,t])=>`
         <div style="display:flex;gap:9px;align-items:flex-start">
           <span class="ms" style="font-size:17px;color:var(--cta);flex-shrink:0">check_circle</span>
           <span style="font-size:13px;font-weight:600;line-height:1.35">${t}</span>
         </div>`).join('')}
       </div>
     </div>

     <!-- BAND · 5 + 3 : capability card + telemetry panel -->
     <div style="display:grid;grid-template-columns:5fr 3fr;gap:15px;margin-top:28px;align-items:stretch">
       <div class="card" style="padding:24px">
         <h2 style="font-size:22px">Everything a marketer needs — already loaded</h2>
         <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px 20px;margin-top:18px">
           ${[['Writes','Blog, pages, email, social — researched and on-brand.'],
              ['Ships','Publishes on approval through your connected tools.'],
              ['Reports','GA4, ads and product metrics in one weekly readout.'],
              ['Improves','Reads what works, feeds it into the next round.']].map(([h,b],k)=>`
           <div><div style="display:flex;gap:7px;align-items:baseline">
             <span class="mono acc" style="font-size:10.5px">0${k+1}</span>
             <b class="disp" style="font-size:14.5px">${h}</b></div>
             <p style="color:var(--txt3);font-size:11.5px;margin-top:3px;padding-left:24px;line-height:1.45">${b}</p></div>`).join('')}
         </div>
       </div>
       <div class="card" style="padding:22px;display:flex;flex-direction:column;background:var(--bg3)">
         <span class="ey" style="font-size:9.5px">Telemetry · last night</span>
         <div class="log" style="margin-top:12px">
           ${[['grid_view','Social post','3 variants','ship','Shipped'],
              ['description','Blog draft','1,240 words','','Review'],
              ['search','SEO sweep','12 gaps found','run','Running']].map(([i,t,d,c,st])=>`
           <div class="lrow" style="padding:11px 0"><span class="ms ic" style="font-size:18px">${i}</span>
             <div class="lx"><b style="font-size:12.5px">${t}</b><span class="dt" style="font-size:10px">${d}</span></div>
             <span class="st ${c}" style="font-size:9.5px">${st}</span></div>`).join('')}
         </div>
         <div style="margin-top:auto;padding-top:14px;border-top:1px solid var(--rule)">
           <div style="display:flex;align-items:baseline;gap:8px">
             <span class="disp acc" style="font-size:36px;font-weight:700;letter-spacing:-.03em">+18%</span>
             <span class="mono" style="font-size:9.5px;color:var(--txt3);text-transform:uppercase;letter-spacing:.09em">signups</span>
           </div>
         </div>
       </div>
     </div>

     <!-- BAND · 4 + 4 : inverted quote + why -->
     <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px">
       <div style="background:var(--inv);color:var(--invTx);border-radius:10px;padding:24px;position:relative;overflow:hidden">
         
         <p class="disp" style="font-size:17px;font-weight:600;line-height:1.4;position:relative;text-indent:-.42em">“It runs our whole marketing operation between reviews. We just read the telemetry.”</p>
         <div style="margin-top:18px;position:relative">
           <div class="disp" style="font-size:13px;font-weight:600">Dana Reyes</div>
           <div class="mono" style="font-size:10px;opacity:.65">Head of Growth · Orbital</div>
         </div>
       </div>
       <div class="card" style="padding:24px">
         <h3 style="font-size:19px">Why Magister</h3>
         <div style="margin-top:14px;display:flex;flex-direction:column;gap:9px">
           ${['Your own dedicated server','It writes code to solve problems','It remembers your brand','Gets sharper the longer it runs'].map(t=>`
           <div style="display:flex;gap:8px;align-items:flex-start">
             <span class="ms" style="font-size:15px;color:var(--accTx);flex-shrink:0">check_small</span>
             <span style="font-size:12px;line-height:1.4">${t}</span></div>`).join('')}
         </div>
       </div>
     </div>

     <!-- footer -->
     <div style="margin-top:auto;padding-top:20px;border-top:1px solid var(--rule);display:flex;justify-content:space-between;align-items:center">
       ${lk(150,"theme")}
       <div style="display:flex;align-items:center;gap:16px" class="mono">
         <span style="font-size:10.5px;color:var(--txt2)">hello@magister.com</span>
         <span style="font-size:10.5px;color:var(--txt2)">magistermarketing.com</span>
       </div>
     </div>
   </div>
 </div></div>`;

/* ---------------- 03 · BUSINESS CARDS ----------------
   3.5×2in trim → 3.75×2.25in doc @300dpi = 1125×675
   trim inset 37.5 · safe inset 75 · interior margin 165 (generous for a card) */
const TEAM=[
  {n:'Dana Reyes',r:'Head of Growth',e:'dana@magister.com'},
  {n:'Wu Li',r:'Founder &amp; CEO',e:'wu@magister.com'},
  {n:'Aleksandra<br>Constantinescu',r:'VP, Partnerships &amp; Alliances',e:'aleksandra@magister.com',lg:1},
  {n:'Marcus<br>Oyelaran-Whitfield',r:'Director, Revenue Ops',e:'marcus@magister.com',lg:1}
];
const CARDS = TEAM.map((p,i)=>{
 const dark=i%2===1;                       // two treatments across the team:
 // dark reads well on a card front, and a set should show variations, not one
 // layout stamped four times. Name LEADS (the card's message); the logo signs
 // off at the bottom. Contact type is held above the 7pt floor at 300dpi.
 return `
 <div class="pw"><div class="cap">${p.n.replace('<br>',' ')} · ${dark?'dark front':'light front'}</div>
  <div class="frame print ${dark?'cdark':''}" data-w="1125" data-h="675" data-dpi="300" data-trim="37.5" style="padding:80px 86px 76px${dark?';background:linear-gradient(150deg,#1C1509,#0C0904 62%,#191207);color:#F2EBDD':''}">
    ${dark?'':'<div class="bgwash" style="top:-220px;right:-200px;width:660px;height:540px"></div>'}
    <div class="bgdots" style="${dark?'left:-560px;bottom:-520px;width:1320px;height:1320px':'right:-380px;top:-320px;width:900px;height:900px'}"></div>
    ${guides(37.5,75,215)}
    <div style="position:relative;height:100%;display:flex;flex-direction:column">
      <div class="disp" style="font-size:${p.lg?46:52}px;font-weight:600;line-height:1.03;letter-spacing:-.01em">${p.n}</div>
      <div class="mono" style="font-size:30px;letter-spacing:.05em;text-transform:uppercase;margin-top:10px;color:${dark?'#F4A93C':'var(--accTx)'}">${p.r}</div>
      <div style="margin-top:auto;display:flex;align-items:flex-end;justify-content:space-between;gap:30px">
        <div>
          <div class="mono" style="font-size:30px;color:${dark?'#C2B69C':'var(--txt2)'}">${p.e}</div>
          <div class="mono" style="font-size:30px;color:${dark?'#988B71':'var(--txt3)'};margin-top:7px">magistermarketing.com</div>
        </div>
        <div style="display:flex;align-items:center;gap:13px;flex-shrink:0">
          ${lk(196, dark?"dark":"theme")}
        </div>
      </div>
    </div>
  </div></div>`}).join('') + `
 <div class="pw"><div class="cap">back · logo dead centre</div>
  <div class="frame print" data-w="1125" data-h="675" data-dpi="300" data-trim="37.5" style="background:linear-gradient(150deg,#1C1509,#0C0904 60%,#191207);display:grid;place-items:center">
    ${guides(37.5,75,215)}
    <div class="bgdots" style="left:50%;top:50%;transform:translate(-50%,-50%);width:1500px;height:1500px"></div>
    <span style="position:relative">${mk(190,"dark")}</span>
  </div></div>`;

/* ---------------- 04 · BLOG THUMBNAILS · 1200×630, varied media ---------------- */
const THUMBS = `
<div class="pw"><div class="cap">thumb · oversized numeral</div>
 <div class="frame" data-w="1200" data-h="630" data-safe="48" style="padding:64px 66px;display:flex;flex-direction:column;justify-content:space-between">
   <div class="bgdots" style="right:-300px;bottom:-460px;width:1000px;height:1000px"></div>
   <div class="bgnum" style="right:58px;top:14px;font-size:232px">01</div>
   <span class="ey a-head" style="font-size:19px;position:relative">Playbook</span>
   <h2 class="a-hl" style="font-size:88px;font-weight:700;max-width:13ch;line-height:.96;position:relative">Stop being the middleware</h2>
   <div style="display:flex;align-items:center;gap:11px;position:relative">
     ${mk(19,"theme")}
     <span class="mono" style="font-size:15px;color:var(--txt3)">magistermarketing.com</span></div>
 </div></div>

<div class="pw"><div class="cap">thumb · photography</div>
 <div class="frame" data-w="1200" data-h="630" data-safe="48" style="display:flex">
   <div style="flex:1.15;padding:64px 66px;display:flex;flex-direction:column;justify-content:space-between;position:relative">
     <div class="bgdots" style="left:-380px;bottom:-420px;width:900px;height:900px"></div>
     <span class="ey a-head" style="font-size:19px;position:relative">Guide · SEO</span>
     <h2 class="a-hl" style="font-size:76px;font-weight:700;line-height:.96;position:relative">47 gaps.<br>Found for you.</h2>
     <div style="display:flex;align-items:center;gap:11px;position:relative">
       ${mk(19,"theme")}
       <span class="mono" style="font-size:15px;color:var(--txt3)">magistermarketing.com</span></div>
   </div>
   <div class="bleed" style="flex:1;position:relative;overflow:hidden">
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/The_Artemis_II_Flight_Control_Team_Monitoring_the_Translunar_Injection_Burn_%28jsc2026e019618%29.jpg/1280px-The_Artemis_II_Flight_Control_Team_Monitoring_the_Translunar_Injection_Burn_%28jsc2026e019618%29.jpg" alt="Flight controllers at consoles in a mission control room" style="width:100%;height:100%;object-fit:cover;object-position:64% 78%;display:block;filter:grayscale(1) contrast(1.06) brightness(.92)">
     <div style="position:absolute;inset:0;background:linear-gradient(150deg,rgba(232,131,12,.30),rgba(20,16,10,.42));mix-blend-mode:multiply"></div>
     <svg viewBox="0 0 300 630" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%">
       <path d="M0 470 L54 380 L112 424 L170 264 L232 316 L300 190" fill="none" stroke="#fff" stroke-width="4" opacity=".9"/>
       <circle cx="170" cy="264" r="7" fill="#fff"/>
     </svg>
   </div>
 </div></div>

<div class="pw"><div class="cap">thumb · orbital</div>
 <div class="frame" data-w="1200" data-h="630" data-safe="48" style="padding:64px 66px;display:flex;flex-direction:column;justify-content:space-between">
   <div class="bgwash" style="bottom:-200px;left:-100px;width:600px;height:500px;background:radial-gradient(circle at 30% 100%,var(--wash1),var(--wash2) 70%)"></div>
   <div class="bgdots" style="right:-620px;top:50%;transform:translateY(-50%);width:1180px;height:1180px"></div>
   <span class="ey a-head" style="font-size:19px;position:relative">Product</span>
   <h2 class="a-hl" style="font-size:86px;font-weight:700;max-width:12ch;position:relative;line-height:.96">One agent. Your whole loop.</h2>
   <div style="display:flex;align-items:center;gap:11px;position:relative">
     ${mk(19,"theme")}
     <span class="mono" style="font-size:15px;color:var(--txt3)">magistermarketing.com</span></div>
 </div></div>`;

/* ---------------- 02 · SOCIAL ARTBOARDS ----------------
   one template ("Mission Log"), cascaded to every placement            */
function logRows(rows,sz){
  return rows.map(([i,t,d,c,s])=>`
   <div class="lrow" style="padding:${sz.pad}px 0"><span class="ms ic" style="font-size:${sz.ic}px">${i}</span>
     <div class="lx"><b style="font-size:${sz.t}px">${t}</b><span class="dt" style="font-size:${sz.d}px">${d}</span></div>
     <span class="st ${c} a-st" style="font-size:${sz.s}px">${s}</span></div>`).join('');
}
const R3=[['grid_view','Social post','3 variants, scheduled','ship','Shipped'],
          ['description','Blog draft','1,240 words','','Review'],
          ['search','SEO sweep','12 gaps found','run','Running']];
const R4=[...R3,['trending_up','Improves','Sharper the longer it runs','','Learning']];

/* ---------------- social artboards: rendered FROM content.js ----------------
   Copy/sizes live in SOCIAL (content.js). Edit there, not here.        */
function sRows(rows,z){
  return rows.map(([i,t,d,c,st])=>`
   <div class="lrow" style="padding:${z.pad}px ${Math.round(z.pad*.9)}px;margin-bottom:${Math.round(z.pad*.6)}px"><span class="ms ic" style="font-size:${z.ic}px">${i}</span>
     <div class="lx"><b style="font-size:${z.t}px">${t}</b>${d?`<span class="dt" style="font-size:${z.d}px">${d}</span>`:''}</div>
     <span class="st ${c} a-st" style="font-size:${z.s}px">${st}</span></div>`).join('');
}
const C=SOCIAL;
const SQ = `<div class="frame" id="src-sq" data-w="1080" data-h="1080" data-safe="104" style="padding:112px 112px;display:flex;flex-direction:column">
  <div class="bgwash" style="top:-220px;right:-220px;width:840px;height:700px"></div>
  <div class="bgdots" style="left:-360px;bottom:-380px;width:1120px;height:1120px"></div>
  <div class="a-head" style="position:relative"><span class="ey" style="font-size:20px">${C.square.eyebrow}</span></div>
  <h2 class="a-hl" style="font-size:${C.square.headlineSize}px;font-weight:700;margin-top:44px;line-height:.94;position:relative">${C.square.headline}</h2>
  <div class="log cards" style="margin-top:auto;position:relative">${sRows(C.square.rows,{pad:30,ic:44,t:40,d:26,s:22})}</div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:44px;position:relative">
    <span class="cta a-cta" style="font-size:30px;padding:.78em 1.5em">${C.square.cta}</span>
    <span class="mono" style="font-size:24px;color:var(--txt3)">${C.square.url}</span></div>
</div>`;
const PT = `<div class="frame" id="src-pt" data-w="1080" data-h="1350" data-safe="104" style="padding:120px 112px;display:flex;flex-direction:column">
  <div class="bgwash" style="top:-220px;right:-220px;width:860px;height:720px"></div>
  <div class="bgdots" style="right:-420px;bottom:-300px;width:1000px;height:1000px"></div>
  <div class="a-head" style="position:relative"><span class="ey" style="font-size:20px">${C.portrait.eyebrow}</span></div>
  <h2 class="a-hl" style="font-size:${C.portrait.headlineSize}px;font-weight:700;margin-top:52px;line-height:.95;position:relative">${C.portrait.headline}</h2>
  <div class="log cards" style="margin-top:auto;position:relative">${sRows(C.portrait.rows,{pad:32,ic:46,t:42,d:27,s:23})}</div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:48px;position:relative">
    <span class="cta a-cta" style="font-size:31px;padding:.78em 1.5em">${C.portrait.cta}</span>
    <span class="mono" style="font-size:25px;color:var(--txt3)">${C.portrait.url}</span></div>
</div>`;
const VT = `<div class="frame" id="src-vt" data-w="1080" data-h="1920" data-safe="346 108 386 108" style="padding:346px 112px 386px;display:flex;flex-direction:column">
  <div class="bgwash" style="top:-160px;right:-220px;width:800px;height:700px"></div>
  <div class="bgdots" style="left:-460px;bottom:-260px;width:1300px;height:1300px"></div>
  <div class="safez" style="position:absolute;top:0;left:0;right:0;height:250px;border-bottom:1px dashed rgba(224,83,58,.45);background:repeating-linear-gradient(45deg,transparent,transparent 14px,rgba(224,83,58,.05) 14px,rgba(224,83,58,.05) 28px)"></div>
  <div class="safez" style="position:absolute;bottom:0;left:0;right:0;height:290px;border-top:1px dashed rgba(224,83,58,.45);background:repeating-linear-gradient(45deg,transparent,transparent 14px,rgba(224,83,58,.05) 14px,rgba(224,83,58,.05) 28px)"></div>
  <span class="mono safez" style="position:absolute;top:210px;left:96px;font-size:13px;color:rgba(224,83,58,.75);letter-spacing:.11em;text-transform:uppercase">↕ platform ui-safe</span>
  <div class="a-head" style="position:relative"><span class="ey" style="font-size:22px">${C.vertical.eyebrow}</span></div>
  <h2 class="a-hl" style="font-size:${C.vertical.headlineSize}px;font-weight:700;margin-top:30px;line-height:.93;position:relative">${C.vertical.headline}</h2>
  <div class="log cards" style="margin-top:34px;position:relative">${sRows(C.vertical.rows,{pad:30,ic:52,t:50,d:31,s:26})}</div>
  <div style="margin-top:auto;position:relative;display:flex;align-items:center;justify-content:space-between;gap:28px">
    <span class="cta a-cta" style="font-size:33px;padding:.8em 1.7em">${C.vertical.cta}</span>
    <span class="mono" style="font-size:24px;color:var(--txt3)">${C.vertical.url}</span></div>
</div>`;
const WD = `<div class="frame" id="src-wd" data-w="1200" data-h="630" data-safe="56" style="padding:66px 70px;display:flex;gap:44px">
  <div class="bgwash" style="top:-170px;right:-170px;width:700px;height:580px"></div>
  <div style="flex:1;display:flex;flex-direction:column;position:relative">
    <div class="a-head" style="position:relative"><span class="ey" style="font-size:14px">${C.wide.eyebrow}</span></div>
    <h2 class="a-hl" style="font-size:${C.wide.headlineSize}px;font-weight:700;margin-top:auto;line-height:.98">${C.wide.headline}</h2>
    <span class="cta a-cta" style="font-size:22px;padding:.75em 1.4em;align-self:flex-start;margin-top:26px">${C.wide.cta}</span>
  </div>
  ${(C.wide.rows&&C.wide.rows.length)?`<div class="card" style="width:43%;padding:28px;position:relative;background:var(--bg3)">
    <span class="ey" style="font-size:17px">${C.wide.panelLabel}</span>
    <div class="log cards" style="margin-top:12px">${sRows(C.wide.rows,{pad:22,ic:34,t:29,d:0,s:17})}</div>
  </div>`:''}
</div>`;

const ARTBOARDS = [['feed square · 1080×1080 · IG / LinkedIn / FB',SQ],
                   ['feed portrait · 1080×1350 · longest-headline case',PT],
                   ['story / reel · 1080×1920',VT],
                   ['link card · 1200×630 · X / FB / OG',WD]]
  .map(([c,h])=>`<div class="pw"><div class="cap">${c}</div>${h}</div>`).join('');

/* ---------------- PLATFORM MOCKUPS — real chrome per network ---------------- */
const SB = `<div class="island"></div><div class="sbar"><span>9:41</span><span class="ri">
  <span class="ms" style="font-size:13px">signal_cellular_alt</span><span class="ms" style="font-size:13px">wifi</span><span class="ms" style="font-size:14px">battery_full</span></span></div>`;

/* Instagram feed */
const M_IG = `<div class="pw"><div class="cap">Instagram · feed 4:5</div>
 <div class="phone"><div class="screen"><div class="app ig">${SB}
   <div class="igtop"><span class="disp" style="font-size:19px;font-weight:700">Instagram</span>
     <span style="margin-left:auto;display:flex;gap:15px"><span class="ms" style="font-size:20px">favorite_border</span><span class="ms" style="font-size:20px">send</span></span></div>
   <div class="fhead"><div class="fav">${mk(16,"theme")}</div>
     <div><div class="fn">magister</div><div class="fs">Sponsored</div></div><span class="ms" style="margin-left:auto;font-size:17px">more_horiz</span></div>
   <div class="slot" data-src="src-pt"></div>
   <div class="facts"><span class="ms a-heart">favorite</span><span class="ms">chat_bubble_outline</span><span class="ms">send</span><span class="ms" style="margin-left:auto">bookmark_border</span></div>
   <div class="fcap"><b>1,284 likes</b><div style="margin-top:3px"><b>magister</b> Four things it shipped while you slept.</div>
     <span class="tm">2 hours ago</span></div>
 </div></div></div></div>`;

/* Instagram story */
const M_ST = `<div class="pw"><div class="cap">Instagram · story / reel 9:16</div>
 <div class="phone"><div class="screen"><div class="app stry">${SB}
   <div class="slot cover" data-src="src-vt"></div>
   <div class="sprog"><i class="done"><b></b></i><i class="live"><b></b></i><i><b></b></i></div>
   <div class="shead"><div class="fav" style="width:26px;height:26px">${mk(14,"theme")}</div>
     <span class="nm">magister</span><span class="ago">1h</span>
     <span class="ms" style="margin-left:auto;font-size:17px">more_horiz</span><span class="ms" style="font-size:17px">close</span></div>
   <div class="sreply"><div class="box">Send message</div><span class="ms ric">favorite_border</span><span class="ms ric">send</span></div>
 </div></div></div></div>`;

/* LinkedIn */
const M_LI = `<div class="pw"><div class="cap">LinkedIn · feed 1:1</div>
 <div class="phone"><div class="screen"><div class="app li">${SB}
   <div class="litop"><span class="librand">in</span><div class="lisearch">Search</div><span class="ms" style="font-size:20px;color:#fff">chat</span></div>
   <div class="lipost">
     <div class="fhead" style="padding:11px 12px 7px"><div class="fav sq">${mk(16,"theme")}</div>
       <div><div class="fn" style="color:#000">Magister</div><div class="fs">2,481 followers · Promoted</div></div>
       <span class="ms" style="margin-left:auto;font-size:17px;color:#666">more_horiz</span></div>
     <div class="litxt">We took the middleware job off marketers' hands. Here's last night's log. 👇</div>
     <div class="slot" data-src="src-sq"></div>
     <div class="libar"><span><span class="ms" style="font-size:16px">thumb_up</span> Like</span><span><span class="ms" style="font-size:16px">comment</span> Comment</span><span><span class="ms" style="font-size:16px">repeat</span> Repost</span></div>
   </div>
 </div></div></div></div>`;

/* X / Twitter */
const M_X = `<div class="pw"><div class="cap">X · link card 1.91:1</div>
 <div class="phone"><div class="screen"><div class="app xa">${SB}
   <div class="xtop"><span class="xlogo">𝕏</span></div>
   <div class="xpost">
     <div class="fav" style="width:38px;height:38px;flex-shrink:0">${mk(19,"theme")}</div>
     <div style="flex:1;min-width:0">
       <div class="xhead"><b>Magister</b><span class="ms" style="font-size:13px;color:#1d9bf0">verified</span><span class="xh">@magister · 2h</span></div>
       <div class="xtxt">47 keyword gaps found and queued overnight. We didn't touch it.</div>
       <div class="slot xcard" data-src="src-wd"></div>
       <div class="xmeta">magistermarketing.com</div>
       <div class="xbar"><span><span class="ms" style="font-size:15px">chat_bubble_outline</span> 24</span><span><span class="ms" style="font-size:15px">repeat</span> 108</span><span class="a-heart"><span class="ms" style="font-size:15px">favorite_border</span> 612</span><span><span class="ms" style="font-size:15px">bar_chart</span> 24K</span></div>
     </div>
   </div>
 </div></div></div></div>`;

const MOCKUPS = M_IG + M_ST + M_LI + M_X;

/* ---------------- 05 · DECK · 1280×720, light-first, background elements ---------------- */
function slide(n,inner,extra){
  return `<div class="dslide"><div class="frame" data-w="1280" data-h="720" data-safe="56" style="padding:76px">
    ${extra||''}
    <div style="position:relative;height:100%;display:flex;flex-direction:column;justify-content:center;padding-bottom:34px">${inner}</div>
    <div class="sfoot"><span>MAGISTER</span><span>${n}</span></div>
  </div></div>`;
}
const DECK =
slide('magistermarketing.com',`
  <div>
    ${lk(232,"theme")}
    <h1 style="font-size:82px;font-weight:700;margin-top:38px;line-height:.98">Your autonomous<br>marketing agent.</h1>
    <p style="color:var(--txt2);font-size:21px;margin-top:24px;max-width:42ch">It executes across 100+ real tools and ships the work while you're away.</p>
  </div>`,
  `<div class="bgwash" style="top:-200px;right:-200px;width:820px;height:700px"></div>`)
+ slide('02',`
  <span class="ey" style="font-size:14px">The problem</span>
  <h2 style="font-size:60px;font-weight:700;margin-top:16px">Stop being the middleware.</h2>
  <p style="color:var(--txt2);font-size:19px;margin-top:20px;max-width:50ch">You're the connective tissue between AI advice and the tools that do the work. It's slow, manual, and it stops the moment you do.</p>
  <div class="card" style="padding:26px 30px;margin-top:40px;display:inline-block;background:var(--bg3)">
    <span class="ey" style="font-size:10.5px">The old way</span>
    <div class="mono" style="font-size:19px;color:var(--txt2);margin-top:14px">Prompt AI <span class="acc">›</span> Use tools <span class="acc">›</span> Check data <span class="acc">›</span> Edit &amp; fix <span class="acc">›</span> <b style="color:var(--txt)">You</b></div>
    <div class="mono" style="font-size:13px;color:var(--txt3);margin-top:14px;text-transform:uppercase">Slow · Manual · Time-constrained</div></div>`,
  `<div class="bgnum" style="right:40px;bottom:-90px;font-size:420px">02</div>`)
+ slide('03',`
  <span class="ey" style="font-size:14px;color:var(--cta)">With Magister</span>
  <h2 style="font-size:58px;font-weight:700;margin-top:16px;max-width:21ch;line-height:1.02">Magister takes that job — and runs it while you're away.</h2>
  <div style="border-radius:10px;padding:26px 30px;margin-top:40px;display:inline-block;background:var(--inv);color:var(--invTx)">
    <span class="mono" style="font-size:10.5px;text-transform:uppercase;letter-spacing:.18em;opacity:.7">The new way</span>
    <div class="mono" style="font-size:19px;margin-top:14px"><span style="display:inline-block;vertical-align:-3px">${mk(20,"dark")}</span> Magister <span style="color:#63C98A">›</span> Review &amp; approve <span style="color:#63C98A">›</span> <b>You</b></div>
    <div class="mono" style="font-size:13px;opacity:.6;margin-top:14px;text-transform:uppercase">Fast · Autonomous · Always running</div></div>`,
  `<div class="bgwash" style="bottom:-260px;left:-160px;width:760px;height:620px;background:radial-gradient(circle at 30% 100%,var(--wash1),var(--wash2) 68%)"></div>`)
+ slide('04',`
  <span class="ey" style="font-size:14px">How it works</span>
  <h2 style="font-size:48px;font-weight:700;margin-top:16px">Tell it what you need. It gets to work.</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px">
    ${[['Talk to it','Describe the work in plain English — on the web or in Slack.'],
       ['It plans &amp; executes','The agent taps 100+ specialized skills to do the real work.'],
       ['You review &amp; ship','Check it, tweak it, push it live. Nothing ships without approval.']].map(([h,b],k)=>`
    <div class="card" style="padding:26px"><div class="mono acc" style="font-size:13px">0${k+1}</div>
      
      <b class="disp" style="font-size:22px">${h}</b>
      <p style="color:var(--txt3);font-size:14px;margin-top:9px;line-height:1.5">${b}</p></div>`).join('')}
  </div>`,
  `<div class="bgdots" style="left:-520px;bottom:-540px;width:1400px;height:1400px"></div>`)
+ slide('05',`
  <span class="ey" style="font-size:14px">While you're away</span>
  <h2 style="font-size:48px;font-weight:700;margin-top:16px">Four things it does on its own.</h2>
  <div class="log" style="margin-top:34px">${logRows([
    ['edit_note','Writes','Blog, pages, email, social — researched and on-brand, from a one-line brief.','ship','Shipped'],
    ['campaign','Ships','Publishes on approval through your real, connected tools.','ship','Shipped'],
    ['monitoring','Reports','GA4, ads and product metrics in one weekly readout.','run','Running'],
    ['trending_up','Improves','Reads what is working and feeds it into the next round.','','Learning']],
    {pad:18,ic:28,t:24,d:15,s:13})}</div>`,
  `<div class="bgwash" style="top:-180px;right:-200px;width:700px;height:600px"></div>`)
+ slide('06',`
  <div style="display:flex;align-items:center;gap:56px">
    <div style="flex-shrink:0">
      <div class="disp acc" style="font-size:168px;font-weight:700;line-height:.8;letter-spacing:-.04em">+18%</div>
      <div class="mono" style="font-size:14px;color:var(--txt3);text-transform:uppercase;letter-spacing:.1em;margin-top:12px">signups · vs last month</div></div>
    <div style="border-left:1px solid var(--rule);padding-left:56px">
      <p class="disp" style="font-size:31px;font-weight:600;line-height:1.34;text-indent:-.42em">“It runs our whole marketing operation between reviews. We just read the telemetry.”</p>
      <div style="display:flex;align-items:center;gap:13px;margin-top:26px">
        <div class="mk" style="width:44px;height:44px;font-family:var(--disp);font-weight:600;font-size:17px">DR</div>
        <div><div class="disp" style="font-size:17px;font-weight:600">Dana Reyes</div>
          <div class="mono" style="font-size:12.5px;color:var(--txt3)">Head of Growth · Orbital</div></div></div></div>
  </div>`,
  `<div class="bgdots" style="right:-460px;top:-420px;width:1150px;height:1150px"></div>`)
+ slide('07',`
  <div style="display:flex;flex-direction:column;align-items:center;text-align:center">
    ${mk(104,"theme")}
    <h2 style="font-size:58px;font-weight:700;margin-top:28px;max-width:21ch;line-height:1.02">One agent. Your whole marketing workflow.</h2>
    <div style="margin-top:34px"><span class="cta" style="font-size:20px;padding:.9em 1.9em">Get my free plan</span></div>
    <div class="mono" style="font-size:13px;color:var(--txt3);margin-top:20px">100% free · no credit card · magistermarketing.com</div>
  </div>`,
  `<div class="bgwash" style="bottom:-300px;left:50%;transform:translateX(-50%);width:900px;height:640px;background:radial-gradient(circle at 50% 100%,var(--wash1),var(--wash2) 66%)"></div>`);
