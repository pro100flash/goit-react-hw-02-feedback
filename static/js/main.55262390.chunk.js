(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={notification:"Notification_notification__1bXGw"}},11:function(e,t,n){e.exports={feedback:"Section_feedback__3MgC-"}},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(5),i=n.n(o),r=n(2),s=n(4),b=n(6),d=n(7),l=n(13),j=n(12),u=n(8),h=n.n(u),f=n(0),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)("button",{className:h.a.btn,type:"button",name:e,onClick:n,children:e},e)}))})},p=n(9),g=n.n(p),k=n(10),x=n.n(k),v=function(e){var t=e.message;return Object(f.jsx)("p",{className:x.a.notification,children:t})};v.protoTypes={message:g.a.string.isRequired};var m=v,F=n(11),_=n.n(F),P=function(e){var t=e.title,n=e.children;return Object(f.jsxs)("section",{className:_.a.feedback,children:[Object(f.jsx)("h2",{children:t}),n]})},y=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{children:["Good: ",t]}),Object(f.jsxs)("p",{children:["Neutral: ",n]}),Object(f.jsxs)("p",{children:["Bad: ",a]}),Object(f.jsxs)("p",{children:["Total: ",c]}),Object(f.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})},N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var n=t.target.name;e.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(r.a)({},n,e.state[n]+1))}))},e.countTotalFeedback=function(){return e.state.good+e.state.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good?Math.round(e.state.good/e.countTotalFeedback()*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P,{title:"Please leave feedback",children:Object(f.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.handleClick})}),this.countTotalFeedback()?Object(f.jsx)(P,{title:"Statistic",children:Object(f.jsx)(y,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(f.jsx)(m,{message:"No feedback given"})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={btn:"FeedbackOption_btn__dNRaS"}}},[[21,1,2]]]);
//# sourceMappingURL=main.55262390.chunk.js.map