// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    const token = localStorage.getItem('auth_token');
    if (!token && window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  
    // Add global AJAX error handler
    window.addEventListener('fetch', (event) => {
      if (event.response?.status === 401) {
        localStorage.removeItem('auth_token');
        window.location.href = '/login';
      }
    });
  });