import{_ as D,e as T,f as w,u as I,h as L,r as d,q as B,o as f,c as M,b as g,a as l,w as n,v as c,k as h,F as A,i as E,x as v,g as z,d as u}from"./index.0e20a458.js";const R={setup(){const{proxy:i}=z(),a=T({menuState:1}),C=w([]),e=w([{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName",width:150},{label:"\u56FE\u6807",prop:"icon"},{label:"\u83DC\u5355\u7C7B\u578B",prop:"menuType",formatter(t,s,p){return{1:"\u83DC\u5355",2:"\u6309\u94AE"}[p]}},{label:"\u6743\u9650\u6807\u8BC6",prop:"menuCode"},{label:"\u8DEF\u7531\u5730\u5740",prop:"path"},{label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{label:"\u83DC\u5355\u72B6\u6001",prop:"menuState",width:90,formatter(t,s,p){return{1:"\u6B63\u5E38",2:"\u505C\u7528"}[p]}},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",formatter(t,s,p){return I.formateDate(new Date(p))}}]),y=w(""),x=T({menuName:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"},{min:2,max:10,message:"\u957F\u5EA6\u57282-8\u4E2A\u5B57\u7B26",trigger:"blur"}]}),r=w(!1),m=T({parentId:[null],menuType:1,menuState:1});L(()=>{b()});const b=async()=>{let t=await i.$api.getMenuList(a);C.value=t},F=t=>{i.$refs[t].resetFields()};return{queryForm:a,menuList:C,columns:e,action:y,rule:x,showModal:r,menuForm:m,getMenuList:b,handleReset:F,handleAdd:(t,s)=>{r.value=!0,y.value="add",t==2&&(m.parentId=[...s.parentId,s._id].filter(p=>p))},handleSubmit:()=>{i.$refs.dialogForm.validate(async t=>{if(t){let s={...m,action:y.value};await i.$api.menuSubmit(s),r.value=!1,i.$message.success("\u64CD\u4F5C\u6210\u529F"),F("dialogForm"),b()}})},handleClose:()=>{r.value=!1,F("dialogForm")},handleEdit:t=>{r.value=!0,y.value="edit",i.$nextTick(()=>{Object.assign(m,t)})},handleDel:async t=>{i.$confirm("\u662F\u5426\u5220\u9664\u89D2\u8272","",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await i.$api.menuSubmit({_id:t,action:"delete"}),i.$message.success("\u5220\u9664\u6210\u529F"),b()})}}}},j={class:"menu-manage"},O={class:"query-form"},G=u("\u67E5\u8BE2"),H=u("\u91CD\u7F6E"),J={class:"base-table"},K={class:"action"},P=u("\u65B0\u589E"),Q=u("\u65B0\u589E"),W=u("\u7F16\u8F91"),X=u("\u5220\u9664"),Y=g("span",null,"\u4E0D\u9009\uFF0C\u5219\u76F4\u63A5\u521B\u5EFA\u4E00\u7EA7\u83DC\u5355",-1),Z=u("\u83DC\u5355"),$=u("\u6309\u94AE"),ee=u("\u6B63\u5E38"),le=u("\u505C\u7528"),oe={class:"dialog-footer"},ne=u("\u53D6 \u6D88"),ae=u("\u786E \u5B9A");function te(i,a,C,e,y,x){const r=d("el-input"),m=d("el-form-item"),b=d("el-option"),F=d("el-select"),_=d("el-button"),k=d("el-form"),S=d("el-table-column"),N=d("el-table"),U=d("el-cascader"),t=d("el-radio"),s=d("el-radio-group"),p=d("el-dialog"),V=B("has");return f(),M("div",j,[g("div",O,[l(k,{ref:"form",inline:!0,model:e.queryForm},{default:n(()=>[l(m,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:n(()=>[l(r,{modelValue:e.queryForm.menuName,"onUpdate:modelValue":a[0]||(a[0]=o=>e.queryForm.menuName=o),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(m,{label:"\u83DC\u5355\u72B6\u6001",prop:"menuState"},{default:n(()=>[l(F,{modelValue:e.queryForm.menuState,"onUpdate:modelValue":a[1]||(a[1]=o=>e.queryForm.menuState=o)},{default:n(()=>[l(b,{value:1,label:"\u6B63\u5E38"}),l(b,{value:2,label:"\u505C\u7528"})]),_:1},8,["modelValue"])]),_:1}),l(m,null,{default:n(()=>[c((f(),h(_,{type:"primary",onClick:e.getMenuList},{default:n(()=>[G]),_:1},8,["onClick"])),[[V,"menu-query"]]),l(_,{onClick:a[2]||(a[2]=o=>e.handleReset("form"))},{default:n(()=>[H]),_:1})]),_:1})]),_:1},8,["model"])]),g("div",J,[g("div",K,[c((f(),h(_,{type:"primary",onClick:a[3]||(a[3]=o=>e.handleAdd(1))},{default:n(()=>[P]),_:1})),[[V,"menu-create"]])]),l(N,{data:e.menuList,"row-key":"_id","tree-props":{children:"children"}},{default:n(()=>[(f(!0),M(A,null,E(e.columns,o=>(f(),h(S,{key:o.prop,prop:o.prop,label:o.label,width:o.width,formatter:o.formatter},null,8,["prop","label","width","formatter"]))),128)),l(S,{label:"\u64CD\u4F5C",width:"220"},{default:n(o=>[c((f(),h(_,{onClick:q=>e.handleAdd(2,o.row),type:"primary",size:"small"},{default:n(()=>[Q]),_:2},1032,["onClick"])),[[V,"menu-create"]]),c((f(),h(_,{onClick:q=>e.handleEdit(o.row),size:"small"},{default:n(()=>[W]),_:2},1032,["onClick"])),[[V,"menu-edit"]]),c((f(),h(_,{type:"danger",size:"small",onClick:q=>e.handleDel(o.row._id)},{default:n(()=>[X]),_:2},1032,["onClick"])),[[V,"menu-delete"]])]),_:1})]),_:1},8,["data"])]),l(p,{title:"\u521B\u5EFA\u83DC\u5355",modelValue:e.showModal,"onUpdate:modelValue":a[12]||(a[12]=o=>e.showModal=o)},{footer:n(()=>[g("span",oe,[l(_,{onClick:e.handleClose},{default:n(()=>[ne]),_:1},8,["onClick"]),l(_,{type:"primary",onClick:e.handleSubmit},{default:n(()=>[ae]),_:1},8,["onClick"])])]),default:n(()=>[l(k,{ref:"dialogForm",model:e.menuForm,"label-width":"100px",rules:e.rule},{default:n(()=>[l(m,{label:"\u7236\u7EA7\u83DC\u5355",prop:"parentId"},{default:n(()=>[l(U,{modelValue:e.menuForm.parentId,"onUpdate:modelValue":a[4]||(a[4]=o=>e.menuForm.parentId=o),options:e.menuList,props:{checkStrictly:!0,value:"_id",label:"menuName"},clearable:""},null,8,["modelValue","options"]),Y]),_:1}),l(m,{label:"\u83DC\u5355\u7C7B\u578B",prop:"menuType"},{default:n(()=>[l(s,{modelValue:e.menuForm.menuType,"onUpdate:modelValue":a[5]||(a[5]=o=>e.menuForm.menuType=o)},{default:n(()=>[l(t,{label:1},{default:n(()=>[Z]),_:1}),l(t,{label:2},{default:n(()=>[$]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:n(()=>[l(r,{modelValue:e.menuForm.menuName,"onUpdate:modelValue":a[6]||(a[6]=o=>e.menuForm.menuName=o),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1}),c(l(m,{label:"\u83DC\u5355\u56FE\u6807",prop:"icon"},{default:n(()=>[l(r,{modelValue:e.menuForm.icon,"onUpdate:modelValue":a[7]||(a[7]=o=>e.menuForm.icon=o),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u56FE\u6807"},null,8,["modelValue"])]),_:1},512),[[v,e.menuForm.menuType==1]]),c(l(m,{label:"\u8DEF\u7531\u5730\u5740",prop:"path"},{default:n(()=>[l(r,{modelValue:e.menuForm.path,"onUpdate:modelValue":a[8]||(a[8]=o=>e.menuForm.path=o),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740"},null,8,["modelValue"])]),_:1},512),[[v,e.menuForm.menuType==1]]),c(l(m,{label:"\u6743\u9650\u6807\u8BC6",prop:"menuCode"},{default:n(()=>[l(r,{modelValue:e.menuForm.menuCode,"onUpdate:modelValue":a[9]||(a[9]=o=>e.menuForm.menuCode=o),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u6807\u8BC6"},null,8,["modelValue"])]),_:1},512),[[v,e.menuForm.menuType==2]]),c(l(m,{label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:n(()=>[l(r,{modelValue:e.menuForm.component,"onUpdate:modelValue":a[10]||(a[10]=o=>e.menuForm.component=o),placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"])]),_:1},512),[[v,e.menuForm.menuType==1]]),c(l(m,{label:"\u83DC\u5355\u72B6\u6001",prop:"menuState"},{default:n(()=>[l(s,{modelValue:e.menuForm.menuState,"onUpdate:modelValue":a[11]||(a[11]=o=>e.menuForm.menuState=o)},{default:n(()=>[l(t,{label:1},{default:n(()=>[ee]),_:1}),l(t,{label:2},{default:n(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[v,e.menuForm.menuType==1]])]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var re=D(R,[["render",te]]);export{re as default};
