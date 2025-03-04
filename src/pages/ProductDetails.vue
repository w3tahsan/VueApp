<template>
    <section class="pt-[110px] pb-[60px]">
        <div class="container">
            <div class="flex">
                <div class="w-[60%]">
                    <div class="flex space-x-4">
                        <div class="thums w-[25%] space-y-4">
                            <div class="thumb-item flex bg-[#F5F5F5] py-3 justify-center items-center">
                                <img :src="thumb" alt="">
                            </div>
                            <div class="thumb-item flex bg-[#F5F5F5] py-3 justify-center items-center">
                                <img :src="thumb" alt="">
                            </div>
                            <div class="thumb-item flex bg-[#F5F5F5] py-3 justify-center items-center">
                                <img :src="thumb" alt="">
                            </div>
                        </div>
                        <div class="preview w-[75%] flex bg-[#F5F5F5] py-3 justify-center items-center">
                            <img :src="preview" alt="">
                        </div>
                    </div>
                    <div class="details pt-20">
                        <h3 class="text-[36px] font-semibold font-popo text[#111827] leading-10 pb-4">Havic HV G-92 Gamepad</h3>
                        <p class="text-[16px] font-normal font-popo text[#4B5563] leading-6">The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
wooden canoes in Valley Park, Missouri ceased in 1978.</p>

                        <h3 class="text-[36px] font-semibold font-popo text[#111827] leading-10 pb-4 pt-7">Features</h3>
                        <p class="text-[16px] font-normal font-popo text[#4B5563] leading-6">The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                        <h3 class="text-[36px] font-semibold font-popo text[#111827] leading-10 pb-4 pt-7">Keywords</h3>
                        <p class="flex space-x-2">
                            
                            <a v-for="tag in tags" :key="tag" class="text-[12px] text-[#4B5563] font-popo leading-4 flex space-x-1 px-4 py-2 border border-[#E5E7EB] rounded-4xl" href="">
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.41175 9.27733L4.9375 10.9375L4.46325 9.27733C4.34068 8.8485 4.11086 8.45797 3.79548 8.1426C3.48011 7.82722 3.08958 7.59741 2.66075 7.47483L1 7L2.66017 6.52575C3.089 6.40318 3.47953 6.17336 3.7949 5.85798C4.11027 5.54261 4.34009 5.15208 4.46267 4.72325L4.9375 3.0625L5.41175 4.72267C5.53432 5.1515 5.76414 5.54203 6.07952 5.8574C6.39489 6.17277 6.78542 6.40259 7.21425 6.52517L8.875 7L7.21483 7.47425C6.786 7.59682 6.39547 7.82664 6.0801 8.14202C5.76472 8.45739 5.53432 8.8485 5.41175 9.27733ZM10.3386 5.08375L10.1875 5.6875L10.0364 5.08375C9.94994 4.73759 9.77101 4.42145 9.51877 4.1691C9.26653 3.91676 8.95045 3.7377 8.60433 3.65108L8 3.5L8.60433 3.34892C8.95045 3.2623 9.26653 3.08324 9.51877 2.8309C9.77101 2.57855 9.94994 2.26241 10.0364 1.91625L10.1875 1.3125L10.3386 1.91625C10.4251 2.26248 10.6041 2.57868 10.8565 2.83103C11.1088 3.08338 11.425 3.26239 11.7712 3.34892L12.375 3.5L11.7712 3.65108C11.425 3.73761 11.1088 3.91662 10.8565 4.16897C10.6041 4.42132 10.4251 4.73752 10.3386 5.08375ZM9.54233 11.9974L9.3125 12.6875L9.08267 11.9974C9.01823 11.8041 8.90968 11.6285 8.7656 11.4844C8.62152 11.3403 8.44588 11.2318 8.25258 11.1673L7.5625 10.9375L8.25258 10.7077C8.44588 10.6432 8.62152 10.5347 8.7656 10.3906C8.90968 10.2465 9.01823 10.0709 9.08267 9.87758L9.3125 9.1875L9.54233 9.87758C9.60677 10.0709 9.71532 10.2465 9.8594 10.3906C10.0035 10.5347 10.1791 10.6432 10.3724 10.7077L11.0625 10.9375L10.3724 11.1673C10.1791 11.2318 10.0035 11.3403 9.8594 11.4844C9.71532 11.6285 9.60677 11.8041 9.54233 11.9974Z" stroke="#4B5563" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>{{ tag }}</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="w-[40%] pl-[70px]">
                    <h3 class="text-[24px] text-[#000] font-popo font-semibold leading-6">Havic HV G-92 Gamepad</h3>
                    <div class="flex space-x-2 pt-2 pb-4">
                        <div class="star space-x-1">
                            <i v-for="total in 5" :key="total" class="fa-solid fa-star text-[#FFAD33] text-[14px]"></i>
                        </div>
                        <div class="star">
                            <span class="text-[rgba(0,0,0,0.51)] font-popo text-[14px] font-normal">(150 Reviews)</span>
                        </div>
                    </div>
                    <div class="border-b border-[#000] pb-6">
                        <h3 class="text-[24px] text-[#000] font-popo font-normal leading-6 pb-6">$192.00</h3>
                        <p class="text-[14px] text-[#000] font-popo font-normal leading-5">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>
                    <div class="colors">
                        <div class="flex gap-x-6 pt-6 items-center">
                            <div class="text-[24px] text-[#000] font-popo font-normal">Colours:</div>
                            <div class="flex space-x-2">
                                <label class="form-control" v-for="color in  colors" :key="color">
                                    <input :style="{'background': color}" type="radio" name="color" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="sizes" ref="sizes">
                        <div class="flex gap-x-6 pt-6 items-center">
                            <div class="text-[24px] text-[#000] font-popo font-normal">Sizes:</div>
                            <div class="flex space-x-2">
                                <label class="form-control relative" v-for="size in allsize" :key="size">
                                    <input type="radio" name="size" />
                                    <span class="absolute top-[50%] left-[50%] -translate-[50%] font-popo  text-[14px font-medium]">{{ size }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center pt-6">
                        <div class="quantity w-[40%]">
                            <div class="relative flex items-center">
                                <button @click="decrement" type="button" class="px-3 py-2 border border-[rgba(0,0,0,0.5)] rounded-s-lg">
                                    <i class="fa fa-minus"></i>
                                </button>
                                <input :value="count" type="text" class="text-center w-full py-2 border-y border-[rgba(0,0,0,0.5)]"  required />
                                <button @click="increment" type="button" class="px-3 py-2 border border-[rgba(0,0,0,0.5)] rounded-e-lg">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="cart-btn ms-4">
                            <button class="text-[16px] text-[#FAFAFA] font-popo font-medium leading-6 bg-[#DB4444] px-12 py-[10px] rounded-[4px]">Add Cart</button>
                        </div>
                        <div class="cart-btn ms-4">
                            <button class="text-[20px] text-[#000000] border border-[rgba(0,0,0,0.51)] px-[10px] py-[6px] rounded-[4px]"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container border-b border-[rgba(0,0,0,0.3)] pb-[100px]">
            <div class="w-[100%] pb-7">
                <h3 class="text-[36px] text-[#000] font-popo font-semibold">Related Products</h3>
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
        </div>
    </section>
</template>

<script setup>
import {ref, onMounted} from "vue";
import thumb from '@/assets/images/thumb.png'
import preview from '@/assets/images/preview.png'
import product from '@/assets/images/product.png'

const colors = ref(['red', 'green', 'blue', 'purple'])
const allsize = ref(['S', 'M', 'L', 'XL'])
const tags = ref(['gadgets', 'electronics', 'technoloy', 'gaming'])

const count = ref(1)
const increment = () => {
  count.value++
}
const decrement = () => {
    if (count.value > 1 ) {
        count.value--
  }
}

const sizes = ref(null)
onMounted(() => {
  const inputs = sizes.value.querySelectorAll("input[type='radio']");
  Array.from(inputs).forEach((item) => {
    item.addEventListener("click", (e) => {
      // Reset all inputs
      inputs.forEach((input) => {
        input.nextElementSibling.style.color = "black";
      });
      // Apply style to clicked input
      e.target.nextElementSibling.style.color = "#fff";
    });
  });
});
</script>

<style scope>
button:focus {
    border: 1px solid rgba(0, 0, 0, 0.508)!important;
}
.colors input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}
.colors input[type="radio"]::before {
  content: "";
  width: 17px;
  height: 17px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: #A0BCE0;
    border: 2px solid #fff;
}
.colors input[type="radio"]:checked::before {
  transform: scale(1);
}
.sizes input[type="radio"] {
  appearance: none;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: grid;
  place-content: center;
  border: 1px solid #000000;
}
.sizes input[type="radio"]:checked {
  background: #DB4444;
}


</style>