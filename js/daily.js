// ============= Daily Records Data =============
const dailyRecords = [
    {
        day: 1,
        date: "2025-01-20",
        message: "أول رسالة ليكي يا قمر... بحبك من كل قلبي 💕 كل يوم بحس إني محظوظ إنك في حياتي ♥️",
        audioFile: "records/record1.mp3",
        mood: "💕"
    },
    {
        day: 2,
        date: "2025-01-21",
        message: "اليوم التاني... كل يوم بحبك أكتر وأكتر 🌙 مفيش كلام يوصف اللي بحسه 😉",
        audioFile: "records/record2.mp3",
        mood: "🌙"
    },
    {
        day: 3,
        date: "2025-01-22",
        message: "أنتِ أحلى حاجة في حياتي ✨ ربنا يخليكي ليا يا رب ♥️",
        audioFile: "records/record3.mp3",
        mood: "✨"
    },
    {
        day: 4,
        date: "2025-01-23",
        message: "النهارده عايز أقولك إنك أجمل هدية من ربنا 🎁 بحبك 🫣",
        audioFile: "records/record4.mp3",
        mood: "🎁"
    },
    {
        day: 5,
        date: "2025-01-24",
        message: "كل ما أسمع صوتك قلبي بيطير 😂♥️ أنتِ حياتي كلها",
        audioFile: "records/record5.mp3",
        mood: "😂"
    }
];

