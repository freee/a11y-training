(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{5183:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var t=e(8307),o=e(5893),i=e(1151),c=e(8916),s=e(3579),a=e(1287);function l(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,t)}return e}function u(r){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach(function(n){(0,t.Z)(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function f(r){var n=u(u({a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong"},(0,i.a)()),r.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.D,{children:"色のコントラスト比"}),"\n",(0,o.jsx)(n.h2,{children:"色のコントラスト比"}),"\n",(0,o.jsx)(n.p,{children:"色のコントラスト比は、文字と背景の色の明るさの差を示す指標です。"}),"\n",(0,o.jsx)(n.h3,{children:"背景色と文字色のコントラスト比"}),"\n",(0,o.jsx)(n.p,{children:"コントラスト比が低いと、文字が読みにくくなります。特にロービジョンや老眼によって見づらさを抱えている人にとっては、大きな障害となります。"}),"\n",(0,o.jsxs)(c.S,{children:[(0,o.jsx)("div",{style:{padding:"0.25rem 0.75rem",background:"#fff",color:"#323232"},children:(0,o.jsxs)(n.p,{children:["明るい背景色の上では、\n",(0,o.jsx)("span",{style:{color:"#fff0d2"},children:"明るい色の文字"}),"\nは見づらくなります。"]})}),(0,o.jsx)("div",{style:{padding:"0.25rem 0.75rem",background:"#464343",color:"#fff"},children:(0,o.jsxs)(n.p,{children:["暗い背景色の上では、\n",(0,o.jsx)("span",{style:{color:"#5a5a5a"},children:"暗い色の文字"}),"\nは見づらくなります。"]})})]}),"\n",(0,o.jsxs)(n.p,{children:["freee のガイドラインでは、テキストについて 4.5:1 以上のコントラスト比を満たすことを求めています（",(0,o.jsx)(n.a,{href:"https://a11y-guidelines.freee.co.jp/categories/text.html#gl-text-contrast",children:"コントラスト比の確保"}),"）。\nサイズの大きいテキストについては 3:1 以上でも良いことになっていますが、できるだけ 4.5:1 またはそれ以上を目指すようにしましょう。"]}),"\n",(0,o.jsxs)(n.p,{children:["コントラスト比は、",(0,o.jsx)(n.a,{href:"https://webaim.org/resources/contrastchecker/",children:"WebAIM Contrast Checker"}),"で確認することができます。\nBackground Color（背景色）と Foreground Color（前景色）それぞれにカラーコードを入力するか、カラーピッカーを使って色を選択すると、Contrast Ratio の欄にコントラスト比が表示されます。"]}),"\n",(0,o.jsxs)(n.p,{children:["また、実装されたページに対するコントラスト比のチェックは、axe DevTools で行うことができます。\nコントラスト比の低い部分は ",(0,o.jsx)(n.strong,{children:"「要素は色のコントラスト比（最低限）の閾値を満たしていなければなりません (Elements must meet minimum color contrast ratio thresholds)」"})," という問題として、検出されます。"]}),"\n",(0,o.jsx)(s.h,{ids:["0021"]})]})}function d(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=u(u({},(0,i.a)()),r.components).wrapper;return n?(0,o.jsx)(n,u(u({},r),{},{children:(0,o.jsx)(f,u({},r))})):f(r)}},1287:function(r,n,e){"use strict";e.d(n,{D:function(){return c}}),e(7294);var t=e(9008),o=e.n(t),i=e(5893),c=function(r){var n=r.children;return(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:"".concat(n?"".concat(n," | "):"","freee Accessibility Training")})})}},9115:function(r,n,e){"use strict";e.d(n,{S:function(){return t}});var t=e(1686).ZP.div.withConfig({displayName:"ExampleContainer",componentId:"sc-preqem-0"})(["margin:0;background:#f7f5f5;padding:1.5rem;* + &{margin-top:1rem;}"])},8916:function(r,n,e){"use strict";e.d(n,{S:function(){return t.S},a:function(){return u}});var t=e(9115),o=e(2640),i=e(7294),c=e(4210),s=e(1686),a=e(5893),l=(0,s.ZP)(c.P).withConfig({displayName:"ErrorField__ErrorMessage",componentId:"sc-14iat55-0"})(["color:#dc1e32;"]),u=function(r){var n=r.fieldAriaLabel,e=i.useState(""),t=(0,o.Z)(e,2),s=t[0],u=t[1],f=i.useState(""),d=(0,o.Z)(f,2),h=d[0],p=d[1];return(0,a.jsx)("form",{onSubmit:function(r){r.preventDefault()},children:(0,a.jsxs)(c.xJ,{style:{marginTop:"1rem"},children:[(0,a.jsxs)("label",{children:[(0,a.jsx)(c.lX,{children:"郵便番号"}),(0,a.jsx)(c.nv,{type:"text",value:s,onChange:function(r){return u(r.target.value)},placeholder:"１４１-００３２","aria-label":n})]}),(0,a.jsx)(c.zx,{type:"button",style:{marginLeft:"1rem"},onClick:function(){return p(s.match(/^[０-９]{3}-[０-９]{4}$/)?"":"入力形式が正しくありません")},children:"入力内容の確認"}),h&&(0,a.jsx)(l,{children:h})]})})}},6981:function(r,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contrast",function(){return e(5183)}])},2640:function(r,n,e){"use strict";function t(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=Array(n);e<n;e++)t[e]=r[e];return t}function o(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var t,o,i,c,s=[],a=!0,l=!1;try{if(i=(e=e.call(r)).next,0===n){if(Object(e)!==e)return;a=!1}else for(;!(a=(t=i.call(e)).done)&&(s.push(t.value),s.length!==n);a=!0);}catch(r){l=!0,o=r}finally{try{if(!a&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(l)throw o}}return s}}(r,n)||function(r,n){if(r){if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}}(r,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,{Z:function(){return o}})}},function(r){r.O(0,[888,774,179],function(){return r(r.s=6981)}),_N_E=r.O()}]);