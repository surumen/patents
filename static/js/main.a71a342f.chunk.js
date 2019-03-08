(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.7b58cbf4.svg"},20:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(2),i=a.n(c),s=a(3),r=a(4),o=a(6),m=a(5),u=a(7),p=(a(11),function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"bluebg notp"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 intro"},l.a.createElement("h1",null,"Patent Applications from the USPTO Database")))))}}]),t}(n.Component)),d=a(18),h=a.n(d),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"bluebg",id:"top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{className:"row"},l.a.createElement("div",{className:"col-xs-6 col-lg-12 logo"},l.a.createElement("img",{height:64,width:200,src:h.a,style:{enableBackground:"new 0 0 400 64"},alt:"patentsearch"})),l.a.createElement("div",{className:"col-lg-8 visible-lg main-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"About this service")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"Developers")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"Workflow")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"API Documentation")))),l.a.createElement("div",{className:"col-xs-6 col-lg-4 sec-nav text-right"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#viewpatents"},"Search Patent Applications")))))))}}]),t}(n.Component),E=a(8),f=a(10),v=(a(38),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).pageChange=function(e){a.setState({skip:e.page.skip,take:e.page.take})},a.state={patents:[],sort:[{field:"applicationNumber",dir:"asc"},{field:"year",dir:"asc"}],skip:0,take:10,isLoading:!1,error:null},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("//patentsapi-dev.us-east-2.elasticbeanstalk.com/api/patents").then(function(e){return e.json()}).then(function(t){e.setState({isLoading:!1,patents:t._embedded.patents},function(){})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.patents,n=t.isLoading,c=t.error;return c?l.a.createElement("p",null,c.message):n?l.a.createElement("p",null,"Loading ..."):l.a.createElement(E.a,{data:Object(f.b)(a.slice(this.state.skip,this.state.take+this.state.skip),this.state.sort),sortable:!0,resizable:!0,sort:this.state.sort,skip:this.state.skip,take:this.state.take,total:a.length,pageable:!0,onPageChange:this.pageChange,onSortChange:function(t){e.setState({sort:t.sort})}},l.a.createElement(E.b,{field:"applicationNumber",title:"Application Number",width:"200px"}),l.a.createElement(E.b,{field:"applicant",title:"Applicant",width:"180px"}),l.a.createElement(E.b,{field:"title",title:"Title"}),l.a.createElement(E.b,{field:"assignee",title:"Assignee",width:"180px"}),l.a.createElement(E.b,{field:"year",title:"Year",width:"100px"}))}}]),t}(n.Component)),g=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"distribution"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h3",{className:"xsmall bt"},"Data Summary"),l.a.createElement("span",{id:"location"},"Patent Status Distribution")),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h3",{className:"xsmall bt"},"Distribution by Assignee(s)"),l.a.createElement("span",{id:"blcount"},"chart.js")))))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement("section",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("h2",null,"All Patent Applications")))),l.a.createElement("div",{className:"container-fluid spb"},l.a.createElement("div",{className:"row"},l.a.createElement(v,null)))),l.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.a71a342f.chunk.js.map