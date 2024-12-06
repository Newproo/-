document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('تم إضافة المنتج إلى سلة التسوق!');
        });
    });
});
