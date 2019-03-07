(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},19:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(2),c=a.n(s),i=a(3),r=a(4),o=a(6),m=a(5),u=a(7),p=(a(11),function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"bluebg notp"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 intro"},l.a.createElement("h1",null,"Patent Applications from the USPTO Database")))))}}]),t}(n.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"bluebg",id:"top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{className:"row"},l.a.createElement("div",{className:"col-xs-6 col-lg-12 logo"},l.a.createElement("svg",{version:1,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 400 64",style:{enableBackground:"new 0 0 400 64"},xmlSpace:"preserve"},l.a.createElement("defs",null,l.a.createElement("style",{dangerouslySetInnerHTML:{__html:".cls-1{font-size:60px;fill:#fff;font-family:GoogleSans-Bold, Google Sans;font-weight:700;}.cls-2{letter-spacing:-0.01em;}.cls-3{letter-spacing:-0.02em;}.cls-4{letter-spacing:-0.02em;}.cls-5{letter-spacing:0.01em;}.cls-6{letter-spacing:0em;}.cls-7{letter-spacing:-0.03em;}"}})),l.a.createElement("title",null,"logo"),l.a.createElement("text",{className:"cls-1",transform:"translate(0 51.48)"},"p",l.a.createElement("tspan",{className:"cls-2",x:"37.62",y:0},"a"),l.a.createElement("tspan",{className:"cls-3",x:"70.74",y:0},"t"),l.a.createElement("tspan",{x:"94.8",y:0},"e"),l.a.createElement("tspan",{className:"cls-4",x:"130.02",y:0},"n"),l.a.createElement("tspan",{className:"cls-5",x:"164.52",y:0},"t"),l.a.createElement("tspan",{className:"cls-6",x:"190.14",y:0},"se"),l.a.createElement("tspan",{x:"256.14",y:0},"a"),l.a.createElement("tspan",{className:"cls-7",x:"289.8",y:0},"r"),l.a.createElement("tspan",{x:"313.68",y:0},"ch")))),l.a.createElement("div",{className:"col-lg-8 visible-lg main-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"About this service")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"Developers")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"Workflow")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://patentsapi-dev.us-east-2.elasticbeanstalk.com/"},"API Documentation")))),l.a.createElement("div",{className:"col-xs-6 col-lg-4 sec-nav text-right"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#viewpatents"},"Search Patent Applications")))))))}}]),t}(n.Component),d=a(8),E=a(10),b=(a(37),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).pageChange=function(e){a.setState({skip:e.page.skip,take:e.page.take})},a.state={patents:[],sort:[{field:"applicationNumber",dir:"asc"},{field:"year",dir:"asc"}],skip:0,take:10,isLoading:!1,error:null},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("http://localhost:5000/api/patents/").then(function(e){return e.json()}).then(function(t){e.setState({isLoading:!1,patents:t._embedded.patents},function(){})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.patents,n=t.isLoading,s=t.error;return s?l.a.createElement("p",null,s.message):n?l.a.createElement("p",null,"Loading ..."):l.a.createElement(d.a,{data:Object(E.b)(a.slice(this.state.skip,this.state.take+this.state.skip),this.state.sort),sortable:!0,resizable:!0,sort:this.state.sort,skip:this.state.skip,take:this.state.take,total:a.length,pageable:!0,onPageChange:this.pageChange,onSortChange:function(t){e.setState({sort:t.sort})}},l.a.createElement(d.b,{field:"applicationNumber",title:"Application Number",width:"200px",minResizableWidth:"200"}),l.a.createElement(d.b,{field:"applicant",title:"Applicant",width:"180px",minResizableWidth:"180"}),l.a.createElement(d.b,{field:"title",title:"Title"}),l.a.createElement(d.b,{field:"assignee",title:"Assignee",width:"180px",minResizableWidth:"180"}),l.a.createElement(d.b,{field:"year",title:"Year",width:"100px",minResizableWidth:"100"}))}}]),t}(n.Component)),f=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"distribution"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h3",{className:"xsmall bt"},"Data Summary"),l.a.createElement("span",{id:"location"},"Patent Status Distribution")),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h3",{className:"xsmall bt"},"Distribution by Assignee(s)"),l.a.createElement("span",{id:"blcount"},"chart.js")))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(h,null),l.a.createElement(p,null),l.a.createElement("section",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("h2",null,"All Patent Applications")))),l.a.createElement("div",{className:"container-fluid spb"},l.a.createElement("div",{className:"row"},l.a.createElement(b,null)))),l.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.dae2760a.chunk.js.map