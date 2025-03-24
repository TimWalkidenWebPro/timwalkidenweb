<template>
  <div class="bg-[#172a3a]">
    <header class="max-w-6xl xl:mx-auto flex justify-between md:pt-12 pt-4 mx-4 text-white md:flex-row flex-col">
      <a href="/" class="font-bold">Tim Walkiden Dev</a>
      <nav>
        <ul class="flex gap-8">
          <li>
            <a href="/#work">Work Experience</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
    <router-view/>
    <footer class="bg-[#144052]">
      <div class="max-w-6xl xl:mx-auto mx-4 flex justify-between py-12 text-white items-center md:flex-row flex-col-reverse">
        <p>Copyright © {{new Date().getFullYear()}} TimWalkidenWeb. All Rights Reserved.</p>
        <div class="flex gap-8 mb-12 md:mb-0 ">
          <a href="https://www.linkedin.com/in/timothy-walkiden/"> <img src="/linkedIn.svg" width="30" height="30" alt="LinkedIn Profile" /> </a>
          <a href="https://github.com/TimWalkidenWebPro" > <img src="/github.svg" width="30" height="30" alt="Github Profile" /> </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
<script setup lang="ts">
</script>