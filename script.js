// Show/Hide Password
const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function() {
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle the eye icon
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Form Validation
const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập đúng định dạng email');
        return;
    }

    // Validate password is not empty
    if (password === '') {
        alert('Mật khẩu không được để trống');
        return;
    }

    // Submit the form (for demonstration purposes, we'll just alert)
    alert('Form is valid and ready to submit!');
});