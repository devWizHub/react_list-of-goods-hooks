(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(7),a=n(3),r=n(1),i=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(r.useState)([].concat(u)),e=Object(a.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)("NONE"),l=Object(a.a)(s,2),b=l[0],j=l[1],h=Object(r.useState)(!1),O=Object(a.a)(h,2),d=O[0],f=O[1],g=Object(r.useState)(!1),p=Object(a.a)(g,2),N=p[0],m=p[1],E=!d&&"NONE"===b;return Object(r.useEffect)((function(){var t=Object(o.a)(n);switch(b){case"ALPHABET":t.sort((function(t,e){return t.localeCompare(e)}));break;case"LENGTH":t.sort((function(t,e){return t.length!==e.length?t.length-e.length:t.localeCompare(e)}))}d&&(t=t.reverse()),N&&(t=[].concat(u),j("NONE"),f(!1),m(!1)),c(t)}),[b,d,N]),Object(i.jsxs)("div",{className:"section content",children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",className:"button is-info ".concat("ALPHABET"===b?"":"is-light"),onClick:function(){return j("ALPHABET")},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:"button is-success ".concat("LENGTH"===b?"":"is-light"),onClick:function(){return j("LENGTH")},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:"button is-warning ".concat(!0===d?"":"is-light"),onClick:function(){return f((function(t){return!t}))},children:"Reverse"}),!E&&Object(i.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return m(!0)},children:"Reset"})]}),Object(i.jsx)("ul",{children:Object(i.jsx)("ul",{children:n.map((function(t){return Object(i.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};s.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.aea96c84.chunk.js.map