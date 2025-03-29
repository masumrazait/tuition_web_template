document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('enquiryModal');
    const openButtons = document.querySelectorAll('.cta-button, .enquire-button');
    const closeButton = document.querySelector('.modal-close');
    
    // Open modal function
    function openModal() {
      document.body.style.overflow = 'hidden';
      modal.classList.add('active');
    }
    
    // Close modal function
    function closeModal() {
      document.body.style.overflow = '';
      modal.classList.remove('active');
    }
    
    // Event listeners for all open buttons
    openButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
      });
    });
    
    // Close modal when clicking X
    closeButton.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
    
    // Prevent modal container from closing when clicking inside
    document.querySelector('.modal-container').addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });