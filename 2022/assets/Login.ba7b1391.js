import{_ as f,s as g,u as h,b as w,r as n,o as x,c as v,d,e as t,w as s,f as b}from"./index.fdf4a767.js";const y={name:"login",data(){return{user:{userName:"admin",userPwd:"admin"},rules:{userName:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],userPwd:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]}}},methods:{login(){this.$refs.userForm.validate(l=>{if(l)this.$api.login(this.user).then(async e=>{this.$store.commit("saveUserInfo",e),await this.loadAsyncRoutes(),this.$router.push("/welcome")});else return!1})},async loadAsyncRoutes(){if((g.getItem("userInfo")||{}).token){const{menuList:e}=await this.$api.getPermissionList();h.generateRoutes(e).map(r=>{let o=`./../views/${r.component}.vue`;r.component=()=>w(()=>import(o),[]),this.$router.addRoute("home",r)})}}}},V={class:"login-wrapper"},N={class:"modal"},P=d("div",{class:"title"},"VEK\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1),k=b("\u767B\u5F55");function I(l,e,m,r,o,p){const u=n("el-input"),i=n("el-form-item"),c=n("el-button"),_=n("el-form");return x(),v("div",V,[d("div",N,[t(_,{ref:"userForm",model:o.user,"status-icon":"",rules:o.rules},{default:s(()=>[P,t(i,{prop:"userName"},{default:s(()=>[t(u,{type:"text","prefix-icon":"User",modelValue:o.user.userName,"onUpdate:modelValue":e[0]||(e[0]=a=>o.user.userName=a)},null,8,["modelValue"])]),_:1}),t(i,{prop:"userPwd"},{default:s(()=>[t(u,{type:"password","prefix-icon":"View",modelValue:o.user.userPwd,"onUpdate:modelValue":e[1]||(e[1]=a=>o.user.userPwd=a)},null,8,["modelValue"])]),_:1}),t(i,null,{default:s(()=>[t(c,{class:"btn-login",type:"primary",onClick:p.login},{default:s(()=>[k]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])}var R=f(y,[["render",I]]);export{R as default};
