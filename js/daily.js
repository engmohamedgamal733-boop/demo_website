// ============= Daily Records Data =============
// غير البيانات دي حسب اللي انت عايزه
const dailyRecords = [
    {
        day: 1,
        date: "2025-01-20",  // ← غير للنهارده أو قبله عشان يفتح
        message: "أول رسالة ليكي يا قمر... بحبك من كل قلبي 💕 كل يوم بحس إني محظوظ إنك في حياتي ♥️",
        audioFile: "records/record1.mp3"  // ← المسار الصح
    },
    {
        day: 2,
        date: "2025-01-21",
        message: "اليوم التاني... كل يوم بحبك أكتر وأكتر 🌙 مفيش كلام يوصف اللي بحسه 😉",
        audioFile: "records/record2.mp3"
    },
    {
        day: 3,
        date: "2025-01-22",
        message: "أنتِ أحلى حاجة في حياتي ✨ ربنا يخليكي ليا يا رب ♥️",
        audioFile: "records/record3.mp3"
    },
    {
        day: 4,
        date: "2025-01-23",
        message: "النهارده عايز أقولك إنك أجمل هدية من ربنا 🎁 بحبك 🫣",
        audioFile: "records/record4.mp3"
    },
    {
        day: 5,
        date: "2025-01-24",
        message: "كل ما أسمع صوتك قلبي بيطير 😂♥️ أنتِ حياتي كلها",
        audioFile: "records/record5.mp3"
    }
];

// ============= Generate Folders =============
function generateFolders() {
    const container = document.getElementById('folders-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    dailyRecords.forEach((record, index) => {
        const recordDate = new Date(record.date);
        recordDate.setHours(0, 0, 0, 0);
        
        const isUnlocked = today >= recordDate;
        const isToday = today.getTime() === recordDate.getTime();
        
        const folder = document.createElement('div');
        folder.className = `folder ${isUnlocked ? 'unlocked' : 'locked'} ${isToday ? 'today' : ''}`;
        folder.innerHTML = `
            <span class="folder-icon">${isUnlocked ? '📂' : '🔒'}</span>
            <div class="folder-day">اليوم ${record.day}</div>
            <div class="folder-status">
                ${isToday ? '🎉 جديد!' : isUnlocked ? '✅ متاح' : '⏳ قريباً'}
            </div>
            ${isToday ? '<span class="new-badge">NEW</span>' : ''}
        `;
        
        if (isUnlocked) {
            folder.onclick = () => openRecord(record);
            folder.style.cursor = 'pointer';
        }
        
        container.appendChild(folder);
    });
    
    // Add hint for future folders
    if (dailyRecords.length > 0) {
        const hint = document.createElement('div');
        hint.className = 'folders-hint';
        hint.innerHTML = `
            <p>♥️ كل يوم هيظهر فولدر جديد</p>
            <p>استنيني يا قمر 😉</p>
        `;
        container.appendChild(hint);
    }
}

// ============= Open Record Modal =============
function openRecord(record) {
    const modal = document.getElementById('audio-modal');
    if (!modal) return;
    
    document.getElementById('modal-day').textContent = `💝 اليوم ${record.day}`;
    document.getElementById('modal-date').textContent = formatArabicDate(record.date);
    document.getElementById('modal-message').textContent = record.message;
    
    const audio = document.getElementById('audio-element');
    audio.src = record.audioFile;
    audio.load(); // Important: reload the audio
    
    // Reset player
    isPlaying = false;
    document.getElementById('play-icon').textContent = '▶️';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('time-display').textContent = '0:00 / 0:00';
    
    // Setup download button
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.onclick = () => downloadAudio(record.audioFile, `رسالة-يوم-${record.day}.mp3`);
    
    modal.classList.remove('hidden');
    
    // Setup audio events
    setupAudioPlayer();
}

// Format date in Arabic
function formatArabicDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-EG', options);
}

// ============= Close Modal =============
function closeModal() {
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('audio-element');
    
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    
    if (modal) {
        modal.classList.add('hidden');
    }
    
    isPlaying = false;
}

// ============= Audio Player =============
let isPlaying = false;

function setupAudioPlayer() {
    const audio = document.getElementById('audio-element');
    const progressBar = document.getElementById('progress-bar');
    const timeDisplay = document.getElementById('time-display');
    const playIcon = document.getElementById('play-icon');
    
    if (!audio) return;
    
    // Remove old listeners
    audio.onloadedmetadata = null;
    audio.ontimeupdate = null;
    audio.onended = null;
    audio.onerror = null;
    
    // Add new listeners
    audio.onloadedmetadata = () => {
        timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
    };
    
    audio.ontimeupdate = () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    };
    
    audio.onended = () => {
        isPlaying = false;
        playIcon.textContent = '▶️';
        progressBar.style.width = '0%';
        audio.currentTime = 0;
    };
    
    audio.onerror = (e) => {
        console.error('Audio error:', e);
        alert('❌ مشكلة في تحميل الصوت\nتأكد إن الملف موجود في المسار الصح');
    };
    
    // Click on progress bar to seek
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.onclick = (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audio.currentTime = percent * audio.duration;
        };
    }
}

function togglePlay() {
    const audio = document.getElementById('audio-element');
    const playIcon = document.getElementById('play-icon');
    
    if (!audio) return;
    
    if (isPlaying) {
        audio.pause();
        playIcon.textContent = '▶️';
    } else {
        audio.play().then(() => {
            playIcon.textContent = '⏸️';
        }).catch(err => {
            console.error('Play error:', err);
            alert('❌ مشكلة في تشغيل الصوت');
        });
    }
    isPlaying = !isPlaying;
}

function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============= Download Audio =============
function downloadAudio(url, filename) {
    // Create a temporary link
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.target = '_blank';
    
    // For cross-origin files, open in new tab
    if (url.startsWith('http')) {
        window.open(url, '_blank');
    } else {
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', () => {
    generateFolders();
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('audio-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add styles for new elements
const dailyStyles = document.createElement('style');
dailyStyles.textContent = `
    .folder.today {
        border: 2px solid #ffd700;
        animation: glow 2s ease-in-out infinite;
    }
    
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
        50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
    }
    
    .new-badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ff4081;
        color: white;
        font-size: 0.7rem;
        padding: 3px 8px;
        border-radius: 10px;
        animation: pulse 1s ease infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .folder {
        position: relative;
    }
    
    .folders-hint {
        grid-column: 1 / -1;
        text-align: center;
        padding: 30px;
        color: var(--text-muted);
        font-size: 1.1rem;
    }
    
    .folders-hint p {
        margin: 5px 0;
    }
`;
document.head.appendChild(dailyStyles);
