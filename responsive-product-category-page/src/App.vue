<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet">
  <Hero />
  <Products />
  <SizeGuide />
  <MattressTypes style="background-color:#00B3E2" />
  <Tips />
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue'
import Products from './components/Products.vue'
import SizeGuide from './components/SizeGuide.vue'
import MattressTypes from './components/MattressTypes.vue'
import Tips from './components/Tips.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
