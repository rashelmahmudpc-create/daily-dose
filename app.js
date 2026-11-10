(function(){
const LABELS={lesson:'শেখার লেসন',news:'AI খবর',tech:'নতুন প্রযুক্তি',wonder:'আজকের বিস্ময়',quote:'আজকের উক্তি',trick:'কাজের ট্রিক',idea:'রোজগার আইডিয়া',free:'ফ্রি টুলস'};
const ICON={lesson:'🎬',news:'📰',tech:'🚀',wonder:'🤯',quote:'🗣️',trick:'💡',idea:'🪙',free:'🆓'};
const ORDER=['lesson','news','tech','wonder','quote','trick','idea','free'];
const MONTHS=['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const DAYS=['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
function bd(n){return document.getElementById(n);}
function dhakaNow(){return new Date(Date.now()+6*3600*1000);}
function pick(arr){const d=dhakaNow();const seed=Math.floor(d.getTime()/86400000);return arr[((seed*2654435761)>>>0)%arr.length];}
const POOLS={
 lesson:[
  {t:'Atomic Habits — James Clear',x:'লক্ষ্য নয়, সিস্টেম',b:'<p>প্রতিদিন মাত্র <b>১%</b> উন্নতি = ১ বছরে ~৩৭ গুণ ভালো। উল্টো ১% খারাপও ততটা ক্ষতি।</p><p><b>শেখার কথা:</b> অভ্যাস/সিস্টেম দাঁড় করান — লক্ষ্য অভিমুখ ঠিক করে, সিস্টেমই পৌঁছে দেয়।</p>'},
  {t:'The Almanack of Naval Ravikant',x:'সম্পদ = নির্দিষ্ট জ্ঞান × লিভারেজ',b:'<p>টাকা আসে সমস্যা সমাধান থেকে, ঘণ্টা গোনা থেকে নয়।</p><p><b>শেখার কথা:</b> যে কাজটা আপনার কাছে খেলা মনে হয়, অন্যের কাছে কঠিন — সেটাই আপনার নির্দিষ্ট জ্ঞান।</p>'},
  {t:'Deep Work — Cal Newport',x:'গভীর মনোযোগ বিরল, তাই মূল্যবান',b:'<p>বিভ্রান্তিহীন ২ ঘণ্টা, ৮ ঘণ্টা বিক্ষিপ্ত কাজের চেয়ে বেশি দেয়।</p><p><b>শেখার কথা:</b> ফোন সরান; মনোযোগ ফেরানোর ইচ্ছা জাগলে ৫ মিনিট দেরি করান।</p>'},
  {t:'Sapiens — Yuval Noah Harari',x:'গল্পই মানুষকে এক করল',b:'<p>টাকা, দেশ, ব্র্যান্ড — সব সম্মিলিত কল্পনা; কাজ করে কারণ সবাই বিশ্বাস করে।</p><p><b>শেখার কথা:</b> বড় কিছু গড়তে দরকার একটা বিশ্বাসযোগ্য গল্প।</p>'},
  {t:'Show Your Work! — Austin Kleon',x:'প্রক্রিয়াটাই শেয়ার করুন',b:'<p>শুধু শেষ ফল নয় — কৌশল, ভুল, ছোট আবিষ্কার শেয়ার করুন।</p><p><b>শেখার কথা:</b> প্রক্রিয়া দেখালে মানুষ আসে, সেটাই শ্রোতা।</p>'},
  {t:'The 4-Hour Workweek — Tim Ferriss',x:'কম করব, বেশি পাব',b:'<p>ব্যস্ততা = ভুল কাজ। কম শক্তিতে বেশি ফল আসে পুনর্বিন্যাসে।</p><p><b>শেখার কথা:</b> কাজটা কেন করছেন জিজ্ঞেস করুন; না পারলে বাদ/দান করুন।</p>'},
  {t:'Ikigai',x:'জাপানি অর্থময় জীবনের সূত্র',b:'<p>যা ভালোবাসেন × যা পারেন × যা দুনিয়ার দরকার — ছেদবিন্দুই Ikigai।</p><p><b>শেখার কথা:</b> চার বৃত্ত আঁকুন, ছেদ খুঁজুন।</p>'},
  {t:'Think and Grow Rich — Napoleon Hill',x:'স্পষ্ট লক্ষ্য + অনড়তা',b:'<p>স্পষ্ট লক্ষ্য, দৃঢ় ইচ্ছা, পরিকল্পনা — তিনে মিলে সাফল্য।</p><p><b>শেখার কথা:</b> লক্ষ্য এক বাক্যে লিখে রোজ পড়ুন।</p>'},
  {t:'The Psychology of Money — Morgan Housel',x:'সম্পদ ধৈর্যের ফসল',b:'<p>বড় রিটার্ন আসে সময়ে, বুদ্ধিতে নয়। টিকে থাকাই আসল কৌশল।</p><p><b>শেখার কথা:</b> "যথেষ্ট" চিনলে বেশি রিস্ক নিতে হয় না।</p>'},
  {t:'Outliers — Malcolm Gladwell',x:'সুযোগ + অনুশীলন',b:'<p>সাফল্য শুধু প্রতিভা নয় — সময়, সুযোগ, পরিবেশও।</p><p><b>শেখার কথা:</b> আপনার সুযোগটা চিনুন এবং সেটাতে ১০,০০০ ঘণ্টা ঢালুন।</p>'}
 ],
 quote:[
  {t:'"যত বেশি শিখি, তত বুঝি কত কম জানি"',x:'Albert Einstein (attributed)',b:'<p>শেখা গভীর হলে অজানার পরিধি বড় দেখায় — এটা কৌতূহলের ইঞ্জিন।</p><p><b>ভাবার্থ:</b> যেদিন মনে হবে সব জানি, সেদিন থেমে গেছেন।</p>'},
  {t:'"শুরু করাই অর্ধেক কাজ"',x:'প্রবাদ',b:'<p>ছোট শুরু ভয় ভাঙে; নিখুঁত শুরুর অপেক্ষায় অনেক কিছু হারায়।</p><p><b>ভাবার্থ:</b> প্রস্তুতির অপেক্ষা নয়, প্রথম খারাপ সংস্করণ বানান।</p>'},
  {t:'"ভালো প্রশ্নই অর্ধেক উত্তর"',x:'Francis Bacon (attributed)',b:'<p>প্রশ্ন যত ধারাল, উত্তর তত কাজের।</p><p><b>ভাবার্থ:</b> উত্তর খোঁজার আগে প্রশ্নটা ঠিকভাবে লিখুন।</p>'},
  {t:'"সময় যেদিকে যায়, জীবন সেদিকেই গড়ে"',x:'সেনেকা',b:'<p>সময় সবচেয়ে দামি, অথচ সবচেয়ে অবহেলিত।</p><p><b>ভাবার্থ:</b> আজ ২ ঘণ্টা নিজের দক্ষতায় ঢালুন।</p>'},
  {t:'"সরলতাই চূড়ান্ত পরিশীলন"',x:'Leonardo da Vinci (attributed)',b:'<p>কঠিন নয়, সহজ করাটাই আসল দক্ষতা।</p><p><b>ভাবার্থ:</b> যা বোঝানো কঠিন, সেটা ভাঙুন ছোট ছোট অংশে।</p>'}
 ],
 trick:[
  {t:'ভুলে বন্ধ ট্যাব ফেরানো',x:'Ctrl+Shift+T',b:'<p>ভুলে ট্যাব বন্ধ হলে <b>Ctrl+Shift+T</b> — ফিরে আসে, বারবার চাপলে আগেরগুলোও। মোবাইল Chrome: ৩-ডট → Recent tabs।</p>'},
  {t:'২ মিনিটের নিয়ম',x:'ছোট কাজ ফেলে রাখবেন না',b:'<p>কোনো কাজ ২ মিনিটে হয়? এখনই করুন, তালিকায় ফেলবেন না।</p>'},
  {t:'ব্যাটারি বাঁচানোর নিয়ম',x:'চার্জ ২০–৮০%',b:'<p>লিথিয়াম ব্যাটারি ০–১০০% চক্রে দ্রুত নষ্ট হয়। ২০–৮০%-এ রাখলে আয়ু বাড়ে।</p>'},
  {t:'স্ক্রিনশট নয়, বুকমার্ক',x:'পরে পড়ার জন্য ফোল্ডার',b:'<p>পরে পড়ার পেজ: বুকমার্ক ফোল্ডারে রাখুন, স্ক্রিনশটে নয় — খোঁজা সহজ, স্পেস সাশ্রয়।</p>'},
  {t:'ছবি থেকে টেক্সট',x:'ফোনেই কাজ চালান',b:'<p>ছবিতে লেখা দরকার? ফোনের ফটো-স্ক্যান বা Google Lens দিয়ে সরাসরি টেক্সট কপি করুন।</p>'}
 ],
 idea:[
  {t:'"AI টুল অফ দ্য ডে" শর্ট',x:'রোজ একটা টুল, ৬০ সেকেন্ড',b:'<p>প্রতিদিন একটা ফ্রি AI টুল — কী কাজ, কোথায় লাগে, কেমন শুরু।</p><p><b>প্রথম ধাপ:</b> আজ একটা টুল টেস্ট করে ফুটেজ রাখুন।</p>'},
  {t:'লোকাল ব্যবসার AI সেটআপ',x:'দোকান/চিকিৎসকের জন্য',b:'<p>ছোট ব্যবসাকে শেখান — কাস্টমার রিপ্লাই, প্রোডাক্ট ডেসক্রিপশন, ইনভয়েস। মাসিক প্যাকেজ।</p><p><b>প্রথম ধাপ:</b> ৫টা দোকান, একটা ফ্রি অডিট।</p>'},
  {t:'ওয়েবসাইট অডিট রিপোর্ট',x:'এক-পেজ মিনি সার্ভিস',b:'<p>গতি/SEO/মোবাইল সমস্যার এক পেজের রিপোর্ট; পরে ফিক্স সার্ভিস।</p>'},
  {t:'নিজের প্রম্পট/স্ক্রিপ্ট প্যাক',x:'ডিজিটাল প্রোডাক্ট',b:'<p>যে AI প্রম্পট/স্ক্রিপ্ট নিজে বানান — ছোট প্যাকেজে বিক্রি করুন।</p>'},
  {t:'শর্ট নোটিফিকেশন সার্ভিস',x:'সব দরকারি খবর এক জায়গায়',b:'<p>নিজের স্পেসের খবর curate করে সাবস্ক্রাইবারদের পাঠালে ভালো রিচ আসে।</p>'}
 ],
 wonder:[
  {t:'অক্টোপাসের ৩টি হার্ট',x:'নীল রক্ত, ৯টি স্নায়ুকেন্দ্র',b:'<p>৩টি হার্ট — ২টি ফুলকায়, ১টি শরীরে। রক্ত <b>নীল</b> (কপার-ভিত্তিক)। ৯টি অর্ধ-স্বাধীন স্নায়ুকেন্দ্র — এক-একটা হাত প্রায় নিজে চলে।</p>'},
  {t:'মধু কখনো নষ্ট হয় না',x:'হাজার বছরেও',b:'<p>কম পানি + অ্যাসিডিক গুণ = ব্যাকটেরিয়া টিকতে পারে না। মিসরের সমাধিতে পাওয়া মধুও খাওয়ার মতো ছিল।</p>'},
  {t:'মস্তিষ্কের শক্তি ২০ ওয়াট',x:'বালবের সমান',b:'<p>~৮৬ বিলিয়ন নিউরন, প্রতি নিউরন গড়ে ~৭,০০০ সংযোগ — মোট ট্রিলিয়নের বেশি। খরচ মাত্র ২০ ওয়াট।</p>'},
  {t:'কিছু গাছ ডাল দিয়েই খাদ্য বানায়',x:'পাতা ছাড়া বেঁচে থাকে',b:'<p>শুষ্ক অঞ্চলের কিছু গাছ পাতা ছাড়াই সবুজ ডাল দিয়ে সালোকসংশ্লেষ করে — পানি বাঁচাতে।</p>'},
  {t:'বিশ্বের সবচেয়ে বেশি ভাষা',x:'৭,০০০+',b:'<p>দুনিয়ায় ~৭,০০০ জীবিত ভাষা; এদের অনেকগুলো প্রতি দুই সপ্তাহে একটি মরে যাচ্ছে।</p>'}
 ],
 free:[
  {t:'NotebookLM',x:'নিজের নোট থেকেই উত্তর',b:'<p>Google-এর ফ্রি টুল — নিজের PDF/নোট আপলোড করলে শুধু সেগুলো পড়ে সারাংশ, প্রশ্নোত্তর, এমনকি পডকাস্ট-স্টাইল অডিও বানায়।</p><p><b>কাজে লাগে:</b> পড়াশোনা, গবেষণা, দ্রুত রিভিশন।</p>'},
  {t:'Canva (Free)',x:'ডিজাইন — টেমপ্লেটে দ্রুত',b:'<p>পোস্টার, কনটেন্ট থাম্বনেইল, প্রেজেন্টেশন — ফ্রি টেমপ্লেটে দ্রুত বানানো যায়।</p>'},
  {t:'Photopea',x:'ব্রাউজারেই ফটোশপ',b:'<p>Photoshop-এর মতো কাজ, কিন্তু ফ্রি ও ব্রাউজারে — PSD ফাইলও খোলে।</p>'},
  {t:'Excalidraw',x:'হাতে-আঁকা স্টাইল ডায়াগ্রাম',b:'<p>ফ্লো-চার্ট, আইডিয়া-বোর্ড — সহজ, ফ্রি, লিংক দিয়ে শেয়ার করা যায়।</p>'},
  {t:'OBS Studio',x:'ফ্রি স্ক্রিন রেকর্ডিং',b:'<p>স্ক্রিন রেকর্ড, ভিডিও টিউটোরিয়াল, লাইভ — একদম ফ্রি ও ওপেন সোর্স।</p>'},
  {t:'Obsidian',x:'নিজের নোট-নেটওয়ার্ক',b:'<p> местаলি সেভ হওয়া নোট, লিংক দিয়ে জুড়ে জাল বানায়। ফ্রি ও প্রাইভেট।</p>'}
 ]
};
function card(key,item,isLive){
  const c=document.createElement('div');c.className='card';
  const row=document.createElement('div');row.className='row';
  const ic=document.createElement('div');ic.className='ic';ic.textContent=ICON[key];
  const d=document.createElement('div');
  const tt=document.createElement('div');tt.className='tt';tt.appendChild(document.createTextNode(LABELS[key]||key));
  if(isLive){const b=document.createElement('span');b.className='badge';b.textContent='লাইভ';tt.appendChild(b);}
  const te=document.createElement('p');te.className='te';te.textContent=(item.t?item.t+' — ':'')+(item.x||'');
  d.appendChild(tt);d.appendChild(te);row.appendChild(ic);row.appendChild(d);
  const body=document.createElement('div');body.className='body';body.innerHTML=item.b||'';
  c.appendChild(row);c.appendChild(body);
  c.addEventListener('click',()=>c.classList.toggle('open'));
  return c;
}
async function loadData(){try{const r=await fetch('data.json',{cache:'no-store'});if(r.ok)return await r.json();}catch(e){}return {};}
async function main(){
  const dh=dhakaNow();
  bd('date').textContent=DAYS[dh.getUTCDay()]+', '+dh.getUTCDate()+' '+MONTHS[dh.getUTCMonth()]+' '+dh.getUTCFullYear();
  const data=await loadData();
  const g=bd('grid');g.innerHTML='';
  ORDER.forEach(k=>{
    const live=data[k];
    if(live&&(live.t||live.x)){g.appendChild(card(k,live,true));}
    else{g.appendChild(card(k,pick(POOLS[k]),false));}
  });
  bd('updated').textContent=data.updatedAt?('আপডেট: '+data.updatedAt):'';
}
bd('reload').addEventListener('click',main);
bd('about').addEventListener('click',()=>alert('রোজকার ডোজ\n\n৮টা সেকশন: শেখার লেসন, AI খবর, নতুন প্রযুক্তি, আজকের বিস্ময়, উক্তি, কাজের ট্রিক, রোজগার আইডিয়া, ফ্রি টুলস।\n\nরোজ সকাল ৮টায় (ঢাকা) নিজে থেকে নতুন ডোজ আসে। কার্ডে ট্যাপ করলে বিস্তারিত।'));
let deferred;
addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;bd('install').style.display='flex';});
bd('installBtn').addEventListener('click',async()=>{if(deferred){deferred.prompt();deferred=null;}bd('install').style.display='none';});
bd('installNo').addEventListener('click',()=>bd('install').style.display='none');
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
main();
})();