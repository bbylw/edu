// 海外教育风险指南 - 简洁版JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const countryFilter = document.getElementById('country-filter');
    const riskFilter = document.getElementById('risk-filter');
    const backToTopBtn = document.getElementById('back-to-top');
    const filterableItems = document.querySelectorAll('[data-country], [data-tier]');

    // 筛选功能
    function handleFilter() {
        const countryValue = countryFilter ? countryFilter.value : '';
        const riskValue = riskFilter ? riskFilter.value : '';
        
        filterableItems.forEach(item => {
            const country = item.dataset.country || '';
            const tier = item.dataset.tier || '';
            
            const countryMatch = !countryValue || country === countryValue;
            const riskMatch = !riskValue || tier === riskValue;
            const isVisible = countryMatch && riskMatch;
            
            item.style.display = isVisible ? '' : 'none';
        });
    }

    // 返回顶部功能
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (backToTopBtn) {
            backToTopBtn.classList.toggle('visible', scrollTop > 300);
        }
    }

    // 平滑滚动到顶部
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 事件监听器
    if (countryFilter) countryFilter.addEventListener('change', handleFilter);
    if (riskFilter) riskFilter.addEventListener('change', handleFilter);
    if (backToTopBtn) backToTopBtn.addEventListener('click', scrollToTop);

    // 滚动事件（节流）
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 10);
    });

    // 平滑滚动导航
    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ESC键清除筛选
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (countryFilter) countryFilter.value = '';
            if (riskFilter) riskFilter.value = '';
            handleFilter();
        }
    });
});
