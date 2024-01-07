<script>
export default {
	data() {
		return {
			listShown: false,
        
		};
	},
	methods:{
		handleClickOutside(event) {
			const targetElement = this.$refs.targetElement;
			if (!targetElement.contains(event.target)) {
			this.listShown = false;
			}
		},
	},
	mounted() {
		document.addEventListener('click', this.handleClickOutside);
	},
	beforeDestroy() {
		document.removeEventListener('click', this.handleClickOutside);
	},
	
		
	
	//props for HeaderMain component
	props: {
		value: "number",
	},
};
</script>
<template>
	<!--When rendered inside HeaderMain the prop will be cycled -->
	<div>
		<li ref="targetElement" @click="listShown = !listShown " >{{ value }}</li>
		<ul v-if="listShown"  :class="{ active: listShown }">
			<li class="dropdown"><a href="">Item 1</a></li>
			<li class="dropdown"><a href="">Item 1</a></li>
			<li class="dropdown"><a href="">Item 1</a></li>
		</ul>
        <div v-else></div>
	</div>
</template>
<style scoped lang="scss">
@use "../../assets/styles/colors.scss" as *;
div {
	position: relative;

	li {
		text-align: left;
		cursor: pointer;
		width: 80px;
		&:hover {
			color: $color-lima-light;
		}
	}
	ul {
		list-style: none;
		cursor: pointer;
		padding-left: 0;
		border: 1px solid $color-lima-light;
		background-color: rgb(197, 197, 197);
		.dropdown {
			width: 80px;
		}
		.dropdown:nth-child(-n + 2) {
			border-bottom: 1px solid $color-lima-light;
		}
		.active {
			position: absolute;
			top: 20px;
		}
	}
}
a{
    text-decoration: none;
    color: black;
    &:hover{
        color: $color-lima-light;
    }
}
</style>


