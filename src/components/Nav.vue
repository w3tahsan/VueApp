<template>
    <header class="bg-[#000000] py-4">
        <div class="container">
            <div class="flex">
                <div class="left w-[70%] text-right">
                    <span class="text-center text-[14px] text-[#FAFAFA] leading-[21px] font-popo">Summer Sale For All
                        Swim Suits And Free Express
                        Delivery - OFF 50%!</span>
                    <a href=""
                        class="font-semibold text-center text-[14px] text-[#FAFAFA] leading-[21px] font-popo ml-2">ShopNow</a>
                </div>
                <div class="right w-[30%] text-right">
                    <select class="text-[#FAFAFA] border-0 text-[14px] font-popo">
                        <option class="text-[#FAFAFA] border-0 text-[14px] font-popo bg-[#000]" value="" selected>
                            English</option>
                        <option class="text-[#FAFAFA] border-0 text-[14px] font-popo bg-[#000]" value="">Bangla</option>
                    </select>
                </div>
            </div>
        </div>
    </header>
    <nav class="pt-10 bg-[] border-b border-[rgba(0,0,0,0.32)] pb-4">
        <div class="container">
            <div class="flex items-center">
                <div class="w-[20%]">
                    <img :src="logo" alt="">
                </div>
                <div class="menu w-[40%]">
                    <ul class="flex">
                        <li><router-link class="text-[#000] font-popo text-[16px] leading-[24px] px-6" to="/">Home</router-link></li>
                        <li><router-link class="text-[#000] font-popo text-[16px] leading-[24px] px-6" to="/shop">Shop</router-link></li>
                        <li><a class="text-[#000] font-popo text-[16px] leading-[24px] px-6" href="">About</a></li>
                        <li><a class="text-[#000] font-popo text-[16px] leading-[24px] px-6" href="">Signup</a></li>
                    </ul>
                </div>
                <div class="searchbar w-[25%] relative">
                    <input class="bg-[#F5F5F5] rounded-[4px] py-3 px-5 w-full" type="text" placeholder="what are you looking for?">
                    <i class="fa-solid fa-magnifying-glass absolute right-1 top-[50%] -translate-[50%]"></i>
                </div>
                <div class="icons w-[15%]">
                    <div class="icon text-right">
                        <a href="" class="text-[28px] text-[#000000]"><i class="fa-regular fa-heart"></i></a>
                        <router-link class="text-[28px] text-[#000000] ml-4" to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link>
                        <a class="text-[28px] text-[#000000] ml-4" href=""><i class="fa-regular fa-user"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
</script>