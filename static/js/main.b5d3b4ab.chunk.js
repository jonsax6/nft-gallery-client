(this["webpackJsonpnft-gallery-client"]=this["webpackJsonpnft-gallery-client"]||[]).push([[0],{116:function(e,t,n){},126:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(47),s=n.n(i),c=(n(116),n(17)),l=n(39),o=n(40),j=n(46),d=n(45),u=n(20),b=n(199),x=n(11),h=n(15),m=n(0),g=["user","component","render"],O=function(e){var t=e.user,n=e.component,r=e.render,a=Object(h.a)(e,g);return t&&r?Object(m.jsx)(u.b,Object(x.a)(Object(x.a)({},a),{},{render:r})):Object(m.jsx)(u.b,Object(x.a)(Object(x.a)({},a),{},{render:function(e){return t?Object(m.jsx)(n,Object(x.a)({},e)):Object(m.jsx)(u.a,{to:"/"})}}))},p=n(200),v=n(198),f=n(204),y=(n(126),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,r=e.message,a=e.deleteAlert,i=e.id;return this.state.show||setTimeout((function(){a(i)}),300),Object(m.jsx)(p.a,{open:open,autoHideDuration:6e3,onClose:this.handleClose,children:Object(m.jsx)(v.a,{variant:"filled",severity:t,onClose:this.handleClose,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(f.a,{variant:"h6",children:n}),Object(m.jsx)("p",{className:"alert-body",children:r})]})})})}}]),n}(a.a.Component)),w=n(23),C=n(206),S=n(205),k=n(207),A=n.p+"static/media/zyzygy-logo.d9f4791c.png",T=Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/submit-art",className:"nav-link",children:"Submit Art"}),Object(m.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/change-password",className:"nav-link",children:"Change Password"}),Object(m.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),P=Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(m.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-in",className:"nav-link",children:"Sign In"})]}),q=Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},exact:!0,to:"/",className:"nav-link",children:"Home"}),Object(m.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},exact:!0,to:"/gallery",className:"nav-link",children:"Gallery"})]}),U=function(e){var t=e.user;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(S.a,{sx:{flexGrow:1,fontWeight:"100"},children:Object(m.jsx)(C.a,{style:{backgroundColor:"grey"},position:"static",children:Object(m.jsxs)(k.a,{children:[Object(m.jsx)(w.b,{to:"/",style:{paddingLeft:"20px",color:"#FFF",textDecoration:"none",fontWeight:"100",flexGrow:1},children:Object(m.jsx)("img",{src:A,style:{width:"300px",marginTop:10}})}),t&&Object(m.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),q,t?T:P]})})})})},D=n(12),F="https://aqueous-atoll-85096.herokuapp.com",N="http://localhost:4741",I="localhost"===window.location.hostname?N:F,R=n(38),H=n.n(R),E=function(e){return H()({url:I+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},G=n(208),L=n(196),W=n(202),z=function(e){var t=e.msgAlert,n=e.setUser,a=Object(r.useState)(""),i=Object(D.a)(a,2),s=i[0],c=i[1],l=Object(r.useState)(""),o=Object(D.a)(l,2),j=o[0],d=o[1],b=Object(r.useState)(""),x=Object(D.a)(b,2),h=x[0],g=x[1],O=Object(u.f)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{sx:{flexGrow:1},children:[Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px"},children:Object(m.jsx)(f.a,{variant:"h5",children:"Sign Up"})}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:10,md:6,lg:4,children:[Object(m.jsx)(L.a,{required:!0,id:"email",label:"Email",variant:"outlined",color:"primary",onChange:function(e){return c(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:10,md:6,lg:4,children:[Object(m.jsx)(L.a,{required:!0,id:"password",label:"Password",type:"password",variant:"outlined",color:"primary",onChange:function(e){return d(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:10,md:6,lg:4,children:[Object(m.jsx)(L.a,{required:!0,id:"passwordConfirmation",label:"Password Confirmation",type:"password",variant:"outlined",color:"primary",onChange:function(e){return g(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px"},children:Object(m.jsx)(G.a,{variant:"contained",type:"submit",onClick:function(e){var r;e.preventDefault(),(r={email:s,password:j,passwordConfirmation:h},H()({method:"POST",url:I+"/sign-up/",data:{credentials:{email:r.email,password:r.password,password_confirmation:r.passwordConfirmation}}})).then((function(){return E({email:s,password:j})})).then((function(e){return n(e.data.user)})).then((function(){return t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return O.push("/")})).catch((function(e){c(""),d(""),g(""),t({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"error"})}))},children:"Sign Up"})}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]})]})})},B=function(e){var t=e.msgAlert,n=e.setUser,a=Object(r.useState)(""),i=Object(D.a)(a,2),s=i[0],c=i[1],l=Object(r.useState)(""),o=Object(D.a)(l,2),j=o[0],d=o[1],b=Object(u.f)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{sx:{flexGrow:1},children:[Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px"},children:Object(m.jsx)(f.a,{variant:"h5",children:"Sign In"})}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:10,md:6,lg:4,children:[Object(m.jsx)(L.a,{required:!0,id:"email",label:"Email",variant:"outlined",color:"primary",onChange:function(e){return c(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:10,md:6,lg:4,children:[Object(m.jsx)(L.a,{required:!0,id:"password",label:"Password",type:"password",variant:"outlined",color:"primary",onChange:function(e){return d(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px"},children:Object(m.jsx)(G.a,{variant:"contained",type:"submit",onClick:function(e){e.preventDefault(),E({email:s,password:j,history:b}).then((function(e){return n(e.data.user)})).then((function(){return t({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return b.push("/")})).catch((function(e){c(""),d(""),t({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"error"})}))},children:"Sign In"})}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]})]})})},M=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,r=e.clearUser;(function(e){return H()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return r()}))}},{key:"render",value:function(){return""}}]),n}(r.Component),J=Object(u.g)(M),Y=n(209),V=n.p+"static/media/Jose-Parla-Studio-Yellowtrace-54.a71ab207.jpeg",_=function(){return Object(m.jsx)(Y.a,{style:{height:"100vh",width:"100vw",backgroundImage:"url(".concat(V,")"),backgroundSize:"cover",backgroundPosition:"center center",padding:"0"},children:Object(m.jsx)(f.a,{style:{fontWeight:"100",padding:"50px"},variant:"h4",align:"center",color:"white",gutterBottom:!0,children:"Featured Artists"})})},K=n(4),Q=n(50),X=n(96),Z=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(K.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,i=t.user;(function(e,t){return H()({url:I+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,i).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"error"})}))},r.state={oldPassword:"",newPassword:""},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(m.jsx)("h3",{children:"Change Password"}),Object(m.jsxs)(Q.a,{onSubmit:this.onChangePassword,children:[Object(m.jsxs)(Q.a.Group,{controlId:"oldPassword",children:[Object(m.jsx)(Q.a.Label,{children:"Old password"}),Object(m.jsx)(Q.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(m.jsxs)(Q.a.Group,{controlId:"newPassword",children:[Object(m.jsx)(Q.a.Label,{children:"New Password"}),Object(m.jsx)(Q.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(m.jsx)(X.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),$=Object(u.g)(Z),ee=n(210),te=n(211),ne=n(212),re=n(213),ae=(n(90),function(){var e=Object(r.useState)([]),t=Object(D.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){H()({method:"GET",url:I+"/artwork"}).then((function(e){a(e.data.artwork),console.log(n)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(Y.a,{maxWidth:"sm",sx:{padding:"8, 0, 6",marginTop:"50px"},children:[Object(m.jsx)(f.a,{style:{fontWeight:"100"},variant:"h4",align:"center",gutterBottom:!0,children:"All Artists"}),Object(m.jsx)(f.a,{style:{fontWeight:"100"},variant:"h6",align:"center",paragraph:!0,children:"Exclusive works by iconic artists"}),Object(m.jsx)("div",{children:Object(m.jsx)(W.a,{container:!0,spacing:2,justifyContent:"center",sx:{marginTop:"20px"}})})]}),Object(m.jsx)(Y.a,{maxWidth:"flex",sx:{padding:"20px 0"},children:Object(m.jsx)(W.a,{container:!0,spacing:4,children:n.map((function(e,t){return Object(m.jsx)(W.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(m.jsxs)(ee.a,{sx:{height:"100%",display:"flex",flexDirection:"column",borderRadius:"0",margin:"0",color:"white",backgroundColor:"gray"},children:[Object(m.jsx)(te.a,{sx:{paddingTop:"92%"},image:e.imageUrl,title:"Image Title"}),Object(m.jsxs)(ne.a,{sx:{flexGrow:1},children:[Object(m.jsx)(f.a,{gutterBottom:!0,variant:"h5",children:e.artist}),Object(m.jsx)(f.a,{gutterBottom:!0,paragraph:!0,children:e.notes})," ",Object(m.jsx)(f.a,{variant:"h6",children:"Medium"}),Object(m.jsx)(f.a,{children:e.medium})," ",Object(m.jsxs)(re.a,{children:[Object(m.jsx)(G.a,{size:"small",color:"warning",children:"View"}),Object(m.jsx)(G.a,{size:"small",color:"warning",children:"Request Price"})]})]})]})},t)}))})})]})}),ie=function(e){var t=e.msgAlert,n=e.user,a=Object(r.useState)(null),i=Object(D.a)(a,2),s=i[0],c=i[1],l=Object(r.useState)(null),o=Object(D.a)(l,2),j=o[0],d=o[1],u=Object(r.useState)(null),b=Object(D.a)(u,2),x=b[0],h=b[1],g=Object(r.useState)(null),O=Object(D.a)(g,2),p=O[0],v=O[1],y=Object(r.useState)(null),w=Object(D.a)(y,2),C=w[0],k=w[1],A=Object(r.useState)(null),T=Object(D.a)(A,2),P=T[0],q=T[1],U=Object(r.useState)(null),F=Object(D.a)(U,2),N=F[0],R=F[1],E=Object(r.useState)(null),z=Object(D.a)(E,2),B=z[0],M=z[1],J=Object(r.useState)(null),Y=Object(D.a)(J,2),V=Y[0],_=Y[1],K=Object(r.useState)(null),Q=Object(D.a)(K,2),X=Q[0],Z=Q[1],$=Object(r.useState)(null),ee=Object(D.a)($,2),te=ee[0],ne=ee[1],re=Object(r.useState)(!1),ae=Object(D.a)(re,2),ie=ae[0],se=(ae[1],{artist:s,title:j,imageUrl:x,releaseDate:p,medium:C,artistRoyalty:P,curatorRoyalty:N,provenance:B,exhibitionHistory:V,publishingHistory:X,notes:te});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{sx:{flexGrow:1},children:[Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px"},children:Object(m.jsx)(f.a,{variant:"h5",children:"Submit Artwork"})}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"artist-required",label:"Artist",variant:"outlined",color:"primary",value:s,onChange:function(e){return c(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"title-required",label:"Title",variant:"outlined",color:"primary",value:j,onChange:function(e){return d(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"imageUrl-required",label:"ImageUrl",variant:"outlined",color:"primary",value:x,onChange:function(e){return h(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"releaseDate-required",label:"ReleaseDate",variant:"outlined",color:"primary",value:p,onChange:function(e){return v(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"medium-required",label:"Medium",variant:"outlined",color:"primary",value:C,onChange:function(e){return k(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"artistRoyalty-required",label:"ArtistRoyalty",variant:"outlined",color:"primary",value:P,onChange:function(e){return q(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"curatorRoyalty-required",label:"CuratorRoyalty",variant:"outlined",color:"primary",value:N,onChange:function(e){return R(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{required:!0,id:"provenance-required",label:"Provenance",variant:"outlined",color:"primary",value:B,onChange:function(e){return M(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{id:"exhibitionHistory-required",label:"ExhibitionHistory",variant:"outlined",color:"primary",value:V,onChange:function(e){return _(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(m.jsx)(L.a,{id:"publishingHistory-required",label:"PublishingHistory",variant:"outlined",color:"primary",value:X,onChange:function(e){return Z(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsxs)(W.a,{item:!0,xs:10,md:6,lg:4,children:[Object(m.jsx)(L.a,{id:"notes-required",label:"Notes",variant:"outlined",color:"primary",value:te,onChange:function(e){return ne(e.target.value)},style:{width:"100%",marginTop:"20px"}})," "]}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)(W.a,{container:!0,spacing:3,children:[Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})}),Object(m.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px"},children:Object(m.jsx)(G.a,{variant:"contained",type:"submit",onClick:function(e){e.preventDefault(),console.log(se),console.log(ie),function(e,t){return H()({method:"POST",url:I+"/artwork",headers:{Authorization:"Bearer ".concat(e.token)},data:{artwork:{artist:t.artist,title:t.title,imageUrl:t.imageUrl,releaseDate:t.releaseDate,medium:t.medium,artistRoyalty:t.artistRoyalty,curatorRoyalty:t.curatorRoyalty,provenance:t.provenance,exhibitionHistory:t.exhibitionHistory,publishingHistory:t.publishingHistory,notes:t.notes,owner:e}}})}(n,se).then((function(e){console.log(e.data.artwork)})).then((function(){return t({heading:"Submit Artwork Success",message:"Thank you for adding to our collection!",variant:"success"})})).catch((function(e){t({heading:"Submit Art Failed with error: "+e.message,message:"Something went wrong, please try again.",variant:"error"})})).finally((function(){c(""),d(""),h(""),v(""),k(""),q(""),R(""),_(""),Z(""),M(""),ne("")}))},children:"Submit Artwork"})}),Object(m.jsx)(W.a,{item:!0,xs:!0,children:Object(m.jsx)("div",{})})]})]})})},se=n(195),ce=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,n=e.message,a=e.variant,i=Object(b.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:a,id:i}])}}))},r.state={user:null,msgAlerts:[]},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(m.jsxs)("div",{children:[Object(m.jsx)(se.a,{}),Object(m.jsx)(U,{user:r}),n.map((function(t){return Object(m.jsx)(y,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(m.jsxs)("main",{className:"container",style:{width:"100vw",padding:"0"},children:[Object(m.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(_,{style:{backgroundColor:"#424242"}})}}),Object(m.jsx)(u.b,{path:"/sign-up",render:function(){return Object(m.jsx)(z,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(m.jsx)(u.b,{path:"/sign-in",render:function(){return Object(m.jsx)(B,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(m.jsx)(u.b,{path:"/gallery",render:function(){return Object(m.jsx)(ae,{style:{backgroundColor:"#4424242"}})}}),Object(m.jsx)(O,{user:r,path:"/sign-out",render:function(){return Object(m.jsx)(J,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(m.jsx)(O,{user:r,path:"/change-password",render:function(){return Object(m.jsx)($,{msgAlert:e.msgAlert,user:r})}}),Object(m.jsx)(O,{user:r,path:"/submit-art",render:function(){return Object(m.jsx)(ie,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,user:r})}})]})]})}}]),n}(r.Component),le=(n(148),n(149),n(150),n(151),Object(m.jsx)(w.a,{basename:"/nft-gallery-client",children:Object(m.jsx)(ce,{})}));s.a.render(le,document.getElementById("root"))},90:function(e,t,n){}},[[152,1,2]]]);
//# sourceMappingURL=main.b5d3b4ab.chunk.js.map