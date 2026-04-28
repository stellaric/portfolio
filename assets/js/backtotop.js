<script>
    document.addEventListener('DOMContentLoaded', function() {
        const backToTopButton = document.querySelector('.back-to-top');
        if (backToTopButton) {
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
</script>