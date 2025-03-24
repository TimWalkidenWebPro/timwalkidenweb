<template>
    <div id="work" class="max-w-6xl xl:mx-auto md:pb-32 pb-16 mx-4 text-white ">
      <Motion :initial="{opacity: 0, y: 50}"
              :in-view="{opacity: 1, y: 0}"
              :transition="{type: 'spring', duration: 5, delay: (index + 1) * 0.33}"
              :in-view-options="{once: true}">
        <h2 class=" text-3xl font-bold mb-8 ">Work Experience</h2>
      </Motion>
      <Motion :initial="{opacity: 0, y: 50}"
              :in-view="{opacity: 1, y: 0}"
              :transition="{type: 'spring', duration: 5, delay: (index + 1) * 0.33}"
              :in-view-options="{once: true}" v-for="(exp, index) in experiences">
        <div  class="mb-8 px-4 py-4 bg-[#144052] shadow-md rounded">
            <DropdownBox :exp="exp" :key="index" :index='index' />
        </div>
      </Motion>

    </div>
</template>

<script>
import DropdownBox from "@/components/dropdownBox.vue";
import {Motion} from "@oku-ui/motion";
export default {
    data() {
        return {
            experiences: [
                { date: '2022 - Now',  open: true, options: ['React', 'NextJs', 'Jest', 'Cypress'], title: 'Completely Retail', description: 'As a Front-End Developer at Completely Retail, I work on the primary website focused on advertising retail properties for rent. My main responsibilities include collaborating with the design team to enhance the website\'s UI/UX, ensuring an engaging and seamless user experience. I also track and suggest improvements to boost the website\'s SEO, helping increase visibility and search engine rankings.\n' +
                      '\n' +
                      'I maintain an up-to-date environment by ensuring the site is running the latest versions, including migrating the next project from Next.js 13 to 14 and then to 15. This migration involved transitioning from pages routing to app routing. Additionally, I have worked on updating the Redux store to track user details and monitor login status. I also develop and implement tests to maintain code quality and reliability.\n' +
                      '\n' +
                      'Furthermore, I work with Elastic Search to optimize the site\'s search performance, improving both speed and efficiency, and I integrate Stripe for secure, smooth payment processing.' },
                { date: '2019 - 2022', open: false, options: ['Vue', 'Symfony', 'Jest'], title: 'Electroneum/ AnyTask', description: 'I began my journey as a Junior Developer, initially working with Electroumen, a platform developed using Symfony. During this time, I was responsible for creating and integrating new payment gateways, implementing push notifications, and ensuring the smooth functionality of various backend processes. My strong problem-solving skills and attention to detail helped me contribute effectively to the project and work collaboratively with other team members.\n' +
                      '\n' +
                      'As I gained more experience, I transitioned into a Frontend Developer role at Anytask, a platform built with Vue.js. In this capacity, I took on greater responsibility, including leading the creation of a project from scratch. This involved designing and implementing a sophisticated search system, collaborating with designers to bring the UI/UX vision to life, and integrating various payment gateways like Stripe.\n' +
                      '\n' +
                      'Along the way, I was also given the opportunity to mentor and support Junior Developers, ensuring that they received the guidance they needed to succeed in their roles.' },
                { date: '2018 - 2019', open: false, options: ['Laravel'], title: 'Skill Pill', description: 'As a Junior Developer at Skill Pill, I work with Laravel to develop and maintain web applications. One of my key responsibilities was creating an interactive overlay on videos, enabling users to access additional information and enhance their learning experience while watching educational content.' },
                { date: '2016 - 2018', open: false, options: ['Html', 'JS', 'CSS', 'Laravel'], title: 'Edge Hill University', description: 'I graduated from Edge Hill University with a First Class degree in Web Design and Development. During my studies, I held two roles. The first was as a mentor for first-year students, where I provided personal support and helped them adjust to university life, ensuring they were coping with being away from home. The second role was as a classroom assistant, where I ran drop-in sessions to support first-year students with any module-related issues. Additionally, I assisted in programming lessons for first- and second-year students, helping them resolve problems and explaining how different parts of the code worked.' },
            ],
        };
    },
  components: {
      DropdownBox,Motion
  }
}
</script>