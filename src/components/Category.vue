<template>
    <div class="container border-b border-[rgba(0,0,0,0.3)] pb-[100px]">
        <div class="w-[100%] pb-[60px]">
            <h3 class="text-[36px] text-[#000] font-popo font-semibold">Browse By Category</h3>
        </div> 
        <div class="flex gap-x-7">
            <div class="w-[16.66%]" v-for="total in 6" :key="total">
                <div class="border-1 border-[rgba(0,0,0,0.3)] text-center rounded-[4px] py-6">
                    <div class="flex items-center justify-center">
                        <img :src="categroy" alt="">
                    </div>
                    <h4 class="text-[16px] font-normal text-[#000] font-popo pt-4">Accessories</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import categroy from '@/assets/images/category.png'
</script>