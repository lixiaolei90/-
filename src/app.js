import Vue from "vue"
import button from "./button";
import icon from "./icon";
import chai from 'chai'

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

const expect = require('chai').expect;
//单元测试
//测试icon
{  
    const Constructor = Vue.extend(button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    vm.$el.remove();
    vm.$destroy();
}
//测试loading
{
    const Constructor = Vue.extend(button);
    const vm = new Constructor({
        propsData: {
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
}
//测试iconPostion
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: "right"
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
}
// 测试click
{       
    const Constructor = Vue.extend(button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount();
    vm.$on('click', function(){
        console.log('click')
    });
    let gbutton = vm.$el.querySelector('button');
    gbutton.click();
}