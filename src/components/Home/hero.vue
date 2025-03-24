<template>
    <div class="md:py-32 py-16 md:text-left text-center max-w-6xl xl:mx-auto mx-4 flex md:flex-row flex-col justify-between items-center gap-10 text-white">
        <div class="flex flex-col md:w-1/2">
          <h1 class=" text-2xl font-bold ">{{ title }}</h1>
          <h2 class=" md:text-[45px] text-[26px] font-bold my-2 ">{{ subHeading }}</h2>
        </div>

      <div class="rounded hidden md:block">
        <img class=" mx-auto sm:ml-auto mt-2 sm:mt-0 rounded-lg drop-shadow-2xl" width="350" height="350" :src="require(`@/assets/${img}`)" :alt="title"  />
      </div>
    </div>

</template>

<script>
export default {
    props: [
        'title',
        'subHeading',
        'missionStatement',
        'img',
    ]
}
</script>

<style>

</style>