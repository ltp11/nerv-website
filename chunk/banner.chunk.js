webpackJsonp([3],{"50":function(e,t,o){Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),n=c(o(0)),r=o(5),i=o(1),l=c(o(6)),s=c(o(71));function c(e){return e&&e.__esModule?e:{"default":e}}o(74);var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showTip=function(){e.state.tip||(e.setState({"tip":!0}),setTimeout(function(){e.setState({"tip":!1})},1600))},e.playVideo=function(){e.state.play||e.setState({"play":!0})},e.stopVideo=function(){e.state.play&&e.setState({"play":!1})},e.state={"tip":!1,"play":!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["default"].Component),a(t,[{"key":"render","value":function(){return function(){var e=r.isLocaleChinese.call(this);return n["default"].createElement("div",{"className":"banner"},n["default"].createElement("div",{"className":"banner_main"},n["default"].createElement(l["default"],{"show":this.state.tip}),n["default"].createElement(s["default"],{"play":this.state.play,"pause":this.stopVideo}),n["default"].createElement("h1",{"className":"banner_tit"},"Hi, I'm Nerv"," ",e&&n["default"].createElement("span",{"onClick":this.playVideo,"className":"banner_play_btn"})),n["default"].createElement("h2",{"className":"banner_desc"},n["default"].createElement(i.FormattedMessage,{"id":"banner_desc"})),n["default"].createElement("div",{"className":"banner_btns"},e&&n["default"].createElement("a",{"className":"toDoc","href":"https://nervjs.github.io/docs/"},"起步"),n["default"].createElement("a",{"className":"toGithub","href":"https://github.com/NervJS/nerv","target":"_blank"},"GitHub"))),n["default"].createElement("div",{"className":"banner_quickstart"},n["default"].createElement("pre",{"className":"banner_code_main","style":"color: rgb(169, 183, 198); background: rgb(40, 43, 46); display: block; overflow-x: auto; padding: 30px; border-radius: 4px;"},n["default"].createElement("code",null,n["default"].createElement("span",{"style":"color: rgb(128, 128, 128);"},"/** Quick Start With NPM **/"),n["default"].createElement("br",null),"npm install nervjs --save"))))}}()}]),t}();t["default"]=u},"71":function(e,t,o){Object.defineProperty(t,"__esModule",{"value":!0});var a,n=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),r=o(0),i=(a=r)&&a.__esModule?a:{"default":a};o(72);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),n(t,[{"key":"render","value":function(){return function(){var e=this.props,t=e.play,o=e.pause,a=this.refs.video,n=document.getElementsByTagName("body")[0],r=document.getElementsByTagName("html")[0];return t?(a&&(a.play(),a.currentTime=0),n.style=r.style="width: 100%;height: 100%;overflow:hidden;"):(n.style=r.style="",a&&a.pause()),i["default"].createElement("div",{"className":t?"video":"video hide"},i["default"].createElement("video",{"src":"http://storage.jd.com/index/nerv_720p.mp4","ref":"video","preload":"auto"}),i["default"].createElement("span",{"className":"video_close","onClick":o}))}}()}]),t}();t["default"]=l},"72":function(e,t,o){var a=o(73);"string"==typeof a&&(a=[[e.i,a,""]]);var n={"transform":void 0};o(49)(a,n);a.locals&&(e.exports=a.locals)},"73":function(e,t,o){(e.exports=o(48)(void 0)).push([e.i,'.video{position:fixed;top:0;bottom:0;margin:auto;z-index:999;height:100%;overflow:hidden;opacity:1;-webkit-transition:all .5s ease;-o-transition:all .5s ease;-moz-transition:all .5s ease;transition:all .5s ease}.video,.video video{width:100%}.video.hide{opacity:0;z-index:-1}.video_close{width:30px;height:30px;display:inline-block;position:absolute;right:20px;top:20px;-moz-border-radius:50%;border-radius:50%;border:2px solid #999;cursor:pointer;-webkit-transition:all .3s ease;-o-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}.video_close:hover{border-color:#ccc}.video_close:hover:after,.video_close:hover:before{background-color:#ccc}.video_close:after,.video_close:before{width:16px;height:2px;background-color:#999;content:"";display:block;position:relative;left:7px}.video_close:before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:15px}.video_close:after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:13px}',""])},"74":function(e,t,o){var a=o(75);"string"==typeof a&&(a=[[e.i,a,""]]);var n={"transform":void 0};o(49)(a,n);a.locals&&(e.exports=a.locals)},"75":function(e,t,o){(e.exports=o(48)(void 0)).push([e.i,".banner{position:relative;top:0;width:100%;height:500px;background-image:url("+o(76)+');-moz-background-size:100% 100%;background-size:100% 100%;background-repeat:no-repeat}.banner_main{color:#fff;text-align:center;padding:175px 0 0}.banner_code_main{width:400px;font-size:14px;text-align:center;top:70px}.banner_code_main,.banner_tit{margin:0 auto;position:relative}.banner_tit{font-family:Seravek,"Sans-serif";font-size:50px;width:320px;text-align:left}.banner_desc{font-weight:300;font-size:17px;line-height:.5}.banner_play_btn{width:40px;height:40px;display:inline-block;background-image:url('+o(77)+');background-repeat:no-repeat;-moz-background-size:100% auto;background-size:100% auto;position:absolute;top:20px;margin-left:10px;cursor:pointer;-webkit-transition:all .3s ease;-o-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease;opacity:.5}.banner_play_btn:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:1}.banner_btns{width:280px;margin:32px auto 0}.banner_btns a{font-size:14px;-moz-border-radius:20px;border-radius:20px;width:125px;height:38px;line-height:38px;color:#fff;z-index:10;background-color:#4573de;-webkit-transition:all .3s ease;-o-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}.banner_btns a,.banner_btns a:before{display:inline-block;position:relative}.banner_btns a:before{top:4px;margin-right:8px;background-repeat:no-repeat;content:"";width:18px;height:18px;-moz-background-size:100%;background-size:100%}.banner_btns a:hover{color:#fff;background-color:#3361d8}.banner_btns .toDoc{margin-right:18px}.banner_btns .toDoc:before{background-image:url('+o(78)+")}.banner_btns .toGithub:before{background-image:url("+o(79)+")}",""])},"76":function(e,t,o){e.exports=o.p+"static/images/banner.jpg"},"77":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEVMaXH////////////////////////////////////////////////////////////6w4mEAAAAD3RSTlMAgNoRwKcf7kSTXDAJ928Ah6F+AAAEuUlEQVR42u1bWZLjIAw1+2Y797/tZMYLOANIAtyurop+u2OE9LSLafrSl770i0loHawNWosfP1p7pvgrIa6Y1z9z9myZXF5ZMpLZ+Wahr/IFkFzvU4hVywtBi7K3XJ6ZF5r4OloV2uUubziXkvMcZ8aN1IRWnzd8gz4kl5zDp1m8yY0yi5kt18O9KBnnlYllHXK+5xfJhvp/B5cqhPfDUaR2Jz1GYD79iepEY4j3WfA6DYm98tBzPkuOFzSriUJoR8IcZanIRqWTH7eqn/dhyZ6/l01A0OfvWasETz1I0XG+6TAlf4CR01V4wF92+bPAGzk49a9G+REaDubjfNfvSY84Ilvsj00DyNGFeTDtpyHEqNdZu11YQQZIewrLQPlfRGoExQDcNJAkAYiKDlq8WSGkainSInikTa+LxrI6PLNekYJlNwDgAgPAtPUmKX5DhSVQn1Y3KSBRQhWHGuc0tdXtSjAz6LLqFqDVv0jNPdlOAiiCXU0rxq2++WRUFhwkAgfL6FKkUXNFDYhgXkCUuM9uAC3r39jnxQxuc1YCdJMpkRL2UDcyCfogtReI1kZVmJVsCK6qoYpQxXai/ijZCVDYhTxXvDAHA5X/r/DAp847zPL+mIM2uLEYD/OxdMWWjqrs6XYNaJCBVCeJV8AlkJsQTVk9cqIwcKlBcVBYikBTcKjIMHCBgtJYO8gp2sBxMMvAO8xFKMDeeS2BYIPAMjUwMInEJD3KF5kmCBQZeH82QkFaDAh04eOskYErFAQMAlvAoG9m4P1XEwM1GM/WAmOhg4HUO1daImshHGyqmXsYeOvhhIIJdVckC3Fm6mMg8c7FlojOhxwNRiIcA5NgQDtgzl9VY+oWDAPRO5dEYLJfCeMYOCyqFFd5lr2hDAhT04HMeiKLqUiwDGwikFUGQlYCQxngVQWFO1WwqZkmAT0ehIyEATHKD8TgrElWMA9j4PCFRTzl/cCEyEcwDJxRuVxiF07iYE6MYCDGw3IwKjl9hWiNAAwIhhlVlTyOQ3Rn6wwkA8ZambIWTMQjumPVlEwia3ZXSL1sV1JKKFVLqZfoSMux6WC091zqxZsLE1JtVJa0ayzNCCVB/RjbVJyS6+OyoEU9kcozQCoLkwpw7mlQiNbCOH5CVjwEvkVDbg3ESLRWWlBwk2rL+BO/S+iT2WonEG7Tyf2+2jJ6ewhoEbU2KkmzZQ1MAwzoCv7b56F1ix0AMwY2q8VlT8cQR4tgNx7Rrk+6MfS9DrgbjxlY7G1iw8hTEw134/d/AeoTYW3TzEaCID/nAbcMrTxmeCpuHNsZeB5z+uM7BpcKuZNw1+jWY2fiNw2vd3i/AlpUY8f3E2EpYb5jgWG/FUf9840rHEjv8fQSy/NrPHGRaR15f8pW2LnKxYbpn2hWTy+zPb/Ol3Dw0ELj8yudl6XWpt1g37nUetmqdk+s9U7pYjNxYSRdbO5yZ7Zxtfs1aLX7Y7kd9XZj7HL7dFkS+Lu9AYjh+g6FD0ms5uvzDu4qDxwurz3MsHAKPvEQ2SceQ1+ZuNx7ntojFzb6udHDz3w2OErU6Tc9dNo0wfiTT732yvTJx26nq/NMfj73sz/03C8VxvHgcZ6+9KUv/WL6A/4ynJUoyyypAAAAAElFTkSuQmCC"},"78":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAALVBMVEVMaXH///////////////////////////////////////////////////////9xAJ22AAAADnRSTlMA8BCa0FBlQDCwwIDgIJBAT2oAAAH7SURBVEjHtVeJroQgDKSc4vX/n/tarkUoYEwe2WwUHGcovRSCG5tV+3njOHdlN/FyGA/3Y4A3a5Q8CmoPv4Q95BsYKOvw7r7xz1kFS6gJ+1Iu3WqdLpwK+3UjXFhWF7d0xTVepqZ9XaO3XrRfzcjdUCbYmQEs7lV3Z7Oxs80zqAmaZ+TJ6+h30zyl3+ASsrHnG1xEVrY1vXYGI7MtXL1Bu/RggIC06AlZ3IHnt6LzKCpe4nkeaRLZrxUdnn4KkQtfITOhWtLdt68sGSlXhCZGR7H6lVSbOWGkK0ITJd35yr4jukooRVmkgmyuCV0lVGTINlFqShoxbeBudKB2QfcUGp3AEtot6BqhaZN7SEmDPMIKDWlsFycPNBXOix6oBe+n6IaHHQiN/ipoSXcrnubsQChltQHQkL0TsheagTsrNNsduMxAUjnj+KzhYIRm4zDHkYQKd468imT2DpCESlwBvr4FB+hdLgolOj/IfAHTObkhCRO67ORtWKFQNaUrkdgEsr/Pa0pXAtm0ufmY05XU8UhWKBTmdL9k9UiPMRHOy0hJj1VCpmCCRW/yS8hVCYAlXV0CfkVHAixbISo6tX1jmZPLIvkoc98L6/dSzrUF75qHz+1Kmv3QIH1vyb43gSnqv7Sdi0b3X1rrGCKqbeaVES8HfT6ERK+Hnw9/xX0iAAEb3wAAAAAASUVORK5CYII="},"79":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAMAAACSXLn7AAAAMFBMVEVMaXH////////////////////////////////////////////////////////////6w4mEAAAAD3RSTlMAwPA/gBBnmDDgINBQsK+axMojAAACI0lEQVRIx5VWWYLrIAyrwewQ7n/bZ7OTkHYeHzMNQbaQjMnncxhKlqE+fxleXyK3IS7tfyzXId9G0N+WOw6bdCWjpE6czL1BLNBbiPtkLJP2GJ6igT/HEYckhqbjOXWkUOawHl5lVPBAmEOMb+/1j/UFsezD5px+GZpyHlopl11TXp3qRPVFfQo7mJhdcl8uoXMhGthCiL6BxLUA3mq8AC7U1rNtna7JQrUE7ccHMrh7LQFNjsA1Rf/PACyGCwBEAFEsxg7gyI24HwDipvRQw2rFPLuCPudYiMMi9kMmtVgUClYMR+TRDtq3HP6KopYdr8LJhzAolLUx5/koTx7LGZI3gTkMEdy5KibpQDKuqsEZAJvuUyTzDjDjV/rA/2WAjdLLHtxGaQLiwbZmsNwAI+6o333gEL6UnZxxR/3uxo3q5zKR/CfO3E+ryWjhJ+lihll6gcCtl3kUy+mvwptFHF16KZ017vaIV+m1cZHLzCq35ax7I/YDJ4xam5HvbpTSraEk8tEO3PcTyt1A6ECel6LLjXxmuD3ivWpjr0HXjodqapum8s3wMKFYUzq5UPX7+cDl0TRSvMlyZ3Xn5UbIbObYCqzjCbBiM5UeHdOwBmgcANbVkGv/HhPyCaCA+XbPkaj9InsCuGQe/YGStjvxDuCO7Oz5IsvG3wGelXi5/vi2zBd9DIRuaNCQ329XSoK19OIof16OXz9SdFo+BugzIN2v9H/qux3KYspOagAAAABJRU5ErkJggg=="}});