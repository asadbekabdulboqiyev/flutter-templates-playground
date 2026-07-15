const ICONS = {
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  lightning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.01 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-9.94-10-9.94z"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
};

const CATEGORIES = [
  {id:'all',n:'Barchasi',icon:'sparkle'},{id:'starter',n:'Starter',icon:'rocket'},
  {id:'pages',n:'Sahifalar',icon:'document'},{id:'auth',n:'Auth',icon:'lock'},
  {id:'navigation',n:'Navigation',icon:'compass'},{id:'state',n:'State Mgmt',icon:'lightning'},
  {id:'api',n:'API & Backend',icon:'globe'},{id:'animations',n:'Animations',icon:'sparkle'},
  {id:'ui',n:'UI Widgets',icon:'palette'},{id:'advanced',n:'Advanced',icon:'building'}
];

const DIFF_COLORS = {easy:'var(--green)',medium:'var(--yellow)',hard:'var(--red)',expert:'var(--purple)'};

let templates=[],category='all',query='',difficultyFilter='',currentTemplate=null,currentFileIndex=0,instructionsOpen=false;

function icon(name){return ICONS[name]||ICONS.sparkle;}

async function init(){
  try{
    const res=await fetch('templates.json');
    if(!res.ok)throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    const data=await res.json();
    if(!Array.isArray(data))throw new Error('Invalid template data');
    templates=data;
    renderSidebar();renderTabs();renderGrid();updateStats();
  }catch(e){
    console.error('Init error:',e);
    document.getElementById('grid').innerHTML=`<div class="empty" role="alert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><p>Templates yuklashda xatolik: ${e.message}. Sahifani yangilang.</p></div>`;
  }
}

function renderSidebar(){
  const nav=document.getElementById('sidebarNav');
  let html='<div class="s-section">Categories</div>';
  CATEGORIES.forEach(c=>{
    const count=c.id==='all'?templates.length:templates.filter(t=>t.c===c.id).length;
    html+=`<div class="s-item ${c.id===category?'active':''}" role="button" tabindex="0" aria-pressed="${c.id===category}" onclick="setCategory('${c.id}')" onkeydown="if(event.key==='Enter')setCategory('${c.id}')">${icon(c.icon)}${c.n}<span class="count">${count}</span></div>`;
  });
  html+='<div class="s-section">Difficulty</div>';
  ['easy','medium','hard','expert'].forEach(d=>{
    const count=templates.filter(t=>t.diff===d).length;
    if(count>0) html+=`<div class="s-item ${difficultyFilter===d?'active':''}" role="button" tabindex="0" aria-pressed="${difficultyFilter===d}" onclick="filterDifficulty('${d}')" onkeydown="if(event.key==='Enter')filterDifficulty('${d}')"><svg width="16" height="16" viewBox="0 0 24 24" fill="${DIFF_COLORS[d]}"><circle cx="12" cy="12" r="6"/></svg>${d.charAt(0).toUpperCase()+d.slice(1)}<span class="count">${count}</span></div>`;
  });
  nav.innerHTML=html;
}

function renderTabs(){
  document.getElementById('tabs').innerHTML=CATEGORIES.map(c=>
    `<button class="tab-btn ${c.id===category?'active':''}" role="tab" aria-selected="${c.id===category}" onclick="setCategory('${c.id}')">${icon(c.icon)}${c.n}</button>`
  ).join('');
}

function getFiltered(){
  return templates.filter(t=>{
    const matchQ=!query||t.n.toLowerCase().includes(query.toLowerCase())||t.d.toLowerCase().includes(query.toLowerCase())||t.t.some(x=>x.toLowerCase().includes(query.toLowerCase()));
    const matchC=category==='all'||t.c===category;
    const matchD=!difficultyFilter||t.diff===difficultyFilter;
    return matchQ&&matchC&&matchD;
  });
}

function renderGrid(){
  const filtered=getFiltered();
  const grid=document.getElementById('grid');
  document.getElementById('countBar').innerHTML=`<span>${filtered.length}</span> ta template topildi`;
  document.getElementById('headerTitle').textContent=category==='all'?'Templates':CATEGORIES.find(c=>c.id===category)?.n||'Templates';
  if(!filtered.length){
    grid.innerHTML=`<div class="empty" role="status">${icon('search')}<p>Hech narsa topilmadi</p></div>`;
    return;
  }
  grid.innerHTML=filtered.map(t=>`<div class="card" role="button" tabindex="0" aria-label="${t.n}" onclick="openModal('${t.id}')" onkeydown="if(event.key==='Enter')openModal('${t.id}')">
    <div class="card-top"><div class="card-icon" aria-hidden="true">${icon(t.icon||'sparkle')}</div><span class="diff diff-${t.diff}" aria-label="${t.diff} difficulty">${t.diff}</span></div>
    <h3>${t.n}</h3><p>${t.d}</p>
    <div class="tags" aria-label="Tags">${t.t.slice(0,3).map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    <div class="card-actions">
      <button class="c-btn copy" aria-label="Copy ${t.n}" onclick="event.stopPropagation();copyTemplate('${t.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>Copy</button>
      <button class="c-btn view" aria-label="View ${t.n} code" onclick="event.stopPropagation();openModal('${t.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Code</button>
      <button class="c-btn download" aria-label="Download ${t.n}" onclick="event.stopPropagation();downloadTemplate('${t.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>Save</button>
      <button class="c-btn info" aria-label="Show ${t.n} instructions" onclick="event.stopPropagation();openInstructions('${t.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Info</button>
    </div></div>`).join('');
}

