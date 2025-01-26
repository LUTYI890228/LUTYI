document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');
    
    // 打开搜索
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('active');
    });
    
    // 关闭搜索
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
    
    // ESC键关闭搜索
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 