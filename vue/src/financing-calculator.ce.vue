<template>
  <div class="wrapper">
    <p>In {{duration}} Monaten bei einer monatlicher Rate
      von {{(price / duration).toFixed(2)}} EUR finanzieren.
      <button @click="decreaseDuration">kürzer</button>
      <button @click="increaseDuration">länger</button>
    </p>
  </div>
</template>

<script>
import {defineComponent,  ref} from "vue";

export default defineComponent({
  props: ['durationMonths', 'price'],
  setup() {
    let duration =  ref(2);

    const decreaseDuration =  () => {
      duration.value = duration.value - 1;
    }

    const increaseDuration =  () => {
      duration.value = duration.value + 1;
    }

    return {duration, increaseDuration, decreaseDuration};
  }
})

</script>

<style>
.wrapper, p {display: inline-block; margin: 0}
.wrapper { background-color: deepskyblue; padding: 10px; border-radius: 5px; font-size: 50%; font-weight: 400 }
</style>