function updateStats(){document.getElementById('totalCount').textContent=templates.length;}
function setCategory(id){category=id;difficultyFilter='';renderTabs();renderSidebar();renderGrid();}
function filterDifficulty(d){
  difficultyFilter=difficultyFilter===d?'':d;
  renderSidebar();renderGrid();
}

function openModal(id){
  currentTemplate=templates.find(t=>t.id===id);
  if(!currentTemplate)return;
  currentFileIndex=0;
  renderModal();
  document.getElementById('modal').classList.add('on');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('modal').classList.remove('on');
  document.body.style.overflow='';
  currentTemplate=null;
  document.getElementById('previewSection').style.display='none';
  document.querySelector('.m-code').style.display='';
  document.querySelector('.m-bar').style.display='';
  document.getElementById('mTabs').style.display='';
}

function renderModal(){
  if(!currentTemplate)return;
  const t=currentTemplate,f=t.f[currentFileIndex];
  document.getElementById('mName').textContent=t.n;
  document.getElementById('mDesc').textContent=t.d;

  const previewSection=document.getElementById('previewSection');
  const previewContent=document.getElementById('previewContent');
  previewSection.style.display='none';

  if(t.preview){
    const img=new Image();
    img.onload=()=>{
      previewContent.innerHTML=`<img src="${t.preview}" alt="${t.n} preview" style="max-width:100%;max-height:500px;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3)">`;
    };
    img.onerror=()=>{
      previewContent.innerHTML=`<div style="color:var(--text3);padding:40px">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="opacity:.3"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        <p style="margin-top:12px;font-size:13px">Preview hali yuklanmagan</p>
        <p style="font-size:11px;margin-top:4px">Screenshot ni <code>code_info/${t.id}.png</code> ga qo'ying</p>
      </div>`;
    };
    img.src=t.preview;
  }
  document.getElementById('mTabs').innerHTML=t.f.map((file,i)=>
    `<button class="m-tab ${i===currentFileIndex?'on':''}" role="tab" aria-selected="${i===currentFileIndex}" onclick="selectFile(${i})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>${file.n}</button>`
  ).join('');
  document.getElementById('mPath').textContent=f.p;
  document.getElementById('mCode').textContent=f.c;
  document.getElementById('mFoot').innerHTML=t.f.map(file=>`<span>${file.n}</span>`).join('');
  highlightCode();
}

function selectFile(i){currentFileIndex=i;renderModal();}

