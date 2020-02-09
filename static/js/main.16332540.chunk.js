(this["webpackJsonpwalking-school-bus"]=this["webpackJsonpwalking-school-bus"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),c=(n(15),n(6)),u=n.n(c),i=n(7),l=n(1),h=n(2),m=n(4),p=n(3),v=n(5),d=(n(17),function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"now",value:function(){return new Date}}]),e}()),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.schools.map((function(t){return r.a.createElement("div",{className:"SchoolChooser-School",key:t.name},r.a.createElement("button",{onClick:function(){return e.props.callback(t)}},t.name))}));return r.a.createElement("div",{className:"SchoolChooser"},"Choose a school:",r.a.createElement("div",{className:"SchoolChooser-Schools"},t))}}]),t}(r.a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.routes.map((function(t){return r.a.createElement("div",{className:"RouteChooser-Route",key:t.name},r.a.createElement("button",{onClick:function(){return e.props.callback(t)}},t.name))}));return r.a.createElement("div",{className:"RouteChooser"},"Choose a route:",r.a.createElement("div",{className:"RouteChooser-Routes"},t))}}]),t}(r.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ArrivedStop"},r.a.createElement("div",{className:"ArrivedStop-Header"},"Arrived at Stop"),r.a.createElement("div",{className:"ArrivedStop-Name"},this.props.arrival.stop.name),r.a.createElement("div",{className:"ArrivedStop-Timestamp"},this.props.arrival.timestamp.toISOString()))}}]),t}(r.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"NextStop"},r.a.createElement("hr",null),r.a.createElement("div",{className:"NextStop-Header"},"Next Stop"),r.a.createElement("div",{className:"NextStop-Name"},this.props.stop.name),r.a.createElement("div",{className:"NextStop-Arrive"},r.a.createElement("button",{onClick:function(){return e.props.onArrival(e.props.stop)}},"Arrive!")),r.a.createElement("hr",null))}}]),t}(r.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"PendingStop"},r.a.createElement("div",{className:"PendingStop-Header"},"Pending Stop"),r.a.createElement("div",{className:"PendingStop-Name"},this.props.stop.name))}}]),t}(r.a.Component),O=[{name:"Bailey Gatzert",routes:[{name:"Jefferson",stops:[{name:"20th Ave and East Jefferson St"},{name:"12th Ave and East Jefferson St"},{name:"12th Ave and East Alder St"},{name:"School"}]},{name:"Yesler",stops:[{name:"19th Ave and East Yesler Way"},{name:"17th Ave and East Yesler Way"},{name:"15th Ave and East Yesler Way"},{name:"School"}]}]}],j=function(e){function t(e,n){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e,n))).state={run:{arrivals:[],leaders:[]}},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"onSchoolChosen",value:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return e.run.school=t,e}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onRouteChosen",value:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return e.run.route=t,e}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onStartRoute",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=prompt("Leader name:")||"Anonymous leader",this.setState((function(e,n){return e.run.leaders=[{name:t}],e.run.start=new Date,e}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onArrival",value:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){var a=d.now();return e.run.arrivals.push({stop:t,timestamp:a}),e.run.route&&e.run.arrivals.length===e.run.route.stops.length&&(e.run.end=a),e}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Walking School Bus")),r.a.createElement("div",{className:"Run"},this.school,this.route,this.leader,this.start,this.stops,this.end))}},{key:"school",get:function(){var e=this;return this.state.run.school?r.a.createElement("div",{className:"Run-School"},"School: ",this.state.run.school.name):r.a.createElement(f,{schools:O,callback:function(t){return e.onSchoolChosen(t)}})}},{key:"route",get:function(){var e=this;return this.state.run.school?this.state.run.route?r.a.createElement("div",{className:"Run-Route"},"Route: ",this.state.run.route.name):r.a.createElement(b,{routes:this.state.run.school.routes,callback:function(t){return e.onRouteChosen(t)}}):""}},{key:"leader",get:function(){var e=this;if(!this.state.run.school||!this.state.run.route)return"";if(0===this.state.run.leaders.length)return r.a.createElement("button",{onClick:function(){return e.onStartRoute()}},"Start Route");var t=this.state.run.leaders.map((function(e,t){return r.a.createElement("div",{className:"Run-Leader",key:e.name+t},e.name)}));return r.a.createElement("div",{className:"Run-Leaders"},"Leaders: ",t)}},{key:"start",get:function(){return this.state.run.start?r.a.createElement("div",{className:"Run-Start"},"Start: ",this.state.run.start.toISOString()):""}},{key:"stops",get:function(){var e=this;if(!this.state.run.route||!this.state.run.start)return"";for(var t=[],n=0;n<this.state.run.arrivals.length;n++){var a=this.state.run.arrivals[n];t.push(r.a.createElement(E,{arrival:a}))}var s=this.state.run.route.stops[n];for(s&&(t.push(r.a.createElement(S,{stop:s,onArrival:function(t){return e.onArrival(t)}})),n++);n<this.state.run.route.stops.length;){var o=this.state.run.route.stops[n];t.push(r.a.createElement(k,{stop:o})),n++}return t}},{key:"end",get:function(){return this.state.run.end?r.a.createElement("div",{className:"Run-End"},"End: ",this.state.run.end.toISOString()):""}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.16332540.chunk.js.map