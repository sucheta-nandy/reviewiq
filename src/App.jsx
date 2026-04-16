import { useState, useEffect, useRef, useCallback } from "react";

const PROPS=[{"id":"110f01b8","city":"Pompei","country":"Italy","stars":null,"rating":8.4,"totalReviews":146,"withText":131,"avgR":{"overall":4.16,"roomcleanliness":4.29,"service":4.24,"hotelcondition":3.99,"roomamenitiesscore":3.88,"ecofriendliness":4.04,"roomcomfort":3.92},"nullR":{"overall":0,"roomcleanliness":0.09,"service":0.17,"roomcomfort":0.92,"hotelcondition":0.08,"roomamenitiesscore":0.36,"ecofriendliness":0.51,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":4,"breakfast":4,"location":9,"staff":8,"noise":5,"wifi":3,"parking":3,"pool":0,"bathroom":3,"bed":4,"ac":5,"renovation":3,"pets":2,"accessibility":0,"value":5,"food":8},"desc":"Hotel with a restaurant, steps from Pompeii Archaeological Park. Smoke-free with bar/lounge, snack bar, free buffet breakfast and free WiFi.","reviews":["front desk staff somewhat abrupt and rude but overall ok","very handy for the ruins. overall good value.","we had a great stay. i only wish there had been screens on the windows - lots of mosquitoes.","location superb - less than 150m to the station and very close to the archaeological park.","ideal location for the archaeological site (2min walk) and the train station.","after the train ride from hell it was an oasis of calm"],"newest":"2025-09-01","amenities":"ac, bar, breakfast_included, frontdesk_24_hour, housekeeping, internet, restaurant, tv"},{"id":"db38b19b","city":"Broomfield","country":"United States","stars":4,"rating":9.2,"totalReviews":1006,"withText":672,"avgR":{"overall":4.44,"roomcleanliness":4.56,"service":4.56,"hotelcondition":4.39,"roomamenitiesscore":4.29,"ecofriendliness":4.33,"roomcomfort":4.57},"nullR":{"overall":0,"roomcleanliness":0.05,"service":0.09,"roomcomfort":0.84,"hotelcondition":0.06,"roomamenitiesscore":0.36,"ecofriendliness":0.6,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":7,"breakfast":6,"location":8,"staff":9,"noise":4,"wifi":4,"parking":5,"pool":8,"bathroom":5,"bed":7,"ac":4,"renovation":3,"pets":4,"accessibility":1,"value":6,"food":9},"desc":"Suburban 4-star resort with 3 restaurants, 2 outdoor pools, and a full-service spa. Free WiFi, free parking, free area shuttle.","reviews":["clean rooms, staff, amenities... we will be back!","great staff. shuttle service is excellent.","they spoiled us with welcome bags and painting activities for the kids. customer service was amazing.","we really enjoyed our stay. location is convenient to boulder & denver.","beautiful seating areas. friendly professional staff.","glad i decided to stay here again. easy access to shopping and great amenities."],"newest":"2025-09-09","amenities":"ac, bar, breakfast_available, crib, elevator, fitness, free_parking, hot_tub, pool, spa, restaurant"},{"id":"5f5a0cd8","city":"Freudenstadt","country":"Germany","stars":null,"rating":9.8,"totalReviews":8,"withText":6,"avgR":{"overall":5,"roomcleanliness":5,"service":5,"hotelcondition":5,"roomamenitiesscore":5,"ecofriendliness":5},"nullR":{"overall":0,"roomcleanliness":0,"service":0,"roomcomfort":1,"hotelcondition":0,"roomamenitiesscore":0,"ecofriendliness":0.25,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":2,"breakfast":2,"location":2,"staff":3,"noise":1,"wifi":0,"parking":1,"pool":0,"bathroom":1,"bed":2,"ac":0,"renovation":1,"pets":0,"accessibility":0,"value":0,"food":3},"desc":"Hotel with free parking near Freudenstadt Marktplatz. Smoke-free with restaurant, coffee shop, and dry cleaning.","reviews":["we had a great stay. the hosts were very friendly and gave advice about activities.","ein absolut wundervolles hotel mit grandiosem service!","we had an incredible stay. beautiful view from our room and balcony.","sehr empfehlenswertes hotel. die gastgeber sind warmherzig und aufmerksam."],"newest":"2025-07-28","amenities":"barbecue, breakfast_available, free_parking, heater, internet, laundry, restaurant, toys"},{"id":"3b984f3b","city":"San Isidro","country":"Costa Rica","stars":3.5,"rating":8.6,"totalReviews":51,"withText":42,"avgR":{"overall":4.31,"roomcleanliness":4.56,"service":4.69,"hotelcondition":4.24,"roomamenitiesscore":4.23,"ecofriendliness":4.32,"roomcomfort":4},"nullR":{"overall":0,"roomcleanliness":0.14,"service":0.16,"roomcomfort":0.88,"hotelcondition":0.14,"roomamenitiesscore":0.49,"ecofriendliness":0.63,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":4,"breakfast":3,"location":3,"staff":4,"noise":3,"wifi":2,"parking":1,"pool":0,"bathroom":2,"bed":3,"ac":4,"renovation":2,"pets":0,"accessibility":1,"value":3,"food":5},"desc":"Hotel with a restaurant near Quebradas Biological Center. Features bar, 24hr business center, free continental breakfast.","reviews":["the room was clean and spacious. beautiful bathroom and shower.","muy centrico, muy cerca de todo.","las habitaciones estan en muy buen estado, amplias y limpias. sumamente ruidoso por el casino.","rooms are brand new and beautiful. the hotel manager was very helpful."],"newest":"2025-08-02","amenities":"ac, balcony, bar, breakfast_included, elevator, internet, restaurant, room_service"},{"id":"9a0043fd","city":"Bochum","country":"Germany","stars":null,"rating":8.4,"totalReviews":152,"withText":113,"avgR":{"overall":4.13,"roomcleanliness":4.26,"service":4.48,"hotelcondition":3.84,"roomamenitiesscore":3.86,"ecofriendliness":4.09,"roomcomfort":3.84},"nullR":{"overall":0,"roomcleanliness":0.09,"service":0.14,"roomcomfort":0.87,"hotelcondition":0.1,"roomamenitiesscore":0.38,"ecofriendliness":0.51,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":3,"breakfast":3,"location":4,"staff":5,"noise":3,"wifi":2,"parking":3,"pool":0,"bathroom":2,"bed":3,"ac":1,"renovation":2,"pets":2,"accessibility":1,"value":2,"food":5},"desc":"Hotel in Bochum with free parking. Features restaurant, dry cleaning, and free newspapers.","reviews":["liebevoll und familiaer gefuehrtes hotel.","unterkunft war sauber, badezimmer in ordnung. fruehstueck war sehr gut.","das personal war super freundlich. das zimmer war sehr gut.","nahe der stadtbahn - bald im zentrum. angenehmer aufenthalt."],"newest":"2025-09-02","amenities":"breakfast_available, free_parking, housekeeping, internet, laundry, restaurant"},{"id":"ff26cdda","city":"Frisco","country":"United States","stars":2.5,"rating":7.0,"totalReviews":1065,"withText":652,"avgR":{"overall":3.53,"roomcleanliness":3.84,"service":3.93,"hotelcondition":3.34,"roomamenitiesscore":3.42,"ecofriendliness":3.7,"roomcomfort":3.67},"nullR":{"overall":0,"roomcleanliness":0.1,"service":0.16,"roomcomfort":0.85,"hotelcondition":0.1,"roomamenitiesscore":0.41,"ecofriendliness":0.63,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":8,"breakfast":6,"location":5,"staff":9,"noise":6,"wifi":3,"parking":4,"pool":6,"bathroom":7,"bed":7,"ac":5,"renovation":5,"pets":3,"accessibility":1,"value":6,"food":7},"desc":"Hotel with outdoor pool near Stonebriar Centre. Features business center, 24hr fitness, free WiFi and parking.","reviews":["lots of improvements being made. love the upgrades!","overall a great experience. check in was smooth.","very affordable, clean, free parking. perfect for cowboys game weekends!","the air worked great, price was good, hotel was clean enough.","the front door does not latch properly, elevator sticks on the 3rd floor."],"newest":"2025-09-08","amenities":"ac, bar, breakfast_available, elevator, fitness, free_parking, hot_tub, internet, laundry, microwave, pool"},{"id":"7d027ef7","city":"Ocala","country":"United States","stars":2.5,"rating":7.4,"totalReviews":765,"withText":500,"avgR":{"overall":3.71,"roomcleanliness":3.94,"service":4.09,"hotelcondition":3.56,"roomamenitiesscore":3.67,"ecofriendliness":3.85,"roomcomfort":3.84},"nullR":{"overall":0,"roomcleanliness":0.09,"service":0.16,"roomcomfort":0.85,"hotelcondition":0.1,"roomamenitiesscore":0.42,"ecofriendliness":0.62,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":7,"breakfast":7,"location":6,"staff":9,"noise":5,"wifi":4,"parking":3,"pool":5,"bathroom":6,"bed":8,"ac":5,"renovation":4,"pets":3,"accessibility":1,"value":5,"food":8},"desc":"Hotel with outdoor pool near Paddock Mall. Restaurant, fitness center, free breakfast, WiFi and parking.","reviews":["nice place and decent price. breakfast could have been better.","the staff were very professional and courteous.","good and clean hotel, love the breakfast included","in a great spot to hit the springs. breakfast was decent.","very clean and comfortable. absolutely wonderful!"],"newest":"2025-12-21","amenities":"ac, bar, breakfast_included, elevator, fitness, free_parking, internet, laundry, microwave, pool, restaurant"},{"id":"e52d67a7","city":"Bangkok","country":"Thailand","stars":3,"rating":7.4,"totalReviews":50,"withText":33,"avgR":{"overall":3.62,"roomcleanliness":3.76,"service":4,"hotelcondition":3.45,"roomamenitiesscore":3.56,"ecofriendliness":3.73,"roomcomfort":3.47},"nullR":{"overall":0,"roomcleanliness":0.16,"service":0.22,"roomcomfort":0.86,"hotelcondition":0.2,"roomamenitiesscore":0.46,"ecofriendliness":0.66,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":4,"breakfast":3,"location":4,"staff":5,"noise":2,"wifi":2,"parking":0,"pool":1,"bathroom":3,"bed":3,"ac":3,"renovation":3,"pets":0,"accessibility":1,"value":3,"food":5},"desc":"Hotel in the heart of Khao San. Features restaurant, outdoor pool, bar/lounge, and free WiFi.","reviews":["close to khaosan road. location is good. hotel room felt very old.","great hotel for the money. rooms fine but dated.","good value for money. rooms could use updating - bathrooms feel old.","location couldn't be better. the hotel is showing its age but staff make up for it."],"newest":"2025-07-14","amenities":"ac, bar, breakfast_available, elevator, internet, laundry, pool, restaurant, room_service"},{"id":"823fb249","city":"Rome","country":"Italy","stars":3.5,"rating":8.4,"totalReviews":772,"withText":527,"avgR":{"overall":4.1,"roomcleanliness":4.33,"service":4.34,"hotelcondition":3.9,"roomamenitiesscore":3.83,"ecofriendliness":4.03,"roomcomfort":4.08},"nullR":{"overall":0,"roomcleanliness":0.08,"service":0.14,"roomcomfort":0.86,"hotelcondition":0.09,"roomamenitiesscore":0.37,"ecofriendliness":0.58,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":7,"breakfast":7,"location":9,"staff":9,"noise":6,"wifi":4,"parking":2,"pool":0,"bathroom":6,"bed":6,"ac":5,"renovation":3,"pets":1,"accessibility":3,"value":5,"food":9},"desc":"Hotel with restaurant near Roma Termini Station. Bar/lounge, rooftop terrace, free buffet breakfast and WiFi.","reviews":["centrally located near roma termini.","the hotel is a bit tired and dated, but offers great value.","excellent location, literally steps from termini. breakfast was surprisingly good.","clean rooms. breakfast could be better. neighborhood rough at night.","very thin walls - we could hear the neighbors clearly."],"newest":"2025-09-03","amenities":"ac, bar, breakfast_included, elevator, internet, laundry, outdoor_space, restaurant, room_service"},{"id":"fa014137","city":"Monterey","country":"United States","stars":3.5,"rating":8.0,"totalReviews":728,"withText":466,"avgR":{"overall":3.94,"roomcleanliness":4.14,"service":4.11,"hotelcondition":3.71,"roomamenitiesscore":3.72,"ecofriendliness":3.89,"roomcomfort":3.97},"nullR":{"overall":0,"roomcleanliness":0.08,"service":0.15,"roomcomfort":0.86,"hotelcondition":0.09,"roomamenitiesscore":0.43,"ecofriendliness":0.63,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":7,"breakfast":5,"location":7,"staff":9,"noise":6,"wifi":4,"parking":5,"pool":5,"bathroom":5,"bed":7,"ac":5,"renovation":5,"pets":4,"accessibility":1,"value":6,"food":7},"desc":"Hotel with outdoor pool near Old Fisherman's Wharf. Hot tub, business center, free breakfast, WiFi and parking.","reviews":["a good hotel close to the wharf. rooms a bit dated but clean.","great value for monterey. walking distance to the wharf.","staff was incredibly friendly. thin walls though.","perfect location for exploring monterey. walked to the aquarium easily."],"newest":"2025-09-07","amenities":"ac, breakfast_included, elevator, fitness, free_parking, hot_tub, internet, laundry, microwave, pool"},{"id":"f2d8d955","city":"New Smyrna Beach","country":"United States","stars":2,"rating":7.6,"totalReviews":152,"withText":109,"avgR":{"overall":3.87,"roomcleanliness":4.05,"service":4.2,"hotelcondition":3.47,"roomamenitiesscore":3.48,"ecofriendliness":3.7,"roomcomfort":3.71},"nullR":{"overall":0,"roomcleanliness":0.11,"service":0.14,"roomcomfort":0.88,"hotelcondition":0.11,"roomamenitiesscore":0.47,"ecofriendliness":0.66,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":5,"breakfast":3,"location":5,"staff":7,"noise":3,"wifi":3,"parking":2,"pool":4,"bathroom":3,"bed":5,"ac":5,"renovation":4,"pets":2,"accessibility":1,"value":5,"food":5},"desc":"Hotel with outdoor pool near New Smyrna Beach. Free WiFi, free parking, 24hr front desk.","reviews":["nice small old florida feel. clean and close to beach.","the location is excellent - walking distance to flagler avenue.","a really charming little place. rooms updated with new furniture.","staff was incredibly friendly - remembered our names by day 2."],"newest":"2025-09-06","amenities":"ac, free_parking, internet, laundry, pool"},{"id":"3216b1b7","city":"Bell Gardens","country":"United States","stars":2,"rating":7.0,"totalReviews":1094,"withText":652,"avgR":{"overall":3.51,"roomcleanliness":3.79,"service":3.84,"hotelcondition":3.23,"roomamenitiesscore":3.33,"ecofriendliness":3.62,"roomcomfort":3.57},"nullR":{"overall":0,"roomcleanliness":0.1,"service":0.15,"roomcomfort":0.87,"hotelcondition":0.1,"roomamenitiesscore":0.44,"ecofriendliness":0.65,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":8,"breakfast":6,"location":5,"staff":9,"noise":7,"wifi":4,"parking":4,"pool":5,"bathroom":7,"bed":8,"ac":5,"renovation":5,"pets":3,"accessibility":1,"value":7,"food":7},"desc":"Hotel with outdoor pool near The Bicycle Hotel & Casino. Fitness center, free breakfast, WiFi and parking.","reviews":["nice and clean, great value. close to the casino.","the bed was comfortable. breakfast included. noise from highway though.","had a cockroach in the bathroom. otherwise ok. staff was friendly.","decent budget hotel. rooms clean and recently updated."],"newest":"2025-12-01","amenities":"ac, breakfast_included, elevator, fitness, free_parking, internet, laundry, microwave, pool"},{"id":"a036cbe1","city":"Mbombela","country":"South Africa","stars":null,"rating":9.2,"totalReviews":10,"withText":9,"avgR":{"overall":4.6,"roomcleanliness":4.8,"service":4.9,"hotelcondition":4.6,"roomamenitiesscore":4.6,"ecofriendliness":4.71,"roomcomfort":4.67},"nullR":{"overall":0,"roomcleanliness":0,"service":0,"roomcomfort":0.7,"hotelcondition":0,"roomamenitiesscore":0,"ecofriendliness":0.3,"checkin":1,"valueformoney":1,"location":1,"communication":1},"topics":{"cleanliness":3,"breakfast":2,"location":2,"staff":4,"noise":1,"wifi":1,"parking":1,"pool":2,"bathroom":2,"bed":3,"ac":1,"renovation":0,"pets":1,"accessibility":0,"value":2,"food":4},"desc":"Lodge with outdoor pool near Lowveld National Botanical Garden. Garden setting, restaurant, free WiFi and parking.","reviews":["a wonderful stay! the lodge is beautiful and staff made us feel welcome.","beautiful lodge with amazing service. perfect for visiting kruger.","great stay. wonderful food - both breakfast and dinner.","stayed 2 nights on our way to kruger. charming and well-maintained."],"newest":"2025-08-17","amenities":"ac, breakfast_included, free_parking, internet, pool, restaurant"}];

