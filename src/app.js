import Vue from "vue"
import button from "./button";
import icon from "./icon";


Vue.component('l-button', button)
Vue.component('l-icon', icon)

new Vue({
    el: "#app",
    data: {
        loading1 : false,
        loading2 : false,
        loading3 : false,
    }
})