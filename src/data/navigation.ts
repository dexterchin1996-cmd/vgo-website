export const MAIN_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About我们' },
  { href: '/services/repair', label: 'Services项目' },
  { href: '/how-it-works/customer', label: '使用流程' },
  { href: '/faq', label: '常见问题' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { href: '/services/repair', label: '维修Services' },
    { href: '/services/clean', label: '清洁Services' },
    { href: '/services/massage', label: '按摩Services' },
    { href: '/services/errand', label: '跑腿Services' },
  ],
  legal: [
    { href: '/terms', label: '使用条款' },
    { href: '/privacy', label: 'Privacy政策' },
  ],
} as const;
