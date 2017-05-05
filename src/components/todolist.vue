<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
		<todo @delete-todo="deleteTodo" @complete-todo="completeTodo" @processing-todo="processingTodo" v-for="(todo, key, index) in todos" :todo="todo" :key="index"></todo>
  </div>
</template>

<script>
import todo from './todo'
export default {
	name: 'todolist',
	props: ['todos'],
	components: {
		todo,
	},
	methods: {
		deleteTodo(todo) {
			// console.dir(todo);
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
		completeTodo(todo) {
			// console.dir(todo);
			const todoIndex = this.todos.indexOf(todo);
			this.todos[todoIndex].done = true;
		},
		processingTodo(todo) {
			// console.dir(todo);
			const todoIndex = this.todos.indexOf(todo);
			this.todos[todoIndex].done = false;
		}
	}
}
</script>
<style>
	.ui.centered.card {
		margin: 1em 0;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		width: 290px;
		min-height: 0;
		background: #FFF;
		padding: 0;
		border: none;
		border-radius: .28571429rem;
		box-shadow: 0 1px 3px 0 #D4D4D5, 0 0 0 1px #D4D4D5;
		-webkit-transition: box-shadow .1s ease,-webkit-transform .1s ease;
		transition: box-shadow .1s ease,-webkit-transform .1s ease;
		transition: box-shadow .1s ease,transform .1s ease;
		transition: box-shadow .1s ease,transform .1s ease,-webkit-transform .1s ease;
		z-index: '';
	}
	.ui.card>.content,.ui.cards>.card>.content {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		border: none;
		border-top: 1px solid rgba(34,36,38,.1);
		background: 0 0;
		margin: 0;
		padding: 1em;
		box-shadow: none;
		font-size: 1em;
		border-radius: 0
	}
	.ui.card>.content>.header:not(.ui),.ui.cards>.card>.content>.header:not(.ui) {
		text-align: left;
		font-weight: 700;
		font-size: 1.28571429em;
		margin-top: -.21425em;
		line-height: 1.2857em
	}
	.ui.card .meta,.ui.cards>.card .meta {
		text-align: left;
		font-size: 1em;
		color: rgba(0,0,0,.4)
	}
	.ui.card [class*="right floated"],.ui.cards>.card [class*="right floated"] {
		float: right
	}
	*,:after,:before {
			box-sizing: inherit;
	}
	i.icon,i.icons {
			font-size: 1em
	}
	i.icon {
			display: inline-block;
			opacity: 1;
			margin: 0 .25rem 0 0;
			width: 1.18em;
			height: 1em;
			font-family: Icons;
			font-style: normal;
			font-weight: 400;
			text-decoration: inherit;
			text-align: center;
			speak: none;
			font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden
	}
	i.icon:before {
			background: 0 0!important
	}
	i.icon.loading {
			height: 1em;
			line-height: 1;
			-webkit-animation: icon-loading 2s linear infinite;
			animation: icon-loading 2s linear infinite
	}
	.ui.card>.content a:not(.ui),.ui.cards>.card>.content a:not(.ui) {
			color: '';
			-webkit-transition: color .1s ease;
			transition: color .1s ease
	}

	.ui.card>.content a:not(.ui):hover,.ui.cards>.card>.content a:not(.ui):hover {
			color: ''
	}

	.ui.card>.content>a.header,.ui.cards>.card>.content>a.header {
			color: rgba(0,0,0,.85)
	}

	.ui.card>.content>a.header:hover,.ui.cards>.card>.content>a.header:hover {
			color: #1e70bf
	}

	.ui.card .meta>a:not(.ui),.ui.cards>.card .meta>a:not(.ui) {
			color: rgba(0,0,0,.4)
	}

	.ui.card .meta>a:not(.ui):hover,.ui.cards>.card .meta>a:not(.ui):hover {
			color: rgba(0,0,0,.87)
	}

	.ui.card>.button,.ui.card>.buttons,.ui.cards>.card>.button,.ui.cards>.card>.buttons {
			margin: 0 -1px;
			// width: calc(100% + 2px)
	}

	.ui.card .dimmer,.ui.cards>.card .dimmer {
			background-color: '';
			z-index: 10
	}

	.ui.card>.content .star.icon,.ui.cards>.card>.content .star.icon {
			cursor: pointer;
			opacity: .75;
			-webkit-transition: color .1s ease;
			transition: color .1s ease
	}

	.ui.card>.content .star.icon:hover,.ui.cards>.card>.content .star.icon:hover {
			opacity: 1;
			color: #FFB70A
	}

	.ui.card>.content .active.star.icon,.ui.cards>.card>.content .active.star.icon {
			color: #FFE623
	}

	.ui.card>.content .like.icon,.ui.cards>.card>.content .like.icon {
			cursor: pointer;
			opacity: .75;
			-webkit-transition: color .1s ease;
			transition: color .1s ease
	}

	.ui.card>.content .like.icon:hover,.ui.cards>.card>.content .like.icon:hover {
			opacity: 1;
			color: #FF2733
	}

	.ui.card>.content .active.like.icon,.ui.cards>.card>.content .active.like.icon {
			color: #FF2733
	}

	.ui.card>.extra,.ui.cards>.card>.extra {
			max-width: 100%;
			min-height: 0!important;
			-webkit-box-flex: 0;
			-ms-flex-positive: 0;
			flex-grow: 0;
			border-top: 1px solid rgba(0,0,0,.05)!important;
			position: static;
			background: 0 0;
			width: auto;
			margin: 0;
			padding: .75em 1em;
			top: 0;
			left: 0;
			color: rgba(0,0,0,.4);
			box-shadow: none;
			-webkit-transition: color .1s ease;
			transition: color .1s ease
	}

	.ui.card>.extra a:not(.ui),.ui.cards>.card>.extra a:not(.ui) {
			color: rgba(0,0,0,.4)
	}

	.ui.card>.extra a:not(.ui):hover,.ui.cards>.card>.extra a:not(.ui):hover {
			color: #1e70bf
	}
	.ui.basic.green.button,.ui.basic.green.buttons .button {
			box-shadow: 0 0 0 1px #21BA45 inset!important;
			color: #21BA45!important
	}
	.ui.attached.bottom.button {
			border-radius: 0 0 .28571429rem .28571429rem;
	}
	.ui.basic.button,.ui.basic.buttons .button {
			background: 0 0!important;
			color: rgba(0,0,0,.6)!important;
			font-weight: 400;
			border-radius: .28571429rem;
			text-transform: none;
			text-shadow: none!important;
			box-shadow: 0 0 0 1px rgba(34,36,38,.15) inset;
	}
	.ui.basic.buttons {
			box-shadow: none;
			border: 1px solid rgba(34,36,38,.15);
			border-radius: .28571429rem
	}
	.ui.button,.ui.buttons .button,.ui.buttons .or {
			font-size: 1rem;
	}
	.ui.button {
			cursor: pointer;
			display: inline-block;
			min-height: 1em;
			outline: 0;
			border: none;
			vertical-align: baseline;
			background: #E0E1E2;
			color: rgba(0,0,0,.6);
			font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
			margin: 0 .25em 0 0;
			padding: .78571429em 1.5em;
			text-transform: none;
			text-shadow: none;
			font-weight: 700;
			line-height: 1em;
			font-style: normal;
			text-align: center;
			text-decoration: none;
			border-radius: .28571429rem;
			box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			-webkit-transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
			transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
			will-change: '';
			-webkit-tap-highlight-color: transparent
	}

	.ui.button:hover {
			background-color: #CACBCD;
			background-image: none;
			box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;
			color: rgba(0,0,0,.8)
	}
	.ui.basic.red.button,.ui.basic.red.buttons .button {
			box-shadow: 0 0 0 1px #DB2828 inset!important;
			color: #DB2828!important
	}
	.ui.attached.bottom.button {
			border-radius: 0 0 .28571429rem .28571429rem;
	}
	.ui.form .field {
			clear: both;
			margin: 0 0 1em
	}

	.ui.form .field:last-child,.ui.form .fields:last-child .field {
			margin-bottom: 0
	}

	.ui.form .fields .field {
			clear: both;
			margin: 0
	}

	.ui.form .field>label {
			display: block;
			margin: 0 0 .28571429rem;
			color: rgba(0,0,0,.87);
			font-size: .92857143em;
			font-weight: 700;
			text-transform: none
	}

	.ui.form input:not([type]),.ui.form input[type=text],.ui.form input[type=email],.ui.form input[type=search],.ui.form input[type=password],.ui.form input[type=date],.ui.form input[type=datetime-local],.ui.form input[type=tel],.ui.form input[type=time],.ui.form input[type=file],.ui.form input[type=url],.ui.form input[type=number],.ui.form textarea {
			width: 100%;
			vertical-align: top
	}

	.ui.centered.grid>.column:not(.aligned):not(.justified):not(.row),.ui.centered.grid>.row>.column:not(.aligned):not(.justified),.ui.grid .centered.row>.column:not(.aligned):not(.justified) {
			text-align: left;
	}
	.ui.form input:not([type]),.ui.form input[type=text],.ui.form input[type=email],.ui.form input[type=search],.ui.form input[type=password],.ui.form input[type=date],.ui.form input[type=datetime-local],.ui.form input[type=tel],.ui.form input[type=time],.ui.form input[type=file],.ui.form input[type=url],.ui.form input[type=number] {
			font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
			margin: 0;
			outline: 0;
			-webkit-appearance: none;
			tap-highlight-color: rgba(255,255,255,0);
			line-height: 1.2142em;
			padding: .67861429em 1em;
			font-size: 1em;
			background: #FFF;
			border: 1px solid rgba(34,36,38,.15);
			color: rgba(0,0,0,.87);
			border-radius: .28571429rem;
			box-shadow: 0 0 0 0 transparent inset;
			-webkit-transition: color .1s ease,border-color .1s ease;
			transition: color .1s ease,border-color .1s ease
	}
	.ui.form .field:last-child,.ui.form .fields:last-child .field {
			margin-bottom: 0
	}

	.ui.form .fields .field {
			clear: both;
			margin: 0
	}



	.ui.form input:not([type]),.ui.form input[type=text],.ui.form input[type=email],.ui.form input[type=search],.ui.form input[type=password],.ui.form input[type=date],.ui.form input[type=datetime-local],.ui.form input[type=tel],.ui.form input[type=time],.ui.form input[type=file],.ui.form input[type=url],.ui.form input[type=number],.ui.form textarea {
			width: 80%;
			vertical-align: top;
	}

	.ui.form ::-webkit-datetime-edit,.ui.form ::-webkit-inner-spin-button {
			height: 1.2142em
	}
	.ui.attached.buttons {
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			border-radius: 0;
			width: auto!important;
			z-index: 2;
			margin-left: -1px;
			margin-right: -1px
	}
	.ui.attached.buttons .button {
   		margin: 0
	}

	.ui.attached.buttons .button:first-child,.ui.attached.buttons .button:last-child {
			border-radius: 0
	}
	.ui.buttons .button:first-child {
			border-left: none;
			margin-left: 0;
			border-top-left-radius: .28571429rem;
			border-bottom-left-radius: .28571429rem
	}

	.ui.buttons .button:last-child {
			border-top-right-radius: .28571429rem;
			border-bottom-right-radius: .28571429rem
	}
	.ui.buttons:after {
			content: ".";
			display: block;
			height: 0;
			clear: both;
			visibility: hidden
	}

	.ui.buttons .button {
			-webkit-box-flex: 1;
			-ms-flex: 1 0 auto;
			flex: 1 0 auto;
			border-radius: 0;
			margin: 0
	}

	.ui.buttons:not(.basic):not(.inverted)>.button,.ui.buttons>.ui.button:not(.basic):not(.inverted) {
			box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset
	}

	.ui.buttons .button:first-child {
			border-left: none;
			margin-left: 0;
			border-top-left-radius: .28571429rem;
			border-bottom-left-radius: .28571429rem
	}

	.ui.buttons .button:last-child {
			border-top-right-radius: .28571429rem;
			border-bottom-right-radius: .28571429rem
	}

	.ui.vertical.buttons {
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column
	}

	.ui.vertical.buttons .button {
			display: block;
			float: none;
			width: 100%;
			margin: 0;
			box-shadow: none;
			border-radius: 0
	}

	.ui.vertical.buttons .button:first-child {
			border-top-left-radius: .28571429rem;
			border-top-right-radius: .28571429rem
	}

	.ui.vertical.buttons .button:last-child {
			margin-bottom: 0;
			border-bottom-left-radius: .28571429rem;
			border-bottom-right-radius: .28571429rem
	}

	.ui.vertical.buttons .button:only-child {
			border-radius: .28571429rem
	}
	.ui.blue.button,.ui.blue.buttons .button {
			background-color: #2185D0;
			color: #FFF;
			text-shadow: none;
			background-image: none
	}

	.ui.blue.button {
			box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
	}

	.ui.blue.button:hover,.ui.blue.buttons .button:hover {
			background-color: #1678c2;
			color: #FFF;
			text-shadow: none
	}

	.ui.blue.button:focus,.ui.blue.buttons .button:focus {
			background-color: #0d71bb;
			color: #FFF;
			text-shadow: none
	}

	.ui.blue.button:active,.ui.blue.buttons .button:active {
			background-color: #1a69a4;
			color: #FFF;
			text-shadow: none
	}

	.ui.blue.active.button,.ui.blue.button .active.button:active,.ui.blue.buttons .active.button,.ui.blue.buttons .active.button:active {
			background-color: #1279c6;
			color: #FFF;
			text-shadow: none
	}

	.ui.basic.blue.button,.ui.basic.blue.buttons .button {
			box-shadow: 0 0 0 1px #2185D0 inset!important;
			color: #2185D0!important
	}

	.ui.basic.blue.button:hover,.ui.basic.blue.buttons .button:hover {
			background: 0 0!important;
			box-shadow: 0 0 0 1px #1678c2 inset!important;
			color: #1678c2!important
	}

	.ui.basic.blue.button:focus,.ui.basic.blue.buttons .button:focus {
			background: 0 0!important;
			box-shadow: 0 0 0 1px #0d71bb inset!important;
			color: #1678c2!important
	}

	.ui.basic.blue.active.button,.ui.basic.blue.buttons .active.button {
			background: 0 0!important;
			box-shadow: 0 0 0 1px #1279c6 inset!important;
			color: #1a69a4!important
	}

	.ui.basic.blue.button:active,.ui.basic.blue.buttons .button:active {
			box-shadow: 0 0 0 1px #1a69a4 inset!important;
			color: #1a69a4!important
	}

	.ui.buttons:not(.vertical)>.basic.blue.button:not(:first-child) {
			margin-left: -1px
	}

</style>
