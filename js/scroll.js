window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    // 只处理点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有链接的 active 类
            navLinks.forEach(l => l.classList.remove('active'));
            // 给当前点击的链接添加 active 类
            this.classList.add('active');
        });
    });

    // 移除滚动监听
    // window.removeEventListener('scroll', setActiveLink);
}); 