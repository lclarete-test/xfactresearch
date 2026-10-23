import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const base=new URL('../',import.meta.url),tokens=JSON.parse(readFileSync(new URL('tokens.json',base),'utf8'));
function luminance(hex){const rgb=hex.match(/[0-9a-f]{2}/ig).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];}
function contrast(a,b){const l=[luminance(a),luminance(b)].sort((a,b)=>b-a);return(l[0]+.05)/(l[1]+.05);}
const pairs=[['Text / canvas','text','background',4.5],['Muted / canvas','muted','background',4.5],['Text / surface','text','surface',4.5],['Muted / surface','muted','surface',4.5],['Text / elevated','text','elevated',4.5],['Muted / elevated','muted','elevated',4.5],['Primary action','actionText','action',4.5],['Action hover','actionText','actionHover',4.5],['Accent action','accentText','accent',4.5],['Highlight','highlightText','highlight',4.5],['Link / canvas','link','background',4.5],['Link / surface','link','surface',4.5],['Link / elevated','link','elevated',4.5],['Success','success','successBg',4.5],['Warning','warning','warningBg',4.5],['Error','error','errorBg',4.5],['Error / canvas','error','background',4.5],['Control / canvas','border','background',3],['Control / elevated','border','elevated',3],['Control / surface','border','surface',3],['Focus / canvas','focus','background',3],['Focus / surface','focus','surface',3],['Focus / elevated','focus','elevated',3]];
const report={version:tokens.version,method:'WCAG relative luminance, sRGB colors; unrounded ratio determines pass.',scope:'Specified opaque token pairs only. Not a full page accessibility certification.',results:[]};
for(const theme of ['light','dark'])for(const[label,fg,bg,min]of pairs){const colors=tokens.semantic[theme],ratio=contrast(colors[fg],colors[bg]);const entry={theme,label,foreground:colors[fg],background:colors[bg],ratio:Number(ratio.toFixed(2)),minimum:min,pass:ratio>=min};report.results.push(entry);assert(ratio>=min,`${theme}: ${label} is ${ratio.toFixed(2)}; need ${min}`);}
writeFileSync(new URL('contrast-report.json',base),JSON.stringify(report,null,2)+'\n');
const html=readFileSync(new URL('index.html',base),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
for(const[,ref]of html.matchAll(/(?:href|src)="([^"#:]+)"/g)){if(!ref.startsWith('http')&&!ref.startsWith('/')&&!ref.includes('://'))assert(existsSync(new URL(ref,base)),`Missing local resource: ${ref}`);}
for(const[,ref]of html.matchAll(/(?:aria-controls|aria-labelledby|aria-describedby|for)="([^"]+)"/g))for(const id of ref.split(' '))assert(ids.includes(id),`Missing label or relationship target: ${id}`);
const css=readFileSync(new URL('tokens.css',base),'utf8');
for(const theme of ['light','dark'])for(const value of Object.values(tokens.semantic[theme]))assert(css.includes(value),`Missing token ${value}`);

console.log(`PASS: ${report.results.length} contrast pairs, unique IDs, form/tab relationships and local gallery resources.`);
