(this["webpackJsonpnft-gallery-client"]=this["webpackJsonpnft-gallery-client"]||[]).push([[0],{108:function(e,t,r){},135:function(e,t,r){},145:function(e,t,r){},171:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(52),i=r.n(a),s=(r(135),r(18)),l=r(41),c=r(42),d=r(51),u=r(50),b=r(20),j=r(221),h=r(13),x=r(15),g=r(0),m=["user","component","render"],f=function(e){var t=e.user,r=e.component,n=e.render,o=Object(x.a)(e,m);return t&&n?Object(g.jsx)(b.b,Object(h.a)(Object(h.a)({},o),{},{render:n})):Object(g.jsx)(b.b,Object(h.a)(Object(h.a)({},o),{},{render:function(e){return t?Object(g.jsx)(r,Object(h.a)({},e)):Object(g.jsx)(b.a,{to:"/"})}}))},O=r(222),p=r(218),v=r(227),w=(r(145),function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(c.a)(r,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,r=e.heading,n=e.message,o=e.deleteAlert,a=e.id;return this.state.show||setTimeout((function(){o(a)}),300),Object(g.jsx)(O.a,{open:open,autoHideDuration:6e3,onClose:this.handleClose,children:Object(g.jsx)(p.a,{variant:"filled",severity:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(v.a,{variant:"h6",children:r}),Object(g.jsx)("p",{className:"alert-body",children:n})]})})})}}]),r}(o.a.Component)),y=r(23),C=r(229),k=r(228),S=r(230),M=r.p+"static/media/zyzygy-logo.d9f4791c.png",A=Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(y.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/submit-art",className:"nav-link",children:"Submit Art"}),Object(g.jsx)(y.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(y.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),P=Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(y.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(y.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-in",className:"nav-link",children:"Sign In"})]}),T=Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(y.c,{style:{color:"white",margin:15,textDecoration:"none"},exact:!0,to:"/",className:"nav-link",children:"Home"}),Object(g.jsx)(y.c,{style:{color:"white",margin:15,textDecoration:"none"},exact:!0,to:"/gallery",className:"nav-link",children:"Gallery"})]}),I=function(e){var t=e.user;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(k.a,{sx:{flexGrow:1,fontWeight:"100"},children:Object(g.jsx)(C.a,{style:{backgroundColor:"grey"},position:"static",children:Object(g.jsxs)(S.a,{children:[Object(g.jsx)(y.b,{to:"/",style:{paddingLeft:"20px",color:"#FFF",textDecoration:"none",fontWeight:"100",flexGrow:1},children:Object(g.jsx)("img",{src:M,style:{width:"300px",marginTop:10}})}),t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),T,t?A:P]})})})})},q=r(11),D="https://rocky-ocean-73265.herokuapp.com",U="http://localhost:4741",F="localhost"===window.location.hostname?U:D,N=r(40),R=r.n(N),B=function(e){return R()({url:F+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},H=r(234),E=r(217),W=r(224),L=r(231),G=r(232),z=r(233),J=r(77),Y=r.n(J),_=r(67),K=r.n(_),Q=function(e){var t=e.msgAlert,r=e.setUser,o=Object(n.useState)(""),a=Object(q.a)(o,2),i=a[0],s=a[1],l=Object(n.useState)(""),c=Object(q.a)(l,2),d=c[0],u=c[1],j=Object(n.useState)(""),h=Object(q.a)(j,2),x=h[0],m=h[1],f=Object(b.f)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(W.a,{style:{marginTop:"50px"},container:!0,justify:"center",children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(W.a,{item:!0,xs:12,sm:12,md:4,children:Object(g.jsx)(L.a,{style:{backgroundColor:"gray"},children:Object(g.jsxs)(G.a,{style:{color:"white"},children:[Object(g.jsx)(v.a,{variant:"h5",children:"Register for an Account"}),Object(g.jsx)(E.a,{required:!0,id:"email",label:"Email",InputProps:{startAdornment:Object(g.jsx)(z.a,{position:"start",children:Object(g.jsx)(Y.a,{sx:{color:"white"}})})},variant:"outlined",color:"primary",onChange:function(e){return s(e.target.value)},sx:{width:"100%",marginTop:"40px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," ",Object(g.jsx)(E.a,{required:!0,id:"password",label:"Password",InputProps:{startAdornment:Object(g.jsx)(z.a,{position:"start",children:Object(g.jsx)(K.a,{sx:{color:"white"}})})},type:"password",variant:"outlined",color:"primary",onChange:function(e){return u(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," ",Object(g.jsx)(E.a,{required:!0,id:"passwordConfirmation",label:"Password Confirmation",InputProps:{startAdornment:Object(g.jsx)(z.a,{position:"start",children:Object(g.jsx)(K.a,{sx:{color:"white"}})})},type:"password",variant:"outlined",color:"primary",autoComplete:"new-password",onChange:function(e){return m(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," ",Object(g.jsx)(H.a,{style:{marginTop:"20px",marginLeft:"10px"},variant:"contained",type:"submit",onClick:function(e){var n;e.preventDefault(),(n={email:i,password:d,passwordConfirmation:x},R()({method:"POST",url:F+"/sign-up/",data:{credentials:{email:n.email,password:n.password,password_confirmation:n.passwordConfirmation}}})).then((function(){return B({email:i,password:d})})).then((function(e){return r(e.data.user)})).then((function(){return t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return f.push("/")})).catch((function(e){s(""),u(""),m(""),t({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"error"})}))},children:"Register"})]})})}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]})})},V=function(e){var t=e.msgAlert,r=e.setUser,o=Object(n.useState)(""),a=Object(q.a)(o,2),i=a[0],s=a[1],l=Object(n.useState)(""),c=Object(q.a)(l,2),d=c[0],u=c[1],j=Object(b.f)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(W.a,{style:{marginTop:"50px"},container:!0,justify:"center",children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(W.a,{item:!0,xs:12,sm:12,md:4,children:Object(g.jsx)(L.a,{style:{backgroundColor:"gray"},children:Object(g.jsxs)(G.a,{style:{color:"white"},children:[Object(g.jsx)(v.a,{variant:"h5",children:"Login"}),Object(g.jsx)(E.a,{required:!0,id:"email",label:"Email",InputProps:{startAdornment:Object(g.jsx)(z.a,{position:"start",children:Object(g.jsx)(Y.a,{sx:{color:"white"}})})},variant:"outlined",color:"primary",onChange:function(e){return s(e.target.value)},sx:{width:"100%",marginTop:"40px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," ",Object(g.jsx)(E.a,{required:!0,id:"password",label:"Password",InputProps:{startAdornment:Object(g.jsx)(z.a,{position:"start",children:Object(g.jsx)(K.a,{sx:{color:"white"}})})},type:"password",variant:"outlined",color:"primary",onChange:function(e){return u(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," ",Object(g.jsx)(H.a,{style:{marginTop:"20px",marginLeft:"10px"},variant:"contained",type:"submit",onClick:function(e){e.preventDefault(),B({email:i,password:d,history:j}).then((function(e){return r(e.data.user)})).then((function(){return t({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return j.push("/")})).catch((function(e){s(""),u(""),t({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"error"})}))},children:"Sign In"})]})})}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]})})},X=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,r=e.history,n=e.clearUser;(function(e){return R()({url:F+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return r.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),r}(n.Component),Z=Object(b.g)(X),$=r(235),ee=r.p+"static/media/Jose-Parla-Studio-Yellowtrace-54.a71ab207.jpeg",te=function(){return Object(g.jsx)($.a,{style:{height:"100vh",width:"100vw",backgroundImage:"url(".concat(ee,")"),backgroundSize:"cover",backgroundPosition:"center center"},children:Object(g.jsx)(v.a,{style:{fontWeight:"100",padding:"50px"},variant:"h4",align:"center",color:"white",gutterBottom:!0,children:"Featured Artists"})})},re=r(4),ne=r(55),oe=r(113),ae=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(re.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,r=t.msgAlert,o=t.history,a=t.user;(function(e,t){return R()({url:F+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,a).then((function(){return r({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return o.push("/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),r({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"error"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(c.a)(r,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,r=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(ne.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(ne.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(ne.a.Label,{children:"Old password"}),Object(g.jsx)(ne.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(ne.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(ne.a.Label,{children:"New Password"}),Object(g.jsx)(ne.a.Control,{required:!0,name:"newPassword",value:r,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(oe.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),r}(n.Component),ie=Object(b.g)(ae),se=r(236),le=r(237),ce=(r(108),r(220)),de=r(225),ue=r(213),be={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"background.paper",boxShadow:24,p:1},je=function(e){var t=e.card,r=e.handleClose,n=e.open;return Object(g.jsx)(ce.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:n,onClose:r,closeAfterTransition:!0,BackdropComponent:de.a,BackdropProps:{timeout:500},children:Object(g.jsx)(ue.a,{in:n,children:Object(g.jsxs)(k.a,{sx:be,children:[Object(g.jsx)("div",{style:{padding:"0px"},children:Object(g.jsx)("img",{style:{maxWidth:"100%"},src:t.imageUrl,alt:t.artist})}),Object(g.jsxs)("div",{style:{padding:"20px"},children:[Object(g.jsx)(v.a,{gutterBottom:!0,variant:"h4",children:t.artist}),Object(g.jsxs)(v.a,{gutterBottom:!0,variant:"h5",children:["Title: ","'".concat(t.title,"'")]}),Object(g.jsx)(v.a,{gutterBottom:!0,paragraph:!0,children:t.notes})," ",Object(g.jsx)(v.a,{variant:"h5",children:"Medium"}),Object(g.jsx)(v.a,{children:t.medium})," ",Object(g.jsx)(H.a,{style:{marginTop:"10px"},variant:"outlined",size:"small",color:"warning",children:"Inquire"})]})]})})})},he=function(){var e=Object(n.useState)([]),t=Object(q.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)(0),s=Object(q.a)(i,2),l=s[0],c=s[1],d=Object(n.useState)(!1),u=Object(q.a)(d,2),b=u[0],j=u[1];Object(n.useEffect)((function(){document.body.style.cursor=b?"pointer":"auto"}),[b]),Object(n.useEffect)((function(){R()({method:"GET",url:F+"/artwork"}).then((function(e){a(e.data.artwork),console.log(r)}))}),[]);var h=o.a.useState(!1),x=Object(q.a)(h,2),m=x[0],f=x[1];return Object(g.jsxs)("div",{style:{backgroundColor:"#424242"},children:[Object(g.jsxs)($.a,{maxWidth:"sm",sx:{padding:"8, 0, 6",marginTop:"50px"},children:[Object(g.jsx)(v.a,{style:{fontWeight:"100",color:"white"},variant:"h4",align:"center",gutterBottom:!0,children:"All Artists"}),Object(g.jsx)(v.a,{style:{fontWeight:"100",color:"white"},variant:"h6",align:"center",paragraph:!0,children:"Exclusive works by iconic artists"}),Object(g.jsx)("div",{children:Object(g.jsx)(W.a,{container:!0,spacing:2,justifyContent:"center",sx:{marginTop:"20px"}})})]}),Object(g.jsx)($.a,{maxWidth:"flex",sx:{padding:"20px 0"},children:Object(g.jsxs)(W.a,{container:!0,spacing:4,children:[r.map((function(e,t){return Object(g.jsx)(W.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(g.jsxs)(L.a,{sx:{height:"100%",display:"flex",flexDirection:"column",borderRadius:"0",margin:"0",color:"white",backgroundColor:"#505050"},children:[Object(g.jsx)(se.a,{sx:{paddingTop:"92%"},image:e.imageUrl,title:"Image Title",onClick:function(e){return function(e){console.log(l),c(e),console.log(e),f(!0)}(t)},onPointerOver:function(){return j(!0)},onPointerOut:function(){return j(!1)}}),Object(g.jsxs)(G.a,{sx:{flexGrow:1},children:[Object(g.jsx)(v.a,{gutterBottom:!0,variant:"h5",children:e.artist}),Object(g.jsx)(v.a,{gutterBottom:!0,paragraph:!0,children:"'".concat(e.title,"'")})," ",Object(g.jsx)(le.a,{})]})]})},t)})),r.length>0?Object(g.jsx)(je,{card:r[l],handleClose:function(){return f(!1)},open:m}):Object(g.jsx)(g.Fragment,{})]})})]})},xe=function(e){var t=e.msgAlert,r=e.user,o=Object(n.useState)(null),a=Object(q.a)(o,2),i=a[0],s=a[1],l=Object(n.useState)(null),c=Object(q.a)(l,2),d=c[0],u=c[1],b=Object(n.useState)(null),j=Object(q.a)(b,2),h=j[0],x=j[1],m=Object(n.useState)(null),f=Object(q.a)(m,2),O=f[0],p=f[1],w=Object(n.useState)(null),y=Object(q.a)(w,2),C=y[0],S=y[1],M=Object(n.useState)(null),A=Object(q.a)(M,2),P=A[0],T=A[1],I=Object(n.useState)(null),D=Object(q.a)(I,2),U=D[0],N=D[1],B=Object(n.useState)(null),L=Object(q.a)(B,2),G=L[0],z=L[1],J=Object(n.useState)(null),Y=Object(q.a)(J,2),_=Y[0],K=Y[1],Q=Object(n.useState)(null),V=Object(q.a)(Q,2),X=V[0],Z=V[1],$=Object(n.useState)(null),ee=Object(q.a)($,2),te=ee[0],re=ee[1],ne=Object(n.useState)(!1),oe=Object(q.a)(ne,2),ae=oe[0],ie=(oe[1],{artist:i,title:d,imageUrl:h,releaseDate:O,medium:C,artistRoyalty:P,curatorRoyalty:U,provenance:G,exhibitionHistory:_,publishingHistory:X,notes:te});return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(k.a,{sx:{flexGrow:1},children:[Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px",color:"white"},children:Object(g.jsx)(v.a,{variant:"h5",children:"Submit Artwork"})}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]}),Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"artist-required",label:"Artist",variant:"outlined",color:"primary",value:i,onChange:function(e){return s(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"title-required",label:"Title",variant:"outlined",color:"primary",value:d,onChange:function(e){return u(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]}),Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"imageUrl-required",label:"ImageUrl",variant:"outlined",color:"primary",value:h,onChange:function(e){return x(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"releaseDate-required",label:"ReleaseDate",variant:"outlined",color:"primary",value:O,onChange:function(e){return p(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]}),Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"medium-required",label:"Medium",variant:"outlined",color:"primary",value:C,onChange:function(e){return S(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"artistRoyalty-required",label:"ArtistRoyalty",variant:"outlined",color:"primary",value:P,onChange:function(e){return T(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]}),Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"curatorRoyalty-required",label:"CuratorRoyalty",variant:"outlined",color:"primary",value:U,onChange:function(e){return N(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{required:!0,id:"provenance-required",label:"Provenance",variant:"outlined",color:"primary",value:G,onChange:function(e){return z(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]}),Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{id:"exhibitionHistory-required",label:"ExhibitionHistory",variant:"outlined",color:"primary",value:_,onChange:function(e){return K(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsxs)(W.a,{item:!0,xs:5,md:3,lg:2,children:[Object(g.jsx)(E.a,{id:"publishingHistory-required",label:"PublishingHistory",variant:"outlined",color:"primary",value:X,onChange:function(e){return Z(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]}),Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsxs)(W.a,{item:!0,xs:10,md:6,lg:4,children:[Object(g.jsx)(E.a,{id:"notes-required",label:"Notes",variant:"outlined",color:"primary",value:te,onChange:function(e){return re(e.target.value)},sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})," "]}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]}),Object(g.jsxs)(W.a,{container:!0,spacing:3,children:[Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(W.a,{item:!0,xs:10,md:6,lg:4,style:{marginTop:"20px",marginLeft:"10px"},children:Object(g.jsx)(H.a,{variant:"contained",type:"submit",onClick:function(e){e.preventDefault(),console.log(ie),console.log(ae),function(e,t){return R()({method:"POST",url:F+"/artwork",headers:{Authorization:"Bearer ".concat(e.token)},data:{artwork:{artist:t.artist,title:t.title,imageUrl:t.imageUrl,releaseDate:t.releaseDate,medium:t.medium,artistRoyalty:t.artistRoyalty,curatorRoyalty:t.curatorRoyalty,provenance:t.provenance,exhibitionHistory:t.exhibitionHistory,publishingHistory:t.publishingHistory,notes:t.notes,owner:e}}})}(r,ie).then((function(e){console.log(e.data.artwork)})).then((function(){return t({heading:"Submit Artwork Success",message:"Thank you for adding to our collection!",variant:"success"})})).catch((function(e){t({heading:"Submit Art Failed with error: "+e.message,message:"Something went wrong, please try again.",variant:"error"})})).finally((function(){s(""),u(""),x(""),p(""),S(""),T(""),N(""),K(""),Z(""),z(""),re("")}))},children:"Submit Artwork"})}),Object(g.jsx)(W.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]})]})})},ge=r(216),me=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,r=e.message,o=e.variant,a=Object(j.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(s.a)(e.msgAlerts),[{heading:t,message:r,variant:o,id:a}])}}))},n.state={user:null,msgAlerts:[]},n}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.msgAlerts,n=t.user;return Object(g.jsxs)("div",{style:{backgroundColor:"#424242",height:"100vh"},children:[Object(g.jsx)(ge.a,{}),Object(g.jsx)(I,{user:n}),r.map((function(t){return Object(g.jsx)(w,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",style:{width:"100vw",padding:"0"},children:[Object(g.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(te,{style:{backgroundColor:"#424242"}})}}),Object(g.jsx)(b.b,{path:"/sign-up",render:function(){return Object(g.jsx)(Q,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(b.b,{path:"/sign-in",render:function(){return Object(g.jsx)(V,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(b.b,{path:"/gallery",render:function(){return Object(g.jsx)(he,{style:{backgroundColor:"#424242"}})}}),Object(g.jsx)(f,{user:n,path:"/sign-out",render:function(){return Object(g.jsx)(Z,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(g.jsx)(f,{user:n,path:"/change-password",render:function(){return Object(g.jsx)(ie,{msgAlert:e.msgAlert,user:n})}}),Object(g.jsx)(f,{user:n,path:"/submit-art",render:function(){return Object(g.jsx)(xe,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,user:n})}})]})]})}}]),r}(n.Component),fe=(r(167),r(168),r(169),r(170),Object(g.jsx)(y.a,{basename:"/nft-gallery-client",children:Object(g.jsx)(me,{})}));i.a.render(fe,document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.1b1ae518.chunk.js.map