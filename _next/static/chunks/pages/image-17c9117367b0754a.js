(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{9531:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return g}});var t=r(8307),i=r(5893),c=r(1151),s=r(8916),l=r(4851),o=r(1287),a=r(4210),h=r(5338),d=r(9008),u=r.n(d),j=r(3579);function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach(function(n){(0,t.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function p(e){var n=x(x({code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul"},(0,c.a)()),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.D,{children:"画像"}),"\n",(0,i.jsx)(n.h2,{children:"画像"}),"\n",(0,i.jsx)(n.p,{children:"Web ページでは多くの画像が使われます。画像のようにテキストではない情報を使用する際は、スクリーンリーダーのような非ビジュアル環境を使用しているユーザーを考慮する必要があります。"}),"\n",(0,i.jsx)(n.h3,{children:"画像の代替テキスト"}),"\n",(0,i.jsxs)(n.p,{children:["スクリーンリーダーではテキスト情報しか読み取ることができません。そのため、HTML の ",(0,i.jsx)(n.code,{children:"<img>"})," 要素には、 ",(0,i.jsx)(n.strong,{children:"代替テキスト"})," を提供するための ",(0,i.jsx)(n.code,{children:"alt"})," 属性があります。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ページの文脈にあわせて、画像の内容を説明する簡潔なテキストを代替テキストとして指定してください"}),"\n",(0,i.jsxs)(n.li,{children:["画像が装飾目的で配置され、ページの内容を理解するのに不必要な場合は、空の ",(0,i.jsx)(n.code,{children:"alt"})," 属性（",(0,i.jsx)(n.code,{children:'alt=""'}),"）を指定してください","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"単なるアイキャッチとしてイラストやアイコンが置かれている場合などが該当します"}),"\n",(0,i.jsxs)(n.li,{children:["いかなる場合も、 ",(0,i.jsx)(n.code,{children:"img"})," 要素には ",(0,i.jsx)(n.code,{children:"alt"})," 属性の指定が必要ということになります"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<svg>"})," 要素など、",(0,i.jsx)(n.code,{children:"<img>"})," 要素以外で画像を扱う場合には ",(0,i.jsx)(n.code,{children:"aria-label"})," 属性や ",(0,i.jsx)(n.code,{children:"aria-labelledby"})," 属性を使用します"]}),"\n",(0,i.jsxs)(n.li,{children:["代替テキストは、",(0,i.jsx)("code",{children:"alt"}),"属性から、「 ",(0,i.jsxs)(n.strong,{children:[(0,i.jsxs)("ruby",{children:["alt",(0,i.jsx)("rp",{children:"("}),(0,i.jsx)("rt",{children:"おると"}),(0,i.jsx)("rp",{children:")"})]}),"テキスト"]})," 」と呼ばれることがあります"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{children:"良い例: 画像に代替テキストが指定されている"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsx)("img",{src:(0,l.i)("kurobe_dam.jpg"),alt:"黒部ダムの放水",width:300,height:400})}),"\n",(0,i.jsx)(n.h4,{children:"悪い例: 代替テキストの指定がない"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsx)("img",{src:(0,l.i)("kurobe_dam.jpg"),width:300,height:400})}),"\n",(0,i.jsx)(n.h4,{children:"悪い例: 代替テキストが間違っている"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsx)("img",{src:(0,l.i)("kurobe_dam.jpg"),alt:"かわいい猫の写真",width:300,height:400})}),"\n",(0,i.jsx)(j.h,{ids:["0441"]}),"\n",(0,i.jsx)(n.h3,{children:"情報や機能性を持たない画像"}),"\n",(0,i.jsx)(n.p,{children:"アイキャッチとして使用されるアイコンのように、情報や機能性をもたず単なる装飾として配置される画像には、代替テキストを指定するべきではありません。"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<img>"})," 要素では ",(0,i.jsx)(n.code,{children:'alt=""'})," （",(0,i.jsx)(n.code,{children:"alt"})," 属性を空にする）、",(0,i.jsx)(n.code,{children:"<svg>"})," 要素では ",(0,i.jsx)(n.code,{children:'aria-hidden="true"'})," をつけるなどして、スクリーンリーダーを使う人からは無視されるようにする必要があります。"]}),"\n",(0,i.jsx)(n.h4,{children:"良い例: 意味を持たないアイコンがスクリーンリーダーから無視されるようになっている"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsxs)(a.H4,{children:[(0,i.jsx)(a.a1,{children:(0,i.jsx)(h.pz3,{"aria-hidden":"true"})}),(0,i.jsx)("span",{children:"毎日のルーティンを見直して新しい自分を発見しましょう！"})]})}),"\n",(0,i.jsx)(n.h4,{children:"悪い例: 意味をもたないアイコンに代替テキストが付与されている"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsxs)(a.H4,{children:[(0,i.jsx)(a.a1,{children:(0,i.jsx)(h.pz3,{"aria-label":"電球"})}),(0,i.jsx)("span",{children:"毎日のルーティンを見直して新しい自分を発見しましょう！"})]})}),"\n",(0,i.jsx)(j.h,{ids:["0471"]}),"\n",(0,i.jsx)(n.h3,{children:"画像化されたテキスト"}),"\n",(0,i.jsx)(n.p,{children:"特定の書体を使いたかったり、装飾をしたかったりする関係で、画像化されたテキストが使われる場合があります。"}),"\n",(0,i.jsx)(n.p,{children:"そもそも、テキストの画像化はされるべきではありません。画面を拡大して使うユーザーにとって、画像となっている部分の文字は拡大するとギザギザになってしまうと読みづらいからです。\nロゴやバナー、図や写真のなかの文字を除いて画像化されたテキストを使うべきではありません。"}),"\n",(0,i.jsx)(n.p,{children:"どうしても画像化されたテキストを使う必要がある場合には、ほかの画像と同じく代替テキストを正しく指定するようにしてください。"}),"\n",(0,i.jsx)(n.h4,{children:"良い例: 画像化されたテキストを使用していない"}),"\n",(0,i.jsxs)(u(),{children:[(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap",rel:"stylesheet"})]}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsx)("div",{style:{background:"#fff",padding:"0.75rem",width:"fit-content",fontSize:"1.5rem",fontWeight:"bold",fontFamily:"'Noto Sans JP', sans-serif"},children:(0,i.jsx)("span",{children:"NVDA でアクセシビリティ チェック"})})}),"\n",(0,i.jsx)(n.h4,{children:"良い例: 画像化されたテキストに書かれた文字が、代替テキストにも指定されている"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsx)("img",{alt:"NVDAでアクセシビリティ チェック",src:(0,l.i)("nvdaa11ycheck.png"),width:417,height:56})}),"\n",(0,i.jsx)(n.h4,{children:"悪い例: 画像化されたテキストに代替テキストがない"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsx)("img",{src:(0,l.i)("nvdaa11ycheck.png"),width:417,height:56})}),"\n",(0,i.jsx)(n.h4,{children:"悪い例: 画像化されたテキストの代替テキストが間違っている"}),"\n",(0,i.jsx)(s.S,{children:(0,i.jsx)("img",{alt:"VoiceOver でアクセシビリティ チェック",src:(0,l.i)("nvdaa11ycheck.png"),width:417,height:56})}),"\n",(0,i.jsx)(j.h,{ids:["0501","0531"]})]})}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=x(x({},(0,c.a)()),e.components).wrapper;return n?(0,i.jsx)(n,x(x({},e),{},{children:(0,i.jsx)(p,x({},e))})):p(e)}},4563:function(e,n,r){"use strict";r.d(n,{w_:function(){return o}});var t=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=t.createContext&&t.createContext(i),s=function(){return(s=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},l=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)0>n.indexOf(t[i])&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function o(e){return function(n){return t.createElement(a,s({attr:s({},e.attr)},n),function e(n){return n&&n.map(function(n,r){return t.createElement(n.tag,s({key:r},n.attr),e(n.child))})}(e.child))}}function a(e){var n=function(n){var r,i=e.attr,c=e.size,o=e.title,a=l(e,["attr","size","title"]),h=c||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:r,style:s(s({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==c?t.createElement(c.Consumer,null,function(e){return n(e)}):n(i)}},1287:function(e,n,r){"use strict";r.d(n,{D:function(){return s}}),r(7294);var t=r(9008),i=r.n(t),c=r(5893),s=function(e){var n=e.children;return(0,c.jsx)(i(),{children:(0,c.jsx)("title",{children:"".concat(n?"".concat(n," | "):"","freee Accessibility Training")})})}},9115:function(e,n,r){"use strict";r.d(n,{S:function(){return t}});var t=r(1686).ZP.div.withConfig({displayName:"ExampleContainer",componentId:"sc-preqem-0"})(["margin:0;background:#f7f5f5;padding:1.5rem;* + &{margin-top:1rem;}"])},8916:function(e,n,r){"use strict";r.d(n,{S:function(){return t.S},a:function(){return h}});var t=r(9115),i=r(2640),c=r(7294),s=r(4210),l=r(1686),o=r(5893),a=(0,l.zo)(s.P).withConfig({displayName:"ErrorField__ErrorMessage",componentId:"sc-14iat55-0"})(["color:#dc1e32;"]),h=function(e){var n=e.fieldAriaLabel,r=c.useState(""),t=(0,i.Z)(r,2),l=t[0],h=t[1],d=c.useState(""),u=(0,i.Z)(d,2),j=u[0],f=u[1];return(0,o.jsxs)(s.xJ,{style:{marginTop:"1rem"},children:[(0,o.jsxs)("label",{children:[(0,o.jsx)(s.lX,{children:"郵便番号"}),(0,o.jsx)(s.nv,{type:"text",value:l,onChange:function(e){return h(e.target.value)},placeholder:"１４１-００３２","aria-label":n})]}),(0,o.jsx)(s.zx,{type:"button",style:{marginLeft:"1rem"},onClick:function(){return f(l.match(/^[０-９]{3}-[０-９]{4}$/)?"":"入力形式が正しくありません")},children:"入力内容の確認"}),j&&(0,o.jsx)(a,{children:j})]})}},7781:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/image",function(){return r(9531)}])},2640:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,c,s,l=[],o=!0,a=!1;try{if(c=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;o=!1}else for(;!(o=(t=c.call(r)).done)&&(l.push(t.value),l.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{if(!o&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return i}})}},function(e){e.O(0,[228,888,774,179],function(){return e(e.s=7781)}),_N_E=e.O()}]);