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
    title: "ATCraft Wiki",
    description: "ATC旗下MC服务器的Wiki",
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
        '/starlight/': []
    }
}

function sidebar_server(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '概览',
            items: [
                {text: '关于服务器', link: '/server/about'},
                {text: '常见问题', link: '/server/faqs'},
                {text: '玩法介绍', link: '/server/functions'}
            ]
        },
        {
            text: '教程',
            items: [
                {text: '登录方式', link: '/server/course/login-method'},
                {text: '客户端选择', link: '/server/course/clients'},
                {text: '外置登录配置', link: '/server/course/launcher-config'},
                {text: '模组服客户端', link: '/server/course/modded-clients'},
                {text: '建筑技巧', link: '/server/course/build-tricks'},
                {text: 'WE教程', link: '/server/course/worldedit-guide'}
            ],
            collapsed: false,
        },
        {
            text: '规则',
            items: [
                {text: '服务器规定', link: '/server/rule/rules'},
                {text: '惩罚措施', link: '/server/rule/punishments'}
            ],
            collapsed: false,
        },
        {
            text: '更多信息',
            items: [
                // { text: '管理公示', link: '/operators' },
                {text: '服务条款', link: '/server/other/terms-of-service'},
                {text: '隐私政策', link: '/server/other/privacy-policy'},
                {text: '商业合作', link: '/server/other/business'},
                {text: '管理公示', link: '/server/other/operators'},
                {text: '技术参考', link: '/server/other/technical-ref'}
            ],
            collapsed: false,
        },
        {
            text: '其他',
            items: [
                {text: '梗百科', link: '/server/other/geng'},
            ],
            collapsed: false,
        }
    ]
}