const TOPIC_LABELS={cleanliness:"Cleanliness",breakfast:"Breakfast",location:"Location",staff:"Staff & Service",noise:"Noise Level",wifi:"Wi-Fi",parking:"Parking",pool:"Pool",bathroom:"Bathroom",bed:"Bed & Comfort",ac:"A/C & Temperature",renovation:"Upkeep",pets:"Pet-Friendly",accessibility:"Accessibility",value:"Value for Money",food:"Dining"};
const RATING_LABELS={overall:"Overall",roomcleanliness:"Cleanliness",service:"Service",roomcomfort:"Room Comfort",hotelcondition:"Condition",roomamenitiesscore:"Amenities",ecofriendliness:"Eco",checkin:"Check-in",valueformoney:"Value",location:"Location",communication:"Communication"};

function detectGaps(p){const g=[];const rc=p.withText||1;Object.entries(p.nullR).forEach(([k,r])=>{if(r>0.5&&k!=='overall')g.push({type:'rating',cat:k,label:RATING_LABELS[k]||k,sev:r,reason:Math.round(r*100)+'% of guests skip this rating',pri:r*10});});const th=Math.min(5,Math.ceil(rc*0.04));Object.entries(p.topics).forEach(([t,cnt])=>{if(cnt<th){const s=1-cnt/Math.max(th,1);g.push({type:'topic',cat:t,label:TOPIC_LABELS[t]||t,sev:s,reason:cnt===0?'Zero mentions in reviews':'Only '+cnt+' mentions across '+rc+' reviews',pri:s*8});}});if(p.totalReviews<25)g.push({type:'volume',cat:'volume',label:'Review Volume',sev:1-p.totalReviews/25,reason:'Only '+p.totalReviews+' total reviews',pri:7});return g.sort((a,b)=>b.pri-a.pri);}

