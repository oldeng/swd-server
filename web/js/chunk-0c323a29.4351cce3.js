(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c323a29"],{"159b":function(t,e,a){var n=a("da84"),i=a("fdbc"),o=a("17c2"),s=a("9112");for(var r in i){var c=n[r],l=c&&c.prototype;if(l&&l.forEach!==o)try{s(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,i=a("b301");t.exports=i("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"4e4f":function(t,e,a){},"73c7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header__content",staticStyle:{position:"relative",overflow:"hidden"}},[a("Decorate"),a("div",{staticClass:"container"},[a("div",{staticClass:"he-row"},[a("div",{staticClass:"header_left"},[a("div",{staticClass:"logo"},[a("Icon",{attrs:{type:"ios-list-box"}})],1),t._m(0)])])])],1),a("section",[a("div",[a("div",[a("div",{staticClass:"content"},[a("Select",{staticStyle:{width:"300px"},attrs:{clearable:""},on:{"on-change":t.handleGetData},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},t._l(t.titleList,(function(e){return a("Option",{key:e.key,attrs:{value:e.key}},[t._v(t._s(e.projectName))])})),1),a("Table",{attrs:{border:"",columns:t.columns,data:t.content},scopedSlots:t._u([{key:"author",fn:function(e){var n=e.row;return[a("div",{staticClass:"author"},[a("img",{attrs:{src:t.$url+n.url,alt:n.author}}),a("span",[t._v(t._s(n.author))])])]}},{key:"projectName",fn:function(e){var n=e.row;return[a("Tooltip",{attrs:{"max-width":"200",content:n.projectName,placement:"top"}},[a("span",{staticClass:"nowrap"},[t._v(t._s(n.projectName))])])]}},{key:"version",fn:function(e){var n=e.row;return[a("span",{staticStyle:{color:"#FAB67B"}},[t._v(t._s(n.version))])]}},{key:"idDeployment",fn:function(e){var n=e.row;return["yes"==n.idDeployment?a("span",{staticStyle:{color:"#6CD1A7"}},[t._v("已部署")]):a("span",{staticStyle:{color:"#EC6C73"}},[t._v("未部署")])]}},{key:"remark",fn:function(e){var n=e.row;return[a("Tooltip",{attrs:{"max-width":"200",content:n.remark,placement:"top"}},[a("span",{staticClass:"nowrap"},[t._v(t._s(n.remark))])])]}},{key:"target",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.target?n.target:"暂无代理"))])]}},{key:"webUrl",fn:function(e){var n=e.row;return[a("p",[n.port?a("i",{staticClass:"yuandian",style:{background:"yes"==n.idDeployment?"cornflowerblue":"#ccc"}}):t._e(),a("span",[t._v(t._s(n.port?n.port:"无端口号"))])])]}},{key:"mode",fn:function(e){var n=e.row;return[a("span",[t._v(t._s("1"!=n.mode?"静态部署":"自动部署"))])]}},{key:"action",fn:function(e){var n=e.row;return[a("div",{staticClass:"error-bot"},["yes"==n.idDeployment?a("Button",{attrs:{type:"success",size:"small"},on:{click:function(e){return t.handleShow(n)}}},[t._v("访问")]):a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleDeploy(n)}}},[t._v("部署")]),t.user.bid==n.authorId?a("Button",{attrs:{type:"error",size:"small",disabled:"yes"==n.idDeployment},on:{click:function(e){return t.handleDelecte(n)}}},[t._v("删除")]):t._e()],1)]}}])})],1),a("div",{staticClass:"page"},[a("Page",{staticClass:"page-warp",attrs:{"prev-text":"上一页","next-text":"下一页","show-elevator":"","show-total":"",total:t.total,"show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changeSizePage}})],1)])])]),a("Modal",{attrs:{width:"360"},on:{"on-cancel":t.handleCancel},model:{value:t.isModel,callback:function(e){t.isModel=e},expression:"isModel"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),a("span",[t._v("系统提示")])],1),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("此记录删除后将无法恢复，是否执行此次删除操作？")])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:"",loading:t.modal_loading},on:{click:t.handleDelecteModal}},[t._v("确认删除")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header__info"},[a("span",[a("h2",[t._v("项目列表")]),a("p",[t._v("这里将展示所有的项目，可以根据需求对项目进行操作。")])])])}],o=(a("baa5"),a("fb6a"),a("b0c0"),a("159b"),a("f9a9")),s={components:{Decorate:o["a"]},name:"tablePage",data:function(){return{pageNo:1,pageSize:10,total:10,isModel:!1,modal_loading:!1,key:"",titleList:[],columns:[{title:"项目名称",width:180,slot:"projectName"},{title:"发布者",width:150,slot:"author"},{title:"版本号",width:80,slot:"version"},{title:"状态",width:80,slot:"idDeployment"},{title:"端口号",width:100,slot:"webUrl"},{title:"代理地址",slot:"target"},{title:"部署模式",width:100,slot:"mode"},{title:"描述",slot:"remark"},{title:"创建时间",width:170,key:"time"},{title:"操作",slot:"action",align:"center",width:150}],data6:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park"}],content:[],itemData:{},isOpen:!0,cityList1:[],cityList2:[{name:"已部署",value:"yes"},{name:"未部署",value:"no"}],titleVal:"",authorVal:"",publishVal:"",user:{},typeArr:[],cityList3:[],classVal:""}},props:{msg:String},mounted:function(){this.titleList=this.$store.state.variable.projectTitleArr,this.user=this.$store.state.variable.info,this.handleGetData()},methods:{handleGetData:function(){var t=this,e={pageNo:this.pageNo,pageSize:this.pageSize};this.key&&(e.key=this.key),this.$axios.get("/api/deploy/edition/get",{params:e}).then((function(e){if(e.data.result){var a=e.data.list;a.forEach((function(e){var a=t.$url;if(""==e.port)a=t.$url+e.webUrl+"/index.html";else{var n=t.$url.slice(0,t.$url.lastIndexOf(":")+1);a=n+e.port}e.href=a})),t.content=a,t.total=e.data.total}else t.$Message["error"]({background:!0,content:"数据请求失败！"})})).catch((function(t){}))},handleDeploy:function(t){var e=this;if("admin"===this.user.name)this.$Notice.destroy(),this.$Notice.error({title:"系统温馨提示",desc:"您不是注册用户，请注册登录后操作！"});else{this.$Message.destroy(),this.$Message.loading({content:"项目部署中，请稍后...",duration:0});var a={root:t.root,version:t.version,catalog:t.catalog,bid:t.bid,projectName:t.projectName,key:t.key};this.$axios.post("/api/deploy/edition/transfer",this.$qs.stringify(a)).then((function(t){e.$Message.destroy(),t.data.result?(e.$Message["success"]({background:!0,content:"项目部署成功！"}),e.handleGetData()):e.$Message["error"]({background:!0,content:"项目部署失败！"})})).catch((function(t){this.$Message.destroy(),this.$Message["error"]({background:!0,content:"项目部署失败！"})}))}},changePage:function(t){this.pageNo=t,this.handleGetData()},changeSizePage:function(t){this.pageSize=t,this.handleGetData()},handleShow:function(t){var e=window.open();e.opener=null,e.location=t.href,e.target="_blank"},handleCancel:function(){this.isModel=!1},handleDelecte:function(t){this.itemData=t,this.isModel=!0},handleDelecteModal:function(){var t=this;this.$Message.destroy(),this.modal_loading=!0;var e={bid:this.itemData.bid,root:this.itemData.root,version:this.itemData.version,catalog:this.itemData.catalog};this.$axios.post("/api/deploy/edition/delete",this.$qs.stringify(e)).then((function(e){e.data.result?t.handleGetData():t.$Message["error"]({background:!0,content:"数据删除失败！"}),t.modal_loading=!1,t.isModel=!1})).catch((function(t){}))},onCopy:function(){this.$Message.destroy(),this.$Message["success"]({background:!0,content:"复制成功！"})},onError:function(){this.$Message.destroy(),this.$Message["success"]({background:!0,content:"复制失败！"})}}},r=s,c=(a("afd1"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,"70a624e0",null);e["default"]=l.exports},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var s=n(e);s in t?i.f(t,s,o(0,a)):t[s]=a}},afd1:function(t,e,a){"use strict";var n=a("4e4f"),i=a.n(n);i.a},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,o=Function.prototype,s=o.toString,r=/^\s*function ([^ (]*)/,c="name";!n||c in o||i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(t){return""}}})},b301:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!a||!n((function(){a.call(null,e||function(){throw 1},1)}))}},baa5:function(t,e,a){var n=a("23e7"),i=a("e58c");n({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},e58c:function(t,e,a){"use strict";var n=a("fc6a"),i=a("a691"),o=a("50c4"),s=a("b301"),r=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,d=s("lastIndexOf");t.exports=l||d?function(t){if(l)return c.apply(this,arguments)||0;var e=n(this),a=o(e.length),s=a-1;for(arguments.length>1&&(s=r(s,i(arguments[1]))),s<0&&(s=a+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:c},f9a9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spots"},[a("span",{staticClass:"decorate",staticStyle:{background:"rgb(201, 27, 0)",width:"51px",height:"51px","margin-top":"-25.5px","margin-left":"-25.5px",top:"55.6675%",left:"5%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(23, 90, 171)",width:"28px",height:"28px","margin-top":"-14px","margin-left":"-14px",top:"10.2246%",left:"15%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(233, 34, 36)",width:"37px",height:"37px","margin-top":"-18.5px","margin-left":"-18.5px",top:"71.9133%",left:"25%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(0, 62, 135)",width:"47px",height:"47px","margin-top":"-23.5px","margin-left":"-23.5px",top:"22.8839%",left:"35%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(0, 135, 231)",width:"31px",height:"31px","margin-top":"-15.5px","margin-left":"-15.5px",top:"5.09172%",left:"45%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(23, 90, 171)",width:"52px",height:"52px","margin-top":"-26px","margin-left":"-26px",top:"32.1525%",left:"55%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(255, 86, 0)",width:"29px",height:"29px","margin-top":"-14.5px","margin-left":"-14.5px",top:"46.8035%",left:"65%"}}),a("span",{staticClass:"decorate",staticStyle:{width:"44px",height:"44px","margin-top":"-22px","margin-left":"-22px",top:"97.8537%",left:"75%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(201, 27, 0)",width:"43px",height:"43px","margin-top":"-21.5px","margin-left":"-21.5px",top:"30.7088%",left:"85%"}}),a("span",{staticClass:"decorate",staticStyle:{width:"27px",height:"27px","margin-top":"-13.5px","margin-left":"-13.5px",top:"7.43497%",left:"95%"}})])}],o=a("2877"),s={},r=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=r.exports},fb6a:function(t,e,a){"use strict";var n=a("23e7"),i=a("861d"),o=a("e8b5"),s=a("23cb"),r=a("50c4"),c=a("fc6a"),l=a("8418"),d=a("1dde"),p=a("b622"),u=p("species"),h=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!d("slice")},{slice:function(t,e){var a,n,d,p=c(this),g=r(p.length),m=s(t,g),v=s(void 0===e?g:e,g);if(o(p)&&(a=p.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?i(a)&&(a=a[u],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(p,m,v);for(n=new(void 0===a?Array:a)(f(v-m,0)),d=0;m<v;m++,d++)m in p&&l(n,d,p[m]);return n.length=d,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);