import * as T from 'three';
export const clone = v => JSON.parse(JSON.stringify(v));
let serial=0;
const part=(name,shape,p,s,color='#101d30',extra={})=>({id:`part-${++serial}`,name,shape,p,s,r:[0,0,0],color,metal:0.35,rough:0.4,opacity:1,...extra});
export function truck(){
 serial=0;const a=[];const box=(n,p,s,c,e)=>a.push(part(n,'box',p,s,c,e));
 const navy='#111e30',copper='#d58b56',cream='#fff0cf',steel='#aeb9c1';
 box('Chassis',[0,.67,0],[7.3,.23,2.4],'#20252c');
 box('Kitchen floor',[-.8,1,0],[5.4,.2,2.4],steel);
 box('Far body panel',[-.8,2, -1.18],[5.4,2.1,.12],navy);
 box('Rear wall',[-3.47,2,0],[.12,2.1,2.4],navy);
 box('Serving lower panel',[-.8,1.35,1.18],[5.4,.7,.12],navy);
 box('Serving rear pillar',[-3.08,2.3,1.18],[.75,1.25,.12],navy);
 box('Serving front pillar',[1.48,2.3,1.18],[.16,1.25,.12],navy);
 box('Brand fascia',[-.8,3.12,0],[5.4,.48,2.4],navy);
 box('Roof',[-.8,3.4,0],[5.5,.12,2.45],navy);
 box('Kitchen back splash',[-.75,2,-.55],[4.3,1.6,.12],steel);
 box('Cooking counter',[-.8,1.72,.12],[4.3,.12,1.3],steel);
 box('Vent hood',[-.9,2.72,-.25],[2.25,.38,.7],steel);
 for(let i=0;i<13;i++)box('Hood grille '+(i+1),[-1.9+i*.17,2.7,.115],[.06,.25,.025],'#29313a');
 box('Serving sill',[-.6,1.78,1.35],[4.35,.12,.7],steel);
 box('Open serving awning',[-.6,2.94,1.92],[4.35,.1,1.55],steel,{r:[-.1,0,0]});
 for(const x of [-2.55,1.35])box('Awning support',[x,2.38,1.4],[.035,1.15,.035],steel,{r:[-.35,0,0]});
 box('Cab lower body',[2.56,1.43,0],[2.05,1.32,2.4],navy);
 box('Cab rear wall',[1.6,2.22,0],[.1,1.55,2.4],navy);
 box('Cab roof',[2.46,3.22,0],[1.9,.16,2.4],navy);
 box('Windshield',[3.35,2.55,0],[.09,1.22,2.12],'#69858c',{opacity:.68,metal:.05,rough:.14,r:[0,0,.13]});
 box('Front windshield divider',[3.43,2.56,0],[.12,1.3,.055],navy);
 for(const z of [-1.2,1.2]){
 box('Cab side glass',[2.42,2.55,z],[1.45,1.12,.045],'#69858c',{opacity:.6,metal:.05,rough:.14});
 box('Copper cab rail',[2.46,3.13,z*1.02],[1.85,.06,.055],copper);
 box('Door handle',[1.92,1.91,z*1.03],[.11,.25,.04],'#343b42');
 box('Side mirror',[3.1,2.43,z*1.24],[.25,.63,.17],'#22272d');
 box('Copper lower stripe',[-.6,.98,z*1.02],[5.5,.065,.025],copper);
 box('Door copper edge',[1.72,2.2,z*1.02],[.055,1.85,.025],copper);
 }
 box('Front grille',[3.61,1.34,0],[.04,.66,1.22],'#151719');
 for(let i=0;i<8;i++)box('Grille bar '+i,[3.64,1.07+i*.08,0],[.025,.025,1.17],steel);
 box('Front bumper',[3.73,.75,0],[.28,.3,2.55],'#292d32');
 box('Rear bumper',[-3.6,.73,0],[.24,.26,2.55],'#292d32');
 for(const z of [-.94,.94]){
 box('Headlamp',[3.66,1.45,z],[.06,.38,.28],cream,{emissive:'#ffe2a6'});
 box('Front indicator',[3.66,1.1,z],[.06,.13,.25],'#ffab22');
 box('Rear tail lamp',[-3.55,1.25,z],[.05,.38,.16],'#d82a31');
 }
 for(const x of [-2.32,2.42])for(const z of [-1.16,1.16]){
 a.push(part('Tire','cylinder',[x,.57,z],[.57,.36,.57],'#1a1b1d',{r:[Math.PI/2,0,0],metal:0,rough:.95}));
 a.push(part('Wheel hub','cylinder',[x,.57,z+Math.sign(z)*.19],[.32,.025,.32],'#46505a',{r:[Math.PI/2,0,0],metal:.85}));
 for(let k=0;k<6;k++)a.push(part('Wheel bolt','sphere',[x+Math.cos(k*Math.PI/3)*.21,.57+Math.sin(k*Math.PI/3)*.21,z+Math.sign(z)*.21],[.035,.035,.035],steel));
 }
 for(const x of [-1.75,.2])a.push(part('Stock pot','cylinder',[x,1.96,.2],[.23,.32,.23],steel,{metal:.9}));
 for(let i=0;i<5;i++)a.push(part('Spice jar '+(i+1),'cylinder',[.1+i*.24,2.4,-.38],[.075,.21,.075],'#d59843',{rough:.3}));
 box('Spice shelf',[.6,2.27,-.4],[1.5,.05,.3],steel);
 box('Menu board',[-3.03,2.28,1.26],[.65,1.15,.055],navy,{label:'MENU\nChicken\nBeef\nRice\nPasta',textColor:cream});
 box('Carellas Kitchen sign',[-.7,3.13,1.215],[4.7,.38,.025],navy,{label:'CARELLAS KITCHEN',textColor:cream});
 box('Door monogram',[2.45,1.64,1.225],[.85,.55,.025],navy,{label:'CK',textColor:copper});
 box('Rear monogram',[-3.54,2.18,0],[.025,1.3,1.3],navy,{label:'CK',textColor:cream,labelFace:'rear'});
 box('Roof vent',[-1.2,3.55,-.3],[1.1,.24,.75],steel);
 return a;
}
export function template(type){
 serial=Date.now(); const b=(...v)=>part(...v), n='#df9c6b',w='#eee4d3',d='#31463f';
 switch(type){
 case 'Bottle':return [b('Bottle body','cylinder',[0,1,0],[.55,1.6,.55],d),b('Shoulder','sphere',[0,1.8,0],[.55,.3,.55],d),b('Neck','cylinder',[0,2.1,0],[.24,.45,.24],d),b('Cap','cylinder',[0,2.37,0],[.28,.16,.28],n)];
 case 'Box':return [b('Package','box',[0,1,0],[1.6,2,1],w),b('Lid','box',[0,2.05,0],[1.68,.15,1.08],n),b('Brand label','box',[0,1,.51],[1.2,.7,.02],d,{label:'VENTURE',textColor:w})];
 case 'Bag':return [b('Bag body','box',[0,.9,0],[1.6,1.6,.6],d),b('Front pocket','box',[0,.7,.35],[1.2,.65,.14],n),b('Left handle','torus',[-.4,1.9,0],[.36,.36,.12],n),b('Right handle','torus',[.4,1.9,0],[.36,.36,.12],n)];
 case 'Mascot':return [b('Body','sphere',[0,.95,0],[.6,.8,.4],n),b('Head','sphere',[0,2,0],[.65,.6,.5],w),...[-1,1].flatMap(s=>[b('Eye','sphere',[s*.22,2.1,.45],[.08,.1,.06],d),b('Foot','sphere',[s*.34,.18,.15],[.27,.18,.4],d),b('Arm','sphere',[s*.7,1.2,0],[.2,.5,.2],n)])];
 case 'Merchandise':return [b('Mug','cylinder',[0,.65,0],[.6,1.3,.6],w),b('Handle','torus',[.66,.7,0],[.42,.42,.15],n),b('Brand badge','box',[0,.7,.59],[.65,.5,.02],d,{label:'CK',textColor:w})];
 case 'Room':return [b('Floor','box',[0,.05,0],[5,.1,4],w),b('Back wall','box',[0,1.5,-2],[5,3,.1],d),b('Side wall','box',[-2.5,1.5,0],[.1,3,4],w),b('Service desk','box',[.5,.6,.2],[2.8,1.2,.8],n),b('Countertop','box',[.5,1.25,.2],[3,.1,1],d)];
 case 'Sculpture':return [b('Plinth','cylinder',[0,.2,0],[1,.4,1],d),b('Orbit','torus',[0,1.7,0],[1.1,1.1,.17],n,{r:[.3,.5,.2]}),b('Core','sphere',[0,1.65,0],[.45,.45,.45],w)];
 default:return truck();
 }
}
export function initialProject(){return {schemaVersion:'1.0',name:'Carellas Kitchen',modelType:'Food truck',description:'A navy and copper mobile kitchen with an open serving window, stainless kitchen, and Carellas Kitchen branding. Procedural interpretation of the supplied concept; approximate proportions.',units:'meters',objects:truck(),references:[],background:'#e8e9e7',lighting:'Softbox',grid:true,axes:false,camera:'Isometric',projection:'Perspective',hotspots:[]};}
export function labelTexture(o){
 const c=document.createElement('canvas');c.width=1024;c.height=o.label.includes('\n')?1536:160;const ctx=c.getContext('2d');ctx.fillStyle=o.color;ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle=o.textColor||'#fff0cf';ctx.textAlign='center';ctx.textBaseline='middle';const lines=o.label.split('\n');ctx.font=`bold ${lines.length>1?150:100}px Arial`;lines.forEach((s,i)=>ctx.fillText(s,512,lines.length>1?180+i*240:85,980));const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t;
}
export async function meshFor(o){
 let g;switch(o.shape){case 'sphere':g=new T.SphereGeometry(1,28,20);break;case 'cylinder':g=new T.CylinderGeometry(1,1,1,40);break;case 'torus':g=new T.TorusGeometry(1,.18,16,48);break;default:g=new T.BoxGeometry(1,1,1);}
 let map=null;if(o.texture){map=await new T.TextureLoader().loadAsync(o.texture);map.colorSpace=T.SRGBColorSpace;map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(o.repeat||1,o.repeat||1);map.offset.set(o.offsetX||0,o.offsetY||0);}
 const material=new T.MeshStandardMaterial({color:o.color,metalness:o.metal,roughness:o.rough,transparent:o.opacity<1,opacity:o.opacity,map,emissive:o.emissive||'#000000',emissiveIntensity:.45});
 let materials=material;if(o.label&&!o.texture){const label=new T.MeshStandardMaterial({map:labelTexture(o),metalness:o.metal,roughness:o.rough});materials=Array.from({length:6},()=>material);materials[o.labelFace==='rear'?1:4]=label;}
 const m=new T.Mesh(g,materials);m.name=o.name;m.userData.partId=o.id;m.position.fromArray(o.p);m.scale.fromArray(o.s);m.rotation.fromArray([...o.r,'XYZ']);m.castShadow=true;m.receiveShadow=true;return m;
}
export async function groupFor(project){const group=new T.Group();group.name=project.name;for(const o of project.objects)group.add(await meshFor(o));return group;}
