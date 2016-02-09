/**
 * is-uri - Determinate if a string is a valid URI.
 * @version v1.2.0
 * @link    https://github.com/Kikobeats/is-uri
 * @license MIT
 */require=function r(e,t,o){function n(i,s){if(!t[i]){if(!e[i]){var f="function"==typeof require&&require;if(!s&&f)return f(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var c=t[i]={exports:{}};e[i][0].call(c.exports,function(r){var t=e[i][1][r];return n(t?t:r)},c,c.exports,r,e,t,o)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)n(o[i]);return n}({1:[function(r,e,t){"use strict";e.exports=function(r,e){e=e||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},o=t.parser[e.strictMode?"strict":"loose"].exec(r),n={},u=14;u--;)n[t.key[u]]=o[u]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,function(r,e,o){e&&(n[t.q.name][e]=o)}),n}},{}],2:[function(r,e,t){"use strict";var o=r("./ucs2/decode"),n=r("./lib/adapt"),u=String.fromCharCode,i=Math.floor,s=2147483647,f=36,a="-",c=72,p=128,d=1,h=26,l=function(r,e){return r+22+75*(26>r)-((0!==e)<<5)};e.exports=function(r){var e,t,v,y,w,q,g,x,C,m,O,E,M,$,b,k=[];for(r=o(r),E=r.length,e=p,t=0,w=c,q=0;E>q;++q)O=r[q],128>O&&k.push(u(O));for(v=y=k.length,y&&k.push(a);E>v;){for(g=s,q=0;E>q;++q)O=r[q],O>=e&&g>O&&(g=O);if(M=v+1,g-e>i((s-t)/M))throw new RangeError("Overflow: input needs wider integers to process");for(t+=(g-e)*M,e=g,q=0;E>q;++q){if(O=r[q],e>O&&++t>s)throw new RangeError("Overflow: input needs wider integers to process");if(O===e){for(x=t,C=f;!0&&(m=w>=C?d:C>=w+h?h:C-w,!(m>x));C+=f)b=x-m,$=f-m,k.push(u(l(m+b%$,0))),x=i(b/$);k.push(u(l(x,0))),w=n(t,M,v===y),t=0,++v}}++t,++e}return k.join("")}},{"./lib/adapt":3,"./ucs2/decode":4}],3:[function(r,e,t){"use strict";var o=Math.floor,n=36,u=1,i=26,s=700,f=38,a=n-u;e.exports=function(r,e,t){var u=0;for(r=t?o(r/s):r>>1,r+=o(r/e),u=0;r>a*i>>1;u+=n)r=o(r/a);return o(u+(a+1)*r/(r+f))}},{}],4:[function(r,e,t){"use strict";e.exports=function(r){for(var e,t,o=[],n=0,u=r.length;u>n;)e=r.charCodeAt(n++),e>=55296&&56319>=e&&u>n?(t=r.charCodeAt(n++),56320===(64512&t)?o.push(((1023&e)<<10)+(1023&t)+65536):(o.push(e),n--)):o.push(e);return o}},{}],"is-uri":[function(r,e,t){"use strict";var o=r("parse-uri"),n=r("punycode2/encode"),u=/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i,i=/%[^0-9a-f]/i,s=/%[0-9a-f](:?[^0-9a-f]|$)/i,f=/^[a-z][a-z0-9\+\-\.]*$/,a=/^\/\//;e.exports=function(r,e){if(!r)return!1;if("object"!=typeof r){if(r=n(r),u.test(r))return!1;if(i.test(r)||s.test(r))return!1;r=o(r,e)}return r.protocol&&f.test(r.protocol.toLowerCase())?!r.authority&&a.test(r.path)?!1:!0:!1}},{"parse-uri":1,"punycode2/encode":2}]},{},[]);