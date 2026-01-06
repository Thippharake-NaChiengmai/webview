document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.action-btn');
    const title = document.querySelector('h1');
    
    if (btn) {
        btn.addEventListener('click', () => {
            // Simple interaction demo
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 100);
            
            // Example of dynamic content update
            title.textContent = 'Welcome Aboard! 🚀';
            title.style.background = 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)';
            title.style.webkitBackgroundClip = 'text';
            title.style.webkitTextFillColor = 'transparent';
        });
    }
});
