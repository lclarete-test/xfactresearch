(()=>{
const realFetch=window.fetch.bind(window);
window.fetch=async(input,init)=>{
const url=typeof input==='string'?input:input.url;
if(url.includes('replica-backend.invalid')){
 if(url.includes('sample-size-calculator')){
 const b=JSON.parse(init.body||'{}'),z={90:1.645,95:1.96,99:2.576}[b.confidenceLevel]||1.96;
 const margin=Number(b.marginOfError)/100,n0=z*z*0.25/(margin*margin),pop=Number(b.populationSize),n=Math.ceil(pop>0?n0/(1+(n0-1)/pop):n0);
 return new Response(JSON.stringify({sampleSize:n,adjustedSize:Math.ceil(n/(Number(b.responseRate)/100)),aiExplanation:'Calculated locally using a 50% response proportion, the selected confidence level and margin of error. This replica does not include the original AI service.'}),{status:200,headers:{'Content-Type':'application/json'}});
 }
 return new Response(JSON.stringify({error:'Demo copy: this service is not connected.'}),{status:503,headers:{'Content-Type':'application/json'}});
}
return realFetch(input,init);
};
function notice(message){let n=document.getElementById('replica-notice');if(!n){n=document.createElement('div');n.id='replica-notice';n.setAttribute('role','status');n.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);max-width:90vw;padding:16px 22px;background:#182231;color:white;border-radius:12px;z-index:99999;box-shadow:0 8px 30px #0003;font:14px sans-serif';document.body.append(n);}n.textContent=message;setTimeout(()=>n.remove(),7000);}
document.addEventListener('click',e=>{const a=e.target.closest('a');if(a&&/^tel:/.test(a.getAttribute('href')||'')){e.preventDefault();e.stopImmediatePropagation();notice('Demo copy. Contact details belong to the reference website.');}},true);
})();