const QT={roomcomfort:["How comfortable was the bed and room temperature?","Was the room quiet enough for a good night's sleep?"],checkin:["How smooth was your check-in experience?","Did you encounter any issues during check-in or check-out?"],valueformoney:["Did you feel the stay was good value for the price?","Compared to similar hotels, how would you rate the value?"],location:["How convenient was the hotel's location for your trip?","Was it easy to reach attractions or transport from here?"],communication:["How well did the hotel communicate before and during your stay?","Were booking details and pre-arrival info clear?"],wifi:["How was the Wi-Fi speed and reliability?","Did you have any connectivity issues?"],parking:["How was the parking situation?","Was parking easy to find and convenient?"],pool:["Did you use the pool or hot tub? How was it?","Was the pool area clean and well-maintained?"],noise:["How quiet was your room at night?","Did noise from other rooms or outside bother you?"],accessibility:["Were there any accessibility features or challenges?","How easy was it to navigate the property?"],pets:["If you traveled with a pet, how accommodating was the hotel?","Did you notice the property's pet policies?"],renovation:["Did the property feel recently updated or in need of work?","How modern and well-maintained were the rooms?"],breakfast:["How was the breakfast quality and variety?","Were there standout items or things you wished were offered?"],bathroom:["How was the bathroom - clean, good water pressure?","Was everything in the bathroom working well?"],value:["Do you feel you got good value for what you paid?","How does the price compare to the quality?"],ac:["How well did the A/C or heating work?","Was the room temperature comfortable?"],cleanliness:["How clean was the room when you arrived?","Was housekeeping thorough during your stay?"],food:["How were the dining options at or near the hotel?","Was the on-site restaurant good?"],staff:["How helpful and friendly was the staff?","Did anyone go above and beyond for you?"],bed:["How comfortable was the bed and bedding?","Did you sleep well during your stay?"],volume:["What's one thing future guests should know?","What stood out most about your stay?"],ecofriendliness:["Did you notice any eco-friendly practices?","How would you rate the hotel's environmental efforts?"],roomamenitiesscore:["Were the in-room amenities adequate?","Was anything missing that you expected?"]};

