<template>
    <div class="w-full h-[100px] slopeLeftToRight mt-8 bg-primary relative top-0.5" />
    <div class="sm:px-40 px-4  bg-primary text-white">
        <h2 class="text-center text-3xl font-bold mb-8">My Stack</h2>
        <div class="grid gap-4">
            <!-- First Row - 5 Columns -->
            <div class="grid grid-cols-4 gap-4">
                <div class="p-4" v-for="skill in firstRow" v-motion :initial="{ opacity: 0, y: 100 }"
                    :visibleOnce="{ opacity: 100, y: 0 }" :delay="500" :duration="1500">
                    <img class=" mx-auto" width="75" :src="require(`@/assets/icons/${skill}`)"  :alt="skill" />
                </div>
            </div>

            <!-- Second Row - 3 Columns -->
            <div class="grid grid-cols-3 gap-4">
                <div class="p-4" v-for="skill in secondRow" v-motion :initial="{ opacity: 0, y: 100 }"
                    :visibleOnce="{ opacity: 100, y: 0 }" :delay="800" :duration="1500">
                    <img class=" mx-auto" width="75" :src="require(`@/assets/icons/${skill}`)" :alt="skill" />
                </div>
            </div>

            <!-- Third Row - 2 Columns -->
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4" v-for="skill in lastRow" v-motion :initial="{ opacity: 0, y: 100 }"
                    :visibleOnce="{ opacity: 100, y: 0 }" :delay="800" :duration="1500">
                    <img class=" mx-auto" width="75" :src="require(`@/assets/icons/${skill}`)" :alt="skill"  />
                </div>
            </div>
        </div>

    </div>
    <div class="w-full mb-8 h-[100px] bottomTriangle bg-primary relative bottom-0.5" />

</template>

<script>
export default {
    data() {
        return {
            firstRow: ['vue.svg', 'reactjs.svg', 'nextjs.svg', 'tailwind.svg'],
            secondRow: ['figma.svg', 'bootstrap.svg', 'js.svg'],
            lastRow: ['html5.svg', 'css3.svg']
        };
    }
}
</script>