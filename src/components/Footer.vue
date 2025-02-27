<template>
    <footer class="pt-[80px] pb-[100px] bg-[#000]">
        <div class="container">
            <div class="flex gap-x-5">
                <div class="w-[30%]">
                    <img :src="logo" alt="">
                    <h3 class="pt-6 pb-6 text-[20px] text-[#fafafa] leading-[28px] font-medium font-popo">Subscribe</h3>
                    <p class="text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">Get 10% off your first order</p>
                </div>
                <div class="w-[25%]">
                    <h3 class="pb-6 text-[20px] text-[#fafafa] leading-[28px] font-medium font-popo">Support</h3>
                    <p class="pb-4 pr-10 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">exclusive@gmail.com</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">+88015-88888-9999</a>
                    </p>
                </div>
                <div class="w-[20%]">
                    <h3 class="pb-6 text-[20px] text-[#fafafa] leading-[28px] font-medium font-popo">Account</h3>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">My Account</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">Login / Register</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">Cart</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">Wishlist</a>
                    </p>
                </div>
                <div class="w-[20%]">
                    <h3 class="pb-6 text-[20px] text-[#fafafa] leading-[28px] font-medium font-popo">Quick Link</h3>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">Privacy Policy</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">Terms Of Use</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">FAQ</a>
                    </p>
                    <p class="pb-4 text-[16px] text-[#fafafa] leading-[24px] font-normal font-popo">
                        <a href="">Contact</a>
                    </p>
                </div>
                <div class="w-[20%]">
                    <h3 class="pb-6 text-[20px] text-[#fafafa] leading-[28px] font-medium font-popo">Download App</h3>
                    <div class="flex items-center">
                        <div class="qr mr-2">
                            <img :src="qr" alt="">
                        </div>
                        <div class="store">
                            <img :src="playstore" class="mb-2" alt="">
                            <img :src="appstore" alt="">
                        </div>
                    </div>
                    <div class="social mt-6 space-x-6">
                        <a href="" class="text-white"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="" class="text-white"><i class="fa-brands fa-twitter"></i></a>
                        <a href="" class="text-white"><i class="fa-brands fa-instagram"></i></a>
                        <a href="" class="text-white"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import logo from '@/assets/images/footerlogo.png'
    import qr from '@/assets/images/qr.png'
    import appstore from '@/assets/images/appstore.png'
    import playstore from '@/assets/images/playstore.png'
</script>