function genQuestions(p,gaps,rev){const rl=(rev||'').toLowerCase();const covered=new Set();const kw={breakfast:['break','morning'],cleanliness:['clean','dirty','spotl'],staff:['staff','servi','front desk','recept'],bed:['bed','sleep','comfort','mattress'],value:['price','value','worth','expens'],location:['locat','walk','near','conveni','station'],wifi:['wifi','wi-fi','internet'],parking:['park'],pool:['pool','swim'],noise:['noise','noisy','loud','quiet'],bathroom:['bath','shower','toilet'],ac:['air con','ac','a/c','heat','cold'],food:['food','restaurant','dinner','dining'],renovation:['renov','updat','old','dated','new']};Object.entries(kw).forEach(([t,ws])=>{if(ws.some(w=>rl.includes(w)))covered.add(t);});const qs=[];for(const gap of gaps){if(covered.has(gap.cat))continue;const ts=QT[gap.cat];if(ts){qs.push({q:ts[Math.floor(Math.random()*ts.length)],gap,cat:gap.label});if(qs.length>=2)break;}}if(!qs.length)qs.push({q:"What's one thing future guests should absolutely know about this place?",gap:{type:'general',label:'General',sev:0.5,reason:'Open-ended'},cat:'General'});return qs;}

function Ring({pct,sz=90,sw=7,color="#1a1f71"}){const r=(sz-sw)/2;const circ=Math.PI*2*r;const[a,setA]=useState(0);useEffect(()=>{let s=null;const f=(t)=>{if(!s)s=t;const pr=Math.min((t-s)/1000,1);setA(pr*pct);if(pr<1)requestAnimationFrame(f);};requestAnimationFrame(f);},[pct]);return(<svg width={sz} height={sz}><circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="#e8e8e8" strokeWidth={sw}/><circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeDasharray={circ} strokeDashoffset={circ*(1-a/100)} strokeLinecap="round" transform={`rotate(-90 ${sz/2} ${sz/2})`}/><text x={sz/2} y={sz/2} textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="700" fill="#1a1f71" fontFamily="inherit">{Math.round(a)}%</text></svg>);}

