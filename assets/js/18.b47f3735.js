(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{498:function(t,n,o){"use strict";o.r(n);var e=o(3),a=o(456);e.a.config.productionTip=!1,e.a.use(a,{load:{key:"AIzaSyD375RY8C35EDIqWTOcHXRS3uzGWO4D1Bk",libraries:"places"}});var i={name:"DrawGoogleMap",data:function(){return{center:{lat:59.425246,lng:24.76961},locations:[],currentLocation:null}},mounted:function(){this.setLocationLatLng()},methods:{setPlace:function(t){this.currentLocation=t},setLocationLatLng:function(){var t=this;navigator.geolocation.getCurrentPosition((function(n){t.center={lat:n.coords.latitude,lng:n.coords.longitude}})),this.locations=[{lat:59.429786,lng:24.729415,label:"Catshome"}]}}},c=o(34),r=Object(c.a)(i,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("gmap-map",{staticStyle:{width:"100%",height:"555px"},attrs:{center:t.center,zoom:13}},t._l(t.locations,(function(n,e){return o("gmap-marker",{key:e,attrs:{position:n},on:{click:function(o){t.center=n}}})})),1)],1)}),[],!1,null,null,null);n.default=r.exports}}]);