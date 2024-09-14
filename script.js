
document.querySelectorAll('.w-dropdown-toggle').forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.8)';
        item.style.borderColor = 'rgba(0, 255, 0, 0.8)';
    });
    
    item.addEventListener('mouseleave', function() {
        item.style.boxShadow = 'none';
        item.style.borderColor = 'transparent';
    });
});

