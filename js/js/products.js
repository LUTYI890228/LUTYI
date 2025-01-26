document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.product-item');
    const modal = document.querySelector('.product-modal');
    const closeModal = modal.querySelector('.close-modal');

    // 产品点击事件
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