<template>
    <div id="third">
        <h1>To Do List Demo</h1>
        <a> written by {{ author }} </a>

        <todolist :todos="todos"></todolist>
				<addtodo v-on:add-todo="addTodo"></addtodo>
        <ul>
            <li><router-link to="/">To home page.</router-link></li>
            <li><router-link to="/first">To first page.</router-link></li>
            <li><router-link to="/second">To second page.</router-link></li>
        </ul>
    </div>
</template>
<script>
import todolist from './todolist'
import addtodo from './addtodo'
export default {
    name: 'third',
    data() {
        return {
            author: "Je Wei",
						todos: [{
							title: 'Todo A',
							project: 'Project A',
							done: false,
						}, {
							title: 'Todo B',
							project: 'Project B',
							done: true,
						}, {
							title: 'Todo C',
							project: 'Project C',
							done: false,
						}, {
							title: 'Todo D',
							project: 'Project D',
							done: false,
						}],
        }
    },
    components: {
			todolist,
			addtodo
		},
		methods: {
			addTodo(todo) {
				this.todos.push({
					title: todo.title,
					project: todo.project,
					done: false,
				});
				// console.info('add to do!');
			},
		}
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
