<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-10">
        <ProductCard />
        <!-- <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10"> -->
          <!-- PRODUCT CARDS GO HERE -->
          <!-- <ProductCard /> -->
          <!-- <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div> -->
        <!-- </dl> -->
      </div>
    </div>
  </div> 
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

// const features = [
//   {
//     name: 'Competitive exchange rates',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: GlobeAltIcon,
//   },
//   {
//     name: 'No hidden fees',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: ScaleIcon,
//   },
//   {
//     name: 'Transfers are instant',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: LightningBoltIcon,
//   },
//   {
//     name: 'Mobile notifications',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: AnnotationIcon,
//   },
// ]

// export default {
//   setup() {
//     return {
//       features,
//     }
//   },
// }
</script>