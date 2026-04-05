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
    "♥️ بحبك بس برضو غلط 😂"
];

function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const passwordInput = document.getElementById('password');
    
    if (password === correctPassword) {
        // Success animation
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
        passwordInput.classList.add('shake');
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
        
        // Show hint button after 2 wrong attempts
        if (wrongAttempts >= 2) {
            document.querySelector('.hint-section').classList.add('show-hint');
        }
        
        // Clear input
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function showHint() {
    const hintsContainer = document.getElementById('hints-container');
    hintsContainer.classList.remove('hidden');
    document.getElementById('hint-text').innerHTML = hints[0];
    currentHint = 0;
}

function nextHint() {
    currentHint = (currentHint + 1) % hints.length;
    document.getElementById('hint-text').innerHTML = hints[currentHint];
    
    // Add bounce animation
    const hintText = document.getElementById('hint-text');
    hintText.classList.add('bounce');
    setTimeout(() => hintText.classList.remove('bounce'), 500);
}

// Confetti Effect
function createConfetti() {
    const colors = ['#e91e63', '#ff4081', '#f50057', '#ff80ab', '#ffd700', '#fff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Check authentication on protected pages
function checkAuth() {
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
}

// Run on protected pages
if (!window.location.pathname.includes('index.html') && 
    !window.location.pathname.endsWith('/') &&
    window.location.pathname !== '/') {
    // Don't check on index page
    if (document.querySelector('.login-page') === null) {
        checkAuth();
    }
}

// ============= Navigation =============
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
    // Change icon
    const menuBtn = document.querySelector('.menu-toggle');
    menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
}

// ============= Questions Toggle =============
function toggleAnswer(card) {
    const answer = card.querySelector('.answer');
    const isHidden = answer.classList.contains('hidden');
    
    // Close all other answers
    document.querySelectorAll('.question-card .answer').forEach(a => {
        a.classList.add('hidden');
    });
    
    // Toggle current
    if (isHidden) {
        answer.classList.remove('hidden');
        card.classList.add('active');
    } else {
        answer.classList.add('hidden');
        card.classList.remove('active');
    }
}

// ============= Fun Cursor Trail =============
function createHeartTrail(e) {
    const heart = document.createElement('span');
    heart.className = 'heart-trail';
    heart.innerHTML = ['♥️', '💕', '💖', '✨'][Math.floor(Math.random() * 4)];
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
}

// ============= Typing Effect =============
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', function() {
    // Password enter key
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        
        // Focus on password input
        passwordInput.focus();
    }
    
    // Add heart trail on home page (optional - can be heavy)
    // document.addEventListener('mousemove', createHeartTrail);
    
    // Greeting based on time
    const greeting = document.getElementById('greeting');
    if (greeting) {
        const hour = new Date().getHours();
        let greetText = '';
        if (hour < 12) greetText = 'صباح الخير يا قمر ☀️';
        else if (hour < 18) greetText = 'يوم سعيد يا جميلة 🌤️';
        else greetText = 'مساء النور يا عمري 🌙';
        greeting.textContent = greetText;
    }
});

// ============= Add CSS for new animations =============
const style = document.createElement('style');
style.textContent = `
    .shake {
        animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-10px); }
        40%, 80% { transform: translateX(10px); }
    }
    
    .bounce {
        animation: bounce 0.5s ease;
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        top: -10px;
        border-radius: 50%;
        animation: fall linear forwards;
        z-index: 9999;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .heart-trail {
        position: absolute;
        pointer-events: none;
        font-size: 20px;
        animation: fadeUp 1s ease forwards;
        z-index: 9999;
    }
    
    @keyframes fadeUp {
        to {
            opacity: 0;
            transform: translateY(-50px) scale(0);
        }
    }
    
    .success {
        animation: successPulse 0.5s ease;
    }
    
    @keyframes successPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    
    .hint-section {
        opacity: 0.5;
        transition: opacity 0.3s ease;
    }
    
    .hint-section.show-hint {
        opacity: 1;
    }
`;
document.head.appendChild(style);
