import {readFileSync,writeFileSync} from 'node:fs';
const base=new URL('../',import.meta.url), tokens=JSON.parse(readFileSync(new URL('tokens.json',base),'utf8'));
const kebab=s=>s.replace(/[A-Z]/g,m=>'-'+m.toLowerCase());
let css='/* Generated from tokens.json. Run node scripts/build-tokens.mjs after editing tokens. */\n:root {\n';
for(const [name,value]of Object.entries(tokens.primitive.color))css+=`  --xf-brand-${kebab(name)}: ${value};\n`;
for(const section of ['space','radius','type','layout','motion','layer'])for(const[name,value]of Object.entries(tokens[section]))css+=`  --xf-${section}-${kebab(name)}: ${value};\n`;
css+='}\n';
for(const theme of ['light','dark']){css+=(theme==='light'?':root, ':'')+`[data-xf-theme="${theme}"] {\n  color-scheme: ${theme};\n`;for(const[name,value]of Object.entries(tokens.semantic[theme]))css+=`  --xf-color-${kebab(name)}: ${value};\n`;css+='}\n';}
writeFileSync(new URL('tokens.css',base),css);
console.log('Generated tokens.css from tokens.json');
