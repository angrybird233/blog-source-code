import * as zhConfig from './zh'

export const themeConfig = {
  locales: {
    '/': {
      selectLanguageText: '选择语言',
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      commentConfig: zhConfig.commentConfig,
    },
  },
  logo: '/logo.png',
  author: 'angrybird233',
  docsRepo: 'https://github.com/angrybird233/blog-source-code',
  docsBranch: 'main',
  docsDir: '/docs'
  // algolia: {
  //   appId: 'DOKVCRGZJM',
  //   apiKey: '06d150dca9a0b9e68ae34ff8281843d8',
  //   indexName: 'v2-vuepress-reco-recoluan',
  //   inputSelector: '### REPLACE ME ####',
  //   algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
  //   debug: false // Set debug to true if you want to inspect the dropdown
  // },
}
