<script>
import {Motion, MotionPresence} from "@oku-ui/motion";
import {ref} from 'vue'
export default {
  props: [
    'exp',
    'index'
  ],
  components: {Motion, MotionPresence},
  setup() {
    const show = ref(false);

    return {show}
  }
}
</script>


<template>
  <div >
    <div class="flex items-center justify-between mb-4" @click="show = !show">
      <div class="flex md:gap-8 flex-col md:flex-row w-[90%] justify-between md:items-center">
        <h3 class="font-bold text-lg">{{exp.title}}</h3>
        <p>{{exp.date}}</p>
      </div>
      <div class="text-2xl w-[10%] justify-end flex" >+</div>
    </div>
    <MotionPresence>
      <Motion class="overflow-hidden h-0"
        :animate="{height: show ? 'auto' : '0'}"
        :transition="{
          type: 'easeInOut',
          duration: 1,
        }">
          <p class="whitespace-pre-line">{{exp.description}}</p>
          <div class="flex gap-8 mt-8">
            <div v-for="(option, index) in exp.options" :key="index" class="rounded-xl  px-2 py-1 min-w-20 text-center bg-[#172a3a] ">
              {{option}}
            </div>
          </div>
      </Motion>
    </MotionPresence>
  </div>
</template>

<style >

</style>