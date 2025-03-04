<template>
    <div class="container border-b border-[rgba(0,0,0,0.3)] pb-[100px]">
        <div class="w-[100%] pb-[60px]">
            <h3 class="text-[36px] text-[#000] font-popo font-semibold">Browse By Category</h3>
        </div> 
        <div class="flex gap-x-7">
            <div class="w-[16.66%]" v-for="category in selectedItems" :key="category">
                <div class="border-1 border-[rgba(0,0,0,0.3)] text-center rounded-[4px] py-6">
                    <div class="flex items-center justify-center">
                        <img :src="categroy" alt="">
                    </div>
                    <h4 class="text-[16px] font-normal text-[#000] font-popo pt-4 capitalize">{{ category }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import categroy from '@/assets/images/category.png'

import { ref, onMounted, computed } from 'vue'

const categories = ref([]);

onMounted(async () => {
    const response = await fetch('https://dummyjson.com/products/category-list');
    const data = await response.json()
    categories.value = data
})

const selectedItems = computed(() => {
    return categories.value.slice(0, 6);
})
</script>