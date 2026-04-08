import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "さめすきーDocs",
  description: "さめすきーのドキュメントです",
  lang: "ja-JP",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/rule' }
    ],

    sidebar: [
      {
        text: "利用規約・プライバシーポリシー",
        link: "/rule"
      },
      {
        text: "技術スタック",
        link: "/stacks"
      },
      {
        text: "制限",
        link: "/limits"
      },
      {
        text: "AiScriptについて",
        link: "/aiscript"
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
