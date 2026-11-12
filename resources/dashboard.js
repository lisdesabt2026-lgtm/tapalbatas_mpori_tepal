(function(){
'use strict';
const configs=[
{layer:lyr_openTopoMap_0,name:'OpenTopoMap',group:'Peta dasar',icon:'🌍'},
{layer:lyr_kwshutan_ar_250k_des2025_1,name:'Kawasan Hutan (SIGAP)',group:'Peta referensi eksternal',icon:'🌲'},
{layer:lyr_point_mprilembo_rencana_awal_2,name:'Mporilembo · Titik Awal',group:'Rencana awal',icon:'📍'},
{layer:lyr_poly_mporilembo_rencana_awal_3,name:'Mporilembo · Area Awal',group:'Rencana awal',icon:'▰'},
{layer:lyr_point_mporilembo_rencana_update_4,name:'Mporilembo · Titik Update',group:'Rencana update',icon:'📍'},
{layer:lyr_point_tepal_rencana_awal_5,name:'Tepal · Titik Awal',group:'Rencana awal',icon:'📍'},
{layer:lyr_poly_tapal_rencana_awal_6,name:'Tepal · Area Awal',group:'Rencana awal',icon:'▰'},
{layer:lyr_point_tepal_rencana_update_7,name:'Tepal · Titik Update',group:'Rencana update',icon:'📍'}
];
const list=document.getElementById('customLayers');
configs.forEach(c=>{const label=document.createElement('label');label.className='layer-item';const cb=document.createElement('input');cb.type='checkbox';cb.checked=c.layer.getVisible();cb.addEventListener('change',()=>c.layer.setVisible(cb.checked));const ico=document.createElement('span');ico.textContent=c.icon;const text=document.createElement('div');text.className='layer-name';const strong=document.createElement('strong');strong.textContent=c.name;const small=document.createElement('div');small.className='layer-group';small.textContent=c.group;text.append(strong,small);label.append(cb,ico,text);list.append(label);c.layer.on('change:visible',()=>{cb.checked=c.layer.getVisible()});});
const vectors=configs.slice(2).map(c=>c.layer);const all=vectors.flatMap(layer=>layer.getSource().getFeatures().map(feature=>({feature,layer})));
const pointCount=all.filter(x=>x.feature.getGeometry() instanceof ol.geom.Point || x.feature.getGeometry() instanceof ol.geom.MultiPoint).length;
const polyCount=all.filter(x=>x.feature.getGeometry() instanceof ol.geom.Polygon || x.feature.getGeometry() instanceof ol.geom.MultiPolygon).length;
document.getElementById('countPoints').textContent=pointCount.toLocaleString('id-ID');document.getElementById('countPolys').textContent=polyCount.toLocaleString('id-ID');
const results=document.getElementById('searchResults');const search=document.getElementById('featureSearch');
function focus(x){x.layer.setVisible(true);const extent=x.feature.getGeometry().getExtent();map.getView().fit(extent,{padding:[95,95,95,95],duration:650,maxZoom:16});if(x.feature.getGeometry() instanceof ol.geom.Point){map.getView().setZoom(Math.min(map.getView().getZoom(),15));}if(innerWidth<=800)document.getElementById('sidebar').classList.remove('open');}
function runSearch(){results.replaceChildren();const q=search.value.trim().toLocaleLowerCase('id');if(q.length<2)return;let matches=all.filter(x=>Object.entries(x.feature.getProperties()).some(([k,v])=>k!=='geometry'&&v!=null&&String(v).toLocaleLowerCase('id').includes(q))).slice(0,30);if(!matches.length){const empty=document.createElement('div');empty.className='note';empty.textContent='Objek tidak ditemukan.';results.append(empty);return;}matches.forEach(x=>{const b=document.createElement('button');b.className='result';const props=x.feature.getProperties();b.textContent=props.Name||props.Nama_PPKH||props.POSISI||('Objek '+(props.fid??props.Id??''));const small=document.createElement('small');small.textContent=configs.find(c=>c.layer===x.layer).name;b.append(small);b.addEventListener('click',()=>focus(x));results.append(b)});}
search.addEventListener('input',runSearch);document.getElementById('clearSearch').addEventListener('click',()=>{search.value='';runSearch();search.focus()});
const initialCenter=map.getView().getCenter().slice();const initialZoom=map.getView().getZoom();document.getElementById('resetView').addEventListener('click',()=>map.getView().animate({center:initialCenter,zoom:initialZoom,duration:600}));document.getElementById('menuToggle').addEventListener('click',()=>{document.getElementById('sidebar').classList.toggle('open');setTimeout(()=>map.updateSize(),230)});
window.addEventListener('resize',()=>map.updateSize());setTimeout(()=>map.updateSize(),300);
})();
