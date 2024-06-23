// remover bar
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click',()=>{
    container.classList.remove("active");
});

// validations

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.querySelector('.form-container.sing-in form');
    const signUpForm = document.querySelector('.form-container.sing-up form');

    // Load saved data from localStorage if available
    loadFormData();

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateSignIn()) {
            // Redirect to home.html on successful sign in
            window.location.href = "../html/home.html";
        }
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateSignUp()) {
            saveFormData();
            alert("Sign Up Successful!");
            // Clear form fields after successful submission
            signUpForm.reset();
        }
    });

    function validateSignIn() {
        const name = document.querySelector('.sing-in #name').value.trim();
        const password = document.querySelector('.sing-in #password').value.trim();

        if (!name || !password) {
            alert('Semua kolom wajib diisi!');
            return false;
        }

        if (password.length < 8) {
            alert('Sandi harus memiliki panjang minimal 8 karakter!');
            return false;
        }

        // Assuming a simple check for demonstration purposes
        const storedData = localStorage.getItem('signUpFormData');
        if (storedData) {
            const { firstName, password: storedPassword } = JSON.parse(storedData);
            if (name === firstName && password === storedPassword) {
                return true;
            } else {
                alert('Nama pengguna atau sandi salah!');
                return false;
            }
        } else {
            alert('Nama pengguna atau sandi salah!');
            return false;
        }
    }

    function validateSignUp() {
        const firstName = document.querySelector('.sing-up #name').value.trim();
        const email = document.querySelector('.sing-up #email').value.trim();
        const phone = document.querySelector('.sing-up #phone').value.trim();
        const password = document.querySelector('.sing-up #password').value.trim();
        const confirmPassword = document.querySelector('.sing-up #confirm-password').value.trim();

        if (!firstName || !email || !phone || !password || !confirmPassword) {
            alert('Semua kolom wajib diisi!');
            return false;
        }

        // Validasi Karakter Nama
        const namePattern = /^[a-zA-Z\s]+$/;
        if (!namePattern.test(firstName)) {
            alert('Nama hanya boleh mengandung huruf dan spasi!');
            return false;
        }

        // Validasi Format Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Alamat email tidak valid!');
            return false;
        }

        // Validasi Format Nomor Telepon
        const phonePattern = /^\d{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert('Nomor telepon tidak valid!');
            return false;
        }

        // Validasi Panjang Sandi
        if (password.length < 8) {
            alert('Sandi harus memiliki panjang minimal 8 karakter!');
            return false;
        }

        // Validasi Kekuatan Sandi
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Sandi harus mengandung huruf besar, huruf kecil, angka, dan karakter khusus!');
            return false;
        }

        // Validasi Kecocokan Sandi
        if (password !== confirmPassword) {
            alert('Konfirmasi sandi tidak cocok!');
            return false;
        }

        return true;
    }

    function saveFormData() {
        const firstName = document.querySelector('.sing-up #name').value.trim();
        const email = document.querySelector('.sing-up #email').value.trim();
        const phone = document.querySelector('.sing-up #phone').value.trim();
        const password = document.querySelector('.sing-up #password').value.trim();
        const confirmPassword = document.querySelector('.sing-up #confirm-password').value.trim();

        const formData = {
            firstName,
            email,
            phone,
            password,
            confirmPassword
        };

        localStorage.setItem('signUpFormData', JSON.stringify(formData));
    }

    function loadFormData() {
        const savedData = localStorage.getItem('signUpFormData');
        if (savedData) {
            const formData = JSON.parse(savedData);

            document.querySelector('.sing-up #name').value = formData.firstName;
            document.querySelector('.sing-up #email').value = formData.email;
            document.querySelector('.sing-up #phone').value = formData.phone;
            document.querySelector('.sing-up #password').value = formData.password;
            document.querySelector('.sing-up #confirm-password').value = formData.confirmPassword;
        }
    }
});

