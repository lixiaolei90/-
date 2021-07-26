import Vue from "vue"
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from './button-group'

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)

new Vue({
	el: "#app",
	data: {
		loading1: false,
		loading2: false,
		loading3: false,
	}
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect
//单元测试
//测icon
try {
	{
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: "settings"
			}
		})
		vm.$mount()
		let useElement = vm.$el.querySelector('use')
		let href = useElement.getAttribute('xlink:href')
		expect(href).to.eq('#i-settings')
		vm.$el.remove()
		vm.$destroy()
	}
//测loading
	{
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: "settings",
				loading: true
			}
		})
		vm.$mount()
		let useElement = vm.$el.querySelector('use')
		let href = useElement.getAttribute('xlink:href')
		expect(href).to.eq('#i-loading')
		vm.$el.remove()
		vm.$destroy()
	}
//测icon-position
	{
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: "settings",
				loading: true,
				iconPosition: 'right'
			}
		})
		vm.$mount(div)

		let svg = vm.$el.querySelector('svg')
		let {order} = window.getComputedStyle(svg)
		expect(order).to.eq('2')
		vm.$el.remove()
		vm.$destroy()
	}
//测试click mock
	{
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: "settings",
			}
		})
		vm.$mount()
		let spy = chai.spy(function () {
		})
		vm.$on('click', spy)
		let button = vm.$el
		button.click()
		expect(spy).to.have.been.called()

	}
} catch (error) {
	window.errors = [error]
} finally {
	window.errors && window.errors.forEach((error) => {
		console.error(error.message)
	})
}







