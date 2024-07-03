export const navbar = [
  { text: '首页', link: '/', icon: 'Home' },
  { 
    text: '博客文章', 
    icon: 'Document',
    children: [
      { text: '前端', link: '/categories/Frontend/1.html' },
      { text: '后端', link: '/categories/Backend/1.html' },
      { text: '运维', link: '/categories/DevOps/1.html' },
      { text: '杂谈', link: '/categories/Thoughts/1.html' },
      { text: '其他', link: '/categories/Others/1.html' },
    ],
   },
  { 
    text: '进阶文档', 
    icon: 'Book',
    children: [
      { text: '前端编程之道', link: '/docs/how-to-code/index' },
    ],
   },
  { text: '留言板', link: '/docs/message-board', icon: 'Chat' },
  { text: '关于我', link: '/docs/introduction/index', icon: 'User' },
]
