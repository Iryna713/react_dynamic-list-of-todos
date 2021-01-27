(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(5),s=a.n(l),u=a(6),i=a(1),d=a(2),m=a(4),p=a(3),f=(a(17),a(18),a(10)),h=(a(19),a(7)),v=a.n(h),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={titleQuery:"",completedMode:"all"},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(f.a)({},n,r))},e.filterByTitle=function(t){return null!==t.title&&t.title.toLowerCase().includes(e.state.titleQuery.toLowerCase())},e.filterByStatus=function(t){switch(e.state.completedMode){case"completed":return t.completed;case"active":return!t.completed;default:return!0}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.onUserSelect,n=e.todosLoaded,o=this.state,c=o.titleQuery,l=o.completedMode,s=t.filter(this.filterByTitle).filter(this.filterByStatus);return r.a.createElement("div",{className:"TodoList"},n?r.a.createElement("h2",null,"Todos:"):r.a.createElement("p",null,"Error occured while loading users"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("label",{htmlFor:"titleQuery"},"Filter todos:\xa0",r.a.createElement("input",{type:"text",name:"titleQuery",id:"titleQuery",autoComplete:"off",value:c,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"completedMode"},"Show:\xa0",r.a.createElement("select",{name:"completedMode",id:"completedMode",value:l,onChange:this.handleChange},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"completed"},"Completed"),r.a.createElement("option",{value:"active"},"Active"))),r.a.createElement("ul",{className:"TodoList__list"},s.map((function(e){return r.a.createElement("li",{key:e.id,className:v()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:v()("TodoList__user-button","button",{"TodoList__user-button--selected":!0}),onClick:function(){a(e.userId)},type:"button"},"User\xa0#",e.userId))})))))}}]),a}(r.a.Component),_=(a(20),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}),b=function(){return _("/todos")},y=function(e){return _("/users/".concat(e))},U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:{},loadError:!1},e.componentDidMount=function(){e.updateUserInfo(e.props.userId)},e.componentDidUpdate=function(t){var a=t.userId,n=e.props.userId;a!==n&&e.updateUserInfo(n)},e.updateUserInfo=function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(a).then((function(t){if(null===t.data)throw new Error("User info missing");e.setState({user:t.data,loadError:!1})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.setState({user:{},loadError:!0});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.user,a=e.loadError,n=this.props.clearUser;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:\xa0",t&&t.id)),a&&r.a.createElement("h3",{className:"CurrentUser__name"},"Unable to load User info"),r.a.createElement("h3",{className:"CurrentUser__name"},t&&t.name),r.a.createElement("p",{className:"CurrentUser__email"},t&&t.email),r.a.createElement("p",{className:"CurrentUser__phone"},t&&t.phone),r.a.createElement("button",{className:"CurrentUser__clear button",type:"button",onClick:n},"Clear user selection"))}}]),a}(r.a.PureComponent),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:null,error:!1},e.componentDidMount=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b().then((function(t){e.setState({todos:t.data})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.setState({error:!0});case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),e.onUserSelect=function(t){e.setState({selectedUserId:t})},e.onUserClear=function(){e.setState({selectedUserId:null})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId,n=e.error;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(E,{todos:t,onUserSelect:this.onUserSelect,todosLoaded:!n})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(U,{userId:a,clearUser:this.onUserClear}):"No user selected")))}}]),a}(r.a.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ea3929d2.chunk.js.map