<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-transparent">
    <div class="max-w-7xl lg:w-1/3 mr-auto bg-transparent">
      <div class="z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <!-- <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg> -->

        <Popover>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <!-- <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" /> -->
                    <img class="h-8 w-auto sm:h-10 px-10" src="./../assets/linenspa-logo.svg" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <!-- <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
              </div> -->
            </nav>
          </div>

          <!-- <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                  Log in
                </a>
              </div>
            </PopoverPanel>
          </transition> -->
        </Popover>

        <main class="mt-10 mx-auto max-w-7xl pr-4 sm:mt-12 sm:pr-6 md:mt-16 lg:mt-20 lg:pr-8 xl:mt-28 bg-transparent">
          <div class="sm:text-center lg:text-left flex bg-transparent">
            <div class="ml-0 pl-0 lg:inset-0 left-0 flex-none justify-start pr-2">
              <img class="h-12 w-12 lg:h-20 lg:w-20 object-cover" src="./../assets/small-blue-rect.svg" alt="" />
            </div>
            <div class="flex-auto">
              <h1 class="text-4xl tracking-tight font-medium text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block">Good Things</span>
                <span class="block">Come in Tall But</span>
                <span class="block">Manageable</span>
                <span class="block">Packages</span>
                {{ ' ' }}
                <!-- <span class="block text-indigo-600 xl:inline">online business</span> -->
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 w-2/3">
                Linenspa mattresses feature a wide variety of feels and fibers. Firm to plush, memory foam to encased coils—it’s all here. Oh, and did we mention not a single bed is priced over $600? That’s right.
              </p>
            </div>
            
            <!-- <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Live demo
                </a>
              </div>
            </div> -->
          </div>
        </main>
      </div>
    </div>
    <!-- <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 lg:h-full shadow-2xl my-100" /> -->
    
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 h-full flex justify-end">
      <img class="h-12 w-96 xl:w-3/4 object-cover" src="./../assets/blue-rectangle.svg" alt="" />
    </div>
    <div class="absolute lg:inset-y-12 lg:right-0 lg:w-full h-full flex justify-end">
      <div class="w-1/2 h-full shadow-2xl"></div>
    </div>
    <div class="lg:absolute lg:inset-y-12 lg:right-0 h-full flex justify-end">
      <img class="w-full object-cover" src="./../assets/header.svg" alt="" />
    </div>
    
  </div>
  <!-- <img src="./../assets/product-1.svg" alt="" /> -->

</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>