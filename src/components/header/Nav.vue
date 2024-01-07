<script>
export default {
	data() {
		return {
			listShown: false,
        
		};
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
		<li @click="listShown = !listShown " >{{ value }}</li>
		<ul v-if="listShown"  :class="{ active: listShown }">
			<li class="dropdown">Item 1</li>
			<li class="dropdown">Item 1</li>
			<li class="dropdown">Item 1</li>
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
</style>


