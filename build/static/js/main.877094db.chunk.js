(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{220:function(e,t,n){},274:function(e,t,n){},299:function(e,t){},323:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(32),i=n.n(r),o=(n(220),n(398)),s=n(403),l=n(404),d=n(1),u=n(5),j=n(15),b=n(57),p=n.n(b),f=n(188),h=n.n(f),O=n(56),m=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},g=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},v=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},y=n(49),w=n(189),k=n(31),C=(n(262),n(327),{apiKey:"AIzaSyBiweQhGfE_-8SD6y_iBGHowOQEcrmTdps",authDomain:"frontend-8fed8.firebaseapp.com",projectId:"frontend-8fed8",storageBucket:"frontend-8fed8.appspot.com",messagingSenderId:"519101863210",appId:"1:519101863210:web:26187ee0dca68d8d1b3a53"}),S=n(133),N=Object(w.a)(C),D=Object(y.c)(N),_=Object(k.c)(N),E=Object(S.a)();function B(){return(B=Object(u.a)(Object(d.a)().mark((function e(t,n,a){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(S.b)(E,n.uid),a(!0),e.next=4,Object(S.c)(c,t);case 4:e.sent,a(!0),alert("Upload");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I,F,W,A,T,M,R=n(6),P=Object(a.createContext)(),L=function(e){var t=e.children,n=Object(a.useState)("USD"),c=Object(j.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)("$"),s=Object(j.a)(o,2),l=s[0],b=s[1],f=Object(a.useState)([]),h=Object(j.a)(f,2),O=h[0],g=h[1],x=Object(a.useState)(!1),v=Object(j.a)(x,2),w=v[0],C=v[1],S=Object(a.useState)(null),N=Object(j.a)(S,2),E=N[0],B=N[1],I=Object(a.useState)({open:!1,message:" ",type:"success"}),F=Object(j.a)(I,2),W=F[0],A=F[1],T=Object(a.useState)([]),M=Object(j.a)(T,2),L=M[0],z=M[1];Object(a.useEffect)((function(){if(E){var e=Object(k.b)(_,"watchlist",null===E||void 0===E?void 0:E.uid),t=Object(k.d)(e,(function(e){e.exists()?(console.log(e.data().coins),z(e.data().coins)):console.log("No Items in Watchlist")}));return function(){t()}}}),[E]);var U=Object(a.useState)([]),H=Object(j.a)(U,2),V=H[0],G=H[1];Object(a.useEffect)((function(){if(E){var e=Object(k.b)(_,"cities",null===E||void 0===E?void 0:E.uid),t=Object(k.d)(e,(function(e){e.exists()?(console.log(e.data()),G(e.data())):console.log("Unavailable")}));return function(){t()}}}),[E]),Object(a.useEffect)((function(){Object(y.d)(D,(function(e){B(e||null),console.log(e)}))}),[]);var Q=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,p.a.get(m(r));case 3:t=e.sent,n=t.data,console.log(n),g(n),C(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){"VND"===r?b("\u0110"):"USD"===r&&b("$"),Q()}),[r]),Object(R.jsx)(P.Provider,{value:{currency:r,setCurrency:i,symbol:l,coins:O,loading:w,fetchCoins:Q,alert:W,setAlert:A,user:E,watchlist:L,portfolio:V},children:t})},z=function(){return Object(a.useContext)(P)},U=n(20),H=n(428),V=n(200),G=n(400),Q=n(429),Y=n(408),J=n(329),$=n(409),q=n(410),K=n(411),X=n(412),Z=n(413),ee=n(414),te=n(34),ne=n(7),ae=n(130),ce=n(401),re=function(e){var t=e.coin,n=Object(a.useState)(),c=Object(j.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(1),l=Object(j.a)(s,2),b=l[0],f=(l[1],z().currency),h=Object(a.useState)(!1),O=Object(j.a)(h,2),m=O[0],g=O[1],v=Object(o.a)((function(e){return{container:Object(ne.a)({width:"55%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:10,padding:0},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),y=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(x(t.id,b,f));case 2:n=e.sent,a=n.data,g(!0),i(a.prices);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t),Object(a.useEffect)((function(){y()}),[b]);var w=Object(V.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(R.jsx)(G.a,{theme:w,children:Object(R.jsx)("div",{className:v.container,children:!r|!1===m?Object(R.jsx)(ce.a,{width:1,style:{color:"gold"},size:0,thickness:0}):Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(ae.a,{style:{alignContent:"center"},data:{labels:r.map((function(e){var t=new Date(e[0]),n=t.getDay();return 1===b?n:t.toLocaleDateString()})),datasets:[{data:r.map((function(e){return e[1]})),borderWidth:.7,borderColor:"green"}]},options:{elements:{point:{radius:0}},scales:{x:{display:!1},y:{display:!1}},plugins:{legend:{display:!1}},animation:{duration:0},responsive:!0}})})})})},ie=n(197),oe=n.n(ie),se=n(194),le=n.n(se),de=n(62),ue=n(89),je=ue.a.footer(I||(I=Object(de.a)(["\n  background-color: #f5f5f5;\n  color: #333;\n  padding: 2rem 1rem;\n"]))),be=ue.a.nav(F||(F=Object(de.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 2rem;\n\n  @media (min-width: 768px) {\n    justify-content: flex-start;\n  }\n"]))),pe=ue.a.a(W||(W=Object(de.a)(["\n  color: #333;\n  margin: 0.5rem;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),fe=ue.a.div(A||(A=Object(de.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n\n  @media (min-width: 768px) {\n    justify-content: flex-end;\n  }\n"]))),he=ue.a.a(T||(T=Object(de.a)(["\n  color: #333;\n  margin: 0 1rem;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),Oe=ue.a.p(M||(M=Object(de.a)(["\n  font-size: 0.8rem;\n  margin: 0;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    text-align: center;\n  }\n"]))),me=function(){return Object(R.jsxs)(je,{children:[Object(R.jsxs)(be,{children:[Object(R.jsx)(pe,{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:"Home"}),Object(R.jsx)(pe,{href:"#",children:"About"}),Object(R.jsx)(pe,{href:"#",children:"Contact"})]}),Object(R.jsxs)(fe,{children:[Object(R.jsx)(he,{href:"#",children:Object(R.jsx)("i",{className:"fab fa-facebook"})}),Object(R.jsx)(he,{href:"#",children:Object(R.jsx)("i",{className:"fab fa-twitter"})}),Object(R.jsx)(he,{href:"#",children:Object(R.jsx)("i",{className:"fab fa-instagram"})})]}),Object(R.jsx)(Oe,{children:"\xa9 2023 My Company. All Rights Reserved."})]})};n(126),n(268);function ge(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function xe(){var e,t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(1),b=Object(j.a)(i,2),f=b[0],h=b[1],O=(Object(te.f)().id,z()),m=O.currency,g=O.symbol,x=O.coins,v=O.fetchCoins,y=O.user,w=O.setAlert,C=O.watchlist,S=Object(o.a)({row:{backgroundColor:"#efefef",cursor:"pointer","&:hover":{backgroundColor:"#E8E8E8"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"black"}}})(),N=Object(te.e)(),D=Object(V.a)({palette:{primary:{main:"#000"},type:"light"}});Object(a.useEffect)((function(){v()}),[m]);var E=function(){return x.filter((function(e){return e.name.toLowerCase().includes(c)||e.symbol.toLowerCase().includes(c)}))},B=Object(a.useState)(),I=Object(j.a)(B,2),F=(I[0],I[1],Object(a.useState)([])),W=Object(j.a)(F,2),A=(W[0],W[1]),T=Object(te.f)(),M=Object(a.useState)(!1),P=Object(j.a)(M,2),L=P[0],ne=P[1],ae="https://api.coingecko.com/api/v3/coins/".concat(T.coinId,"?localization=false&sparkline=true"),ce=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(ae).then((function(e){A(e.data)}));case 3:ne(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("ERROR:  ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){ce(),ne(!1)}),[ae]),Object(R.jsxs)(G.a,{theme:D,children:[Object(R.jsxs)(s.a,{style:{textAlign:"center"},children:[Object(R.jsx)(l.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat",color:"black"},children:"Cryptocurrency Prices by Market Cap"}),Object(R.jsx)(Q.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return r(e.target.value)}}),Object(R.jsx)(Y.a,{component:J.a,align:"center",children:L?Object(R.jsx)($.a,{style:{backgroundColor:"#4949BC"}}):Object(R.jsxs)(q.a,{"aria-label":"simple table",children:[Object(R.jsx)(K.a,{style:{backgroundColor:"#E8E8E8"},children:Object(R.jsx)(X.a,{style:{width:"2000px"},children:[" ","#","Coin","Price","24h%","Volume","Market Cap","Last 24h"].map((function(e){return Object(R.jsx)(Z.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"#"===e?"":"left",children:e},e)}))})}),Object(R.jsx)(ee.a,{children:E().slice(10*(f-1),10*(f-1)+10).map((function(e){var t=C.includes(null===e||void 0===e?void 0:e.id),n=function(){var t=Object(u.a)(Object(d.a)().mark((function t(){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(k.b)(_,"watchlist",y.uid),t.prev=1,t.next=4,Object(k.e)(n,{coins:C?[].concat(Object(U.a)(C),[null===e||void 0===e?void 0:e.id]):[null===e||void 0===e?void 0:e.id]},{merge:!0});case 4:w({open:!0,message:"".concat(e.name," Added to the Watchlist !"),type:"success"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),w({open:!0,message:t.t0.message,type:"error"});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(u.a)(Object(d.a)().mark((function t(){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(k.b)(_,"watchlist",y.uid),t.prev=1,t.next=4,Object(k.e)(n,{coins:C.filter((function(t){return t!==(null===e||void 0===e?void 0:e.id)}))},{merge:!0});case 4:w({open:!0,message:"".concat(e.name," Removed from the Watchlist !"),type:"success"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),w({open:!0,message:t.t0.message,type:"error"});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),c=e.price_change_percentage_24h>0;return Object(R.jsxs)(X.a,{onClick:function(){return N.push("/coins/".concat(e.id))},className:S.row,children:[Object(R.jsx)(Z.a,{onClick:function(e){return e.stopPropagation()},children:y&&Object(R.jsx)("div",{onClick:t?a:n,children:t?Object(R.jsx)(le.a,{style:{color:"#4949BC"}}):Object(R.jsx)(oe.a,{})})}),Object(R.jsx)(Z.a,{children:null===e||void 0===e?void 0:e.market_cap_rank}),Object(R.jsxs)(Z.a,{children:[Object(R.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"40"}),Object(R.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(R.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol})})]}),Object(R.jsxs)(Z.a,{align:"left",children:[g," ",ge(e.current_price.toFixed(2))]}),Object(R.jsxs)(Z.a,{align:"left",style:{color:c>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[c&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(R.jsxs)(Z.a,{align:"left",children:[g," ",ge(e.total_volume.toFixed(2))]}),Object(R.jsxs)(Z.a,{align:"left",children:[g," ",ge(e.market_cap.toString().slice(0,-6)),"M"]}),Object(R.jsx)(Z.a,{align:"center",style:{width:200,height:100},children:Object(R.jsx)(re,{coin:e})})]},e.name)}))})]})}),Object(R.jsx)(H.a,{count:((null===(e=E())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:S.pagination},onChange:function(e,t){h(t),window.scroll(0,450)}})]}),Object(R.jsx)(me,{})]})}var ve=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=z(),i=r.currency,s=r.symbol,l=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(v(i));case 2:t=e.sent,n=t.data,console.log(n),c(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[i]);var b=Object(o.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),f=n.map((function(e){var t,n=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return Object(R.jsxs)(O.b,{className:b.carouselItem,to:"/coins/".concat(e.id),children:[Object(R.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(R.jsxs)("span",{style:{color:"black"},children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(R.jsxs)("span",{style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(R.jsxs)("span",{style:{fontSize:22,fontWeight:500,color:"black"},children:[s," ",ge(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(R.jsx)("div",{className:b.carousel,children:Object(R.jsx)(h.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:f,autoPlay:!0})})},ye=Object(o.a)((function(e){return{banner:{backgroundImage:"url(./background3.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var we=function(){var e=ye();return Object(R.jsx)("div",{className:e.banner,children:Object(R.jsxs)(s.a,{className:e.bannerContent,children:[Object(R.jsx)("div",{className:e.tagline,children:Object(R.jsx)(l.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat",color:"black"},children:"TOP TRENDING"})}),Object(R.jsx)(ve,{})]})})},ke=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(we,{}),Object(R.jsx)(xe,{})]})},Ce=(n(274),n(418)),Se=n(430),Ne=n(198),De=n.n(Ne),_e=function(e){var t=e.children,n=e.selected,a=e.onClick,c=Object(o.a)({selectbutton:{border:"2px solid #4949BC",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"#4949BC":"",color:n?"white":"black",fontWeight:n?700:600,"&:hover":{backgroundColor:"#4949BC",color:"white"},width:"22%"}})();return Object(R.jsx)("span",{onClick:a,className:c.selectbutton,children:t})},Ee=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],Be=(n(317),function(e){var t=e.coin,n=Object(a.useState)(),c=Object(j.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(1),l=Object(j.a)(s,2),b=l[0],f=l[1],h=z().currency,O=Object(a.useState)(!1),m=Object(j.a)(O,2),g=m[0],v=m[1],y=Object(o.a)((function(e){return{container:Object(ne.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),w=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(x(t.id,b,h));case 2:n=e.sent,a=n.data,v(!0),i(a.prices);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t),Object(a.useEffect)((function(){w()}),[b]);var k=Object(V.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(R.jsx)(G.a,{theme:k,children:Object(R.jsx)("div",{className:y.container,children:!r|!1===g?Object(R.jsx)(ce.a,{style:{color:"#4949BC"},size:250,thickness:1}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(ae.a,{data:{labels:r.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===b?n:t.toLocaleDateString()})),datasets:[{data:r.map((function(e){return e[1]})),label:"Price ( Past ".concat(b," Days ) in ").concat(h),borderColor:"#4949BC",borderWidth:4}]},options:{elements:{point:{radius:0}},scales:{x:{display:!0,grid:{display:!1}},y:{display:!0,grid:{display:!1}}}}}),Object(R.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:Ee.map((function(e){return Object(R.jsx)(_e,{onClick:function(){f(e.value),v(!1)},selected:e.value===b,children:e.label},e.value)}))})]})})})}),Ie=function(){var e=Object(te.f)().id,t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],i=n[1],s=z(),b=s.currency,f=s.symbol,h=s.user,O=s.setAlert,m=s.watchlist,x=s.portfolio,v=function(){var t=Object(u.a)(Object(d.a)().mark((function t(){var n,a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(g(e));case 2:n=t.sent,a=n.data,i(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=m.includes(null===r||void 0===r?void 0:r.id),w=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.b)(_,"watchlist",h.uid),e.prev=1,e.next=4,Object(k.e)(t,{coins:m?[].concat(Object(U.a)(m),[null===r||void 0===r?void 0:r.id]):[null===r||void 0===r?void 0:r.id]},{merge:!0});case 4:O({open:!0,message:"".concat(r.name," is added to the Watchlist !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.b)(_,"watchlist",h.uid),e.prev=1,e.next=4,Object(k.e)(t,{coins:m.filter((function(e){return e!==(null===r||void 0===r?void 0:r.id)}))},{merge:!0});case 4:O({open:!0,message:"".concat(r.name," is removed from the Watchlist !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){v()}),[]);var S=Object(o.a)((function(e){var t,n;return{container:Object(ne.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(ne.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(ne.a)(t,"display","flex"),Object(ne.a)(t,"flexDirection","column"),Object(ne.a)(t,"alignItems","center"),Object(ne.a)(t,"marginTop",25),Object(ne.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},description:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(ne.a)(n,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(ne.a)(n,e.breakpoints.down("md"),{display:"flex",flexDirection:"column",alignItems:"center"}),Object(ne.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))(),N=Object(a.useState)(),D=Object(j.a)(N,2),E=D[0],B=D[1],I=Object(a.useState)(),F=Object(j.a)(I,2),W=F[0],A=F[1],T=c.a.useState(!1),M=Object(j.a)(T,2),P=M[0],L=M[1],H=function(){L(!1)},V=null===x||void 0===x?void 0:x[null===r||void 0===r?void 0:r.id],G=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.b)(_,"cities",h.uid),e.prev=1,e.next=4,Object(k.e)(t,Object(ne.a)({},r.id,[E,W]),{merge:!0});case 4:O({open:!0,message:"".concat(r.name," is added to the Portfolio!"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({open:!0,message:e.t0.message,type:"error"});case 10:H();case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.b)(_,"cities",h.uid),e.prev=1,e.next=4,Object(k.f)(t,Object(ne.a)({},r.id,Object(k.a)()));case 4:O({open:!0,message:"".concat(r.id," is removed from the Portfolio!"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return r?Object(R.jsxs)("div",{className:S.container,children:[Object(R.jsxs)("div",{className:S.sidebar,style:{color:"black"},children:[Object(R.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(R.jsx)(l.a,{variant:"h3",className:S.heading,children:null===r||void 0===r?void 0:r.name}),Object(R.jsxs)(l.a,{variant:"subtitle1",className:S.description,children:[De()(null===r||void 0===r?void 0:r.description.en.split(". ")[0]),"."]}),Object(R.jsxs)("div",{className:S.marketData,children:[Object(R.jsxs)("span",{style:{display:"flex"},children:[Object(R.jsx)(l.a,{variant:"h5",className:S.heading,children:"Rank:"}),"\xa0 \xa0",Object(R.jsx)(l.a,{variant:"h6",style:{fontFamily:"Montserrat",marginBottom:20},children:ge(null===r||void 0===r?void 0:r.market_cap_rank)})]}),Object(R.jsxs)("span",{style:{display:"flex"},children:[Object(R.jsx)(l.a,{variant:"h6",className:S.heading,children:"Current Price:"}),"\xa0 \xa0",Object(R.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat",marginBottom:20},children:[f," ",ge(null===r||void 0===r?void 0:r.market_data.current_price[b.toLowerCase()])]})]}),Object(R.jsxs)("span",{style:{display:"flex"},children:[Object(R.jsx)(l.a,{variant:"h6",className:S.heading,children:"Market Cap:"}),"\xa0 \xa0",Object(R.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat",marginBottom:20},children:[f," ",ge(null===r||void 0===r?void 0:r.market_data.market_cap[b.toLowerCase()].toString().slice(0,-6)),"M"]})]}),h&&Object(R.jsxs)("div",{children:[Object(R.jsx)(Ce.a,{variant:"outlined",style:{width:"100%",height:40,backgroundColor:y?"#ffffff":"#4949BC"},onClick:y?C:w,children:y?"Remove from Watchlist":"Add to Watchlist"}),Object(R.jsx)("br",{}),Object(R.jsx)(Ce.a,{variant:"outlined",style:{width:"100%",height:40,backgroundColor:V?"#0ecb81":"#4949BC"},onClick:function(){L(!0)},children:V?"Edit this coin":"Add to portfolio"}),Object(R.jsx)(Se.a,{open:P,onClose:H,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",style:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(R.jsxs)("div",{style:{background:"white",width:500,height:300,borderRadius:10,display:"flex",flexDirection:"column",gap:"20px",paddingTop:20},children:[Object(R.jsx)(Q.a,{variant:"standard",type:"text",label:"Enter the quantity",value:E,onChange:function(e){return B(e.target.value)},style:{width:"80%",alignSelf:"center",color:"white"}}),Object(R.jsx)(Q.a,{variant:"standard",type:"text",label:"Enter the price",value:W,onChange:function(e){return A(e.target.value)},style:{width:"80%",alignSelf:"center",color:"white"}}),Object(R.jsx)(Ce.a,{variant:"outlined",style:{width:"80%",height:40,backgroundColor:"#4949BC"},onClick:G,children:" Add to portfolio"}),V?Object(R.jsx)(Ce.a,{variant:"outlined",style:{width:"80%",height:40,backgroundColor:"red"},onClick:function(){Y(),H()},children:" Delete"}):Object(R.jsx)(R.Fragment,{})]})})]})]})]}),Object(R.jsx)(Be,{coin:r})]}):Object(R.jsx)($.a,{style:{backgroundColor:"gold"}})},Fe=n(50),We=n(420),Ae=n(422),Te=n(425),Me=n(439),Re=n(419),Pe=n(332),Le=n(426),ze=n(421),Ue=n(423),He=n(144),Ve=n.n(He),Ge=function(e){var t=e.handleClose,n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),l=Object(j.a)(s,2),b=l[0],p=l[1],f=z().setAlert,h=Object(o.a)((function(e){return{}}))(),O=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&b){e.next=3;break}return f({open:!0,message:"Please fill all the Fields",type:"error"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(y.e)(D,r,b);case 6:n=e.sent,f({open:!0,message:"Sign Up Successful. Welcome ".concat(n.user.email),type:"success"}),t(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),f({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),m=new y.a;return Object(R.jsx)("div",{className:h.box,children:Object(R.jsxs)(Ue.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(R.jsx)(Ue.a,{}),Object(R.jsx)(Q.a,{variant:"standard",type:"email",label:"Enter Email",value:r,onChange:function(e){return i(e.target.value)},style:{width:"80%",alignSelf:"center",color:"white"}}),Object(R.jsx)(Q.a,{variant:"standard",label:"Enter Password",type:"password",value:b,onChange:function(e){return p(e.target.value)},style:{width:"80%",alignSelf:"center"}}),Object(R.jsx)(Ue.a,{}),Object(R.jsx)(Ce.a,{variant:"contained",size:"large",style:{backgroundColor:"#4949BC",color:"white"},onClick:O,children:"Log In"}),Object(R.jsx)("span",{style:{alignSelf:"center"},children:"OR"}),Object(R.jsx)(Ve.a,{style:{width:"80%",outline:"none",alignSelf:"center"},onClick:function(){Object(y.f)(D,m).then((function(e){f({open:!0,message:"Sign Up Successful. Welcome ".concat(e.user.email),type:"success"}),t()})).catch((function(e){f({open:!0,message:e.message,type:"error"})}))}})]})})},Qe=function(e){var t=e.handleClose,n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),s=Object(j.a)(o,2),l=s[0],b=s[1],p=Object(a.useState)(""),f=Object(j.a)(p,2),h=f[0],O=f[1],m=z().setAlert,g=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l===h){e.next=3;break}return m({open:!0,message:"Passwords do not match",type:"error"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(y.b)(D,r,l);case 6:n=e.sent,console.log(n),m({open:!0,message:"Sign Up Successful. Welcome ".concat(n.user.email),type:"success"}),t(),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(3),m({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)(Ue.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(R.jsx)(Ue.a,{}),Object(R.jsx)(Ue.a,{}),Object(R.jsx)(Q.a,{variant:"standard",type:"email",label:"Enter Email",value:r,onChange:function(e){return i(e.target.value)},style:{width:"80%",alignSelf:"center"}}),Object(R.jsx)(Q.a,{variant:"standard",label:"Enter Password",type:"password",value:l,onChange:function(e){return b(e.target.value)},style:{width:"80%",alignSelf:"center"}}),Object(R.jsx)(Q.a,{variant:"standard",label:"Confirm Password",type:"password",value:h,onChange:function(e){return O(e.target.value)},style:{width:"80%",alignSelf:"center"}}),Object(R.jsx)(Ue.a,{}),Object(R.jsx)(Ce.a,{variant:"contained",size:"large",style:{backgroundColor:"#4949BC",color:"white"},onClick:g,children:"Sign Up"})]})},Ye=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{justifyContent:"center",width:800,height:500,backgroundColor:"#555555",color:"white",borderRadius:10},google:{padding:24,paddingTop:0,display:"flex",flexDirection:"column",textAlign:"center",gap:20,fontSize:20}}}));function Je(){var e=Ye(),t=c.a.useState(!1),n=Object(j.a)(t,2),a=n[0],r=n[1],i=function(){r(!1)},o=c.a.useState(0),s=Object(j.a)(o,2),l=s[0],d=s[1];console.log(l);z().setAlert,new y.a;return Object(R.jsxs)("div",{children:[Object(R.jsx)(Ce.a,{variant:"contained",style:{width:85,height:40,marginLeft:15,backgroundColor:"#4949BC",color:"white"},onClick:function(){r(!0)},children:"Login"}),Object(R.jsx)(Se.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:a,onClose:i,closeAfterTransition:!0,BackdropComponent:Re.a,BackdropProps:{timeout:500},children:Object(R.jsx)(Pe.a,{in:a,children:Object(R.jsxs)("div",{className:e.paper,children:[Object(R.jsx)(We.a,{position:"static",style:{backgroundColor:"transparent",color:"white"},children:Object(R.jsxs)(Le.a,{value:l,onChange:function(e,t){d(t)},variant:"fullWidth",style:{borderRadius:10},children:[Object(R.jsx)(ze.a,{label:"Login"}),Object(R.jsx)(ze.a,{label:"Sign Up"})]})}),0===l&&Object(R.jsx)(Ge,{handleClose:i}),1===l&&Object(R.jsx)(Qe,{handleClose:i})]})})})]})}var $e=n(438),qe=n(437),Ke=n(201),Xe=Object(o.a)({container:{width:350,padding:25,height:"100%",display:"flex",flexDirection:"column",fontFamily:"monospace"},profile:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",height:"92%"},logout:{height:"8%",width:"100%",backgroundColor:"#4949BC",marginTop:20,color:"white"},picture:{width:200,height:200,cursor:"pointer",backgroundColor:"white",objectFit:"contain"},watchlist:{flex:1,width:"100%",backgroundColor:"grey",padding:15,paddingTop:10,display:"flex",flexDirection:"column",alignItems:"center",gap:1,overflowY:"scroll"},coin:{padding:10,color:"black",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},paper:{justifyContent:"center",width:800,height:400,backgroundColor:"#D3D3D3",color:"white",borderRadius:10,display:"flex",flexDirection:"column"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},divide:{display:"flex",flexDirection:"row"},title:{textAlign:"center",fontWeight:"bold",fontSize:"40px",color:"black",paddingTop:0},upload:{width:"50%",color:"black",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"10%",fontWeight:"bold",fontSize:"20px"},link:{width:"50%",color:"black",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"25%",fontWeight:"bold",fontSize:"20px"}});function Ze(){var e=Xe(),t=Object(te.e)(),n=c.a.useState({right:!1}),r=Object(j.a)(n,2),i=r[0],o=r[1],s=z(),l=s.user,b=s.setAlert,p=s.watchlist,f=s.coins,h=s.symbol;console.log(p,f);var O=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&o(Object(Fe.a)(Object(Fe.a)({},i),{},Object(ne.a)({},e,t)))}},m=function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(k.b)(_,"watchlist",l.uid),e.prev=1,e.next=4,Object(k.e)(n,{coins:p.filter((function(e){return e!==(null===t||void 0===t?void 0:t.id)}))},{merge:!0});case 4:b({open:!0,message:"".concat(t.name," Removed from the Watchlist !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),b({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),g=c.a.useState(!1),x=Object(j.a)(g,2),v=x[0],w=x[1],C=function(){w(!1)},S=Object(a.useState)(null),N=Object(j.a)(S,2),E=N[0],I=(N[1],Object(a.useState)(!1)),F=Object(j.a)(I,2),W=F[0],A=F[1],T=Object(a.useState)(),M=Object(j.a)(T,2),P=(M[0],M[1]);Object(a.useEffect)((function(){null!==l&&void 0!==l&&l.photoURL&&(console.log(l),P(l.photoURL))}));var L=function(){t.push("/portfolio"),O()},U=function(){t.push("/"),Object(y.g)(D),b({open:!0,type:"success",message:"Logout Successfull !"}),O()};return Object(R.jsxs)("div",{children:[["right"].map((function(t){return Object(R.jsxs)(c.a.Fragment,{children:[Object(R.jsx)(qe.a,{onClick:O(t,!0),style:{height:38,width:38,marginLeft:15,cursor:"pointer",backgroundColor:"white"},src:l.photoURL,alt:l.displayName||l.email}),Object(R.jsx)($e.a,{anchor:t,open:i[t],onClose:O(t,!1),children:Object(R.jsxs)("div",{className:e.container,children:[Object(R.jsxs)("div",{className:e.profile,children:[Object(R.jsx)(qe.a,{className:e.picture,src:l.photoURL,alt:l.displayName||l.email}),Object(R.jsx)("span",{style:{width:"100%",fontSize:25,textAlign:"center",fontWeight:"bolder",wordWrap:"break-word"},children:l.displayName||l.email}),Object(R.jsxs)("div",{className:e.watchlist,children:[Object(R.jsx)("span",{style:{fontSize:15,textShadow:"0 0 5px black"},children:"Watchlist"}),f.map((function(t){return p.includes(t.id)?Object(R.jsxs)("div",{className:e.coin,onClick:function(){return window.open("/coins/".concat(t.id),"_blank")},children:[Object(R.jsx)("span",{children:t.name}),Object(R.jsxs)("span",{style:{display:"flex",gap:8},children:[h," ",ge(t.current_price.toFixed(2)),Object(R.jsx)(Ke.a,{style:{cursor:"pointer"},fontSize:"16",onClick:function(){return m(t)}})]})]}):Object(R.jsx)(R.Fragment,{})}))]})]}),Object(R.jsx)(Ce.a,{variant:"contained",className:e.logout,onClick:L,onClose:C,children:"Wallet"}),Object(R.jsx)(Ce.a,{variant:"contained",className:e.logout,onClick:U,children:"Log Out"})]})})]},t)})),Object(R.jsx)(Se.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:v,onClose:C,closeAfterTransition:!0,BackdropComponent:Re.a,BackdropProps:{timeout:500},children:Object(R.jsx)(Pe.a,{in:v,children:Object(R.jsxs)("div",{className:e.paper,children:[Object(R.jsx)("input",{type:"file",onChange:function(e){e.target.file[0]&&P(e.target.file[0])}}),Object(R.jsx)("button",{disabled:W||!E,onClick:function(){!function(e,t,n){B.apply(this,arguments)}(E,l,A)},children:" upload "})]})})})]})}var et=Object(o.a)((function(e){return{title:Object(ne.a)({flex:1,color:"black",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"},"color","white")}})),tt=Object(V.a)({palette:{primary:{main:"#000"},type:"dark"}});var nt=function(){var e=et(),t=z(),n=t.currency,a=t.setCurrency,c=t.user,r=Object(te.e)();return Object(R.jsx)(G.a,{theme:tt,children:Object(R.jsx)(We.a,{style:{background:"#4949BC"},position:"static",children:Object(R.jsx)(s.a,{children:Object(R.jsxs)(Ae.a,{children:[Object(R.jsx)(l.a,{onClick:function(){return r.push("/")},variant:"h4",className:e.title,children:"RailsCrypto"}),Object(R.jsxs)(Te.a,{variant:"standard",labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,style:{width:100,height:40,marginLeft:15},onChange:function(e){return a(e.target.value)},theme:function(e){return Object(Fe.a)(Object(Fe.a)({},e),{},{borderRadius:0,colors:Object(Fe.a)(Object(Fe.a)({},e.colors),{},{text:"orangered",primary25:"hotpink",primary:"black"})})},children:[Object(R.jsx)(Me.a,{value:"USD",children:"USD"}),Object(R.jsx)(Me.a,{value:"VND",children:"VND"})]}),c?Object(R.jsx)(Ze,{}):Object(R.jsx)(Je,{})]})})})})};n(323),n.p;n(431),n(440),n(434),n(433),n(424);var at=n(435),ct=n(427),rt=function(){var e=z(),t=e.alert,n=e.setAlert,a=function(e,t){"clickaway"!==t&&n({open:!1})};return Object(R.jsx)(at.a,{open:t.open,autoHideDuration:3e3,onClose:a,children:Object(R.jsx)(ct.a,{onClose:a,elevation:10,variant:"filled",severity:t.type,children:t.message})})},it=n(199),ot=n.n(it),st=function(){var e=Object(te.e)(),t=z(),n=t.user,r=t.setAlert,i=t.portfolio,s=t.coins;t.symbol;console.log(i,s);var l=Object(o.a)({row:{backgroundColor:"white",cursor:"pointer","&:hover":{backgroundColor:"#E8E8E8"},fontFamily:"Montserrat"},bottomRow:{backgroundColor:"white",cursor:"pointer"},tolist:{cursor:"pointer",color:"#4949BC"}})(),b=Object.keys(i).reduce((function(e,t){return e+Number(i[t][0])*Number(i[t][1])}),0),p=Object(a.useState)(),f=Object(j.a)(p,2),h=(f[0],f[1],Object(a.useState)()),O=Object(j.a)(h,2),m=(O[0],O[1],c.a.useState(!1)),g=Object(j.a)(m,2);g[0],g[1];return Object(R.jsxs)("div",{style:{color:"black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:"Your Wallet"})}),Object(R.jsx)("h4",{className:l.tolist,onClick:function(){return e.push("/")},children:"Add new coin from list"}),Object(R.jsx)(Y.a,{component:J.a,align:"center",style:{width:"80%"},children:Object(R.jsxs)(q.a,{"aria-label":"simple table",children:[Object(R.jsx)(K.a,{style:{backgroundColor:"#E8E8E8"},children:Object(R.jsx)(X.a,{children:["Coin","Quantity","Price per coin","Total","Profit","Destroy"].map((function(e){return Object(R.jsx)(Z.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"left",children:e},e)}))})}),Object(R.jsxs)(ee.a,{children:[s.map((function(e){null===i||void 0===i||i[null===e||void 0===e?void 0:e.id];var t=function(){var t=Object(u.a)(Object(d.a)().mark((function t(){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(k.b)(_,"cities",n.uid),t.prev=1,t.next=4,Object(k.f)(a,Object(ne.a)({},e.id,Object(k.a)()));case 4:r({open:!0,message:"".concat(e.id," is removed from the Portfolio!"),type:"success"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r({open:!0,message:t.t0.message,type:"error"});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return Object.keys(i).includes(e.id)?Object(R.jsxs)(X.a,{className:l.row,children:[Object(R.jsxs)(Z.a,{style:{display:"flex",flexDirection:"row",fontSize:17},children:[Object(R.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"32",style:{marginRight:"5px"}})," ",e.name]}),Object(R.jsx)(Z.a,{children:i[e.id][0]}),Object(R.jsx)(Z.a,{children:i[e.id][1]}),Object(R.jsx)(Z.a,{children:Number(i[e.id][0])*Number(i[e.id][1])}),Object(R.jsx)(Z.a,{style:{color:Number(i[e.id][0])*Number(i[e.id][1])-Number(i[e.id][0])*e.current_price<0?"rgb(14, 203, 129)":"red"},children:Math.abs((Number(i[e.id][0])*Number(i[e.id][1])-Number(i[e.id][0])*e.current_price).toFixed(2))}),Object(R.jsx)(Z.a,{onClick:t,children:Object(R.jsx)(ot.a,{})})]},e.id):Object(R.jsx)(R.Fragment,{})})),Object(R.jsxs)(X.a,{className:l.bottomRow,children:[Object(R.jsx)(Z.a,{style:{fontWeight:"bold",fontSize:20},children:"Overall"}),Object(R.jsx)(Z.a,{}),Object(R.jsx)(Z.a,{}),Object(R.jsx)(Z.a,{style:{color:"#4949BC"},children:b}),Object(R.jsx)(Z.a,{})]})]})]})})]})},lt=Object(o.a)((function(){return{App:{backgroundColor:"#efefef",color:"white",minHeight:"100vh"}}}));var dt=function(){var e=lt();return Object(R.jsxs)(O.a,{children:[Object(R.jsxs)("div",{className:e.App,children:[Object(R.jsx)(nt,{}),Object(R.jsx)(te.a,{path:"/",component:ke,exact:!0}),Object(R.jsx)(te.a,{path:"/coins/:id",component:Ie,exact:!0}),Object(R.jsx)(te.a,{path:"/portfolio",component:st,exact:!0})]}),Object(R.jsx)(rt,{})]})};n(324);i.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(L,{children:Object(R.jsx)(dt,{})})}),document.getElementById("root"))}},[[325,1,2]]]);
//# sourceMappingURL=main.877094db.chunk.js.map