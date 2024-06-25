        // JavaScript for handling login functionality
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Hardcoded credentials for demonstration (in a real application, use server-side validation)
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // Check if the email and password match
            if (email === 'banghiep2003@gmail.com' && password === '1') {
                // Show the account management section and hide the login form
                document.getElementById('login-form').style.display = 'none';
                document.getElementById('account-management').style.display = 'block';
            } else {
                alert('Email hoặc mật khẩu không chính xác.');
            }
        });