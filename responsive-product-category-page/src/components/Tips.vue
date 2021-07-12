  <!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto h-screen px-4 sm:px-6 lg:px-8">
      <div class="mt-10">
        <dl class="md:grid md:grid-cols-2 md:gap-x-8 gap-y-8">
          <div class="relative h-96 w-96 mx-auto my-auto">
            <p class="text-xl leading-6 font-medium text-gray-900">How to Find Your Mattress Soul Mate</p>
          </div>
          
          <div v-for="feature in features" :key="feature.name" class="relative h-96 w-96 bg-gray-100 mx-auto my-auto">
            <dt>
              <p class="text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div> -->
  <div class="lg:grid lg:grid-cols-2 items-center text-center gap-8 my-20 px-6">
    <div class="sm:w-full sm:h-72 md:w-full md:h-80 lg:w-96 lg:h-96 px-4 py-4 bg-white rounded-none lg:justify-self-end pb-6 lg:mb-0">
      <div class="self-center justify-start">
        <img class="relative sm:w-1/4 md:w-40 justify-self-left pt-10" src="./../assets/blue-line.svg"/>
        <h3 class="text-4xl text-gray-700 py-4 text-left">
          How to Find Your Mattress Soul Mate
        </h3>
        
      </div>
    </div>
    <div class="sm:w-full sm:h-72 md:w-full md:h-80 lg:w-96 lg:h-96 px-4 py-4 flex items-center bg-white rounded-none lg:justify-self-start mb-6 lg:mb-0" style="background-color:#0061A6">
      <div class="self-center">
        <h3 class="text-4xl text-white font-semibold py-4">
            Tip #1
        </h3>
        <h3 class="text-xl text-white font-semibold py-4 w-5/6 mx-auto">
            Identify Your Body Type
        </h3>
        <p class="text-sm text-white py-4 w-5/6 mx-auto">
            Sleepers with smaller frames are typically happier with 2 to 3 inches of comfort foam; often rated as firm or medium-firm. A mattress rated as medium-plush or plush will likely have thicker comfort layers that provide deeper cushion—perfect for larger body frames.
        </p>
      </div>
    </div>
    <div class="sm:w-full sm:h-72 md:w-full md:h-80 lg:w-96 lg:h-96 px-4 flex items-center bg-white rounded-none lg:justify-self-end mb-6 lg:mb-0" style="background-color:#85266A">
      <div class="self-center">
        <h3 class="text-4xl text-white font-semibold py-4">
            Tip #2
        </h3>
        <h3 class="text-xl text-white font-semibold py-4 w-5/6 mx-auto">
            Identify Your Body Type
        </h3>
        <p class="text-sm text-white py-4 w-5/6 mx-auto">
            Sleepers with smaller frames are typically happier with 2 to 3 inches of comfort foam; often rated as firm or medium-firm. A mattress rated as medium-plush or plush will likely have thicker comfort layers that provide deeper cushion—perfect for larger body frames.
        </p>
      </div>
    </div>
    <div class="sm:w-full sm:h-72 md:w-full md:h-80 lg:w-96 lg:h-96 px-4 py-4 flex items-center bg-white  rounded-none lg:justify-self-start mb-6 lg:mb-0" style="background-color:#00B3E2">
      <div class="self-center">
        <h3 class="text-4xl text-white font-semibold py-4">
            Tip #3
        </h3>
        <h3 class="text-xl text-white font-semibold py-4 w-5/6 mx-auto">
            Identify Your Body Type
        </h3>
        <p class="text-sm text-white py-4 w-5/6 mx-auto">
            Sleepers with smaller frames are typically happier with 2 to 3 inches of comfort foam; often rated as firm or medium-firm. A mattress rated as medium-plush or plush will likely have thicker comfort layers that provide deeper cushion—perfect for larger body frames.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Tip #1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Tip #2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Tip #3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
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