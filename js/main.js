// ============= Password & Hints System =============
const correctPassword = "حبيبتي"; // غير الباسورد هنا

const hints = [
    "التلميح الأول: هي كلمة بقولهالك كل يوم 💕",
    "التلميح التاني: بتبدأ بحرف الحاء 🤔",
    "التلميح التالت: من 6 حروف ❤️",
    "التلميح الأخير: حبي____ 💖"
];

let currentHint = 0;

function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    if (password === correctPassword) {
        // Save to session
        sessionStorage.setItem('authenticated', 'true');
        // Redirect to home
        window.location.href = 'home.html';
    } else {
        errorMsg.textContent = "كلمة السر غلط، حاولي تاني يا قمر 💔";
        document.getElementById('password').classList.add('shake');
        setTimeout(() => {
            document.getElementById('password').classList.remove('shake');
        }, 500);
    }
}

function showHint() {
    const hintsContainer = document.getElementById('hints-container');
    hintsContainer.classList.remove('hidden');
    document.getElementById('hint-text').textContent = hints[0];
    currentHint = 0;
}

function nextHint() {
    currentHint = (currentHint + 1) % hints.length;
    document.getElementById('hint-text').textContent = hints[currentHint];
}

// Check authentication on protected pages
function checkAuth() {
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
}

// Run on protected pages
if (!window.location.pathname.includes('index.html') && 
    !window.location.pathname.endsWith('/')) {
    checkAuth();
}

// ============= Navigation =============
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// ============= Questions Toggle =============
function toggleAnswer(card) {
    const answer = card.querySelector('.answer');
    answer.classList.toggle('hidden');
}

// ============= Enter key for password =============
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});
