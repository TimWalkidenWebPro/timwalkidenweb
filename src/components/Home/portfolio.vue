<template>
    <div id="portfolio" class=" max-w-6xl xl:mx-auto md:pb-32 pb-16 mx-4 text-white ">
      <Motion
          :initial="{opacity: 0, y: 50}"
          :in-view="{opacity: 1, y: 0}"
          :transition="{type: 'spring', duration: 5, delay: 0.33}"
          :in-view-options="{
                    once: true,
                  }">
          <h2 class=" md:text-left text-center text-3xl font-bold ">Personal Projects </h2>
      </Motion>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 my-8 ">
          <a :href='project.linkHref' v-for="(project, index) in projects" class=" transition-all duration-500 ease-out hover:-translate-y-4">
            <Motion
                :initial="{opacity: 0, y: 50}"
                :in-view="{opacity: 1, y: 0}"
                :transition="{type: 'spring', duration: 5, delay: (index + 1) * 0.33}"
                :in-view-options="{
                  once: true,
                }">
              <div class="bg-[#144052] h-max rounded-xl shadow-md">
                <img width='350' height='210' class='w-full  rounded-t-xl max-h-[210px] h-[210px] object-cover object-top' :src='project.img' :alt='project.title' />
                <div class="p-4">
                  <span class="text-sm">{{project.cat}}</span>
                  <h3 class='font-bold text-lg py-2'>{{project.title}}</h3>
                </div>
              </div>
            </Motion>
          </a>
      </div>

    </div>
</template>

<script>
import {Motion} from "@oku-ui/motion";
export default {
  components: {Motion},
  data() {
      return {
          projects: [
            { title: 'Cat Adoption Template', cat:'Web Development', img: '/catAdoptionTemp.webp', linkHref: '/portfolio/cat-adoption-template', linkText: 'Repo', description: 'I have built a personal website to showcase my skills and work history, currently developed using Vue.' },
            { title: 'Animal Charity Template', cat:'Web Design', img: '/animalCharityTempHp.webp', linkHref: '/portfolio/animal-charity-template', linkText: 'Repo', description: 'I have built a personal website to showcase my skills and work history, currently developed using Vue.' },
            { title: 'Bakery Template', cat:'Web Design', img: '/bakery.webp', linkHref: '/portfolio/bakery-template', linkText: 'Repo', description: 'I have built a personal website to showcase my skills and work history, currently developed using Vue.' },
            { title: 'Wrexham Digital', cat:'Web Development', img: '/wrexham-digital.webp', linkHref: '/portfolio/wrexham-digital', linkText: 'Visit', description: 'I contributed to the design and development of a website for Wrexham digital, a digital agency located in the Wrexham area.' },

          ],
          hoverItem: null,
          inView: false,
      };
  },

}
</script>