function highlightCode(){
  const el=document.getElementById('mCode');
  let code=el.textContent;
  code=code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  code=code.replace(/(\/\/[^\n]*)/g,'<span style="color:var(--text3)">$1</span>');
  code=code.replace(/\b(import|export|class|extends|implements|abstract|final|const|static|void|int|double|String|bool|List|Map|Future|Stream|Widget|State|StatelessWidget|StatefulWidget|BuildContext|Key|super|this|return|if|else|for|while|switch|case|break|continue|new|await|async|try|catch|throw|factory|get|set|enum|mixin|with|required|late|var|dynamic|yield)\b/g,'<span style="color:var(--purple)">$1</span>');
  code=code.replace(/&#39;([^&]*?)&#39;/g,'<span style="color:var(--green)">&#39;$1&#39;</span>');
  code=code.replace(/\b(\d+)\b/g,'<span style="color:var(--orange)">$1</span>');
  el.innerHTML='<pre>'+code+'</pre>';
}

function showInstructions(){
  if(!currentTemplate)return;
  document.getElementById('previewSection').style.display='none';
  openInstructions(currentTemplate.id);
}

function showPreview(){
  if(!currentTemplate)return;
  const ps=document.getElementById('previewSection');
  ps.style.display=ps.style.display==='none'?'block':'none';
  const mc=document.querySelector('.m-code');
  const mb=document.querySelector('.m-bar');
  const mt=document.getElementById('mTabs');
  if(ps.style.display==='block'){
    mc.style.display='none';mb.style.display='none';mt.style.display='none';
  }else{
    mc.style.display='';mb.style.display='';mt.style.display='';
  }
}

function openInstructions(id){
  const t=templates.find(x=>x.id===id);
  if(!t)return;
  document.getElementById('instTitle').textContent=t.n+' — Instructions';
  const md=t.instructions||'No instructions available.';
  document.getElementById('instBody2').innerHTML=renderMarkdown(md);
  document.getElementById('instructionsOverlay').classList.add('on');
  document.body.style.overflow='hidden';
}

function closeInstructions(){
  document.getElementById('instructionsOverlay').classList.remove('on');
  if(!document.getElementById('modal').classList.contains('on')){
    document.body.style.overflow='';
  }
}

function renderMarkdown(md){
  return md
    .replace(/^### (.+)$/gm,'<h3>$1</h3>')
    .replace(/^## (.+)$/gm,'<h2>$1</h2>')
    .replace(/^```bash\n([\s\S]*?)```/gm,'<pre><code>$1</code></pre>')
    .replace(/^```\n([\s\S]*?)```/gm,'<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/^- (.+)$/gm,'<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g,m=>'<ul>'+m+'</ul>')
    .replace(/\n\n/g,'<br><br>')
    .replace(/\n/g,'<br>');
}

function safeWriteText(text){
  if(navigator.clipboard&&navigator.clipboard.writeText){
    return navigator.clipboard.writeText(text);
  }
  const ta=document.createElement('textarea');
  ta.value=text;
  ta.style.position='fixed';
  ta.style.left='-9999px';
  document.body.appendChild(ta);
  ta.select();
  try{document.execCommand('copy');}catch(e){}
  document.body.removeChild(ta);
  return Promise.resolve();
}

function copyCode(){
  if(!currentTemplate)return;
  safeWriteText(currentTemplate.f[currentFileIndex].c).then(()=>showToast('Copied!')).catch(()=>showToast('Copy xatolik'));
}
function copyAll(){
  if(!currentTemplate)return;
  const all=currentTemplate.f.map(f=>`// ${f.p}\n${f.c}`).join('\n\n');
  safeWriteText(all).then(()=>showToast('All files copied!')).catch(()=>showToast('Copy xatolik'));
}
function copyTemplate(id){
  const t=templates.find(x=>x.id===id);
  if(!t)return;
  const all=t.f.map(f=>`// ${f.p}\n${f.c}`).join('\n\n');
  safeWriteText(all).then(()=>showToast('Copied!')).catch(()=>showToast('Copy xatolik'));
}
function downloadFile(){
  if(!currentTemplate)return;
  const f=currentTemplate.f[currentFileIndex];
  const blob=new Blob([f.c],{type:'text/plain'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download=f.n;a.click();
  URL.revokeObjectURL(a.href);showToast('Downloaded!');
}
function downloadTemplate(id){
  const t=templates.find(x=>x.id===id);
  if(!t)return;
  t.f.forEach(f=>{
    const blob=new Blob([f.c],{type:'text/plain'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);a.download=f.n;a.click();
    URL.revokeObjectURL(a.href);
  });
  showToast('All files downloaded!');
}
function exportAll(){
  const data=templates.map(t=>({name:t.n,description:t.d,category:t.c,difficulty:t.diff,tags:t.t,instructions:t.instructions,files:t.f.map(f=>({name:f.n,path:f.p,code:f.c}))}));
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download='flutter-templates.json';a.click();
  URL.revokeObjectURL(a.href);showToast('Exported!');
}
function toggleTheme(){
  const isLight=document.body.getAttribute('data-theme')==='light';
  document.body.setAttribute('data-theme',isLight?'':'light');
  document.getElementById('themeIcon').innerHTML=isLight?'<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>':'<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}
function toggleInstructions(){
  instructionsOpen=!instructionsOpen;
  document.getElementById('instHeader').classList.toggle('open',instructionsOpen);
  document.getElementById('instBody').classList.toggle('open',instructionsOpen);
}
function showShortcuts(){document.getElementById('shortcutsOverlay').classList.add('on');}
function closeShortcuts(){document.getElementById('shortcutsOverlay').classList.remove('on');}
function showToast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2000);
}

document.getElementById('search').addEventListener('input',e=>{query=e.target.value;difficultyFilter='';renderSidebar();renderGrid();});
document.getElementById('modal').addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal();});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeModal();closeShortcuts();closeInstructions();}
  if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();document.getElementById('search').focus();}
  if((e.ctrlKey||e.metaKey)&&e.key==='c'&&currentTemplate){e.preventDefault();copyCode();}
  if((e.ctrlKey||e.metaKey)&&e.key==='s'&&currentTemplate){e.preventDefault();downloadFile();}
  if((e.ctrlKey||e.metaKey)&&e.key==='d'){e.preventDefault();toggleTheme();}
  if((e.ctrlKey||e.metaKey)&&e.key==='e'){e.preventDefault();exportAll();}
  if(e.key==='?'&&!e.ctrlKey&&!e.metaKey&&document.activeElement.tagName!=='INPUT'){showShortcuts();}
  if(currentTemplate&&e.key==='ArrowRight'&&currentFileIndex<currentTemplate.f.length-1){currentFileIndex++;renderModal();}
  if(currentTemplate&&e.key==='ArrowLeft'&&currentFileIndex>0){currentFileIndex--;renderModal();}
});

init();
