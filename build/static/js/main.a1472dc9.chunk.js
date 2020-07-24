(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,n,t){e.exports=t(41)},21:function(e,n,t){},22:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(15),c=t.n(u),o=(t(21),t(3)),i=(t(22),function(e){var n=e.addPerson,t=e.newName,a=e.handleNameFieldChange,u=e.newNumber,c=e.handleNumberFieldChange;return r.a.createElement("div",null,r.a.createElement("h2",null," Add new person "),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))}),l=function(e){var n=e.nameFilter,t=e.handleNameFilterChange;return r.a.createElement("div",null,"Filter with: ",r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.persons,t=e.nameFilter,a=e.handleRemovePerson,u={display:"inline-block",marginRight:"8px"};return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:u},e.name," ",e.number),r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))})))},m=t(2),f=t.n(m),d=t(4),p=t(5),h=t.n(p),b="https://full-stack-open-2020.herokuapp.com/api/persons",v={fetchAllData:function(){var e=Object(d.a)(f.a.mark((function e(){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.a.get(b),e.next=3,n;case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addNewPerson:function(){var e=Object(d.a)(f.a.mark((function e(n){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.post(b,n),e.next=3,t;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),updateNumber:function(){var e=Object(d.a)(f.a.mark((function e(n,t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h.a.put("".concat(b,"/").concat(n),t),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(d.a)(f.a.mark((function e(n){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.delete("".concat(b,"/").concat(n)),e.next=3,t;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},w=function(e){var n=e.notificationmessage,t=e.notificationType;return r.a.createElement("div",{className:t},n)},E=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),f=m[0],d=m[1],p=Object(a.useState)(""),h=Object(o.a)(p,2),b=h[0],E=h[1],g=Object(a.useState)(""),N=Object(o.a)(g,2),j=N[0],O=N[1],k=Object(a.useState)(null),y=Object(o.a)(k,2),C=y[0],F=y[1],x=Object(a.useState)(null),P=Object(o.a)(x,2),D=P[0],S=P[1];Object(a.useEffect)((function(){v.fetchAllData().then((function(e){u(e)}))}),[]);var A=function(e,n){v.updateNumber(n.id,e).then((function(){v.fetchAllData().then((function(n){u(n),d(""),E(""),S("successNotification"),F("User ".concat(e.name," phonenumber has been updated")),setTimeout((function(){F(null),S(null)}),5e3)}))})).catch((function(n){S("failureNotification"),F("updating user ".concat(e.name," phonenumber has failed, please try again")),setTimeout((function(){S(null),F(null),v.fetchAllData().then((function(e){u(e)}))}),5e3)}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{notificationmessage:C,notificationType:D}),r.a.createElement(l,{nameFilter:j,handleNameFilterChange:function(e){O(e.target.value)}}),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:f,number:b},a=t.find((function(e){return e.name===f}));if(a)return window.confirm("".concat(a.name," is already added to phonebook, replace the old number with a new one?"))?void A(n,a):(d(""),void E(""));v.addNewPerson(n).then((function(e){u(t.concat(e)),d(""),E(""),S("successNotification"),F("User ".concat(n.name," has been added to the phonebook")),setTimeout((function(){F(null),S(null)}),5e3)}))},newName:f,handleNameFieldChange:function(e){d(e.target.value)},newNumber:b,handleNumberFieldChange:function(e){E(e.target.value)}}),r.a.createElement(s,{persons:t,nameFilter:j,handleRemovePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&v.deletePerson(e.id).then((function(){v.fetchAllData().then((function(e){u(e)}))}))}}))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a1472dc9.chunk.js.map