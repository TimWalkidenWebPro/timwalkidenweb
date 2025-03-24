<script>
import {Motion} from "@oku-ui/motion";
export default {
  components: {Motion},
  data() {
    return {
      skills: [
        {
          heading: 'Designer',
          icon: '/design.svg',
          subHeading: 'I appreciate a simple content structure, elegant design patterns, and intentional interactions.',
          options: [
            {heading: 'Design Tools', subHeading: 'Figma, Canva, Pen & Paper'}
          ]
        },
        {
          heading: 'Frontend Developer',
          icon: '/dev.svg',
          subHeading: 'I enjoy building projects from the ground up and bringing ideas to life in the browser.',
          options: [
            {heading: 'Core Web Technologies', subHeading: 'Html, CSS, JavaScript'},
            {heading: 'Frameworks & Libraries', subHeading: 'Vue.js, React, Next.js'},
            {heading: 'CSS Libraries', subHeading: 'Tailwind, Bootstrap'},
          ]
        },
        {
          heading: 'Other',
          icon: '/other.svg',
          subHeading: 'Here are some other skills I regularly use',
          options: [
            {heading: 'Development', subHeading: 'Git, Elastic search, Storyblok'},
            {heading: 'Testing', subHeading: 'Cypress, Jest'},
            {heading: 'Other', subHeading: 'Agile'},
          ]
        }
      ],
    };
  }
}
</script>

<template>
  <div id="skills" class=" max-w-6xl xl:mx-auto md:pb-32 pb-16 mx-4 text-white ">
    <Motion
        :initial="{opacity: 0, y: 50}"
        :in-view="{opacity: 1, y: 0}"
        :transition="{type: 'spring', duration: 5, delay: 0.33}"
        :in-view-options="{
                    once: true,
                  }">
      <h2 class="text-left text-3xl font-bold ">Skills</h2>
    </Motion>
    <Motion
        :initial="{opacity: 0, y: 50}"
        :in-view="{opacity: 1, y: 0}"
        :transition="{type: 'spring', duration: 5, delay: 0.33}"
        :in-view-options="{once: true}">
      <div class="grid md:grid-cols-3 grid-cols-1 my-8 shadow-md">
        <div v-for="(skill, index) in skills" :class="`p-8 bg-[#144052] ${index === 0 ? 'md:rounded-l-md rounded-t-md md:rounded-tr-none' : index === 2 ? 'md:rounded-e-md rounded-b-md md:rounded-br-none' : 'md:border-x-2 md:border-y-0 border-y-2 border-solid border-white'}`">
          <Motion :initial="{opacity: 0, y: 50}"
                :in-view="{opacity: 1, y: 0}"
                :transition="{type: 'spring', duration: 5, delay: (index + 1) * 0.33}"
                :in-view-options="{once: true}">
            <img :src="skill.icon" width="50" height="50" class="mb-4 flex mx-auto" :alt="skill.heading" />
            <h3 class="font-bold underline text-center mb-4 text-lg">{{skill.heading}}</h3>
            <p class="text-center  mb-4">{{skill.subHeading}}</p>
            <div v-for="(option, index) in skill.options"  class="mb-4" :key="index">
              <p class="font-bold text-center">{{option.heading}}</p>
              <p class="text-center">{{option.subHeading}}</p>
            </div>
          </Motion>
        </div>
      </div>
    </Motion>
  </div>
</template>

<style scoped>

</style>