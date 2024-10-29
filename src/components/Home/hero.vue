<template>
    <div class=" min-h-96 flex flex-col justify-center heroBg text-white">
        <h1 class="sm:mx-40 mx-4 mx-0 text-3xl font-bold uppercase">{{ title }}</h1>
        <h2 class="sm:mx-40 mx-4 mx-0 text-2xl font-bold my-2 uppercase">{{ subHeading }}</h2>
        <p class="sm:mx-40 mx-4 mx-0 text-lg">{{ missionStatement }}</p>
    </div>

</template>

<script>
export default {
    props: [
        'title',
        'subHeading',
        'missionStatement'
    ]
}
</script>

<style>
    .heroBg {
        background-image: url('@/assets/heroImg.svg');
        background-position: top right;
        background-repeat: no-repeat;
    }
</style>