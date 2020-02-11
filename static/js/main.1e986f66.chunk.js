(this["webpackJsonpwalking-school-bus"]=this["webpackJsonpwalking-school-bus"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=(n(15),n(1)),u=n.n(i),c=n(4),l=n(2),h=n(3),d=n(6),p=n(5),m=n(7),v=(n(17),function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"now",value:function(){return new Date}}]),e}()),f=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"isDeveloper",value:function(){return(new URLSearchParams(window.location.search).get(e.DEVELOPER_QUERY_PARAM)||"0")===e.IS_DEVELOPER_VALUE}},{key:"fakePosition",value:function(){return{timestamp:v.now().getTime(),coords:e.FAKE_COORDINATES}}}]),e}();f.DEVELOPER_QUERY_PARAM="developer",f.IS_DEVELOPER_VALUE="1",f.FAKE_COORDINATES={accuracy:1,altitude:2,altitudeAccuracy:3,heading:4,latitude:5,longitude:6,speed:7};var E=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"getCurrentPosition",value:function(){var t=Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){window.navigator.geolocation.getCurrentPosition((function(e){t(e)}),(function(e){f.isDeveloper()?t(f.fakePosition()):n(e)}),e.POSITION_OPTIONS)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}();E.POSITION_OPTIONS={maximumAge:6e4,timeout:5e3,enableHighAccuracy:!0};var b,O=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"put",value:function(e,t){localStorage.setItem(e,t)}}]),e}(),y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.schools.map((function(t){return r.a.createElement("div",{className:"SchoolChooser-School",key:t.name},r.a.createElement("button",{onClick:function(){return e.props.callback(t)}},t.name))}));return r.a.createElement("div",{className:"SchoolChooser"},"Choose a school:",r.a.createElement("div",{className:"SchoolChooser-Schools"},t))}}]),t}(r.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.routes.map((function(t){return r.a.createElement("div",{className:"RouteChooser-Route",key:t.name},r.a.createElement("button",{onClick:function(){return e.props.callback(t)}},t.name))}));return r.a.createElement("div",{className:"RouteChooser"},"Choose a route:",r.a.createElement("div",{className:"RouteChooser-Routes"},t))}}]),t}(r.a.Component);!function(e){e[e.First=0]="First",e[e.Add=1]="Add"}(b||(b={}));var S=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"getCachedLeaderName",value:function(){return O.get(t.LEADER_STORAGE_KEY)}},{key:"cacheLeaderName",value:function(e){O.put(t.LEADER_STORAGE_KEY,e)}},{key:"onButtonPress",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getCachedLeaderName()||"Anonymous",n="Who is leading the route?",this.props.mode===b.Add&&(n="Who is joining as a leader?"),"Anonymous"!==(a=prompt(n,t)||"Anonymous")&&this.cacheLeaderName(a),this.props.callback(a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t="Start Route";return this.props.mode===b.Add&&(t="Add Leader"),r.a.createElement("button",{onClick:function(){return e.onButtonPress()}},t)}}]),t}(r.a.Component);S.LEADER_STORAGE_KEY="leader";var j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ArrivedStop"},r.a.createElement("div",{className:"ArrivedStop-Header"},"Arrived at Stop"),r.a.createElement("div",{className:"ArrivedStop-Name"},this.props.arrival.stop.name),r.a.createElement("div",{className:"ArrivedStop-Timestamp"},this.props.arrival.timestamp.toISOString()),r.a.createElement("div",{className:"ArrivedStop-Position"},"Lat: ",this.props.arrival.position.coords.latitude,", Lon: ",this.props.arrival.position.coords.longitude,", Alt: ",this.props.arrival.position.coords.altitude))}}]),t}(r.a.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"NextStop"},r.a.createElement("hr",null),r.a.createElement("div",{className:"NextStop-Header"},"Next Stop"),r.a.createElement("div",{className:"NextStop-Name"},this.props.stop.name),r.a.createElement("div",{className:"NextStop-Arrive"},r.a.createElement("button",{onClick:function(){return e.props.onArrival(e.props.stop)}},"Arrive!")),r.a.createElement("hr",null))}}]),t}(r.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"PendingStop"},r.a.createElement("div",{className:"PendingStop-Header"},"Pending Stop"),r.a.createElement("div",{className:"PendingStop-Name"},this.props.stop.name))}}]),t}(r.a.Component),w=[{name:"Bailey Gatzert",routes:[{name:"Jefferson",stops:[{name:"20th Ave and East Jefferson St"},{name:"12th Ave and East Jefferson St"},{name:"12th Ave and East Alder St"},{name:"School"}]},{name:"Yesler",stops:[{name:"19th Ave and East Yesler Way"},{name:"17th Ave and East Yesler Way"},{name:"15th Ave and East Yesler Way"},{name:"School"}]}]}],N=function(e){function t(e,n){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e,n))).state={run:{arrivals:[],leaders:[]}},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"onSchoolChosen",value:function(){var e=Object(c.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return e.run.school=t,e}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onRouteChosen",value:function(){var e=Object(c.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return e.run.route=t,e}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onLeaderChosen",value:function(){var e=Object(c.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return e.run.leaders.push({name:t}),e.run.start||(e.run.start=new Date),e}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onLeaderRemoved",value:function(){var e=Object(c.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return e.run.leaders=e.run.leaders.filter((function(e,n){return n!==t})),e}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onArrival",value:function(){var e=Object(c.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getCurrentPosition();case 2:n=e.sent,this.setState((function(e,a){var r=v.now();return e.run.arrivals.push({stop:t,timestamp:r,position:n}),e.run.route&&e.run.arrivals.length===e.run.route.stops.length&&(e.run.end=r),e}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onDownloadPressed",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t,n,a,r,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={type:"application/json"},o=new Blob([JSON.stringify(this.state.run)],r),(s=document.createElement("a")).setAttribute("href",window.URL.createObjectURL(o)),i=(null===(t=this.state.run.school)||void 0===t?void 0:t.name)+"-"+(null===(n=this.state.run.route)||void 0===n?void 0:n.name)+"-"+(null===(a=this.state.run.start)||void 0===a?void 0:a.toISOString)+".json",s.setAttribute("download",i),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Walking School Bus")),r.a.createElement("div",{className:"Run"},this.school,this.route,this.leader,this.start,this.stops,this.end,this.download))}},{key:"school",get:function(){var e=this;return this.state.run.school?r.a.createElement("div",{className:"Run-School"},"School: ",this.state.run.school.name):r.a.createElement(y,{schools:w,callback:function(t){return e.onSchoolChosen(t)}})}},{key:"route",get:function(){var e=this;return this.state.run.school?this.state.run.route?r.a.createElement("div",{className:"Run-Route"},"Route: ",this.state.run.route.name):r.a.createElement(k,{routes:this.state.run.school.routes,callback:function(t){return e.onRouteChosen(t)}}):""}},{key:"leader",get:function(){var e=this;if(!this.state.run.school||!this.state.run.route)return"";if(0===this.state.run.leaders.length)return r.a.createElement(S,{mode:b.First,callback:function(t){return e.onLeaderChosen(t)}});var t=this.state.run.leaders.length,n=this.state.run.leaders.map((function(n,a){var o="";if(t>1){var s=a;o=r.a.createElement("span",null,"\xa0",r.a.createElement("button",{onClick:function(){return e.onLeaderRemoved(s)}},"X"))}return r.a.createElement("div",{className:"Run-Leader",key:n.name+a},n.name,o)}));return r.a.createElement("div",{className:"Run-Leaders"},"Leaders: ",n,r.a.createElement(S,{mode:b.Add,callback:function(t){return e.onLeaderChosen(t)}}))}},{key:"start",get:function(){return this.state.run.start?r.a.createElement("div",{className:"Run-Start"},"Start: ",this.state.run.start.toISOString()):""}},{key:"stops",get:function(){var e=this;if(!this.state.run.route||!this.state.run.start)return"";for(var t=[],n=0;n<this.state.run.arrivals.length;n++){var a=this.state.run.arrivals[n];t.push(r.a.createElement(j,{arrival:a,key:n+""}))}var o=this.state.run.route.stops[n];for(o&&(t.push(r.a.createElement(A,{stop:o,onArrival:function(t){return e.onArrival(t)},key:n+""})),n++);n<this.state.run.route.stops.length;){var s=this.state.run.route.stops[n];t.push(r.a.createElement(g,{stop:s,key:n+""})),n++}return t}},{key:"end",get:function(){return this.state.run.end?r.a.createElement("div",{className:"Run-End"},"End: ",this.state.run.end.toISOString()):""}},{key:"download",get:function(){var e=this;return this.state.run.end?r.a.createElement("button",{onClick:function(){return e.onDownloadPressed()}},"Download Data"):""}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.1e986f66.chunk.js.map