// Expedia exact colors + typography
const C = {
  // Expedia brand
  navy: '#1a1f71',      // Expedia primary navy
  blue: '#3662d8',      // Expedia link blue
  blueCta: '#1a1f71',   // Button blue (same as navy)
  yellow: '#febb02',    // Expedia yellow
  yellowLight: '#fef7e0',
  white: '#ffffff',
  bg: '#f8f7f5',        // Expedia warm off-white background
  card: '#ffffff',
  border: '#e6e4e0',    // Warm gray border
  text: '#1a1a1a',      // Near black text
  textSec: '#545454',   // Secondary text
  textTer: '#757575',   // Tertiary
  green: '#007732',     // Expedia green
  greenLight: '#e8f5e9',
  red: '#cc0000',
  redLight: '#fde8e8',
  orange: '#b35900',
  orangeLight: '#fff3e0',
  badge: '#1a1f71',
};

export default function ReviewIQ(){
  const[stage,setStage]=useState('select');
  const[prop,setProp]=useState(null);
  const[review,setReview]=useState('');
  const[rating,setRating]=useState(0);
  const[gaps,setGaps]=useState([]);
  const[questions,setQuestions]=useState([]);
  const[answers,setAnswers]=useState({});
  const[listening,setListening]=useState(false);
  const[vt,setVt]=useState(null);
  const[busy,setBusy]=useState(false);
  const recRef=useRef(null);
  const chatEnd=useRef(null);

  useEffect(()=>{chatEnd.current?.scrollIntoView({behavior:'smooth'});},[answers,questions]);
  useEffect(()=>{if('webkitSpeechRecognition' in window||'SpeechRecognition' in window){const S=window.SpeechRecognition||window.webkitSpeechRecognition;recRef.current=new S();recRef.current.continuous=false;recRef.current.interimResults=true;recRef.current.lang='en-US';}},[]);
  const startV=useCallback((t)=>{if(!recRef.current)return;setListening(true);setVt(t);recRef.current.onresult=(e)=>{const tr=Array.from(e.results).map(r=>r[0].transcript).join('');if(t==='review')setReview(pr=>pr+' '+tr);else setAnswers(pr=>({...pr,[t]:tr}));};recRef.current.onend=()=>{setListening(false);setVt(null);};recRef.current.start();},[]);
  const stopV=useCallback(()=>{recRef.current?.stop();setListening(false);setVt(null);},[]);
  const analyze=useCallback(()=>{setBusy(true);setTimeout(()=>{const g=detectGaps(prop);setGaps(g);setQuestions(genQuestions(prop,g,review));setBusy(false);setStage('chat');},1500);},[prop,review]);

  const css = `@keyframes spin{to{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased}`;
  const ff = {fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"};

  const Mic=({on,sz=18})=><svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={on?C.red:C.textTer} strokeWidth="2" strokeLinecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>;

  const SevBadge=({v})=>{
    if(v>0.7) return <span style={{background:C.redLight,color:C.red,padding:'2px 8px',borderRadius:4,fontSize:11,fontWeight:600}}>Critical</span>;
    if(v>0.4) return <span style={{background:C.orangeLight,color:C.orange,padding:'2px 8px',borderRadius:4,fontSize:11,fontWeight:600}}>Moderate</span>;
    return <span style={{background:C.greenLight,color:C.green,padding:'2px 8px',borderRadius:4,fontSize:11,fontWeight:600}}>Low</span>;
  };

  // Expedia-style star rating
  const StarRow=({val,sz=24})=>(
    <div style={{display:'flex',gap:2}}>
      {[1,2,3,4,5].map(s=>(
        <button key={s} onClick={()=>setRating(s)} style={{background:'none',border:'none',cursor:'pointer',padding:0}}>
          <svg width={sz} height={sz} viewBox="0 0 24 24" fill={s<=val?C.yellow:'#d4d4d4'} stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </button>
      ))}
    </div>
  );

  // Expedia-style header bar
  const Header=({onBack})=>(
    <div style={{background:C.navy,padding:'0 24px',height:56,display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:10}}>
      {onBack ? <button onClick={onBack} style={{background:'none',border:'none',cursor:'pointer',color:C.white,fontSize:14,display:'flex',alignItems:'center',gap:6,...ff}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>Back
      </button> : <div/>}
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <svg width="24" height="24" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill={C.yellow}/><text x="50" y="68" textAnchor="middle" fontSize="50" fontWeight="bold" fill={C.navy}>IQ</text></svg>
        <span style={{color:C.white,fontSize:16,fontWeight:700,...ff}}>ReviewIQ</span>
      </div>
      <div style={{width:60}}/>
    </div>
  );

  // Expedia blue CTA button
  const CtaBtn=({children,onClick,disabled,variant='primary',style:sx={}})=>(
    <button onClick={onClick} disabled={disabled} style={{
      width:'100%',padding:'12px 24px',borderRadius:12,border:variant==='secondary'?'2px solid '+C.navy:'none',
      background:disabled?'#e8e8e8':variant==='secondary'?'transparent':C.blueCta,
      color:disabled?C.textTer:variant==='secondary'?C.navy:C.white,
      fontSize:15,fontWeight:700,cursor:disabled?'not-allowed':'pointer',
      transition:'background 0.2s',...ff,...sx
    }}>{children}</button>
  );

  // ========== SELECT PROPERTY ==========
  if(stage==='select'){
    return(<div style={{minHeight:'100vh',background:C.bg,...ff}}><style>{css}</style>
      <Header/>
      {/* Hero */}
      <div style={{background:C.navy,padding:'40px 24px 48px',textAlign:'center'}}>
        <h1 style={{color:C.white,fontSize:28,fontWeight:700,marginBottom:8}}>Write a smarter review</h1>
        <p style={{color:'#b8b8d0',fontSize:15,maxWidth:480,margin:'0 auto',lineHeight:1.5}}>
          Select a property you stayed at. We'll ask 1-2 quick follow-up questions to help future travelers.
        </p>
      </div>
      {/* Property grid */}
      <div style={{maxWidth:880,margin:'-24px auto 0',padding:'0 16px 48px',position:'relative',zIndex:1}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:12}}>
          {PROPS.map((pp,pi)=>{const gc=detectGaps(pp).filter(g=>g.sev>0.5).length;return(
            <button key={pp.id} onClick={()=>{setProp(pp);setStage('write');}}
              style={{background:C.card,border:'1px solid '+C.border,borderRadius:12,padding:'16px 20px',textAlign:'left',cursor:'pointer',transition:'box-shadow 0.2s, transform 0.2s',position:'relative',boxShadow:'0 1px 4px rgba(0,0,0,0.08)',animation:`fadeIn 0.4s ease-out ${0.05*pi}s both`}}
              onMouseOver={e=>{e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.12)';e.currentTarget.style.transform='translateY(-2px)';}}
              onMouseOut={e=>{e.currentTarget.style.boxShadow='0 1px 4px rgba(0,0,0,0.08)';e.currentTarget.style.transform='none';}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
                <div>
                  <div style={{fontSize:17,fontWeight:700,color:C.text}}>{pp.city}</div>
                  <div style={{fontSize:13,color:C.textSec,marginTop:2}}>{pp.country}{pp.stars ? ' | '+pp.stars+'-star' : ''}</div>
                </div>
                <div style={{background:pp.rating>=8.5?C.green:pp.rating>=7?C.navy:'#6d5b00',color:C.white,fontSize:13,fontWeight:700,padding:'4px 8px',borderRadius:8,minWidth:32,textAlign:'center'}}>{pp.rating}</div>
              </div>
              <div style={{display:'flex',gap:24}}>
                <div><div style={{fontSize:11,color:C.textTer,textTransform:'uppercase',fontWeight:600,letterSpacing:0.5}}>Reviews</div><div style={{fontSize:20,fontWeight:700,color:C.text}}>{pp.totalReviews}</div></div>
                <div><div style={{fontSize:11,color:C.textTer,textTransform:'uppercase',fontWeight:600,letterSpacing:0.5}}>Info gaps</div><div style={{fontSize:20,fontWeight:700,color:gc>6?C.red:gc>3?C.orange:C.green}}>{gc}</div></div>
              </div>
              {gc>6&&<div style={{position:'absolute',top:12,right:12,background:C.red,color:C.white,fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:4}}>Needs data</div>}
            </button>);})}
        </div>
        <p style={{textAlign:'center',color:C.textTer,fontSize:12,marginTop:20}}>
          {PROPS.length} properties | {PROPS.reduce((s,pp)=>s+pp.totalReviews,0).toLocaleString()} reviews | Expedia Group dataset
        </p>
      </div>
    </div>);
  }

  // ========== WRITE REVIEW ==========
  if(stage==='write'){
    return(<div style={{minHeight:'100vh',background:C.bg,...ff}}><style>{css}</style>
      <Header onBack={()=>{setStage('select');setProp(null);setReview('');setRating(0);}}/>
      <div style={{maxWidth:560,margin:'0 auto',padding:'24px 20px'}}>
        {/* Property info card */}
        <div style={{background:C.card,borderRadius:12,padding:20,border:'1px solid '+C.border,marginBottom:16,boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
            <div>
              <h2 style={{fontSize:22,fontWeight:700,color:C.text,marginBottom:4}}>{prop.city}</h2>
              <p style={{fontSize:13,color:C.textSec}}>{prop.country}{prop.stars?' | '+prop.stars+'-star':''} | {prop.totalReviews} reviews</p>
            </div>
            <div style={{background:C.navy,color:C.white,padding:'6px 12px',borderRadius:8,fontWeight:700,fontSize:16}}>{prop.rating}</div>
          </div>
          <p style={{fontSize:13,color:C.textSec,marginTop:12,lineHeight:1.5}}>{prop.desc}</p>
        </div>

        {/* Star rating */}
        <div style={{background:C.card,borderRadius:12,padding:20,border:'1px solid '+C.border,marginBottom:16}}>
          <label style={{fontSize:14,fontWeight:700,color:C.text,marginBottom:12,display:'block'}}>Your overall rating</label>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <StarRow val={rating} sz={32}/>
            {rating>0&&<span style={{fontSize:14,color:C.textSec,fontWeight:500}}>{['','Poor','Fair','Good','Very good','Excellent'][rating]}</span>}
          </div>
        </div>

        {/* Review text */}
        <div style={{background:C.card,borderRadius:12,padding:20,border:'1px solid '+C.border,marginBottom:16}}>
          <label style={{fontSize:14,fontWeight:700,color:C.text,marginBottom:12,display:'block'}}>Tell us about your stay</label>
          <div style={{position:'relative'}}>
            <textarea value={review} onChange={e=>setReview(e.target.value)}
              placeholder="What was your experience like?"
              style={{width:'100%',minHeight:120,border:'1px solid '+C.border,borderRadius:8,padding:'12px 48px 12px 12px',fontSize:14,lineHeight:1.6,resize:'vertical',outline:'none',color:C.text,boxSizing:'border-box',...ff}}
              onFocus={e=>e.target.style.borderColor=C.navy} onBlur={e=>e.target.style.borderColor=C.border}/>
            <button onClick={()=>listening&&vt==='review'?stopV():startV('review')}
              style={{position:'absolute',bottom:12,right:10,width:36,height:36,borderRadius:'50%',border:'1px solid '+(listening&&vt==='review'?C.red:C.border),background:listening&&vt==='review'?C.redLight:C.white,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Mic on={listening&&vt==='review'}/>
            </button>
          </div>
          <p style={{fontSize:12,color:C.textTer,marginTop:6}}>You can also tap the mic to dictate your review</p>
        </div>

        <CtaBtn onClick={analyze} disabled={!review.trim()&&rating===0}>
          {busy ? <span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
            <span style={{width:16,height:16,border:'2px solid rgba(255,255,255,0.3)',borderTopColor:C.white,borderRadius:'50%',animation:'spin 0.7s linear infinite',display:'inline-block'}}/>
            Analyzing reviews...
          </span> : 'Submit and continue'}
        </CtaBtn>
      </div>
    </div>);
  }

  // ========== CHAT / QUESTIONS ==========
  if(stage==='chat'){
    return(<div style={{minHeight:'100vh',background:C.bg,...ff,display:'flex',flexDirection:'column'}}><style>{css}</style>
      <Header onBack={()=>setStage('write')}/>
      <div style={{flex:1,maxWidth:560,margin:'0 auto',width:'100%',padding:'24px 20px'}}>
        {/* Intro card */}
        <div style={{background:C.yellowLight,borderRadius:12,padding:'16px 20px',marginBottom:24,borderLeft:'4px solid '+C.yellow}}>
          <p style={{fontSize:14,color:C.text,lineHeight:1.5}}>
            We analyzed <strong>{prop.totalReviews} reviews</strong> for this property and found <strong>{gaps.length} information gaps</strong>. Here {questions.length===1?'is':'are'} {questions.length} quick question{questions.length>1?'s':''} that would help future travelers.
          </p>
        </div>

        {/* Question cards */}
        {questions.map((q,idx)=>(
          <div key={idx} style={{background:C.card,borderRadius:12,border:'1px solid '+C.border,padding:20,marginBottom:16,boxShadow:'0 1px 4px rgba(0,0,0,0.06)',animation:`fadeIn 0.4s ease-out ${0.2+idx*0.2}s both`}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
              <span style={{background:C.navy,color:C.white,width:24,height:24,borderRadius:'50%',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700,flexShrink:0}}>{idx+1}</span>
              <span style={{fontSize:12,color:C.textTer,fontWeight:600,textTransform:'uppercase',letterSpacing:0.5}}>{q.cat}</span>
              <SevBadge v={q.gap.sev}/>
            </div>
            <p style={{fontSize:16,fontWeight:600,color:C.text,marginBottom:4,lineHeight:1.4}}>{q.q}</p>
            <p style={{fontSize:12,color:C.textTer,marginBottom:14,fontStyle:'italic'}}>{q.gap.reason}</p>

            {answers[idx]?.trim() ? (
              <div style={{background:'#f0f4ff',borderRadius:8,padding:'10px 14px',fontSize:14,color:C.text,lineHeight:1.5}}>{answers[idx]}</div>
            ) : (
              <>
                <div style={{position:'relative'}}>
                  <textarea value={answers[idx]||''} onChange={e=>setAnswers(pr=>({...pr,[idx]:e.target.value}))}
                    placeholder="Type your answer..."
                    style={{width:'100%',minHeight:56,border:'1px solid '+C.border,borderRadius:8,padding:'10px 44px 10px 12px',fontSize:14,resize:'none',outline:'none',color:C.text,boxSizing:'border-box',lineHeight:1.5,...ff}}
                    onFocus={e=>e.target.style.borderColor=C.navy} onBlur={e=>e.target.style.borderColor=C.border}/>
                  <button onClick={()=>listening&&vt===idx?stopV():startV(idx)}
                    style={{position:'absolute',bottom:8,right:8,width:32,height:32,borderRadius:'50%',border:'1px solid '+(listening&&vt===idx?C.red:C.border),background:listening&&vt===idx?C.redLight:C.white,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Mic on={listening&&vt===idx} sz={14}/>
                  </button>
                </div>
                <div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>
                  {['Great!','Average','Needs improvement','Did not use'].map(ch=>(
                    <button key={ch} onClick={()=>setAnswers(pr=>({...pr,[idx]:ch}))}
                      style={{background:C.white,border:'1px solid '+C.border,borderRadius:20,padding:'5px 14px',fontSize:12,color:C.text,cursor:'pointer',...ff}}
                      onMouseOver={e=>{e.currentTarget.style.background='#f0f0f0';}} onMouseOut={e=>{e.currentTarget.style.background=C.white;}}>{ch}</button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
        <div ref={chatEnd}/>
      </div>

      {/* Bottom actions */}
      <div style={{borderTop:'1px solid '+C.border,background:C.white,padding:'12px 20px',position:'sticky',bottom:0}}>
        <div style={{maxWidth:560,margin:'0 auto',display:'flex',gap:10}}>
          <CtaBtn variant="secondary" onClick={()=>setStage('impact')} style={{flex:1}}>Skip</CtaBtn>
          <CtaBtn onClick={()=>setStage('impact')} disabled={!Object.keys(answers).some(k=>answers[k]?.trim())} style={{flex:2.5}}>Submit answers</CtaBtn>
        </div>
      </div>
    </div>);
  }

  // ========== IMPACT ==========
  if(stage==='impact'){
    const answered=Object.keys(answers).filter(k=>answers[k]?.trim()).length;
    const filled=questions.filter((_,i)=>answers[i]?.trim()).length;
    const tg=gaps.length;
    const before=Math.round((1-tg/20)*100);
    const after=Math.min(100,before+Math.round(filled/Math.max(tg,1)*40));

    return(<div style={{minHeight:'100vh',background:C.bg,...ff}}><style>{css}</style>
      {/* Success banner */}
      <div style={{background:C.navy,padding:'48px 24px',textAlign:'center'}}>
        <div style={{width:56,height:56,borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        </div>
        <h2 style={{color:C.white,fontSize:24,fontWeight:700,marginBottom:6}}>Thanks for your review!</h2>
        <p style={{color:'#b8b8d0',fontSize:14}}>Your feedback helps future travelers make better decisions.</p>
      </div>

      <div style={{maxWidth:560,margin:'0 auto',padding:'24px 20px'}}>
        {/* Impact card */}
        <div style={{background:C.card,borderRadius:12,padding:24,border:'1px solid '+C.border,marginBottom:16,boxShadow:'0 1px 4px rgba(0,0,0,0.06)',marginTop:-20,position:'relative',zIndex:1}}>
          <h3 style={{fontSize:18,fontWeight:700,color:C.text,marginBottom:20}}>Your impact</h3>
          <div style={{display:'flex',justifyContent:'center',marginBottom:20}}><Ring pct={after}/></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
            {[{n:answered,l:'Answered',bg:'#f0f4ff',fg:C.navy},{n:filled,l:'Gaps filled',bg:C.greenLight,fg:C.green},{n:tg-filled,l:'Remaining',bg:C.orangeLight,fg:C.orange}].map(m=>(
              <div key={m.l} style={{textAlign:'center',padding:'14px 8px',background:m.bg,borderRadius:8}}>
                <div style={{fontSize:28,fontWeight:700,color:m.fg}}>{m.n}</div>
                <div style={{fontSize:11,color:C.textSec,marginTop:2,fontWeight:500}}>{m.l}</div>
              </div>
            ))}
          </div>
          {/* Progress bars */}
          <div style={{marginTop:20}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
              <span style={{fontSize:13,fontWeight:600,color:C.text}}>Before your review</span>
              <span style={{fontSize:13,fontWeight:600,color:C.textTer}}>{before}%</span>
            </div>
            <div style={{height:8,background:'#e8e8e8',borderRadius:4,overflow:'hidden',marginBottom:14}}>
              <div style={{height:'100%',width:before+'%',background:'#b8b8b8',borderRadius:4}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
              <span style={{fontSize:13,fontWeight:600,color:C.text}}>After your review</span>
              <span style={{fontSize:13,fontWeight:600,color:C.green}}>{after}% (+{after-before}%)</span>
            </div>
            <div style={{height:8,background:'#e8e8e8',borderRadius:4,overflow:'hidden'}}>
              <div style={{height:'100%',width:after+'%',background:C.green,borderRadius:4,transition:'width 1.5s ease-out'}}/>
            </div>
          </div>
        </div>

        {/* Contributions */}
        <div style={{background:C.card,borderRadius:12,padding:20,border:'1px solid '+C.border,marginBottom:16}}>
          <h3 style={{fontSize:16,fontWeight:700,color:C.text,marginBottom:16}}>What you contributed</h3>
          {questions.map((q,i)=>{const a=answers[i];return(
            <div key={i} style={{padding:'14px 0',borderBottom:i<questions.length-1?'1px solid #f0f0f0':'none'}}>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:4}}>
                <span style={{fontSize:12,fontWeight:700,color:C.textTer,textTransform:'uppercase',letterSpacing:0.3}}>{q.cat}</span>
                {a?.trim()
                  ? <span style={{fontSize:11,color:C.green,fontWeight:700}}>Filled</span>
                  : <span style={{fontSize:11,color:C.textTer}}>Skipped</span>}
              </div>
              <p style={{fontSize:14,fontWeight:600,color:C.text,marginBottom:4}}>{q.q}</p>
              <p style={{fontSize:14,color:a?.trim()?C.text:C.textTer,fontStyle:a?.trim()?'normal':'italic',lineHeight:1.5}}>{a?.trim()||'No answer provided'}</p>
            </div>);})}
        </div>

        <CtaBtn variant="secondary" onClick={()=>{setStage('select');setProp(null);setReview('');setRating(0);setGaps([]);setQuestions([]);setAnswers({});}}>
          Review another property
        </CtaBtn>
        <div style={{height:40}}/>
      </div>
    </div>);
  }
  return null;
}
