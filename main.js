Vue.component('checkbox', {
	props: ['choice'],
  template: '<div class="custom-checkbox"><input type="checkbox" :id="choice.id" v-model="choice.check"><label :for="choice.id">{{ choice.name }}</label></div>'
})

new Vue({
	el: "#app",
  data: {
  	selections: [
    	{name: "Apples", id: "apples", check: true},
      {name: "Plums", id: "plums", check: false},
      {name: "Peaches", id: "peaches", check: true},
      {name: "Pears", id: "pears", check: false},
      {name: "Bananas", id: "bananas", check: false}
    ]
  }
})
