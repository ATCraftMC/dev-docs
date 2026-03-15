<script setup>
import DefaultTheme, {VPHomeFeatures} from 'vitepress/theme'
import {features} from "../../home-card-content";

const {Layout} = DefaultTheme


</script>

<template>
    <Layout>
        <template #home-hero-after>
            <VPHomeFeatures :features="features"/>
        </template>
    </Layout>
</template>
