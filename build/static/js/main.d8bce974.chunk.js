(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(88)},40:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),s=a.n(c);a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(6),i=a(8),r=a(7),m=a(5),u=a(9),h=a(10),b=a(12),d=(a(84),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.query),fetch(this.props.query).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({data:JSON.parse(t).data})})}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"5%",marginLeft:"10%",marginRight:"10%"}},l.a.createElement(b.BootstrapTable,{data:this.state.data},l.a.createElement(b.TableHeaderColumn,{isKey:!0,dataField:"PLAYER_NAME"},"Player Name"),l.a.createElement(b.TableHeaderColumn,{dataField:"SCORES"},"Fantasy Score")))}}]),t}(n.Component)),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-center text-secondary",style:{marginTop:"10%"}},l.a.createElement("h1",{style:{marginBottom:"5%"}},"Welcome to the NBA Fantasy Ranking Calculator"),l.a.createElement("div",{style:{marginTop:"5%",marginLeft:"25%",marginRight:"25%"}},l.a.createElement(d,{query:"http://localhost:5002/rankplayers?mode=official"})))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-center text-secondary",style:{marginTop:"10%"}},l.a.createElement("h1",{style:{marginBottom:"5%"}},"Welcome to the NBA Fantasy Ranking Calculator"),l.a.createElement("p",null,"The official NBA rules for fantasy leagues states the following point allocations: Points(1), Rebounds(1.2), Assists(1.5), Steals(3), Blocks(3), Turnovers(-1)."))}}]),t}(n.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-center text-secondary",style:{marginTop:"10%"}},l.a.createElement("h4",{style:{marginBottom:"5%"}},"Here are your customized rankings!"),l.a.createElement("div",{style:{marginTop:"5%",marginLeft:"25%",marginRight:"25%"}},l.a.createElement(d,{query:this.props.query})))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={W:0,L:0,MIN:0,FG_PCT:0,FG3_PCT:0,FT_PCT:0,PTS:0,REB:0,AST:0,STL:0,BLK:0,TOV:0},a.getTable=a.getTable.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"getTable",value:function(){var e="http://localhost:5002/rankplayers?mode=custom"+("&W="+this.state.W)+("&L="+this.state.L)+("&MIN="+this.state.MIN)+("&FG_PCT="+this.state.FG_PCT)+("&FG3_PCT="+this.state.FG3_PCT)+("&FT_PCT="+this.state.FT_PCT)+("&PTS="+this.state.PTS)+("&REB="+this.state.REB)+("&AST="+this.state.AST)+("&STL="+this.state.STL)+("&BLK="+this.state.BLK)+("&TOV="+this.state.TOV);console.log(e),s.a.render(l.a.createElement(p,{query:e}),document.getElementById("table"))}},{key:"render",value:function(){return l.a.createElement("div",{className:"text-center text-secondary",style:{marginTop:"10%"}},l.a.createElement("h6",null,"Please select which categories you would like to be included"),l.a.createElement("div",{className:"text-left",style:{marginLeft:"25%"}},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.W=!this.state.W}),"Wins")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.L=!this.state.L}),"Losses")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.MIN=!this.state.MIN}),"Minuntes Played")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.FG_PCT=!this.state.FG_PCT}),"Field Goal %")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.FG3_PCT=!this.state.FG3_PCT}),"3-Point %")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.FT_PCT=!this.state.FT_PCT}),"Free Throw %")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.PTS=!this.state.PTS}),"Points")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.REB=!this.state.REB}),"Rebounds")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.AST=!this.state.AST}),"Assists")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.STL=!this.state.STL}),"Steals")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.BLK=!this.state.BLK}),"Blocks")),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"",onChange:this.state.TOV=!this.state.TOV}),"Turnovers"))),l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:this.getTable}," ","Submit"," ")))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).loadMain=a.loadMain.bind(Object(h.a)(Object(h.a)(a))),a.loadCustom=a.loadCustom.bind(Object(h.a)(Object(h.a)(a))),a.loadAbout=a.loadAbout.bind(Object(h.a)(Object(h.a)(a))),a.state={mode:"main"},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"loadMain",value:function(){this.setState({mode:"main"})}},{key:"loadCustom",value:function(){this.setState({mode:"custom"})}},{key:"loadAbout",value:function(){this.setState({mode:"about"})}},{key:"componentDidUpdate",value:function(){"main"===this.state.mode&&s.a.render(l.a.createElement(E,null),document.getElementById("table")),"custom"===this.state.mode&&s.a.render(l.a.createElement(v,null),document.getElementById("table")),"about"===this.state.mode&&s.a.render(l.a.createElement(y,null),document.getElementById("table"))}},{key:"componentDidMount",value:function(){s.a.render(l.a.createElement(E,null),document.getElementById("table"))}}]),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark"},l.a.createElement("div",{className:"container-fluid justify-content-center"},l.a.createElement("ul",{className:"nav list-inline"},l.a.createElement("li",{className:"btn rounded list-inline-item"},l.a.createElement("a",{href:"#",style:{color:"linen"},onClick:this.loadMain},"Official Fantasy")),l.a.createElement("li",{className:"btn rounded list-inline-item",onClick:this.loadCustom},l.a.createElement("a",{href:"#",style:{color:"linen"}},"Custom Fantasy")),l.a.createElement("li",{className:"btn rounded list-inline-item",onClick:this.loadAbout},l.a.createElement("a",{href:"#",style:{color:"linen"}},"About")))))}}]),t}(n.Component);a(86);s.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.d8bce974.chunk.js.map