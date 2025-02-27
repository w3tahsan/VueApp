<template>
    <div class="w-[20%] pt-10 border-r border-[rgba(0,0,0,0.29)]">
        <ul>
            <li class="text-[#000] text-[16px] font-popo font-normal leading-[24px]" :class="{'pb-4': index !== sidebar.length - 1}" v-for="(side, index) in sidebar" :key="index"><a href="">{{ side }}</a></li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue'
    const sidebar = ref(['Woman’s Fashion', 'Men’s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine','Sports & Outdoor', 'Baby’s & Toys', 'Groceries & Pets', 'Health & Beauty']);
</script>