// ============= Password & Hints System =============
const correctPassword = "حبيبتي"; // غير الباسورد هنا

const hints = [
    "💡 التلميح الأول: هي كلمة بقولهالك كل يوم ♥️",
    "🤔 التلميح التاني: بتبدأ بحرف الحاء",
    "😉 التلميح التالت: من 6 حروف",
    "🫣 التلميح الأخير: حبي____",
    "😂 طب خلاص: حبيبتي"
];

let currentHint = 0;
let wrongAttempts = 0;

// رسائل الخطأ المتنوعة
const wrongMessages = [
    "🌚 لا مش دي... جربي تاني يا قمر",
    "🌚 برضو غلط... فكري كويس",
    "😅 لا يا قمري... محتاجة تلميح؟",
    "🤔 مش دي... بتنسي كلمة السر بتاعتنا؟",
    "😂 هو أنا لازم أقولهالك؟",
    "🌚 غلط تاني... دوسي على المساعدة",
    "♥️ بحبك بس برضو غلط 😂",
    "🫣 قربتي... أو لا مش قربتي",
    "😉 جربي تفكري فيا وأنا بقولها",
    "🌙 لأ مش دي يا قمر"
];

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
        // Success!
        document.querySelector('.login-container').classList.add('success');
        errorMsg.innerHTML = "✅ أيوه صح! مستنياكي جوه ♥️";
        errorMsg.style.color = "#4ade80";
        
        // Confetti effect
        createConfetti();
        
        // Save to session
        sessionStorage.setItem('authenticated', 'true');
        
        // Redirect after animation
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    } else {
        wrongAttempts++;
        const randomMsg = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        errorMsg.innerHTML = randomMsg;
        errorMsg.style.color = "#ff6b6b";
        
        // Shake animation
        shakeElement(passwordInput);
        
        // Show hint button after 2 wrong attempts
        if (wrongAttempts >= 2) {
            const hintSection = document.querySelector('.hint-section');
            if (hintSection) {
                hintSection.classList.add('show-hint');
            }
        }
        
        // Clear input
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
            confetti.style.width = (Math.random() * 8 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 4000);
        }, i * 30);
    }
}

// ============= Authentication Check =============
function checkAuth() {
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
}

// Run on protected pages
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

// Close menu when clicking outside
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
    
    // Close all other answers
    document.querySelectorAll('.question-card .answer').forEach(a => {
        a.classList.add('hidden');
    });
    document.querySelectorAll('.question-card').forEach(c => {
        c.classList.remove('active');
    });
    
    // Toggle current
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
    let emoji = '';
    
    if (hour >= 5 && hour < 12) {
        greetText = 'صباح الخير يا قمر';
        emoji = '☀️';
    } else if (hour >= 12 && hour < 17) {
        greetText = 'يوم سعيد يا جميلة';
        emoji = '🌤️';
    } else if (hour >= 17 && hour < 21) {
        greetText = 'مساء النور يا عمري';
        emoji = '🌅';
    } else {
        greetText = 'ليلة سعيدة يا حبيبتي';
        emoji = '🌙';
    }
    
    greeting.textContent = `${greetText} ${emoji}`;
}

// ============= Heart Trail Effect =============
let heartTrailEnabled = false;

function createHeartTrail(e) {
    if (!heartTrailEnabled) return;
    
    const heart = document.createElement('span');
    heart.className = 'heart-trail';
    heart.innerHTML = ['♥️', '💕', '💖', '✨', '💗'][Math.floor(Math.random() * 5)];
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 1000);
}

// ============= Page Transition =============
function addPageTransition() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
}

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', function() {
    // Page transition
    addPageTransition();
    
    // Set greeting
    setGreeting();
    
    // Password input events
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        // Enter key
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        
        // Focus on load
        setTimeout(() => passwordInput.focus(), 500);
    }
    
    // Enable heart trail on home page (optional)
    // if (document.querySelector('.home-page')) {
    //     heartTrailEnabled = true;
    //     document.addEventListener('mousemove', createHeartTrail);
    // }
});

// ============= Smooth Scroll =============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============= Console Welcome =============
console.log('%c💕 مرحباً بيكي 💕', 'font-size: 24px; color: #e91e63; font-weight: bold;');
console.log('%c♥️ الموقع ده معمول بحب ♥️', 'font-size: 14px; color: #ff4081;');
