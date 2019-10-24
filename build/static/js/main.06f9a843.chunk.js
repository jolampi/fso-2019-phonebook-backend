(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),u=n(4),i=n(2),l=n(3),f=n.n(l),m="/api/persons",b=function(){return f.a.get(m).then((function(e){return e.data}))},s=function(e){return f.a.post(m,e).then((function(e){return e.data}))},d=function(e){return f.a.delete("".concat(m,"/").concat(e))},p=function(e,t){return f.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},O=function(e){var t=e.value,n=e.onChange;return a.a.createElement("div",null,"filter shown with",a.a.createElement("input",{value:t,onChange:n}))};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){var t=e.message,n=e.warning,r={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{color:"red"});return null===t?null:a.a.createElement("div",{style:n?o:r},t)},j=function(e){var t=e.onSubmit,n=e.nameValue,r=e.numberValue,o=e.onNameChange,c=e.onNumberChange;return a.a.createElement("form",{onSubmit:t},"name: ",a.a.createElement("input",{value:n,onChange:o}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{value:r,onChange:c}),a.a.createElement("br",null),a.a.createElement("button",{type:"submit"},"add"))},v=function(e){var t=e.persons,n=e.filter,r=e.deleteContactOf,o=n.toLowerCase(),c=t.filter((function(e){return e.name.toLowerCase().includes(o)}));return a.a.createElement("div",null,c.map((function(e){return a.a.createElement("div",{key:e.id},e.name," ",e.number,a.a.createElement("button",{onClick:function(){return r(e)}},"delete"))})))};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var y=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),l=Object(i.a)(c,2),f=l[0],m=l[1],h=Object(r.useState)(""),y=Object(i.a)(h,2),E=y[0],P=y[1],S=Object(r.useState)([]),C=Object(i.a)(S,2),D=C[0],k=C[1],N=Object(r.useState)(null),T=Object(i.a)(N,2),V=T[0],B=T[1],I=Object(r.useState)(!1),J=Object(i.a)(I,2),L=J[0],x=J[1];Object(r.useEffect)((function(){b().then((function(e){return k(e)}))}),[]);return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{message:V,warning:L}),a.a.createElement(O,{value:E,onChange:function(e){return P(e.target.value)}}),a.a.createElement("h2",null,"add a new"),a.a.createElement(j,{onSubmit:function(e){e.preventDefault();var t=D.find((function(e){return e.name===n}));void 0===t?s({name:n,number:f}).then((function(e){k(D.concat(e)),B("Added ".concat(e.name)),setTimeout((function(){return B(null)}),6e3),o(""),m("")})).catch((function(e){x(!0),B("Error: ".concat(e.response.data.error)),setTimeout((function(){x(!1),B(null)}),6e3)})):window.confirm("".concat(n," is already added to phonebook, replace the old number with a new one?"))&&p(t.id,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{number:f})).then((function(e){k(D.map((function(t){return t.id!==e.id?t:e}))),B("Updated ".concat(e.name)),setTimeout((function(){return B(null)}),6e3),o(""),m("")}))},nameValue:n,numberValue:f,onNameChange:function(e){return o(e.target.value)},onNumberChange:function(e){return m(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(v,{persons:D,filter:E,deleteContactOf:function(e){window.confirm("Delete ".concat(e.name,"?"))&&d(e.id).then((function(){k(D.filter((function(t){return t.id!==e.id}))),B("Deleted ".concat(e.name)),setTimeout((function(){return B(null)}),6e3)})).catch((function(t){x(!0),B("Information of ".concat(e.name," has already been deleted from server")),setTimeout((function(){x(!1),B(null)}),6e3)}))}}))};c.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.06f9a843.chunk.js.map