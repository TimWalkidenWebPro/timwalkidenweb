<script>
import { useRoute } from "vue-router";
import portfolioData from '@/assets/portfolio.json';
export default {
  data() {
    return {
      portfolio: {}
    }
  },
  setup() {
    const route = useRoute();
    return {route}
  },
  mounted() {
    this.portfolio = portfolioData.find(item => item.slug === this.route.params.slug);

  }
}
</script>

<template>
  <div class="text-white md:py-16 py-8 max-w-6xl xl:mx-auto mx-4">
    <h1 class="font-bold md:text-[45px] text-[26px] ">{{portfolio.title}}</h1>

    <div class="mt-8 flex justify-between items-center flex-wrap">
      <div v-for="(item, i) in portfolio.summaryPoints">
        <h2 class="font-bold text-xl my-4">{{item.heading}}</h2>
        <p>{{item.value}}</p>
      </div>
      <div v-if="portfolio.website">
        <h2 class="font-bold text-xl my-4">View</h2>
        <a :href="portfolio.website" class="font-bold underline">Website</a>
      </div>
    </div>

    <img :src="portfolio.mainImage" class="rounded-xl w-full md:mt-32 mt-16"  :alt="`${portfolio.title}: main image`" width="1152" />

    <div class="md:mt-32 mt-16 flex flex-col md:flex-row gap-8 justify-between items-center">
      <div class="max-w-[32rem]">
        <h2 class="font-bold text-3xl md:my-4 my-8">Project overview</h2>
        <p class="whitespace-pre-line">
          {{portfolio.projectOverview}}
        </p>
      </div>
      <div>
        <img :src="portfolio.projectOverviewImage" class="rounded-xl" :alt="`${portfolio.title}: key feature image`" width="400" />
      </div>
    </div>

    <div class="md:mt-32 mt-16 flex flex-col md:flex-row gap-8 justify-between" v-if="portfolio.keyFeatures">
      <div >
        <h2 class="font-bold text-3xl my-4">Key Features</h2>
      </div >
      <div class="max-w-[32rem]">
        <p class="mb-4">
          {{portfolio.keyFeatures.intro}}
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="(item, i) in portfolio.keyFeatures.features">{{item}}</li>
        </ul>
      </div>
    </div>

  </div>


</template>

<style scoped>

</style>