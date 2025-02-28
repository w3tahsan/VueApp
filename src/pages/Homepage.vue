<template>
    <section class="pb-[160px]">
        <div class="container">
            <div class="flex">
                <Sidebar></Sidebar>
                <Banner></Banner>
            </div>
        </div>
    </section>

    <section>
        <NewArrival></NewArrival>
    </section>

    <section class="pt-[80px] pb-12">
        <Category></Category>
    </section>

    <section class="pb-12">
        <BestSelling></BestSelling>
    </section>

    <section class="pb-12">
        <ExploreProduct></ExploreProduct>
    </section>
</template>

<script setup>
    import Nav from '@/components/Nav.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Footer from '@/components/Footer.vue'
    import Banner from '@/components/Banner.vue'
    import NewArrival from '@/components/NewArrival.vue'
    import Category from '@/components/Category.vue'
    import BestSelling from '@/components/BestSelling.vue'
    import ExploreProduct from '@/components/ExploreProduct.vue'
</script>