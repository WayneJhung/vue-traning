<template>
  <div class='ui centered card grid'>
		<div class="content" v-show="!isEditing">
      <div class='header'>
          {{ todo.title }}
      </div>
      <div class='meta'>
          {{ todo.project }}
      </div>
      <div class='extra content'>
					<mt-button size="small" type="danger" class='right floated' v-on:click="deleteTodo(todo)">Delete</mt-button>
					<mt-button size="small" type="primary" class='right floated' v-on:click="showForm">Edit</mt-button>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title" >
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.project" >
        </div>
        <div class=''>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' @click="processingTodo(todo)" v-show="!isEditing && todo.done">
        Completed
    </div>
    <div class='ui bottom attached red basic button' @click="completeTodo(todo)" v-show="!isEditing && !todo.done">
        Processing
    </div>
</div>
</template>

<script type="text/javascript">
  export default {
		name: 'todo',
    props: ['todo'],
		data() {
			return {
				isEditing: false,
			};
		},
		methods: {
			showForm() {
				this.isEditing = true;
			},
			hideForm() {
				this.isEditing = false;
			},
			deleteTodo(todo) {
				this.$emit('delete-todo', todo);
			},
			completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
			processingTodo(todo) {
				this.$emit('processing-todo', todo)
			}
		}
  };
</script>
