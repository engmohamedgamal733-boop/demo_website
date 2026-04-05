// ╔════════════════════════════════════════════════════════════╗
// ║  كلمة السر - غيرها هنا                                     ║
// ╚════════════════════════════════════════════════════════════╝
const correctPassword = "دودو"; // ← غير الباسورد هنا

// ╔════════════════════════════════════════════════════════════╗
// ║  التلميحات - غيرها أو زود عليها هنا                        ║
// ╚════════════════════════════════════════════════════════════╝
const hints = [
    "😉 اكتر دلع بحب ادلعهولك",
    "🤔 ينفع يبقا دلع لبنتنا",
    "😉 من اربع حروف ",
    "🫣 على وزن لولو",
    "😂 هغششك وامري لله, جربي دودو"
];

// ╔════════════════════════════════════════════════════════════╗
// ║  رسائل الخطأ - غيرها أو زود عليها هنا                      ║
// ╚════════════════════════════════════════════════════════════╝
const wrongMessages = [
    "🌚 لا مش دي... جربي تاني يا هدهود",
    "🤔 مش دي... بتنسي كلمة السر بتاعتنا؟",
    "😂 هو أنا لازم أقولهالك؟,اتعبي شويه",
    "🌚 تق تق تق ركزي",
    "♥️ بحبك بس برضو غلط 😂"
];

let currentHint = 0;
let wrongAttempts = 0;

// ============= Check Password =============
function checkPassword() {
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    const password = passwordInput ? passwordInput.value : '';
    
    if (!password.trim()) {
        errorMsg.innerHTML = "🌚 اكتبي حاجة الأول يا قمر";
        errorMsg.style.color = "#ff6b6b";
        shakeElement(passwordInput);
        return;
    }
    
    if (password === correctPassword) {
        document.querySelector('.login-container').classList.add('success');
        errorMsg.innerHTML = "✅ شطوره يا دودو😉! مستنيكي جوه ♥️";
        errorMsg.style.color = "#4ade80";
        
        createConfetti();
        
        sessionStorage.setItem('authenticated', 'true');
        
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    } else {
        wrongAttempts++;
        const randomMsg = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        errorMsg.innerHTML = randomMsg;
        errorMsg.style.color = "#ff6b6b";
        
        shakeElement(passwordInput);
        
        if (wrongAttempts >= 2) {
            const hintSection = document.querySelector('.hint-section');
            if (hintSection) {
                hintSection.classList.add('show-hint');
            }
        }
        
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// ============= Shake Element =============
function shakeElement(element) {
    if (!element) return;
    element.classList.add('shake');
    setTimeout(() => {
        element.classList.remove('shake');
    }, 500);
}

// ============= Hints =============
function showHint() {
    const hintsContainer = document.getElementById('hints-container');
    if (hintsContainer) {
        hintsContainer.classList.remove('hidden');
        document.getElementById('hint-text').innerHTML = hints[0];
        currentHint = 0;
    }
}

function nextHint() {
    currentHint = (currentHint + 1) % hints.length;
    const hintText = document.getElementById('hint-text');
    if (hintText) {
        hintText.innerHTML = hints[currentHint];
        hintText.classList.add('bounce');
        setTimeout(() => hintText.classList.remove('bounce'), 500);
    }
}

// ============= Confetti Effect =============
function createConfetti() {
    const colors = ['#e91e63', '#ff4081', '#f50057', '#ff80ab', '#ffd700', '#fff', '#9c27b0'];
    const confettiCount = 60;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// ============= Authentication Check =============
function checkAuth() {
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
}

(function() {
    const path = window.location.pathname;
    const isLoginPage = path.includes('index.html') || path.endsWith('/') || path === '';
    const hasLoginContainer = document.querySelector('.login-page');
    
    if (!isLoginPage && !hasLoginContainer) {
        checkAuth();
    }
})();

// ============= Navigation Toggle =============
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-toggle');
    
    if (navLinks) {
        navLinks.classList.toggle('active');
        if (menuBtn) {
            menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        }
    }
}

document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-toggle');
    
    if (navLinks && navLinks.classList.contains('active')) {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
            navLinks.classList.remove('active');
            if (menuBtn) menuBtn.innerHTML = '☰';
        }
    }
});

// ============= Questions Toggle =============
function toggleAnswer(card) {
    const answer = card.querySelector('.answer');
    if (!answer) return;
    
    const isHidden = answer.classList.contains('hidden');
    
    document.querySelectorAll('.question-card .answer').forEach(a => {
        a.classList.add('hidden');
    });
    document.querySelectorAll('.question-card').forEach(c => {
        c.classList.remove('active');
    });
    
    if (isHidden) {
        answer.classList.remove('hidden');
        card.classList.add('active');
    }
}

// ============= Greeting Based on Time =============
function setGreeting() {
    const greeting = document.getElementById('greeting');
    if (!greeting) return;
    
    const hour = new Date().getHours();
    let greetText = '';
    
    if (hour >= 5 && hour < 12) {
        greetText = 'صباح الخير يا قمر ☀️';
    } else if (hour >= 12 && hour < 17) {
        greetText = 'يوم سعيد يا جميلة 🌤️';
    } else if (hour >= 17 && hour < 21) {
        greetText = 'مساء النور يا عمري 🌅';
    } else {
        greetText = 'ليلة سعيدة يا حبيبتي 🌙';
    }
    
    greeting.textContent = greetText;
}

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
    
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        
        setTimeout(() => passwordInput.focus(), 500);
    }
});
