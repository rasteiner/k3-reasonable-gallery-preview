(()=>{var _={data(){return{columnWidth:null}},computed:{images(){var t;if(!this.columnWidth)return this.content.images;let e=[70,140,280,650,1250],i=(t=e.find(n=>n>=this.columnWidth))!=null?t:e[e.length-1];return this.content.images.map(n=>({...n,thumb:`${panel.app.$api.endpoint}/rasteiner/rgp/${i}/${n.id}`}))}},mounted(){window.addEventListener("resize",this.resize),this.$nextTick(this.resize)},beforeDestroy(){window.removeEventListener("resize",this.resize)},methods:{resize(){this.columnWidth=Math.ceil(parseFloat(getComputedStyle(this.$el).gridTemplateColumns))*devicePixelRatio}}},l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ul",{on:{dblclick:e.open}},[e.content.images.length===0?[t("li"),e._v(" "),t("li"),e._v(" "),t("li"),e._v(" "),t("li"),e._v(" "),t("li")]:e._l(e.images,function(n){return t("li",{key:n.id},[t("img",{attrs:{src:n.thumb,alt:n.alt}})])})],2)},d=[],a=void 0,u=void 0,f=void 0,h=!1;function p(e,i,t,n,c,v,x,g,y,k){let o=(typeof t=="function"?t.options:t)||{};return o.__file="script>",o.render||(o.render=e.render,o.staticRenderFns=e.staticRenderFns,o._compiled=!0,c&&(o.functional=!0)),o._scopeId=n,o}var m=p({render:l,staticRenderFns:d},a,_,u,h,f,!1,void 0,void 0,void 0),s=m;panel.plugin("rasteiner/k3-reasonable-gallery-preview",{blocks:{gallery:s}});})();