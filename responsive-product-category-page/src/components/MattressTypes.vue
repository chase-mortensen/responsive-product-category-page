<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div style="background-color:#00B3E2">
    <div class="max-w-7xl">
      <div class="lg:text-center">
        <!-- <h2 class="text-base text-white font-semibold tracking-wide uppercase">Transactions</h2> -->
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Whats Your Type
        </p>
        <!-- <p class="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p> -->
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-4 justify-between">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="flex items-center justify-center rounded-md bg-transparent text-white my-8">
                <!-- <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" /> -->
                <img class="object-cover" :src="feature.src" alt="" />
              </div>
            </dt>
            <dd>
              <p class="text-lg leading-6 font-medium text-white">{{ feature.name }}</p>
            </dd>
            <dd class="mt-2 text-base text-white">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Memory Foam',
    description: 'Memory foam mattresses are a popular choice. Due to the foam’s ability to contour to a sleeper’s body shape, many people experience pressure point relief as well as proper spinal alignment and back support.',
    src: "src/assets/mattress-types/memory-foam.svg"
  },
  {
    name: 'Latex Foam',
    description: 'Still a new category for many mattress shoppers, latex is quickly becoming a favorite. Unlike memory foam, latex is springy, resilient, and instantly responds to pressure and movement so you don’t sink in to the mattress over time.',
    src: "src/assets/mattress-types/latex-foam.svg"
  },
  {
    name: 'Spring',
    description: 'Individually-encased steel coils are the highest quality springs found in mattresses today. Each spring reacts independently as you move, which absorbs energy and allows the mattress to cradle your body no matter what sleep position you prefer.',
    src: "src/assets/mattress-types/spring.svg"
  },
  {
    name: 'Hybrid',
    description: 'Individually-encased steel coils are the highest quality springs found in mattresses today. Each spring reacts independently as you move, which absorbs energy and allows the mattress to cradle your body no matter what sleep position you prefer.',
    src: "src/assets/mattress-types/hybrid.svg"
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>