(this.webpackJsonp046=this.webpackJsonp046||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=(a(16),a(1)),s=a(2),c=a(3),u=a(4),m=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-3"},"Project qu\u1ea3n l\xfd th\xe0nh vi\xean b\u1eb1ng ReactJS"),r.a.createElement("p",{className:"lead"},"v\u1edbi d\u1eef li\u1ec7u Json"))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"onChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("input",{type:"text",name:!0,id:!0,className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a t\xecm ki\u1ebfm....","aria-describedby":"helpId",onChange:function(t){return e.onChange(t)}}),r.a.createElement("div",{className:"btn btn-info"},"T\xecm")),r.a.createElement("hr",null)))))}}]),a}(n.Component),h=a(5),p=a(7),f=a.n(p),E=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isEdit:!1,id:n.props.id,name:n.props.name,tel:n.props.tel,permission:n.props.permission},n}return Object(s.a)(a,[{key:"onChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"onChangeStatus",value:function(){this.setState({isEdit:!this.state.isEdit})}},{key:"onCancel",value:function(){this.setState({isEdit:!1})}},{key:"onUpdate",value:function(){this.props.onUpdate(this.state),this.setState({isEdit:!1})}},{key:"onDelete",value:function(){var e=this;f.a.fire({title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn kh\xf4ng?",text:"You will not be able to recover this imaginary element!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(t){t.value&&(e.props.onDelete(e.state.id),f.a.fire("Deleted!","Your element has been deleted.","success"))}))}},{key:"isRenderByIsEdit",value:function(){var e=this;return this.state.isEdit?r.a.createElement("tr",null,r.a.createElement("td",null,this.props.id),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"name",className:"form-control",defaultValue:this.props.name,onChange:function(t){return e.onChange(t)}})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"tel",className:"form-control",defaultValue:this.props.tel,onChange:function(t){return e.onChange(t)}})),r.a.createElement("td",null,r.a.createElement("select",{defaultValue:this.props.permission,className:"form-control",onChange:function(t){return e.onChange(t)},name:"permission",id:""},r.a.createElement("option",{value:"1"},"Admin"),r.a.createElement("option",{value:"2"},"User"),r.a.createElement("option",{value:"3"},"Moderator"))),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.onUpdate()}},r.a.createElement("i",{className:"fa fa-edit"}),"Update"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.onCancel()}},r.a.createElement("i",{className:"fa fa-edit"}),"Cancel"))):r.a.createElement("tr",null,r.a.createElement("td",null,this.props.id),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.props.tel),r.a.createElement("td",null,this.props.role),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.onChangeStatus()}},r.a.createElement("i",{className:"fa fa-edit"}),"S\u1eeda"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.onDelete()}},r.a.createElement("i",{className:"fa fa-edit"}),"X\xf3a")))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.isRenderByIsEdit())}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"loadData",value:function(){var e=this;return this.props.data.map((function(t){return r.a.createElement(E,{id:t.id,name:t.name,tel:t.tel,permission:t.permission,role:t.role,onUpdate:function(t){return e.props.onUpdate(t)},onDelete:function(t){return e.props.onDelete(t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-9"},r.a.createElement("table",{className:"table table-striped table-inverse "},r.a.createElement("thead",{className:"thead-inverse"},r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"\u0110i\u1ec7n tho\u1ea1i"),r.a.createElement("th",null,"Quy\u1ec1n n\u0103ng"),r.a.createElement("th",null,"Thao t\xe1c"))),r.a.createElement("tbody",null,this.loadData())))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=Object(h.a)({permission:1,name:"",tel:""},"permission",1),n}return Object(s.a)(a,[{key:"onchange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.addUser(this.state),this.setState({name:"",tel:"",permission:1})}},{key:"loadAddUser",value:function(){var e=this;return this.props.status?r.a.createElement("button",{className:"btn btn-block btn-outline-info",onClick:function(){return e.props.onchange()}},"Th\xeam m\u1edbi"):r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-block btn-outline-secondary",onClick:function(){return e.props.onchange()}},"\u0110\xf3ng l\u1ea1i"),"   ",r.a.createElement("form",null,r.a.createElement("div",{className:"card border-primary mt-2"},r.a.createElement("div",{className:"card-header"},"Th\xeam m\u1edbi"),r.a.createElement("div",{className:"card-body text-primary"},r.a.createElement("h4",{className:"card-title"},"T\xean User"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.name,id:!0,"aria-describedby":"helpId",placeholder:"T\xean user...",onChange:function(t){return e.onchange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"tel",value:this.state.tel,id:!0,"aria-describedby":"helpId",placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i..",onChange:function(t){return e.onchange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{value:this.state.permission,className:"custom-select",name:"permission",id:!0,onChange:function(t){return e.onchange(t)}},r.a.createElement("option",{value:"1"},"Admin"),r.a.createElement("option",{value:"2"},"User"),r.a.createElement("option",{value:"3"},"Moderator")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"reset",className:"btn btn-primary form-control",name:"phone",id:!0,"aria-describedby":"helpId",value:"Th\xeam m\u1edbi",onClick:function(t){return e.onSubmit(t)}}))))," "))}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3"},this.loadAddUser())}}]),a}(n.Component),g=a(8),y=a(6),N=a(21),k=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),g.forEach((function(e){var t=y.filter((function(t){return t.id===e.id}));t&&(e.role=t[0].role)})),n.state={status:!0,data:g,keyword:""},n}return Object(s.a)(a,[{key:"addUser",value:function(e){var t=Object(N.a)(),a=e.name,n=e.tel,r=e.permission,l=y.filter((function(e){return e.id===+r}));this.state.data.push({id:t,name:a,tel:n,permission:+r}),this.state.data[this.state.data.length-1].role=l[0].role,this.setState({data:this.state.data})}},{key:"onUpdate",value:function(e){var t=e.id,a=e.name,n=e.tel,r=e.permission;this.state.data.forEach((function(e){if(e.id===t){e.name=a,e.tel=n,e.permission=r;var l=y.filter((function(e){return e.id===+r}));e.role=l[0].role}})),this.setState({data:this.state.data})}},{key:"onChange",value:function(e){this.setState({keyword:e})}},{key:"isChange",value:function(){this.setState({status:!this.state.status})}},{key:"onDelete",value:function(e){var t=this.state.data.filter((function(t){return t.id!=e}));this.setState({data:t})}},{key:"render",value:function(){var e=this,t=this.state.data.filter((function(t){return-1!=t.name.indexOf(e.state.keyword)}));return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(d,{onChange:function(t){return e.onChange(t)}}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(v,{data:t,onUpdate:function(t){return e.onUpdate(t)},onDelete:function(t){return e.onDelete(t)}}),r.a.createElement(b,{status:this.state.status,onchange:function(){e.isChange()},addUser:function(t){return e.addUser(t)}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('[{"id":1,"role":"Admin"},{"id":2,"role":"User"},{"id":3,"role":"Moderator"}]')},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"V\xf5 C\xf4ng Ph\xfac","tel":"123456789","permission":1},{"id":2,"name":"L\xea trung ","tel":"123456789","permission":2},{"id":3,"name":"Nguy\u1ec5n V\u0103n ","tel":"123456789","permission":3}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.c277e78f.chunk.js.map