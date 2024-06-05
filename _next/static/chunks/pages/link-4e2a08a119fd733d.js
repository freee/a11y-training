(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{2968:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(8307),i=r(5893),c=r(1151),h=r(3954),s=r(1287),o=r(3579);function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(n){(0,t.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function f(e){var n=d(d({code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul"},(0,c.a)()),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.D,{children:"リンク"}),"\n",(0,i.jsx)(n.h2,{children:"リンク"}),"\n",(0,i.jsx)(n.p,{children:"リンク（ハイパーリンク）の存在は Web には欠かせないものです。アクセシビリティーの高い Web ページを作成するためには、いくつか気をつけなければならないものがあります。"}),"\n",(0,i.jsx)(n.h3,{children:"見た目でリンクだとわかるようにする"}),"\n",(0,i.jsxs)(n.p,{children:["HTML では ",(0,i.jsx)(n.code,{children:'<a href="https://www.freee.co.jp">freee株式会社</a>'})," のように記述すると、リンクとなります。\n多くのページでは、青系の文字色でアンダーラインつきの見た目で表示されます。"]}),"\n",(0,i.jsx)(n.h4,{children:"良い例: 見た目でリンクだと理解できる"}),"\n",(0,i.jsx)(n.p,{children:"ほかのテキストと区別のつきやすい色や、アンダーラインがついていることで、リンクであることがわかりやすくなります。 ボタン風の見た目にするのもひとつの方法です。"}),"\n",(0,i.jsx)(h.g6,{}),"\n",(0,i.jsx)(n.h4,{children:"悪い例: 下線がなく、リンクだとわかりづらい"}),"\n",(0,i.jsx)(n.p,{children:"以下の例ではリンクのアンダーラインが、マウスオーバーしなければ表示されません。\nこの状態ではリンクであることが一見するとわかりづらく、特にグレースケール表示にしていると、リンクの場所を認識するのが困難になります。"}),"\n",(0,i.jsx)(h.bd,{}),"\n",(0,i.jsx)(o.h,{ids:["0051"]}),"\n",(0,i.jsx)(n.h3,{children:"リンク先を具体的に表す文言にする"}),"\n",(0,i.jsxs)(n.p,{children:["スクリーンリーダーを使用していて、リンクへのジャンプを使用する場合や",(0,i.jsx)("kbd",{children:"Tab"}),"キーでフォーカスを移動させていく場合、リンクに指定している文字列が読み上げられます。\nこのとき、リンク先を具体的に表現した文字列になっていない場合、ユーザーはその前後を読んで文脈を理解しなければ、どれが目的のリンクなのか理解できなくなってしまいます。"]}),"\n",(0,i.jsx)(n.h4,{children:"良い例: リンク先が具体的に書かれている"}),"\n",(0,i.jsx)(h.vj,{}),"\n",(0,i.jsx)(n.h4,{children:"悪い例: リンク先のことが具体的に書かれていない"}),"\n",(0,i.jsx)(n.p,{children:"以下の例ではすべてのリンクが「こちら」となっており、その手前のテキストを読まなければリンク先が何であるのかを理解できません。"}),"\n",(0,i.jsx)(n.p,{children:"また、画面を視覚的に捉えているユーザーにとっても、「こちら」とい文字列部分が短いためマウスポインタを合わせてクリックすることが難しい場合があったり、アンダーラインを表示しないようにしている場合にはリンクを見つけづらい場合があったりします。"}),"\n",(0,i.jsx)(h.e8,{}),"\n",(0,i.jsx)(o.h,{ids:["0261"]}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:'<a href="...">'})," で実装する"]}),"\n",(0,i.jsxs)(n.p,{children:["リンクは ",(0,i.jsx)(n.code,{children:"<a>"})," 要素に ",(0,i.jsx)(n.code,{children:'href="..."'})," 属性があってはじめてリンクとして機能します。\n見た目や挙動をどんなにリンクに寄せても、 ",(0,i.jsx)(n.code,{children:'<a href="...">'})," で実装されていなければ、スクリーンリーダーのユーザーにはリンクであることが伝わりません。"]}),"\n",(0,i.jsx)(n.p,{children:"それぞれの例で、以下のような操作を試してみてください。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"マウスポインタを合わせてクリックする"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("kbd",{children:"Tab"}),"キーでフォーカスを合わせ、",(0,i.jsx)("kbd",{children:"Enter"}),"キーを押下する"]}),"\n",(0,i.jsx)(n.li,{children:"リンクを右クリックして、「新しいタブで開く」操作をする"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("kbd",{children:"Control"})," (Windows) または ",(0,i.jsx)("kbd",{children:"Command"})," (macOS) を押しながらクリックして、「新しいタブで開く」操作をする"]}),"\n",(0,i.jsx)(n.li,{children:"スクリーンリーダーで操作する"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{children:["良い例: ",(0,i.jsx)(n.code,{children:'<a href="...">'})," で実装されたリンク"]}),"\n",(0,i.jsx)(h.PV,{}),"\n",(0,i.jsxs)(n.h4,{children:["悪い例: ",(0,i.jsx)(n.code,{children:"href"})," の無い ",(0,i.jsx)(n.code,{children:"<a>"})," 要素"]}),"\n",(0,i.jsx)(h.F6,{}),"\n",(0,i.jsxs)(n.h4,{children:["悪い例: ",(0,i.jsx)(n.code,{children:"<a>"})," 要素を使用していない"]}),"\n",(0,i.jsx)(h.XP,{}),"\n",(0,i.jsx)(o.h,{ids:["0231"]})]})}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d(d({},(0,c.a)()),e.components).wrapper;return n?(0,i.jsx)(n,d(d({},e),{},{children:(0,i.jsx)(f,d({},e))})):f(e)}},1287:function(e,n,r){"use strict";r.d(n,{D:function(){return h}}),r(7294);var t=r(9008),i=r.n(t),c=r(5893),h=function(e){var n=e.children;return(0,c.jsx)(i(),{children:(0,c.jsx)("title",{children:"".concat(n?"".concat(n," | "):"","freee Accessibility Training")})})}},9115:function(e,n,r){"use strict";r.d(n,{S:function(){return t}});var t=r(1686).ZP.div.withConfig({displayName:"ExampleContainer",componentId:"sc-preqem-0"})(["margin:0;background:#f7f5f5;padding:1.5rem;* + &{margin-top:1rem;}"])},8916:function(e,n,r){"use strict";r.d(n,{S:function(){return t.S},a:function(){return d}});var t=r(9115),i=r(2640),c=r(7294),h=r(4210),s=r(1686),o=r(5893),l=(0,s.ZP)(h.P).withConfig({displayName:"ErrorField__ErrorMessage",componentId:"sc-14iat55-0"})(["color:#dc1e32;"]),d=function(e){var n=e.fieldAriaLabel,r=c.useState(""),t=(0,i.Z)(r,2),s=t[0],d=t[1],f=c.useState(""),j=(0,i.Z)(f,2),u=j[0],a=j[1];return(0,o.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:(0,o.jsxs)(h.xJ,{style:{marginTop:"1rem"},children:[(0,o.jsxs)("label",{children:[(0,o.jsx)(h.lX,{children:"郵便番号"}),(0,o.jsx)(h.nv,{type:"text",value:s,onChange:function(e){return d(e.target.value)},placeholder:"１４１-００３２","aria-label":n})]}),(0,o.jsx)(h.zx,{type:"button",style:{marginLeft:"1rem"},onClick:function(){return a(s.match(/^[０-９]{3}-[０-９]{4}$/)?"":"入力形式が正しくありません")},children:"入力内容の確認"}),u&&(0,o.jsx)(l,{children:u})]})})}},3954:function(e,n,r){"use strict";r.d(n,{F6:function(){return f},XP:function(){return j},e8:function(){return l},bd:function(){return s},PV:function(){return d},vj:function(){return o},g6:function(){return h}}),r(7294);var t=r(8916),i=r(4210),c=r(5893),h=function(){return(0,c.jsxs)(t.S,{children:[(0,c.jsxs)("p",{children:[(0,c.jsx)(i.hh,{href:"https://corp.freee.co.jp",children:"freee株式会社"})," では、",(0,c.jsx)(i.hh,{href:"https://www.freee.co.jp/houjin/",children:"freee会計"}),"や",(0,c.jsx)(i.hh,{href:"https://www.freee.co.jp/hr/",children:"freee人事労務"}),"といったプロダクトの開発・提供を通して、だれもが自由に自然体で経営できる環境をつくっていきます。"]}),(0,c.jsx)("p",{children:"freee株式会社では、一緒にスモールビジネスを盛り上げていくエンジニア・デザイナー・プロダクトマネージャーを募集しています"}),(0,c.jsx)("p",{children:(0,c.jsx)(i.zx,{as:"a",href:"https://jobs.freee.co.jp/",children:"freee株式会社の採用情報"})})]})},s=function(){return(0,c.jsxs)(t.S,{children:[(0,c.jsxs)("p",{children:[(0,c.jsx)(i.hh,{noUnderline:!0,href:"https://corp.freee.co.jp",children:"freee株式会社"})," ","では、",(0,c.jsx)(i.hh,{noUnderline:!0,href:"https://www.freee.co.jp/houjin/",children:"freee会計"}),"や",(0,c.jsx)(i.hh,{noUnderline:!0,href:"https://www.freee.co.jp/hr/",children:"freee人事労務"}),"といったプロダクトの開発・提供を通して、だれもが自由に自然体で経営できる環境をつくっていきます。"]}),(0,c.jsx)("p",{children:"freee株式会社では、一緒にスモールビジネスを盛り上げていくエンジニア・デザイナー・プロダクトマネージャーを募集しています"}),(0,c.jsx)("p",{children:(0,c.jsx)(i.hh,{noUnderline:!0,href:"https://jobs.freee.co.jp/",children:"freee株式会社の採用情報"})})]})},o=function(){return(0,c.jsx)(t.S,{children:(0,c.jsxs)(i.Ul,{children:[(0,c.jsx)(i.Li,{children:(0,c.jsx)(i.hh,{href:"https://www.freee.co.jp/kakuteishinkoku/",children:"個人事業主のお客様向けの案内ページ"})}),(0,c.jsx)(i.Li,{children:(0,c.jsx)(i.hh,{href:"https://www.freee.co.jp/houjin/",children:"20名以下の法人のお客様向けの案内ページ"})}),(0,c.jsx)(i.Li,{children:(0,c.jsx)(i.hh,{href:"https://www.freee.co.jp/special/cloud-erp/professional/",children:"20名以上の法人のお客様向けの案内ページ"})})]})})},l=function(){return(0,c.jsx)(t.S,{children:(0,c.jsxs)(i.Ul,{children:[(0,c.jsxs)(i.Li,{children:["個人事業主のお客様向けの案内ページは",(0,c.jsx)(i.hh,{noUnderline:!0,href:"https://www.freee.co.jp/kakuteishinkoku/",children:"こちら"})]}),(0,c.jsxs)(i.Li,{children:["20名以下の法人のお客様向けの案内ページは",(0,c.jsx)(i.hh,{noUnderline:!0,href:"https://www.freee.co.jp/houjin/",children:"こちら"})]}),(0,c.jsxs)(i.Li,{children:["20名以上の法人のお客様向けの案内ページは",(0,c.jsx)(i.hh,{noUnderline:!0,href:"https://www.freee.co.jp/special/cloud-erp/professional/",children:"こちら"})]})]})})},d=function(){return(0,c.jsx)(t.S,{children:(0,c.jsx)(i.hh,{href:"https://corp.freee.co.jp",children:"freee株式会社"})})},f=function(){return(0,c.jsx)(t.S,{children:(0,c.jsx)(i.hh,{onClick:function(){location.href="https://corp.freee.co.jp"},children:"freee株式会社"})})},j=function(){return(0,c.jsx)(t.S,{children:(0,c.jsx)(i.hh,{as:"span",onClick:function(){location.href="https://corp.freee.co.jp"},children:"freee株式会社"})})}},6674:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/link",function(){return r(2968)}])},2640:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,c,h,s=[],o=!0,l=!1;try{if(c=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;o=!1}else for(;!(o=(t=c.call(r)).done)&&(s.push(t.value),s.length!==n);o=!0);}catch(e){l=!0,i=e}finally{try{if(!o&&null!=r.return&&(h=r.return(),Object(h)!==h))return}finally{if(l)throw i}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return i}})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=6674)}),_N_E=e.O()}]);