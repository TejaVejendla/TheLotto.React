(window.webpackJsonpthelotto_reactapp=window.webpackJsonpthelotto_reactapp||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),i=(a(25),a(26),a(3)),s=a(4),u=a(7),l=a(5),p=a(8);var m=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.openDraw;return r.a.createElement("div",{className:"grid-item"},r.a.createElement("img",{src:t.DrawLogoUrl,alt:t.DrawDisplayName}),r.a.createElement("p",null," ",t.DrawDisplayName),r.a.createElement("p",null," Draw Number: ",t.DrawNumber),r.a.createElement("p",null," Draw Date: ",(e=t.DrawDate,new Date(e).toLocaleDateString("en-AU"))),r.a.createElement("p",null," Div1 Amount: $",t.Div1Amount))}}]),t}(n.Component),d=a(2),w=a.n(d),h=a(6),f=a(9),v=a.n(f),D="https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws";function b(e){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(D,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O={CompanyId:"GoldenCasket",MaxDrawCount:21,OptionalProductFilter:["TattsLotto","MonWedLotto","OzLotto","MonWedLotto","Powerball","Super66"]},E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={opendraws:[]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(O);case 2:t=e.sent,a=t.data.Draws,this.setState({opendraws:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderLottoItems",value:function(){if(this.state.opendraws)return this.state.opendraws.map(function(e,t){return r.a.createElement(m,{key:t,openDraw:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"grid-container"},this.renderLottoItems())}}]),t}(n.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"The Lotto React App",r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.aa4a268f.chunk.js.map