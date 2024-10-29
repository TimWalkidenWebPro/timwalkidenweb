<template>
  <div class="home bg-secondary">
    <Hero title="Tim Walkiden" subHeading="Frontend web developer"
      missionStatement="Enhancing the web's beauty, one pixel at a time" />
    <TwoColsWithImg title="About Me" img="profilePic.png" :description="[
      'I first discovered web development while pursuing my undergraduate degree in computer science in 2020, which led me to shift my focus to web design and development.',
      ' I have a solid foundation in HTML, CSS, and JavaScript/TypeScript, with practical experience in modern front-end frameworks like React and Vue. I emphasize best practices to deliver clean, maintainable, and efficient code.',
      ' With a strong focus on building seamless and impactful user interfaces, and a deep interest in UX design, I strive to meet technical requirements while ensuring that the UI is intuitive, accessible, and visually appealing.'

    ]" />
    <TimeLine title="Work experience" />
    <TechStack />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Home/hero.vue'
import TwoColsWithImg from '@/components/Home/twoColsWithImg.vue'
import TimeLine from '@/components/Home/timeLine.vue'
import TechStack from '@/components/Home/stack.vue'
import Portfolio from '@/components/Home/portfolio.vue'
import Contact from '@/components/Home/contact.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    TwoColsWithImg,
    TimeLine,
    TechStack,
    Portfolio,
    Contact
  }
}
</script>

<style>
  .slopeLeftToRight {
    clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
  }
  .bottomTriangle {
    clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 0% 100%);
  }
</style>