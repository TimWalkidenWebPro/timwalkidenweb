<template>
  <div>
    <Hero title="Hi, I'm Tim:" subHeading="A Frontend Web Developer and UI/UX Designer"
      missionStatement="Enhancing the web's beauty, one pixel at a time" img="profileImage.webp"/>

    <Portfolio />
    <Skills />
    <TimeLine title="Work experience" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Home/hero.vue'
import TimeLine from '@/components/Home/timeLine.vue'
import TechStack from '@/components/Home/stack.vue'
import Portfolio from '@/components/Home/portfolio.vue'
import Skills from "@/components/Home/Skills.vue";

export default {
  name: 'HomeView',
  components: {
    Hero,
    TimeLine,
    TechStack,
    Portfolio,
    Skills
  }
}
</script>

<style>
</style>