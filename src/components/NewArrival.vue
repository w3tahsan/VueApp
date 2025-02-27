<template>
    <div class="container border-b border-[rgba(0,0,0,0.3)] pb-[100px]">
        <div class="w-[100%] pb-7">
            <h3 class="text-[36px] text-[#000] font-popo font-semibold">New Arrivals</h3>
        </div> 
        <div class="flex gap-x-7">
            <div class="w-[25%] relative" v-for="total in 4" :key="total">
                <div class="bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-12">
                    <img :src="product" alt="">
                </div>
                <h3 class="text-[16px] font-medium text-[#000] font-popo pt-4">HAVIT HV-G92 Gamepad</h3>
                <p class="pt-2 space-x-4">
                    <span class="text-[#DB4444] font-popo text-[16px] font-medium">$120</span>
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
            <a href="" class="text-[#FAFAFA] font-popo text-[16px] font-medium bg-[#DB4444] py-4 px-12 rounded">View All Products</a>
        </div> 
    </div>
</template>

<script setup>
    import product from '@/assets/images/product.png'
</script>