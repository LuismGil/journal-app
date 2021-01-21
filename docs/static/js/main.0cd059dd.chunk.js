(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(32),o=n.n(r),s=n(7),i=n(23),u=n(60),l="[Auth] Login",d="[Auth] Logout",j="[UI] Set Error",p="[UI] Remove Error",b="[UI] Start loading",h="[UI] Finish loading",f="[Notes] New note",m="[Notes] Set active note",O="[Notes] Load notes",x="[Notes] Updated note",v="[Notes] Delete note",g="[Notes] Logout Cleaning",_=n(5),y={loading:!1,msgError:null},N=n(45),w={notes:[],active:null},k="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,S=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{uid:t.payload.uid,name:t.payload.displayName};case d:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(_.a)(Object(_.a)({},e),{},{msgError:t.payload});case p:return Object(_.a)(Object(_.a)({},e),{},{msgError:null});case b:return Object(_.a)(Object(_.a)({},e),{},{loading:!0});case h:return Object(_.a)(Object(_.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(_.a)(Object(_.a)({},e),{},{active:Object(_.a)({},t.payload)});case f:return Object(_.a)(Object(_.a)({},e),{},{notes:[t.payload].concat(Object(N.a)(e.notes))});case O:return Object(_.a)(Object(_.a)({},e),{},{notes:Object(N.a)(t.payload)});case x:return Object(_.a)(Object(_.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e})),active:Object(_.a)(Object(_.a)({},e.active),{},{updated:!0})});case v:return Object(_.a)(Object(_.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case g:return Object(_.a)(Object(_.a)({},e),{},{active:null,notes:[]});default:return e}}}),C=Object(i.e)(S,k(Object(i.a)(u.a))),E=n(8),I=n.n(E),A=n(13),D=n(20),P=n(21),L=n(10),U=n(30);n(158),n(74);U.a.initializeApp({apiKey:"AIzaSyDS6HefK22fpOPHYZyMFro7rhMFqf7sSow",authDomain:"react-app-curso-fer.firebaseapp.com",projectId:"react-app-curso-fer",storageBucket:"react-app-curso-fer.appspot.com",messagingSenderId:"212453210531",appId:"1:212453210531:web:c81d6564dbc05085aa4216"});var F=U.a.firestore(),B=new U.a.auth.GoogleAuthProvider,R=n(22),q=n.n(R),T=function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.collection("".concat(t,"/journal/notes")).orderBy("date","asc").get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(_.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dliwhrdin/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dliwhrdin/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t,n){return{type:m,payload:Object(_.a)({id:e,idDos:t},n)}},J=function(e,t){return{type:f,payload:Object(_.a)({id:e},t)}},M=function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:a=t.sent,console.log("notes",a),console.log("uid",e),n(W(a));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(e){return{type:O,payload:e}},H=function(e){return console.log('startSaveNote paso 2 !importante"',e),function(){var t=Object(A.a)(I.a.mark((function t(n,a){var c,r,o,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,r=a(),o=r.notes,o.active,e.url||delete e.url,s=Object(_.a)({},e),console.log("Notes ID",e),console.log("Notes ID",s),t.next=9,F.doc("".concat(c,"/journal/notes/").concat(e.id)).update(s);case 9:return t.sent,t.next=12,F.doc("admin/journal/notes/".concat(e.idDos)).update(s);case 12:n(K(e.id,s)),q.a.fire("Saved",e.title,"success");case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},K=function(e,t){return{type:x,payload:{id:e,note:Object(_.a)({id:e},t)}}},V=function(e){return{type:v,payload:e}},X=function(e){return{type:j,payload:e}},Y=function(){return{type:h}},Z=function(e,t){return function(n){return n({type:b}),U.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Q(t.uid,t.displayName)),n(Y())})).catch((function(e){console.log(e),n(Y()),q.a.fire("Error",e.message,"error")}))}},Q=function(e,t){return{type:l,payload:{uid:e,displayName:t}}},$=function(){return{type:d}},ee=n(34),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(D.a)(t,2),a=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(_.a)(Object(_.a)({},a),{},Object(ee.a)({},t.name,t.value)))};return[a,s,o]},ne=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=te({email:"",password:""}),c=Object(D.a)(n,2),r=c[0],o=c[1],i=r.email,u=r.password;return F.collection("admin/journal/notes").get().then((function(e){console.log("qU",e),e.forEach((function(e){console.log(e.id," => ",e.data())}))})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(Z(i,u))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:o}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:o}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(a.jsxs)("div",{className:"auth__social-networks",children:[Object(a.jsx)("p",{children:"Login with social networks"}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){U.a.auth().signInWithPopup(B).then((function(t){var n=t.user;e(Q(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]})]}),Object(a.jsx)(P.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ae=n(61),ce=n.n(ae),re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=te({name:"",email:"",password:"",password2:""}),c=Object(D.a)(n,2),r=c[0],o=c[1],i=r.name,u=r.email,l=r.password,d=r.password2,j=function(){return 0===i.trim().length?(e(X("Name is required")),!1):ce.a.isEmail(u)?l!==d||l.length<5?(e(X("Password should be at least 6 characters and match each other")),!1):(e({type:p}),!0):(e(X("Email is not valid")),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j()&&e(function(e,t,n){return function(a){U.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(A.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(Q(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),q.a.fire("Error",e.message,"error")}))}}(u,l,i))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(a.jsx)("div",{className:"auth__alert-error",children:t}),Object(a.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:o}),Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:o}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:o}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:d,onChange:o}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(a.jsx)(P.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},oe=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container",children:Object(a.jsxs)(L.d,{children:[Object(a.jsx)(L.b,{exact:!0,path:"/auth/login",component:ne}),Object(a.jsx)(L.b,{exact:!0,path:"/auth/register",component:re}),Object(a.jsx)(L.a,{to:"/auth/login"})]})})})},se=n(36),ie=function(e){var t=e.isAuthenticated,n=e.component,c=Object(se.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(L.b,Object(_.a)(Object(_.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(_.a)({},e)):Object(a.jsx)(L.a,{to:"/auth/login"})}}))},ue=function(e){var t=e.isAuthenticated,n=e.component,c=Object(se.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(L.b,Object(_.a)(Object(_.a)({},c),{},{component:function(e){return t?Object(a.jsx)(L.a,{to:"/"}):Object(a.jsx)(n,Object(_.a)({},e))}}))},le=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;console.log("NotesAppBar",t);return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsx)("span",{children:"August 28, 2020"}),Object(a.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var c,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,q.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){q.a.showLoading()}}),t.next=4,z(e);case 4:r=t.sent,c.url=r,n(H(c)),q.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(H(t))},children:"Save"})]})]})},de=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=te(t),r=Object(D.a)(n,3),o=r[0],i=r[1],u=r[2],l=o.body,d=o.title,j=o.id,p=Object(c.useRef)(t.id);Object(c.useEffect)((function(){t.id!==p.current&&(u(t),p.current=t.id)}),[t,u]),console.log("formValues",o),Object(c.useEffect)((function(){e(G(o.id,o.idDos,o))}),[o,e]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(le,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{name:"title",type:"text",placeholder:"Some awesome tittle",className:"notes__title-input",autoComplete:"off",value:d,onChange:i}),Object(a.jsx)("textarea",{name:"body",placeholder:"what happened today",className:"notes__textarea",value:l,onChange:i}),t.url&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,F.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:return t.next=5,F.doc("admin/journal/notes/".concat(e)).delete();case 5:n(V(e));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(j))},children:"Delete"})]})},je=n(62),pe=n.n(je),be=function(e){var t=e.id,n=e.idDos,c=e.date,r=e.title,o=e.body,i=e.url,u=Object(s.b)(),l=pe()(c),d={date:c,title:r,body:o,url:i};return Object(a.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){u(G(t,n,d))},children:[i&&Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(i,")")}}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:r}),Object(a.jsx)("p",{className:"journal__entry-content",children:o})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:l.format("dddd")}),Object(a.jsx)("h4",{children:l.format("Do")})]})]})},he=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return console.log("Journal ENtries",e),Object(a.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(a.jsx)(be,Object(_.a)({},e),e.id)}))})},fe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsxs)("span",{children:[" ",t," "]})]}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.auth().signOut();case 2:t($()),t({type:g});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(a.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t,n){var a,c,r,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,F.collection("".concat(a,"/journal/notes")).add(c);case 5:return r=e.sent,e.next=8,F.collection("admin/journal/notes").add(c);case 8:o=e.sent,t(G(r.id,o.id,c)),t(J(r.id,c)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(a.jsx)(he,{})]})},me=function(){return Object(a.jsxs)("div",{className:"nothing__main-content",children:[Object(a.jsxs)("p",{children:["Select something",Object(a.jsx)("br",{}),"pr create an entry!"]}),Object(a.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},Oe=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)(fe,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(de,{}):Object(a.jsx)(me,{})})]})},xe=function(){var e=Object(s.b)(),t=Object(c.useState)(!0),n=Object(D.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(!1),u=Object(D.a)(i,2),l=u[0],d=u[1];return Object(c.useEffect)((function(){U.a.auth().onAuthStateChanged(function(){var t=Object(A.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(Q(n.uid,n.displayName)),d(!0),e(M(n.uid))):d(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,d]),r?Object(a.jsx)("div",{className:"loading-spinner",children:Object(a.jsx)("div",{className:"loading-spinner--item",children:Object(a.jsx)("div",{})})}):Object(a.jsx)(P.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(L.d,{children:[Object(a.jsx)(ue,{path:"/auth",component:oe,isAuthenticated:l}),Object(a.jsx)(ie,{exact:!0,isAuthenticated:l,path:"/",component:Oe}),Object(a.jsx)(L.a,{to:"/auth/login"})]})})})},ve=function(){return Object(a.jsx)(s.a,{store:C,children:Object(a.jsx)(xe,{})})};n(156);o.a.render(Object(a.jsx)(ve,{}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.0cd059dd.chunk.js.map