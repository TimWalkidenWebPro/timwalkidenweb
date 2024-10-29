<template>
    <div class="sm:px-40 px-4 py-16 relative text-white">
        <h2 class="text-center text-3xl font-bold">My Portfolio </h2>
        <p class="text-center text-lg mt-3">A display of design, development, and creative experiments.</p>

        <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 my-8">
            <div v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 100}" :delay="500" :duration="20000"
             v-for="(project, index) in projects" :style="getBackgroundStyle(project.img)"
                :class="getClass(index)"
                class="relative flex items-center justify-center xl:h-48 h-60 rounded-lg bg-cover bg-center drop-shadow-2xl">
                <div class="absolute inset-0 bg-black  rounded-lg opacity-70   transition ease-in-out  
                    group/item hover:duration-1000 hover:opacity-100">
                    <div
                        class="relative flex items-center justify-center h-full text-white opacity-100   transition ease-in-out group-hover/item:opacity-0 duration-1000">
                        <h3 class="text-center text-lg font-bold">{{ project.title }}</h3>
                    </div>
                    <div class="relative justify-center flex flex-col -top-full h-full text-white p-4  opacity-0   transition ease-in-out group-hover/item:opacity-100 duration-1000 hover:delay-1000
                        ">
                        <h3 class="text-center text-lg font-bold pb-2">{{ project.title }}</h3>
                        <p class="text-center ">{{ project.description }}</p>
                        <a :href="project.linkHref"
                            class="flex  w-32 justify-center mt-4 px-4 py-2 text-white bg-primary rounded-2xl mx-auto">
                            {{ project.linkText }}
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { title: 'Wrexham Digital', img: require('@/assets/wrexham-digital.png'), linkHref: 'https://wrexham.digital', linkText: 'Visit', description: 'I contributed to the design and development of a website for Wrexham digital, a digital agency located in the Wrexham area.' },
                { title: 'timwalkiden.dev', img: require('@/assets/webPortfolio.jpg'), linkHref: 'https://github.com/TimWalkidenWebPro/timwalkidenweb', linkText: 'Repo', description: 'I have built a personal website to showcase my skills and work history, currently developed using Vue.' },
            ],
            hoverItem: null,
        };
    },
    methods: {
        getBackgroundStyle(img) {
            return {
                backgroundImage: `url(${img})`
            }
        },
        getClass(index) {

            return index === 1 ? 'grid-item' : index % 4 === 0 || ((index - 1) % 4 === 0) ? 'grid-item xl:col-span-2' : 'grid-item'
        },
        handleMouseEnter(index) {
            this.hoverItem = index
        },
        handleMouseLeave() {
            this.hoverItem = null
        }

    }
}
/**
  @mouseover="handleMouseEnter(index)"
             @mouseleave="handleMouseLeave()" 
 */
</script>