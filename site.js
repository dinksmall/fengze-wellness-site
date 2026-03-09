const content = {
  en: {
    nav: { home: 'Home', about: 'About', product: 'Product', quality: 'Quality', distributor: 'Distributor', contact: 'Contact' },
    hero: {
      badge: 'Premium Herbal Wellness · Global Distribution',
      title: 'Premium herbal wellness for modern global markets.',
      subtitle: 'Fengze Wellness (HK) Limited presents Cynomorium Herba Pills through a premium brand lens: heritage-inspired, visually refined, and structured for global distributor development.'
      ctaPrimary: 'Become a Distributor', ctaSecondary: 'Explore the Product',
      point1: 'Bilingual website', point2: 'Editable content', point3: 'Built for distributor leads',
      cardTitle: 'What this first version already supports',
      cardList: ['Company presentation', 'Product positioning', 'Quality / testing narrative', 'Global distributor inquiry path'],
      note: 'Important: public-facing wording should stay within a supplement / wellness framework and be reviewed market by market.'
    },
    about: {
      eyebrow: 'About Fengze Wellness',
      title: 'A wellness-first brand built for long-term trust.',
      body1: 'Fengze Wellness (HK) Limited can present itself as a modern herbal wellness company focused on premium plant-based products, quality assurance, and international channel development.',
      body2: 'For this first launch phase, the website is designed to support three goals at once: brand presentation, product explanation, and global distributor recruitment.',
      highlightsTitle: 'Suggested company highlights',
      highlights: ['Hong Kong-based corporate identity', 'Bilingual communication for Chinese and international buyers', 'Premium herbal positioning', 'Prepared for future expansion into more products and markets']
    },
    product: {
      eyebrow: 'Featured Product', title: 'Cynomorium Herba Pills (鎖陽丸)',
      intro: 'The product should be presented as a premium plant-based men’s vitality supplement, not as a pharmaceutical treatment claim. That gives the brand more room to grow internationally with lower compliance risk.',
      card1Title: 'Positioning', card1Body: 'Premium plant-based men’s vitality supplement with a traditional Chinese herbal background and modern wellness presentation.',
      card2Title: 'Value Proposition', card2Body: 'Designed for markets that want natural, premium, trust-oriented alternatives in the men’s wellness category.',
      card3Title: 'Commercial Angle', card3Body: 'Suitable for distributor-driven expansion, selective DTC testing, and bilingual marketing materials.',
      featuresTitle: 'Key public-facing points',
      features: ['Plant-based formula', 'Men’s vitality and stamina support', 'Fast-perceived support narrative', 'Premium herbal heritage story', 'Positioning supported by product integrity testing'],
      complianceTitle: 'Compliance direction',
      complianceBody: 'Keep external messaging away from medical treatment claims. Public-facing copy should avoid “treats ED”, “replaces prescription drugs”, and absolute efficacy promises.',
      compliance: ['Use supplement / wellness framing', 'Review claims per target country', 'Separate public marketing from private distributor education']
    },
    quality: {
      eyebrow: 'Quality & Credibility', title: 'Trust is part of the product.',
      intro: 'For this category, quality communication matters almost as much as the product itself. The website should gradually add controlled proof points, not dump every internal file online.',
      q1Title: 'Testing Narrative', q1Body: 'Summarize relevant screening and product integrity materials in a public-friendly way.',
      q2Title: 'Controlled Downloads', q2Body: 'Offer curated, redacted, or summary documents only. Sensitive internal records should never be published directly.',
      q3Title: 'Scalable Structure', q3Body: 'This site structure leaves room for future certifications, FAQs, market-specific pages, and distributor materials.',
      downloadTitle: 'Public reference document', downloadBody: 'A selected product testing document can be made available here for qualified buyers, partners, or distributor discussions.', downloadCta: 'Open selected PDF'
    },
    distributor: {
      eyebrow: 'Global Distribution', title: 'Built to attract the right distributors, not just more traffic.',
      body: 'The first commercial objective of the site should be to help Fengze Wellness look credible, premium, and easy to contact for global partnerships.',
      points: ['Support initial outreach in Hong Kong, Southeast Asia, overseas Chinese markets, and selected international channels', 'Present the product in a cleaner international format', 'Create a simple path for distributor inquiry and follow-up'],
      formTitle: 'Current inquiry route', formBody: 'For version one, direct distributor leads to email or WhatsApp. Later we can replace this with a proper inquiry form and CRM integration.'
    },
    contact: {
      eyebrow: 'Contact', title: 'Let qualified buyers reach you easily.', body: 'The contact section should be simple, visible, and consistent across all pages.', addressLabel: 'Address'
    },
    footer: { note: 'Draft website structure prepared for launch, editing, and future deployment.' }
  },
  zh: {
    nav: { home: '首页', about: '公司', product: '产品', quality: '质量', distributor: '招商', contact: '联系' },
    hero: {
      badge: '高端草本健康 · 全球招商',
      title: '面向现代全球市场的高端草本健康品牌。',
      subtitle: 'Fengze Wellness（香港豐澤健康有限公司）将锁阳丸以更高端、更克制、更国际化的方式呈现出来，兼顾品牌形象、产品表达与全球招商。'
      ctaPrimary: '申请成为代理商', ctaSecondary: '查看产品信息',
      point1: '中英双语', point2: '内容可继续编辑', point3: '适合承接招商线索',
      cardTitle: '这版网站已经覆盖的核心能力',
      cardList: ['公司形象展示', '产品定位表达', '质量/检测信任叙事', '全球代理商询盘入口'],
      note: '重要：对外文案建议始终采用 supplement / wellness 的表达框架，并按目标国家分别审核。'
    },
    about: {
      eyebrow: '关于豐澤健康',
      title: '先建立长期信任，再放大流量和招商。',
      body1: 'Fengze Wellness（HK）Limited 可以对外呈现为一家面向国际市场的现代草本健康公司，重点在于高端植物型产品、质量控制与全球渠道拓展。',
      body2: '第一阶段网站不是简单堆资料，而是同时服务三件事：品牌展示、产品介绍、全球招商。',
      highlightsTitle: '建议对外强调的公司亮点',
      highlights: ['香港公司主体', '中英双语沟通能力', '高端草本健康定位', '可逐步扩展到更多产品与市场']
    },
    product: {
      eyebrow: '核心产品', title: '锁阳丸 / Cynomorium Herba Pills',
      intro: '对外建议将产品定位为高端植物型男士活力补充剂，而不是药品式疗效表达。这样更有利于国际传播、平台招商和后续合规扩张。',
      card1Title: '产品定位', card1Body: '高端植物型男士活力补充剂，结合中式草本传统与现代健康消费表达。',
      card2Title: '价值主张', card2Body: '适合寻求天然、可信、高端定位的男士健康消费与渠道市场。',
      card3Title: '商业价值', card3Body: '适合代理商分销、独立站测试与中英双语国际化营销资料输出。',
      featuresTitle: '建议公开使用的卖点方向',
      features: ['植物型配方', '男士活力与耐力支持', '较快感知型支持叙事', '高端草本出处故事', '以检测与信任作为商业支撑'],
      complianceTitle: '合规提醒',
      complianceBody: '对外不要直接使用药品治疗型话术。公开页面应避免“治疗ED”“替代处方药”“绝对起效承诺”等表达。',
      compliance: ['坚持 supplement / wellness 框架', '按国家单独审核文案', '公开营销与内部招商培训分开']
    },
    quality: {
      eyebrow: '质量与信任', title: '这类产品，信任本身就是卖点。',
      intro: '这版网站的质量模块应逐步加入可公开的检测摘要、规范化说明和筛选后的证明材料，而不是把内部资料原件一股脑上传。',
      q1Title: '检测叙事', q1Body: '把相关筛查、检测和产品完整性信息整理成公开可读的摘要。',
      q2Title: '受控下载', q2Body: '网站上只放筛选版、摘要版、去敏版资料；敏感原件默认不公开。',
      q3Title: '可扩展结构', q3Body: '后续可以继续增加认证、FAQ、不同市场页面、招商资料下载等模块。',
      downloadTitle: '公开参考文件', downloadBody: '这里可以放一份你指定的产品检测 PDF，方便潜在代理商和合作方快速查看。', downloadCta: '打开选定 PDF'
    },
    distributor: {
      eyebrow: '全球招商', title: '不是只做流量，而是吸引合适的代理商。',
      body: '网站第一阶段的商业目标，是让 Fengze Wellness 看起来专业、可信、好联系，并能承接全球合作意向。',
      points: ['支持香港、东南亚、海外华人及部分国际渠道的早期开发', '把产品用更国际化、更克制的方式表达出来', '建立清晰的代理咨询与后续跟进入口'],
      formTitle: '当前合作入口', formBody: '第一版可以先用邮箱和 WhatsApp 承接线索；后续再接正式表单、CRM 和自动化分配流程。'
    },
    contact: {
      eyebrow: '联系', title: '让真正有价值的客户更容易找到你们。', body: '联系信息需要清晰、稳定，并在所有页面保持一致。', addressLabel: '地址'
    },
    footer: { note: '这是第一版网站骨架，后续可以继续接入域名、后台编辑和正式部署。' }
  }
};

function fillList(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(i => `<li>${i}</li>`).join('');
}

function applyLanguage(lang) {
  const dict = content[lang] || content.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n.split('.');
    let value = dict;
    for (const p of path) value = value?.[p];
    if (typeof value === 'string') el.textContent = value;
  });
  fillList('hero-card-list', dict.hero.cardList);
  fillList('about-highlights', dict.about.highlights);
  fillList('product-features', dict.product.features);
  fillList('product-compliance', dict.product.compliance);
  fillList('distributor-points', dict.distributor.points);
  localStorage.setItem('fw-lang', lang);
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

document.getElementById('year').textContent = new Date().getFullYear();
applyLanguage(localStorage.getItem('fw-lang') || 'en');