// ============= Generate Folders =============
function generateFolders() {
    const container = document.getElementById('folders-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let unlockedCount = 0;

    dailyRecords.forEach((record, index) => {
        const recordDate = new Date(record.date);
        recordDate.setHours(0, 0, 0, 0);
        
        const isUnlocked = today >= recordDate;
        const isToday = today.getTime() === recordDate.getTime();
        
        if (isUnlocked) unlockedCount++;
        
        const folder = document.createElement('div');
        folder.className = `folder ${isUnlocked ? 'unlocked' : 'locked'} ${isToday ? 'today' : ''}`;
        folder.style.animationDelay = `${index * 0.1}s`;
        folder.innerHTML = `
            <span class="folder-icon">${isUnlocked ? '📂' : '🔒'}</span>
            <div class="folder-mood">${record.mood || '💕'}</div>
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
    
    // Progress indicator
    const progressSection = document.createElement('div');
    progressSection.className = 'progress-section';
    progressSection.innerHTML = `
        <div class="progress-info">
            <span>📊 تقدمك: ${unlockedCount}/${dailyRecords.length} رسالة</span>
            <div class="mini-progress">
                <div class="mini-progress-fill" style="width: ${(unlockedCount/dailyRecords.length)*100}%"></div>
            </div>
        </div>
    `;
    container.appendChild(progressSection);
    
    // Hint
    const hint = document.createElement('div');
    hint.className = 'folders-hint';
    hint.innerHTML = `
        <p>♥️ كل يوم هيظهر فولدر جديد</p>
        <p>استنيني يا قمر 😉</p>
    `;
    container.appendChild(hint);
}

// ============= Open Record Modal =============
function openRecord(record) {
    const modal = document.getElementById('audio-modal');
    if (!modal) return;
    
    document.getElementById('modal-day').textContent = `${record.mood || '💝'} اليوم ${record.day}`;
    document.getElementById('modal-date').textContent = formatArabicDate(record.date);
    document.getElementById('modal-message').textContent = record.message;
    
    const audio = document.getElementById('audio-element');
    audio.src = record.audioFile;
    audio.load();
    
    // Reset player
    isPlaying = false;
    document.getElementById('play-icon').textContent = '▶️';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('time-display').textContent = '0:00 / 0:00';
    
    // Reset slider
    const slider = document.getElementById('audio-slider');
    if (slider) {
        slider.value = 0;
    }
    
    // Setup download button
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.onclick = () => downloadAudio(record.audioFile, `رسالة-يوم-${record.day}.mp3`);
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll
    
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
    
    document.body.style.overflow = ''; // Restore scroll
    isPlaying = false;
}

// ============= Audio Player (Fixed Slider) =============
let isPlaying = false;
let isDragging = false;

function setupAudioPlayer() {
    const audio = document.getElementById('audio-element');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    const slider = document.getElementById('audio-slider');
    const timeDisplay = document.getElementById('time-display');
    const playIcon = document.getElementById('play-icon');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    
    if (!audio) return;
    
    // Remove old listeners by cloning
    const newAudio = audio.cloneNode(true);
    audio.parentNode.replaceChild(newAudio, audio);
    const audioElement = document.getElementById('audio-element');
    
    // Loaded metadata
    audioElement.addEventListener('loadedmetadata', () => {
        const duration = audioElement.duration;
        if (timeDisplay) {
            timeDisplay.textContent = `0:00 / ${formatTime(duration)}`;
        }
        if (slider) {
            slider.max = Math.floor(duration);
            slider.value = 0;
        }
        if (durationEl) {
            durationEl.textContent = formatTime(duration);
        }
    });
    
    // Time update
    audioElement.addEventListener('timeupdate', () => {
        if (isDragging) return; // Don't update while dragging
        
        const current = audioElement.currentTime;
        const duration = audioElement.duration;
        const percent = (current / duration) * 100;
        
        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
        if (slider) {
            slider.value = current;
        }
        if (timeDisplay) {
            timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
        }
        if (currentTimeEl) {
            currentTimeEl.textContent = formatTime(current);
        }
    });
    
    // Ended
    audioElement.addEventListener('ended', () => {
        isPlaying = false;
        playIcon.textContent = '▶️';
        if (progressBar) progressBar.style.width = '0%';
        if (slider) slider.value = 0;
        audioElement.currentTime = 0;
    });
    
    // Error
    audioElement.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        showToast('❌ مشكلة في تحميل الصوت', 'error');
    });
    
    // ===== Fixed Slider Seeking =====
    if (slider) {
        // Mouse/Touch start
        slider.addEventListener('mousedown', () => { isDragging = true; });
        slider.addEventListener('touchstart', () => { isDragging = true; });
        
        // Mouse/Touch end - seek to position
        slider.addEventListener('mouseup', () => {
            isDragging = false;
            audioElement.currentTime = parseFloat(slider.value);
        });
        slider.addEventListener('touchend', () => {
            isDragging = false;
            audioElement.currentTime = parseFloat(slider.value);
        });
        
        // Input change (while dragging)
        slider.addEventListener('input', () => {
            const value = parseFloat(slider.value);
            const duration = audioElement.duration;
            const percent = (value / duration) * 100;
            
            if (progressBar) {
                progressBar.style.width = `${percent}%`;
            }
            if (timeDisplay) {
                timeDisplay.textContent = `${formatTime(value)} / ${formatTime(duration)}`;
            }
        });
        
        // Change (final value)
        slider.addEventListener('change', () => {
            audioElement.currentTime = parseFloat(slider.value);
            isDragging = false;
        });
    }
    
    // Click on progress container to seek
    if (progressContainer) {
        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const newTime = percent * audioElement.duration;
            
            audioElement.currentTime = newTime;
            
            if (slider) {
                slider.value = newTime;
            }
        });
    }
}

function togglePlay() {
    const audio = document.getElementById('audio-element');
    const playIcon = document.getElementById('play-icon');
    
    if (!audio) return;
    
    if (isPlaying) {
        audio.pause();
        playIcon.textContent = '▶️';
        isPlaying = false;
    } else {
        audio.play().then(() => {
            playIcon.textContent = '⏸️';
            isPlaying = true;
        }).catch(err => {
            console.error('Play error:', err);
            showToast('❌ مشكلة في تشغيل الصوت', 'error');
        });
    }
}

// Skip forward/backward
function skipAudio(seconds) {
    const audio = document.getElementById('audio-element');
    if (audio) {
        audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
    }
}

// Change playback speed
function changeSpeed() {
    const audio = document.getElementById('audio-element');
    const speedBtn = document.getElementById('speed-btn');
    
    if (!audio) return;
    
    const speeds = [1, 1.25, 1.5, 0.75];
    const currentIndex = speeds.indexOf(audio.playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    
    audio.playbackRate = speeds[nextIndex];
    speedBtn.textContent = `${speeds[nextIndex]}x`;
}

// Volume control
function changeVolume(value) {
    const audio = document.getElementById('audio-element');
    if (audio) {
        audio.volume = value;
        updateVolumeIcon(value);
    }
}

function updateVolumeIcon(value) {
    const icon = document.getElementById('volume-icon');
    if (!icon) return;
    
    if (value === 0) icon.textContent = '🔇';
    else if (value < 0.5) icon.textContent = '🔉';
    else icon.textContent = '🔊';
}

function toggleMute() {
    const audio = document.getElementById('audio-element');
    const volumeSlider = document.getElementById('volume-slider');
    
    if (!audio) return;
    
    if (audio.volume > 0) {
        audio.dataset.prevVolume = audio.volume;
        audio.volume = 0;
        if (volumeSlider) volumeSlider.value = 0;
    } else {
        audio.volume = audio.dataset.prevVolume || 1;
        if (volumeSlider) volumeSlider.value = audio.volume;
    }
    updateVolumeIcon(audio.volume);
}

function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============= Download Audio =============
function downloadAudio(url, filename) {
    showToast('⬇️ جاري التحميل...', 'info');
    
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(blobUrl);
            showToast('✅ تم التحميل بنجاح!', 'success');
        })
        .catch(err => {
            console.error('Download error:', err);
            // Fallback: open in new tab
            window.open(url, '_blank');
        });
}

// ============= Toast Notifications =============
function showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', () => {
    generateFolders();
});

// Close modal events
document.addEventListener('click', (e) => {
    const modal = document.getElementById('audio-modal');
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    
    // Keyboard shortcuts for audio
    const audio = document.getElementById('audio-element');
    const modal = document.getElementById('audio-modal');
    
    if (modal && !modal.classList.contains('hidden')) {
        if (e.key === ' ' || e.key === 'k') {
            e.preventDefault();
            togglePlay();
        }
        if (e.key === 'ArrowRight') skipAudio(5);
        if (e.key === 'ArrowLeft') skipAudio(-5);
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (audio) audio.volume = Math.min(1, audio.volume + 0.1);
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (audio) audio.volume = Math.max(0, audio.volume - 0.1);
        }
    }
});

// ============= Styles =============
const dailyStyles = document.createElement('style');
dailyStyles.textContent = `
    .folder {
        position: relative;
        animation: fadeInUp 0.5s ease forwards;
        opacity: 0;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .folder.today {
        border: 2px solid #ffd700;
        animation: fadeInUp 0.5s ease forwards, glow 2s ease-in-out infinite;
    }
    
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
        50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.8); }
    }
    
    .folder-mood {
        font-size: 2rem;
        margin-bottom: 5px;
    }
    
    .new-badge {
        position: absolute;
        top: -8px;
        right: -8px;
        background: linear-gradient(45deg, #ff4081, #ff6090);
        color: white;
        font-size: 0.65rem;
        font-weight: bold;
        padding: 4px 10px;
        border-radius: 12px;
        animation: pulse 1s ease infinite;
        box-shadow: 0 2px 10px rgba(255, 64, 129, 0.5);
    }
    
    .progress-section {
        grid-column: 1 / -1;
        padding: 20px;
        text-align: center;
    }
    
    .progress-info {
        background: rgba(255,255,255,0.1);
        padding: 15px 25px;
        border-radius: 15px;
        display: inline-block;
    }
    
    .mini-progress {
        width: 200px;
        height: 8px;
        background: rgba(255,255,255,0.2);
        border-radius: 4px;
        margin-top: 10px;
        overflow: hidden;
    }
    
    .mini-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-color), var(--gold));
        border-radius: 4px;
        transition: width 0.5s ease;
    }
    
    .folders-hint {
        grid-column: 1 / -1;
        text-align: center;
        padding: 30px;
        color: var(--text-muted);
    }
    
    /* Toast */
    .toast {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        padding: 15px 30px;
        border-radius: 30px;
        color: white;
        font-size: 1rem;
        z-index: 10000;
        transition: transform 0.3s ease;
    }
    
    .toast.show {
        transform: translateX(-50%) translateY(0);
    }
    
    .toast-info { background: linear-gradient(45deg, #2196f3, #03a9f4); }
    .toast-success { background: linear-gradient(45deg, #4caf50, #8bc34a); }
    .toast-error { background: linear-gradient(45deg, #f44336, #e91e63); }
    
    /* Slider styling */
    input[type="range"] {
        -webkit-appearance: none;
        width: 100%;
        height: 6px;
        border-radius: 3px;
        background: rgba(255,255,255,0.2);
        outline: none;
        cursor: pointer;
    }
    
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: linear-gradient(45deg, var(--primary-color), var(--gold));
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: transform 0.2s ease;
    }
    
    input[type="range"]::-webkit-slider-thumb:hover {
        transform: scale(1.2);
    }
    
    input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: linear-gradient(45deg, var(--primary-color), var(--gold));
        cursor: pointer;
        border: none;
    }
`;
document.head.appendChild(dailyStyles);
