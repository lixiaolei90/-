<template>
  <div>
    <button class="l-button" :class="{[`icon-${iconPosition}`]: true}">
      <l-icon class="icon" v-if="icon" :name="icon"></l-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon:"",
    iconPosition: {
      type:String,
      default: 'left',
      validator: function (value) {
        return (value === "left" || value === "right")
      }
    }

  }
}
</script>

<style lang="scss">
body {
  font-size: var(--font-size);
}

#app {
  margin: 20px;
  display: flex;
}

.l-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  margin: 0 0.5em;
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }


  display: inline-flex;
  justify-content: center;
  align-items: center;
  //vertical-align: middle;
  >.content{
    order: 2;}
  >.icon{
    margin-right:0.3em;
    order:1;
  }
  &.icon-right{
    >.content{
      order:1;
    }
    >.icon{
      order:2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }

}

</style>