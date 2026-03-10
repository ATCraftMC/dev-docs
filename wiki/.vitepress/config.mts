/**
 * @Date: 2024-09-28
 * @LastEditTime: 2024-10-13
 * @FilePath: \Vitepress\wiki\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 * @Description https://vitepress.dev/reference/site-config
 * @Description https://vitepress.dev/reference/default-theme-config
 */
import {DefaultTheme, defineConfig} from 'vitepress'

const logo: string = './logo2.png';

// @ts-ignore
export default defineConfig({
    title: "ATCraftMC Dev Wiki",
    description: "ATCraftMC附属产品文档与开发者指南",
    lang: "zh-CN",
    lastUpdated: true,
    head: [['link', {rel: 'icon', href: logo}]],

    "css": {
        preprocessorOptions: {
            css: {
                additionalData: `@import "style.css";`
            }
        }
    },

    themeConfig: {
        logo: logo,
        docFooter: {prev: '上一页', next: '下一页'},
        outline: {label: '📚目录', level: 'deep'},
        socialLinks: [{icon: 'github', link: 'https://github.com/ATCraftMC'}],
        search: {provider: 'local'},

        //below functions
        notFound: notFound(),
        nav: nav(),
        footer: footer(),
        sidebar: sidebar(),
    },
})

function notFound(): DefaultTheme.NotFoundOptions {
    return {
        title: '未找到页面',
        code: '404',
        quote: '无法找到您请求的页面或资源。',
        linkText: '返回首页',
    }
}

function nav(): DefaultTheme.NavItem[] {
    return [
        {text: '🏠主页', link: '/'},
        {text: 'MC-Updater', link: '/mc-updater'},
        {text: 'Starlight', link: '/starlight'},
        {text: '赞助', link: 'https://ifdian.net/a/TBSTmc'},
        {
            text: '更多', items: [
                {text: '皮肤站', link: 'https://skin.tbstmc.xyz'},
                {text: '官网', link: 'https://atcraftmc.cn'},
                {text: '贡献者列表', link: '/contributors'}
            ],
        }
    ]
}

function footer(): DefaultTheme.Footer {
    return {
        message: '本Wiki根据 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0 协议</a>发布',
        copyright: 'Copyright © 2021-present <a href="https://atcraftmc.cn">ATCraftMC 2025</a>'
    }
}

function sidebar(): DefaultTheme.Sidebar {
    return {
        '/starlight/': side_starlight(),
        '/mc-updater/': side_mcu()
    }
}


function side_mcu(): DefaultTheme.SidebarItem[] {
    return [
        {text: '概述', link: '/mc-updater/index'},
        {text: '客户端', link: '/mc-updater/client'},
        {text: '服务端', link: '/mc-updater/server'},
        {text: '资源服务器', link: '/mc-updater/cdn'}
    ]
}

function side_starlight(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '概览',
            items: [
                {text: '概述', link: '/starlight/index'},
                {text: '更新日志', link: '/starlight/index/update'},
                {text: '安装指南', link: '/starlight/index/install'},
                {text: '兼容性', link: '/starlight/index/compatibility'}
            ]
        },


        {
            text: '附录',
            items: [
                {text: '模块列表', link: '/starlight/addition/modules'},
                {text: 'github介绍', link: '/starlight/addition/modrinth'},

            ]
        }
    ]
}


