<template>
    <div class="w-[20%] pt-10 border-r border-[rgba(0,0,0,0.29)]">
        <ul>
            <li class="text-[#000] text-[16px] font-popo font-normal leading-[24px] capitalize"
                :class="{ 'pb-4': index !== selectedItems.length - 1}" v-for="(side, index) in selectedItems"
                :key="index"><a href="">{{ side }}</a></li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const sidebar = ref([]);

onMounted(async () => {
    const response = await fetch('https://dummyjson.com/products/category-list');
    const data = await response.json()
    sidebar.value = data
})


const selectedItems = computed(() => {
    return sidebar.value.slice(0, 9);  
})

</script>