<template>
    <div class="sm:px-40 px-4 my-16 relative ">
        <h2 class="text-center text-3xl font-bold mb-16 text-white">Work Experience</h2>
        <ol class="relative border-s border-dashed border-white sm:max-w-3xl sm:ml-[40%] m-auto sm:mr-0 w-3/4 sm:w-full ">
            <li class="mb-10 sm:mx-28 flex flex-col gap-4 ms-8 " v-for="(experience, index) in experiences">
                <span
                    class="sm:absolute w-max  text-sm text-white  sm:-start-56 sm:px-9 px-2 sm:py-2 text-white sm:bg-primary sm:rounded-3xl sm:border-white sm:border">
                    {{ experience.date }}
                </span>
                <button class="absolute w-max text-white px-4 py-2 sm:-start-7 -start-5 bg-primary rounded border-white border"
                    v-on:click="toggle(index)" aria-label="show content">
                    <img v-if="!experience.open" class=" mx-auto w-2.5 sm:w-6" width="25" alt="show content"
                        :src="require(`@/assets/icons/plus.svg`)" />
                    <img v-if="experience.open" class=" mx-auto w-2.5 sm:w-6" width="25" alt="hide content "
                        :src="require(`@/assets/icons/subtract.svg`)" />
                </button>
                <div class="border rounded border-white text-white  bg-primary p-4">
                    <h3 class="text-lg font-bold">{{ experience.title }}</h3>
                    <p  class=" transition-all duration-[1000ms] ease overflow-hidden " :class="experience.open ? 'max-h-[29rem] pt-4' : 'max-h-0 '">
                        {{ experience.description }}
                    </p>
                </div>
            </li>
        </ol>

    </div>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                { date: '2022 - Now', open: true, title: 'Completely Retail', description: 'As a frontend developer at Completely Retail, I work with React and Next.js to build responsive high-performance web applications. I focus on creating seamless user experiences while leveraging modern tools to optimize both functionality and design.' },
                { date: '2019 - 2022', open: false, title: 'Electroneum', description: 'As a developer at Electroneum, I work with Symfony and Vue to create robust, user-friendly applications. In addition to my development responsibilities, I support junior developers, helping them grow their skills and contribute effectively to our projects.' },
                { date: '2018 - 2019', open: false, title: 'Skill Pill', description: 'As a junior developer at Skill Pill, I work with Laravel to build and maintain web applications.' },
                { date: '2016 - 2018', open: false, title: 'Edge Hill University', description: 'Support student in their weekly web lessons. This includes giving one to one support on html, css and javascript. This has helped me to be able to find problem with code and increase my ability to explain how code works' },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.experiences[index].open = !this.experiences[index].open
        },
        
    }
}
</script>