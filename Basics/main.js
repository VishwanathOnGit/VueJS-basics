var app = new Vue ({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue ({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        todos: [
            { text: 'Learn JS'},
            { text: 'Learn PHP'},
            { text: 'Build something awesome' }
        ]
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        message: "Hello VueJS Here!"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

/* 
    Component
*/

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app5 = new Vue({
    el: '#app-5',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })