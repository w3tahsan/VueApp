<template>
    <div class="container pb-[50px]">
        <div class="w-[100%] pb-12 text-center">
            <h3 class="text-[36px] text-[#000] font-popo font-semibold">Explore Our Products</h3>
        </div> 
        <div class="flex gap-x-7 flex-wrap">
            <div class="w-[23.2%] relative mb-12" v-for="(product, index) in productsLoaded" :key="index">
                <div class="bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-12">
                    <img :src="product.thumbnail" alt="">
                </div>
                <h3 class="text-[16px] font-medium text-[#000] font-popo pt-4">{{ product.title }}</h3>
                <p class="pt-2 space-x-4">
                    <span class="text-[#DB4444] font-popo text-[16px] font-medium">${{ product.price }}</span>
                    <span class="text-[rgba(0,0,0,0.51)] font-popo text-[16px] font-medium"><del>$160</del></span>
                </p>
                <div class="flex space-x-2 pt-2">
                    <div class="star space-x-1">
                        <i v-for="total in 5" :key="total" class="fa-solid fa-star text-[#FFAD33] text-[14px]"></i>
                    </div>
                    <div class="star">
                        <span class="text-[rgba(0,0,0,0.51)] font-popo text-[14px] font-normal">(88)</span>
                    </div>
                </div>
                <div class="bg-red-400 absolute top-3 left-3 px-3 py-1 rounded-[4px]">
                    <span class="font-popo text-[#FAFAFA] text-[12px]">-40%</span>
                </div>
            </div>
        </div>
        <div class="w-[100%] pt-[100px] text-center">
            <a @click="loadMore" :hidden="length >= pros.length" class="text-[#FAFAFA] font-popo text-[16px] font-medium bg-[#DB4444] py-4 px-12 rounded cursor-pointer">View All Products</a>
        </div> 
    </div>
</template>

<script setup>
import {ref, onMounted, computed } from 'vue'

const pros = ref([])
const length = ref(4)
    
onMounted(async() => {
    const response = await fetch('https://dummyjson.com/products?limit=50')
    const data = await response.json()
    const allproducts = data.products
    pros.value = allproducts.map((item) => item)
})

const loadMore = () => {
    if (length.value >= pros.value.length) return;
    length.value += 8;
}

const productsLoaded = computed(() => {
    return pros.value.slice(0, length.value)
}) 
</script>