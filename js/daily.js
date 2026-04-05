// ============= Daily Records Data =============
// غير البيانات دي حسب اللي انت عايزه
const dailyRecords = [
    {
        day: 1,
        date: "2024-01-15", // تاريخ ظهور الفولدر
        message: "أول رسالة ليكي يا قمر... بحبك من كل قلبي 💕",
        audioFile: "audio/record1.mp3"
    },
    {
        day: 2,
        date: "2024-01-16",
        message: "اليوم التاني... كل يوم بحبك أكتر 🌙",
        audioFile: "audio/record2.mp3"
    },
    {
        day: 3,
        date: "2024-01-17",
        message: "أنتِ أحلى حاجة في حياتي ✨",
        audioFile: "audio/record3.mp3"
    },
    // أضف المزيد من الأيام هنا...
];

// ============= Start Date (first day) =============
const startDate = new Date("2024-01-15"); // غير التاريخ ده لتاريخ بداية الموقع

// ============= Generate Folders =============
function generateFolders() {
    const container = document.getElementById('folders-container');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    dailyRecords.forEach((record, index) => {
        const recordDate = new Date(record.date);
        recordDate.setHours(0, 0, 0, 0);
        
        const isUnlocked = today >= recordDate;
        
        const folder = document.createElement('div');
        folder.className = `folder ${isUnlocked ? 'unlocked' : 'locked'}`;
        folder.innerHTML = `
            <span class="folder-icon">${isUnlocked ? '📂' : '🔒'}</span>
            <div class="folder-day">اليوم ${record.day}</div>
            <div class="folder-status">${isUnlocked ? 'متاح' : 'قريباً'}</div>
        `;
        
        if (isUnlocked) {
            folder.onclick = () => openRecord(record);
        }
        
        container.appendChild(folder);
    });
}

// ============= Open Record Modal =============
function openRecord(record) {
    const modal = document.getElementById('audio-modal');
    document.getElementById('modal-day').textContent = `💝 اليوم ${record.day}`;
    document.getElementById('modal-date').textContent = record.date;
    document.getElementById('modal-message').textContent = record.message;
    
    const audio = document.getElementById('audio-element');
    audio.src = record.audioFile;
    
    // Setup download button
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.onclick = () => downloadAudio(record.audioFile, `day-${record.day}.mp3`);
    
    modal.classList.remove('hidden');
    
    // Setup audio events
    setupAudioPlayer();
}

// ============= Close Modal =============
function closeModal() {
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('audio-element');
    audio.pause();
    audio.currentTime = 0;
    modal.classList.add('hidden');
}

// ============= Audio Player =============
let isPlaying = false;

function setupAudioPlayer() {
    const audio = document.getElementById('audio-element');
    const progressBar = document.getElementById('progress-bar');
    const timeDisplay = document.getElementById('time-display');
    const playIcon = document.getElementById('play-icon');
    
    isPlaying = false;
    playIcon.textContent = '▶️';
    progressBar.style.width = '0%';
    
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });
    
    audio.addEventListener('ended', () => {
        isPlaying = false;
        playIcon.textContent = '▶️';
    });
    
    // Click on progress bar to seek
    document.querySelector('.progress-container').addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
}

function togglePlay() {
    const audio = document.getElementById('audio-element');
    const playIcon = document.getElementById('play-icon');
    
    if (isPlaying) {
        audio.pause();
        playIcon.textContent = '▶️';
    } else {
        audio.play();
        playIcon.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============= Download Audio =============
function downloadAudio(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('folders-container')) {
        generateFolders();
    }
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('audio-modal');
    if (e.target === modal) {
        closeModal();
    }
});
