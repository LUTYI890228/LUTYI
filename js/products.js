document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.product-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pageButtons = document.querySelectorAll('.page-btn');
    const productsPerPage = 2;

    // 显示指定页面的产品
    function showPage(pageNum) {
        const start = (pageNum - 1) * productsPerPage;
        const end = start + productsPerPage;
        
        items.forEach((product, index) => {
            if (index >= start && index < end) {
                product.classList.add('active');
            } else {
                product.classList.remove('active');
            }
        });
    }

    // 更新分页按钮状态
    function updatePagination(pageNum) {
        pageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.textContent) === pageNum) {
                btn.classList.add('active');
            }
        });
    }

    // 初始化显示第一页
    showPage(1);

    // 分页按钮点击事件
    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageNum = parseInt(button.textContent);
            showPage(pageNum);
            updatePagination(pageNum);
        });
    });

    // 左右按钮点击事件
    prevBtn.addEventListener('click', () => {
        const activePage = document.querySelector('.page-btn.active');
        const pageNum = parseInt(activePage.textContent);
        if (pageNum > 1) {
            showPage(pageNum - 1);
            updatePagination(pageNum - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        const activePage = document.querySelector('.page-btn.active');
        const pageNum = parseInt(activePage.textContent);
        if (pageNum < pageButtons.length) {
            showPage(pageNum + 1);
            updatePagination(pageNum + 1);
        }
    });

    // 产品点击事件（弹窗相关代码）
    const modal = document.querySelector('.product-modal');
    const closeModal = modal.querySelector('.close-modal');

    items.forEach(item => {
        item.addEventListener('click', () => {
            // 获取产品信息
            const productImage = item.querySelector('.product-image img').src;
            const productTitle = item.querySelector('.product-info h3').textContent;
            const productPrice = item.querySelector('.product-info .price').textContent;
            const productDetails = item.querySelector('.product-details');
            const productDescription = productDetails.querySelector('.description').textContent;
            const productSpecs = productDetails.querySelector('.specifications').innerHTML;

            // 填充模态框内容
            modal.querySelector('.modal-product-image img').src = productImage;
            modal.querySelector('.modal-product-info h3').textContent = productTitle;
            modal.querySelector('.modal-product-info .price').textContent = productPrice;
            modal.querySelector('.modal-product-info .description').textContent = productDescription;
            modal.querySelector('.modal-product-info .specifications').innerHTML = productSpecs;

            // 重置数量选择器
            modal.querySelector('.quantity-input').value = '1';

            // 显示模态框
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // 数量选择器功能
    const quantityBtns = modal.querySelectorAll('.quantity-btn');
    const quantityInput = modal.querySelector('.quantity-input');

    quantityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (btn.classList.contains('minus') && currentValue > 1) {
                quantityInput.value = currentValue - 1;
            } else if (btn.classList.contains('plus')) {
                quantityInput.value = currentValue + 1;
            }
        });
    });

    // 关闭模态框
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}); 