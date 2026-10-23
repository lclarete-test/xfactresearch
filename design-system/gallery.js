import {initTabs} from './components.js';
initTabs();
const html=document.documentElement;
const themeToggle=document.getElementById('theme-toggle');
const directionToggle=document.getElementById('direction-toggle');
let theme='light';try{theme=localStorage.getItem('xfact-ds-theme')==='dark'?'dark':'light';}catch{}
function applyTheme(){html.dataset.xfTheme=theme;themeToggle.setAttribute('aria-pressed',String(theme==='dark'));}
applyTheme();
themeToggle.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';applyTheme();try{localStorage.setItem('xfact-ds-theme',theme);}catch{}});
directionToggle.addEventListener('click',()=>{const rtl=html.dir!=='rtl';html.dir=rtl?'rtl':'ltr';directionToggle.setAttribute('aria-pressed',String(rtl));});
document.getElementById('feedback-button').addEventListener('click',()=>{document.getElementById('button-feedback').textContent='Feedback should confirm an action and explain the next step.';});
const form=document.getElementById('form-demo'),email=document.getElementById('demo-email'),name=document.getElementById('demo-name');
form.addEventListener('submit',event=>{event.preventDefault();const emailValid=email.validity.valid;const nameValid=name.validity.valid;email.setAttribute('aria-invalid',String(!emailValid));name.setAttribute('aria-invalid',String(!nameValid));document.getElementById('email-error').hidden=emailValid;document.getElementById('form-status').textContent=emailValid&&nameValid?'Demo valid. No data was sent or saved.':'Check the required fields. No data was sent or saved.';if(!nameValid)name.focus();else if(!emailValid)email.focus();});
fetch('./contrast-report.json').then(r=>{if(!r.ok)throw new Error('No report');return r.json();}).then(report=>{const rows=['Text / canvas','Muted / surface','Primary action','Accent action','Highlight','Control / elevated'];const tbody=document.getElementById('contrast-results');tbody.replaceChildren();for(const label of rows){const row=document.createElement('tr');const th=document.createElement('th');th.scope='row';th.textContent=label;row.append(th);for(const theme of ['light','dark']){const result=report.results.find(x=>x.label===label&&x.theme===theme);const td=document.createElement('td');td.textContent=result.ratio.toFixed(2)+':1';row.append(td);}tbody.append(row);}}).catch(()=>{document.getElementById('contrast-results').textContent='Open contrast-report.json for the tested pairs.';});
