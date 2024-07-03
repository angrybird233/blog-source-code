export const commentConfig = {
  type: 'valine',
  options: {
    appId: '5ZymDYwJ7CKqWb0vx3wT5vmv-gzGzoHsz',
    appKey: 'dd7cJaZ6xRUAtPvUa9diWuzj',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true,
    recordIP: true,
    hideComments: false, // 隐藏评论
  },
  // type: 'giscus',
  // options: {
  //   repo: 'vuepress-reco/docs-v2',
  //   repoId: 'R_kgDOGwsq6A',
  //   category: 'Comments',
  //   categoryId: 'DIC_kwDOGwsq6M4CWm89',
  //   mapping: 'title',
  //   hideComments: true, // 全局隐藏评论，默认 false
  // },
}
