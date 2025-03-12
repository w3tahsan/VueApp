<template>
    <section class="pt-[100px] pb-[100px]">
        <div class="container">
            <div class="flex shadow-abc py-6 px-10 items-center mb-10">
                <div class="w-[30%]">
                    <span class="text-[16px] text-[#000] font-popo font-normal leading-6">Product</span>
                </div>
                <div class="w-[30%] ">
                    <span class="text-[16px] text-[#000] font-popo font-normal leading-6">Price</span>
                </div>
                <div class="w-[20%]">
                    <span class="text-[16px] text-[#000] font-popo font-normal leading-6">Quantity</span>
                </div>
                <div class="w-[20%] text-right">
                    <span class="text-[16px] text-[#000] font-popo font-normal leading-6">Subtotal</span>
                </div>
            </div>
            <div class="flex shadow-abc py-6 px-10 items-center mb-10" v-for="(cart, index) in carts" :key="cart.id">
                <div class="w-[30%] flex items-center space-x-5">
                    <img :src="cart.image" alt="">
                    <span class="text-[16px] text-[#000] font-popo font-normal leading-6">{{ cart.name }}</span>
                </div>
                <div class="w-[30%]">
                    <span class="text-[16px] text-[#000] font-popo font-normal leading-6">{{ cart.price }}</span>
                </div>
                <div class="w-[20%]">
                    <div class="gap-x-1 border-[1.5px] border-[rgba(0,0,0,0.4)] px-4 py-[6px] w-[72px] rounded-[4px] flex justify-between items-center">
                        <p class="text-[16px] text-[#000] font-popo font-normal leading-6">
                             {{ cart.count }}
                        </p>
                        <p class="text-right text-[14px]">
                            <i @click="increment(index)" class=" fa fa-chevron-up"></i>
                            <i @click="decrement(index)" class=" fa fa-chevron-down"></i>
                        </p>
                    </div>
                </div>
                <div class="w-[20%] text-right">
                    <span class="text-[16px] text-[#000] font-popo font-normal leading-6">${{ cart.price * cart.count }}</span>
                </div>
            </div>
          
            <div class="flex justify-between pt-10">
                <a class="border-1 border-[rgba(0,0,0,0.4)] text-[16px] text-[#000] font-popo font-medium px-12 py-4 rounded-[4px] hover:bg-[#DB4444] hover:text-[#fff]">Return to Shop</a>
                <button type="submit" class="border-1 border-[rgba(0,0,0,0.4)] text-[16px] text-[#000] font-popo font-medium px-12 py-4 rounded-[4px] hover:bg-[#DB4444] hover:text-[#fff]">Update Cart</button>
            </div>

            <div class="pt-[110px] flex justify-end">
                <div class="w-[40%] border-[1.5px] border-[#000] rounded-[4px] px-6 py-8">
                    <h3 class="text-[20px] text-[#000] font-popo font-medium leading-7 pb-6">Cart Total</h3>
                    <div class="border-b pb-4 mb-4 border-[rgba(0,0,0,0.4)] flex justify-between text-[#000] font-normal font-popo text-[16px] leading-6">
                        <span>Subtotal:</span>
                        <span>${{ subtotal }}</span>
                    </div>
                    <div class="border-b pb-4 mb-4 border-[rgba(0,0,0,0.4)] flex justify-between text-[#000] font-normal font-popo text-[16px] leading-6">
                        <span>shipping:</span>
                        <span>Free</span>
                    </div>
                    <div class="border-b pb-4 mb-4 border-[rgba(0,0,0,0.4)] flex justify-between text-[#000] font-normal font-popo text-[16px] leading-6">
                        <span>Total:</span>
                        <span>${{ subtotal }}</span>
                    </div>
                    <div class="flex justify-center">
                        <button type="submit" class="bg-[#DB4444] text-[16px] text-[#fff] font-popo font-medium px-12 py-4 rounded-[4px]">Procced to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'


const carts = ref([
  {
    id: 1,
    name: 'LCD Monitor',
    price: 650,
    image: 'https://placehold.co/50',
    count: 1
  },
  {
    id: 2,
    name: 'LCD Monitor',
    price: 650,
    image: 'https://placehold.co/50',
    count: 1
  }
])

const subtotal = computed(() =>
  carts.value.reduce((acc, cart) => acc + cart.price * cart.count, 0)
)

// let subtotal = 0

// for (let cart of carts.value) {
//   subtotal += cart.price * cart.count
// }

const increment = (index) => {
  carts.value[index].count++
}

const decrement = (index) => {
  if (carts.value[index].count > 1) {
    carts.value[index].count--
  }
}
</script>