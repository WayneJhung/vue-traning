<template>
  <div class='ui basic content center aligned segment'>
		<mt-button plain type="default" v-on:click="openForm" v-show="!isCreating">Add</mt-button>
		<p v-show="!isCreating && isShowInfo" :ref="setNewInfo">{{newTodoText}}</p>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Project</label>
            <input v-model="projectText" type='text' ref='project' defaultValue="">
          </div>
          <div class=''>
            <button class='ui basic blue button' v-on:click="sendForm">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  data() {
    return {
			newTodoText: '',
      titleText: '',
      projectText: '',
      isCreating: false,
			isShowInfo: false
    };
  },
	computed: {
		setNewInfo() {
			// let isShowInfo = this.isShowInfo;
			setTimeout(set => {
				// console.log(this);
				this.isShowInfo = false;
				Indicator.close();
			}, 1000);
			return this.isShowInfo;
		}
	},
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit('add-todo', {
          title,
          project,
          done: false,
        });
        this.newTodoText = `Sucess! You created ${title}/${project} to do!`;
				this.isShowInfo = true;
				Indicator.open();
      }
      this.isCreating = false;
    },
  },
};
</script>
