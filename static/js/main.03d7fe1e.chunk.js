(this["webpackJsonpwalking-school-bus"]=this["webpackJsonpwalking-school-bus"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=(n(15),n(1)),c=n.n(i),u=n(4),l=n(2),h=n(3),m=n(6),d=n(5),p=n(7),v=(n(17),function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"now",value:function(){return new Date}}]),e}()),f=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"isDeveloper",value:function(){return(new URLSearchParams(window.location.search).get(e.DEVELOPER_QUERY_PARAM)||"0")===e.IS_DEVELOPER_VALUE}},{key:"fakePosition",value:function(){return{timestamp:v.now().getTime(),coords:e.FAKE_COORDINATES}}}]),e}();f.DEVELOPER_QUERY_PARAM="developer",f.IS_DEVELOPER_VALUE="1",f.FAKE_COORDINATES={accuracy:1,altitude:2,altitudeAccuracy:3,heading:4,latitude:5,longitude:6,speed:7},f.FAKE_RUN={school:{name:"Fake School",routes:[{name:"Fake Route",stops:[{name:"Fake Stop A"},{name:"Fake Stop B"}]}]},route:{name:"Fake Route",stops:[{name:"Fake Stop A"},{name:"Fake Stop B"}]},leaders:[{name:"me"}],start:v.now(),arrivals:[{stop:{name:"Fake Stop A"},timestamp:v.now(),position:{coords:f.FAKE_COORDINATES,timestamp:v.now().getTime()}}]};var E=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"getCurrentPosition",value:function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){window.navigator.geolocation.getCurrentPosition((function(e){t(e)}),(function(e){f.isDeveloper()?t(f.fakePosition()):n(e)}),e.POSITION_OPTIONS)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}();E.POSITION_OPTIONS={maximumAge:6e4,timeout:5e3,enableHighAccuracy:!0};var y=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"emitRunUpdate",value:function(){var t=Object(u.a)(c.a.mark((function t(n){var a,r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=JSON.stringify({TableName:"walking-school-bus-runs",Item:{school_route:(null===(a=n.school)||void 0===a?void 0:a.name)+"_"+(null===(r=n.route)||void 0===r?void 0:r.name),start:n.start,run:n}}),t.abrupt("return",fetch(e.ENDPOINT,{method:"POST",body:o,mode:"cors",headers:{"Content-Type":"application/json"}}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"listOpenRuns",value:function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(e.ENDPOINT,"?TableName=").concat(e.TABLE_NAME),{method:"GET",mode:"cors"}).then((function(e){return e.json()})).catch((function(e){if(console.log("Catching listOpenRuns: "+e),f.isDeveloper())return JSON.parse('{"Items":[{"run":{"mode":0,"route":{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},"previous":[],"arrivals":[{"stop":{"name":"20th Ave and East Jefferson St"},"timestamp":"2020-02-12T08:29:57.044Z","position":{}}],"school":{"name":"Bailey Gatzert","routes":[{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},{"name":"Yesler","stops":[{"name":"19th Ave and East Yesler Way"},{"name":"17th Ave and East Yesler Way"},{"name":"15th Ave and East Yesler Way"},{"name":"School"}]}]},"start":"2020-02-12T08:29:54.289Z","leaders":[{"name":"Dave"}]},"school_route":"Bailey Gatzert_Jefferson","start":"2020-02-12T08:29:54.289Z"},{"run":{"mode":0,"route":{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},"previous":[],"arrivals":[],"school":{"name":"Bailey Gatzert","routes":[{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},{"name":"Yesler","stops":[{"name":"19th Ave and East Yesler Way"},{"name":"17th Ave and East Yesler Way"},{"name":"15th Ave and East Yesler Way"},{"name":"School"}]}]},"start":"2020-02-12T08:56:13.536Z","leaders":[{"name":"Anonymous"}]},"school_route":"Bailey Gatzert_Jefferson","start":"2020-02-12T08:56:13.536Z"}],"Count":2,"ScannedCount":2}');throw e})).then((function(e){return e.Items})).then((function(e){return e.map((function(e){return e.run}))})).then((function(e){return e.map((function(e){return e.start=new Date(Date.parse(e.start)),e.previous=[],e.arrivals=e.arrivals.map((function(e){return e.timestamp=new Date(Date.parse(e.timestamp)),e})),e})).filter((function(e){return!e.end}))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}();y.ENDPOINT="https://7098mtfhad.execute-api.us-west-2.amazonaws.com/Prod/WalkingSchoolBusRun",y.TABLE_NAME="walking-school-bus-runs";var A,S=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"put",value:function(e,t){localStorage.setItem(e,t)}}]),e}(),k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.schools.map((function(t){return r.a.createElement("div",{className:"SchoolChooser-School",key:t.name},r.a.createElement("button",{onClick:function(){return e.props.callback(t)}},t.name))}));return r.a.createElement("div",{className:"SchoolChooser"},"Choose a school:",r.a.createElement("div",{className:"SchoolChooser-Schools"},t))}}]),t}(r.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.routes.map((function(t){return r.a.createElement("div",{className:"RouteChooser-Route",key:t.name},r.a.createElement("button",{onClick:function(){return e.props.callback(t)}},t.name))}));return r.a.createElement("div",{className:"RouteChooser"},"Choose a route:",r.a.createElement("div",{className:"RouteChooser-Routes"},t))}}]),t}(r.a.Component);!function(e){e[e.First=0]="First",e[e.Add=1]="Add"}(A||(A={}));var b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"getCachedLeaderName",value:function(){return S.get(t.LEADER_STORAGE_KEY)}},{key:"cacheLeaderName",value:function(e){S.put(t.LEADER_STORAGE_KEY,e)}},{key:"onButtonPress",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getCachedLeaderName()||"Anonymous",n="Who is leading the route?",this.props.mode===A.Add&&(n="Who is joining as a leader?"),"Anonymous"!==(a=prompt(n,t)||"Anonymous")&&this.cacheLeaderName(a),this.props.callback(a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t="Start Route";return this.props.mode===A.Add&&(t="Add Leader"),r.a.createElement("button",{onClick:function(){return e.onButtonPress()}},t)}}]),t}(r.a.Component);b.LEADER_STORAGE_KEY="leader";var w,N=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ArrivedStop"},r.a.createElement("div",{className:"ArrivedStop-Header"},"Arrived at Stop"),r.a.createElement("div",{className:"ArrivedStop-Name"},this.props.arrival.stop.name),r.a.createElement("div",{className:"ArrivedStop-Timestamp"},this.props.arrival.timestamp.toISOString()),r.a.createElement("div",{className:"ArrivedStop-Position"},"Lat: ",this.props.arrival.position.coords.latitude,", Lon: ",this.props.arrival.position.coords.longitude,", Alt: ",this.props.arrival.position.coords.altitude))}}]),t}(r.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"NextStop"},r.a.createElement("hr",null),r.a.createElement("div",{className:"NextStop-Header"},"Next Stop"),r.a.createElement("div",{className:"NextStop-Name"},this.props.stop.name),r.a.createElement("div",{className:"NextStop-Arrive"},r.a.createElement("button",{onClick:function(){return e.props.onArrival(e.props.stop)}},"Arrive!")),r.a.createElement("hr",null))}}]),t}(r.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"PendingStop"},r.a.createElement("div",{className:"PendingStop-Header"},"Pending Stop"),r.a.createElement("div",{className:"PendingStop-Name"},this.props.stop.name))}}]),t}(r.a.Component),R=[{name:"Bailey Gatzert",routes:[{name:"Jefferson",stops:[{name:"20th Ave and East Jefferson St"},{name:"12th Ave and East Jefferson St"},{name:"12th Ave and East Alder St"},{name:"School"}]},{name:"Yesler",stops:[{name:"19th Ave and East Yesler Way"},{name:"17th Ave and East Yesler Way"},{name:"15th Ave and East Yesler Way"},{name:"School"}]}]}];!function(e){e[e.LEAD=0]="LEAD",e[e.WATCH=1]="WATCH"}(w||(w={}));var C={mode:w.WATCH,leaders:new Array,arrivals:new Array,previous:new Array},L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state=C,n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.listOpenRuns().then((function(t){return e.onPreviousRuns(t)}))}},{key:"componentWillUnmount",value:function(){this.stopWatch()}},{key:"startWatch",value:function(){var e=this;if(void 0===this.state.watch){var t=setInterval((function(){e.state.mode===w.LEAD?e.stopWatch():y.listOpenRuns().then((function(t){return e.onPreviousRuns(t)}))}),15e3);this.setState({watch:t})}}},{key:"stopWatch",value:function(){this.state.watch&&(clearInterval(this.state.watch),this.setState({watch:void 0}))}},{key:"onPreviousRuns",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({previous:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onPreviousJoin",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mode:w.LEAD}),this.setState(n),this.onLeaderAdded(t),this.stopWatch();case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onCreateNew",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mode:w.LEAD}),this.stopWatch();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSchoolChosen",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({school:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onRouteChosen",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({route:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onLeaderChosen",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({leaders:[{name:t}],start:new Date,mode:w.LEAD},(function(){return y.emitRunUpdate(n.state)}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onLeaderAdded",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return{leaders:e.leaders.concat({name:t})}}),(function(){return y.emitRunUpdate(n.state)}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onLeaderRemoved",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((function(e,n){return{leaders:e.leaders.filter((function(e,n){return n!==t}))}}),(function(){return y.emitRunUpdate(n.state)}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onArrival",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getCurrentPosition();case 2:n=e.sent,this.setState((function(e,a){var r=v.now();return{arrivals:e.arrivals.concat({stop:t,timestamp:r,position:n})}}),(function(){a.state.route&&a.state.arrivals.length===a.state.route.stops.length?a.setState({end:v.now()},(function(){return y.emitRunUpdate(a.state)})):y.emitRunUpdate(a.state)}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onDownloadPressed",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a,r,o,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={type:"application/json"},o=new Blob([JSON.stringify(this.state)],r),(s=document.createElement("a")).setAttribute("href",window.URL.createObjectURL(o)),i=(null===(t=this.state.school)||void 0===t?void 0:t.name)+"-"+(null===(n=this.state.route)||void 0===n?void 0:n.name)+"-"+(null===(a=this.state.start)||void 0===a?void 0:a.toISOString())+".json",s.setAttribute("download",i),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return this.state.mode===w.WATCH?e=this.previous:this.state.mode===w.LEAD&&(e=r.a.createElement("div",{className:"Run"},this.school,this.route,this.leader,this.start,this.stops,this.end,this.download)),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Walking School Bus")),e)}},{key:"previous",get:function(){var e=this,t=this.state.previous.map((function(t,n){var a,o,s,i;console.log(JSON.stringify(t));var c=t.leaders.map((function(e){return e.name})).join(", "),u=null===(a=t.start)||void 0===a?void 0:a.toLocaleString(),l=null===(o=t.arrivals[t.arrivals.length-1])||void 0===o?void 0:o.stop.name;return r.a.createElement("div",{className:"Previous-Run",key:n+""},r.a.createElement("div",{className:"Previous-Name"},null===(s=t.school)||void 0===s?void 0:s.name," - ",null===(i=t.route)||void 0===i?void 0:i.name),r.a.createElement("div",{className:"Previous-Start"},u),r.a.createElement("div",{className:"Previous-Leaders"},c),r.a.createElement("div",{className:"Previous-LastStop"},"Last Stop: ",l),r.a.createElement("div",{className:"Previous-Buttons"},r.a.createElement(b,{mode:A.Add,callback:function(n){return e.onPreviousJoin(n,t)}})," - ",r.a.createElement("button",{onClick:function(){return e.startWatch()}},"Watch")))}));return 0===t.length&&(t="None"),r.a.createElement("div",{className:"Previous"},r.a.createElement("div",{className:"Previous-Runs"},"Open Runs: ",t),r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){return e.onCreateNew()}},"Create New Run"))}},{key:"school",get:function(){var e=this;return this.state.school?r.a.createElement("div",{className:"Run-School"},"School: ",this.state.school.name):r.a.createElement(k,{schools:R,callback:function(t){return e.onSchoolChosen(t)}})}},{key:"route",get:function(){var e=this;return this.state.school?this.state.route?r.a.createElement("div",{className:"Run-Route"},"Route: ",this.state.route.name):r.a.createElement(O,{routes:this.state.school.routes,callback:function(t){return e.onRouteChosen(t)}}):""}},{key:"leader",get:function(){var e=this;if(!this.state.school||!this.state.route)return"";if(0===this.state.leaders.length)return r.a.createElement(b,{mode:A.First,callback:function(t){return e.onLeaderChosen(t)}});var t=this.state.leaders.length,n=this.state.leaders.map((function(n,a){var o="";if(t>1){var s=a;o=r.a.createElement("span",null,"\xa0",r.a.createElement("button",{onClick:function(){return e.onLeaderRemoved(s)}},"X"))}return r.a.createElement("div",{className:"Run-Leader",key:n.name+a},n.name,o)}));return r.a.createElement("div",{className:"Run-Leaders"},"Leaders: ",n,r.a.createElement(b,{mode:A.Add,callback:function(t){return e.onLeaderAdded(t)}}))}},{key:"start",get:function(){return this.state.start?r.a.createElement("div",{className:"Run-Start"},"Start: ",this.state.start.toLocaleString()):""}},{key:"stops",get:function(){var e=this;if(!this.state.route||!this.state.start)return"";for(var t=[],n=0;n<this.state.arrivals.length;n++){var a=this.state.arrivals[n];t.push(r.a.createElement(N,{arrival:a,key:n+""}))}var o=this.state.route.stops[n];for(o&&(t.push(r.a.createElement(j,{stop:o,onArrival:function(t){return e.onArrival(t)},key:n+""})),n++);n<this.state.route.stops.length;){var s=this.state.route.stops[n];t.push(r.a.createElement(g,{stop:s,key:n+""})),n++}return t}},{key:"end",get:function(){return this.state.end?r.a.createElement("div",{className:"Run-End"},"End: ",this.state.end.toLocaleString()):""}},{key:"download",get:function(){var e=this;return this.state.end?r.a.createElement("button",{onClick:function(){return e.onDownloadPressed()}},"Download Data"):""}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.03d7fe1e.chunk.js.map