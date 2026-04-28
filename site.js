const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuBtn = document.querySelector('.menu-btn');
const siteNav = document.getElementById('site-nav');
if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];

const setActiveLink = () => {
  let current = null;
  for (let i = sections.length - 1; i >= 0; i -= 1) {
    const rect = sections[i].getBoundingClientRect();
    if (rect.top <= 120) {
      current = sections[i];
      break;
    }
  }

  navLinks.forEach((link) => {
    const isMatch = current && link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('active', Boolean(isMatch));
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);

const siteHeader = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

const imageEls = document.querySelectorAll('img[data-fallback]');
imageEls.forEach((img) => {
  img.addEventListener('error', () => {
    const fallback = img.getAttribute('data-fallback');
    if (fallback && !img.dataset.fallbackApplied) {
      img.dataset.fallbackApplied = 'true';
      img.src = fallback;
    }
  });
});

const inquiryForm = document.getElementById('partnership-form');
const feedbackEl = inquiryForm ? inquiryForm.querySelector('.form-feedback') : null;
const isChinesePage = document.documentElement.lang.toLowerCase().startsWith('zh');

if (inquiryForm) {
  inquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!inquiryForm.checkValidity()) {
      if (feedbackEl) {
        feedbackEl.textContent = isChinesePage
          ? '请先完整填写必填项。'
          : 'Please complete the required fields to continue.';
      }
      inquiryForm.reportValidity();
      return;
    }

    const action = inquiryForm.getAttribute('action');
    if (!action) {
      if (feedbackEl) {
        feedbackEl.textContent = isChinesePage
          ? '表单提交配置缺失，请联系网站管理员。'
          : 'Form endpoint is missing. Please contact the site administrator.';
      }
      return;
    }

    const formData = new FormData(inquiryForm);
    formData.append('submitted_at', new Date().toISOString());

    if (feedbackEl) {
      feedbackEl.textContent = isChinesePage
        ? '正在提交，请稍候...'
        : 'Submitting your inquiry...';
    }

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      if (feedbackEl) {
        feedbackEl.textContent = isChinesePage
          ? '提交成功，我们已收到你的咨询信息。'
          : 'Submitted successfully. Your inquiry has been sent.';
      }
      inquiryForm.reset();
    } catch (error) {
      if (feedbackEl) {
        feedbackEl.textContent = isChinesePage
          ? '提交失败，请稍后重试或直接发送邮件至 pityhappy@gmail.com。'
          : 'Submission failed. Please try again or email us directly at pityhappy@gmail.com.';
      }
    }
  });
}
