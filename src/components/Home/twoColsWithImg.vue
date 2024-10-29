<template>
    <div class="w-full h-[100px] slopeLeftToRight mt-8 bg-primary"/>
    <div class="sm:px-40 px-4 mb-8 bg-primary pb-8 text-white">
        <h2 class="text-center text-3xl font-bold">{{ title }}</h2>
        <div class="grid sm:grid-cols-2 gap-4 mt-6">
            <div>
                <p class="text-lg pt-2" v-for="item in description"> {{ item }}</p>
            </div>
            <div class="rounded">
                <img class=" mx-auto sm:ml-auto mt-2 sm:mt-0 rounded-lg drop-shadow-2xl" width="300" :src="require(`@/assets/${img}`)" :alt="title"  />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'description',
        'img'
    ]
}
</script>

<style>
</style>