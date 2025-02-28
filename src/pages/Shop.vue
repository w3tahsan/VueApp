<template>
    <div class="container pb-[50px] pt-10">
        <div class="w-[100%] pb-12 flex justify-between">
            <h3 class="text-[36px] text-[#000] font-popo font-semibold">Explore Our Products</h3>
            <h3 class="text-[30px] text-[#000] font-popo font-semibold">Total Pages: <strong>{{ totalPages }}</strong></h3>
        </div> 
        <div class="flex gap-x-7 flex-wrap">
            <div class="w-[23.2%] relative mb-12" v-for="product in paginatedPros" :key="product.id">
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
            <vue-awesome-paginate
                :total-items="pros.length"
                :items-per-page="itemsPerPage"
                prev-button-content="<"
                next-button-content=">"
                v-model="currentPage"
            >
                <template #prev-button>
                    <span>
                        <i class="fa-solid fa-chevron-left"></i>
                    </span>
                </template>

                <template #next-button>
                    <span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </span>
                </template>
            </vue-awesome-paginate>
        </div> 
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const pros = ref([])

const currentPage = ref(1)
const itemsPerPage = 4

onMounted(async () => {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=100')
        const data = await response.json()
        pros.value = data.products
        
    } catch (error) {
        console.error('Error fetching products:', error)
    }
})

const totalPages = computed(() => Math.ceil(pros.value.length / itemsPerPage))

const paginatedPros = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return pros.value.length ? pros.value.slice(start, end) : []
})
</script>


<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: #f0eeee;
    color: black;
  }
  .paginate-buttons:hover {
    background-color: rgba(240, 82, 82, 0.834);
    color: white;
  }
  .active-page {
    background-color:rgba(240, 82, 82, 0.834);
    color: white;
  }
</style>