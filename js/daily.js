// ╔════════════════════════════════════════════════════════════╗
// ║  تاريخ البداية - غيره هنا                                  ║
// ╚════════════════════════════════════════════════════════════╝
const START_DATE = "2026-04-05";  // ← غير التاريخ هنا (سنة-شهر-يوم)

// ╔════════════════════════════════════════════════════════════╗
// ║  الرسائل اليومية - 30 رسالة                                ║
// ║  اكتب رسالتك جنب كل يوم                                   ║
// ╚════════════════════════════════════════════════════════════╝
const dailyMessages = {
    1:  "الملكة بيتعملها أحلى حاجة 🫂🫶👑✨",
    2:  "ضحكتك بتخليني طاير 🫂🥹💕",
    3:  "بحبك يا هدهود 🥹😍😘💗",
    4:  "وحشتيني أوي يا بنوتي 🥺♥️",
    5:  "غمضي عينك 👀🙈✨",
    6:  "وحشتني ضحكة المعلمين 😂♥️🤣",
    7:  "متنسيش العلقة لما يتقفل علينا باب واحد 😈🚪🤌",
    8:  "أحلى حاجة فيكي ضحكتك,مزيكا والله 😉💖🎵",
    9:  "بتقوليلي قولي أربع مميزات وهي كلها مميزات 🌟✨😉💯",
    10: "إنتي جنتي في الدنيا يا هديتي 🫶😍💕",
    11: "لفة الهدية قمر 🫶 والهدية قمرين 🥹",
    12: "الفستان البينك لاااا 🙅‍♂️😂",
    13: "خفي حلاوة بقى الله يسترك 😏🥹",
    14: "اليوم من غير هدى ملوش طعم 😔🥹😍",
    15: "يااااه الوش الخشب 🫣😐🤣",
    16: "متنسيش لما يتقفل علينا باب واحد هيبقى في حضن كبييييير 🤗🫂💕",
    17: "فاكرة الحزام البنفسجي؟ 💃🤔😂🫣",
    18: "بقولك إيه يا محمد عايزة أبعد فترة وهعمل بلوك... ما قولتلك متفقريش 🙄😂♥️",
    19: "ما تحن يا جن 👻😂♥️",
    20: "يعني متأكدة إني مبكونش أنا اللي في الحلم؟ ومجيلكيش تاني في الحلم؟ 🫣😂💭🤔",
    21: "كده كده قاعد على قلبك يا دودو 🫶💗😌",
    22: "شووفتي بقى! اديك خليتني حرانة مع إني لسه واخدة دش 😉🔥😂",
    23: "إنت أصلاً بطلت تهتم بيا وبتشرب يحي عصير وأنا لأ 😂😤",
    24: "صحي النوووم يا خميس 😴⏰😂",
    25: "شوفتي أهو لما سألتي الريكورد طول إزاي؟ عشان تعرفي إني عايز مصلحتك 🎙️😘💕",
    26: "قلب حمودك 💖🫀😘",
    27: "يا أبيض إنت يا عرسي 😘🥹🫶",
    28: "هو صح أول ولد هنسميه يونس ولا حمزة؟ أنا عن نفسي عايز يونس الأول 👶🤔🫶",
    29: "مش ناوية تجيبي اااا؟ 😏🤭😘",
    30: "متنسيش تدعيلي يا هدهود 🤲🫶🫂"
};

// ╔════════════════════════════════════════════════════════════╗
// ║  الإيموجي لكل يوم                                          ║
// ╚════════════════════════════════════════════════════════════╝
const dailyMoods = {
    1: "💕", 2: "🌙", 3: "✨", 4: "🎁", 5: "😊",
    6: "💖", 7: "🌟", 8: "💝", 9: "🥰", 10: "💗",
    11: "🌹", 12: "💫", 13: "😍", 14: "❤️", 15: "🦋",
    16: "🌸", 17: "💜", 18: "🎵", 19: "🌺", 20: "💘",
    21: "🍀", 22: "⭐", 23: "🌷", 24: "💞", 25: "🎀",
    26: "🌼", 27: "💓", 28: "🌻", 29: "💗", 30: "👑"
};

// ╔════════════════════════════════════════════════════════════╗
// ║  الريكوردات - أضف ريكورد لكل يوم                           ║
// ╚════════════════════════════════════════════════════════════╝
const dailyRecords = [
    { day: 1,  audioFile: "records/record1.mp3" },
    { day: 2,  audioFile: "records/record2.mp3" }
    // أضف المزيد هنا:
    // { day: 3,  audioFile: "records/record3.mp3" },
];

// ============= Audio Player State =============
let isPlaying = false;
let isDragging = false;

// ============= حساب عدد الأيام من البداية =============
function getDaysSinceStart() {
    const startDate = new Date(START_DATE);
    startDate.setHours(0, 0, 0, 0);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// ============= Generate Folders =============
function generateFolders() {
    const container = document.getElementById('folders-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const daysSinceStart = getDaysSinceStart();
    
    if (daysSinceStart < 0) {
        const waitingMsg = document.createElement('div');
        waitingMsg.className = 'empty-message';
        waitingMsg.innerHTML = `
            <div class="empty-icon">⏳</div>
            <h3>استنيني يا قمر...</h3>
            <p>المفاجآت هتبدأ قريب 💕</p>
            <p class="countdown">فاضل ${Math.abs(daysSinceStart)} يوم</p>
        `;
        container.appendChild(waitingMsg);
        return;
    }
    
    const availableDays = daysSinceStart + 1;
    const visibleRecords = dailyRecords.filter(record => record.day <= availableDays);
    
    if (visibleRecords.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'empty-message';
        emptyMsg.innerHTML = `
            <div class="empty-icon">📭</div>
            <h3>لسه مفيش رسائل</h3>
            <p>استنيني يا قمر... قريب هيبقى في مفاجآت 💕</p>
        `;
        container.appendChild(emptyMsg);
        return;
    }
    
    visibleRecords.forEach((record, index) => {
        const isToday = record.day === availableDays;
        const mood = dailyMoods[record.day] || "💕";
        
        const folder = document.createElement('div');
        folder.className = `folder unlocked ${isToday ? 'today' : ''}`;
        folder.style.animationDelay = `${index * 0.1}s`;
        folder.innerHTML = `
            <span class="folder-icon">📂</span>
            <div class="folder-mood">${mood}</div>
            <div class="folder-day">اليوم ${record.day}</div>
            <div class="folder-status">
                ${isToday ? '🎉 جديد!' : '✅ متاح'}
            </div>
            ${isToday ? '<span class="new-badge">NEW</span>' : ''}
        `;
        
        folder.onclick = () => openRecord(record);
        folder.style.cursor = 'pointer';
        
        container.appendChild(folder);
    });
    
    if (visibleRecords.length < dailyRecords.length) {
        const hint = document.createElement('div');
        hint.className = 'folders-hint';
        hint.innerHTML = `
            <p>♥️ كل يوم هيظهر فولدر جديد</p>
            <p>استنيني يا قمر 😉</p>
        `;
        container.appendChild(hint);
    }
}

// ============= Format Arabic Date =============
function formatArabicDate(dayNumber) {
    const startDate = new Date(START_DATE);
    startDate.setDate(startDate.getDate() + dayNumber - 1);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return startDate.toLocaleDateString('ar-EG', options);
}

// ============= Open Record Modal =============
function openRecord(record) {
    const modal = document.getElementById('audio-modal');
    if (!modal) return;
    
    const mood = dailyMoods[record.day] || "💝";
    const message = dailyMessages[record.day] || "رسالة اليوم 💕";
    
    document.getElementById('modal-day').textContent = `${mood} اليوم ${record.day}`;
    document.getElementById('modal-date').textContent = formatArabicDate(record.day);
    document.getElementById('modal-message').textContent = message;
    
    const audio = document.getElementById('audio-element');
    audio.src = record.audioFile;
    audio.load();
    
    isPlaying = false;
    isDragging = false;
    
    const playIcon = document.getElementById('play-icon');
    if (playIcon) playIcon.textContent = '▶️';
    
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = '0%';
    
    const slider = document.getElementById('audio-slider');
    if (slider) {
        slider.value = 0;
        slider.max = 100;
    }
    
    const currentTimeEl = document.getElementById('current-time');
    if (currentTimeEl) currentTimeEl.textContent = '0:00';
    
    const durationEl = document.getElementById('duration');
    if (durationEl) durationEl.textContent = '0:00';
    
    const waveform = document.querySelector('.waveform');
    if (waveform) waveform.classList.remove('playing');
    
    const speedBtn = document.getElementById('speed-btn');
    if (speedBtn) speedBtn.textContent = '1x';
    audio.playbackRate = 1;
    
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) volumeSlider.value = 1;
    audio.volume = 1;
    updateVolumeIcon(1);
    
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.onclick = () => downloadAudio(record.audioFile, `رسالة-يوم-${record.day}.mp3`);
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    setupAudioPlayer();
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
    
    document.body.style.overflow = '';
    isPlaying = false;
    isDragging = false;
    
    const waveform = document.querySelector('.waveform');
    if (waveform) waveform.classList.remove('playing');
}

// ============= Setup Audio Player =============
function setupAudioPlayer() {
    const audio = document.getElementById('audio-element');
    const progressBar = document.getElementById('progress-bar');
    const slider = document.getElementById('audio-slider');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const playIcon = document.getElementById('play-icon');
    const progressContainer = document.querySelector('.progress-container');
    
    if (!audio) return;
    
    audio.onloadedmetadata = () => {
        const duration = audio.duration;
        if (durationEl) durationEl.textContent = formatTime(duration);
        if (slider) {
            slider.max = duration;
            slider.value = 0;
        }
    };
    
    audio.ontimeupdate = () => {
        if (isDragging) return;
        
        const current = audio.currentTime;
        const duration = audio.duration;
        
        if (isNaN(duration)) return;
        
        const percent = (current / duration) * 100;
        
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (slider) slider.value = current;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
    };
    
    audio.onended = () => {
        isPlaying = false;
        if (playIcon) playIcon.textContent = '▶️';
        if (progressBar) progressBar.style.width = '0%';
        if (slider) slider.value = 0;
        audio.currentTime = 0;
        
        const waveform = document.querySelector('.waveform');
        if (waveform) waveform.classList.remove('playing');
        
        showToast('✅ انتهى التسجيل', 'success');
    };
    
    audio.onerror = () => {
        showToast('❌ مشكلة في تحميل الصوت', 'error');
    };
    
    if (slider) {
        const newSlider = slider.cloneNode(true);
        slider.parentNode.replaceChild(newSlider, slider);
        const audioSlider = document.getElementById('audio-slider');
        
        audioSlider.addEventListener('mousedown', () => { isDragging = true; });
        audioSlider.addEventListener('touchstart', () => { isDragging = true; });
        
        audioSlider.addEventListener('input', () => {
            const value = parseFloat(audioSlider.value);
            const duration = audio.duration;
            if (isNaN(duration)) return;
            
            const percent = (value / duration) * 100;
            if (progressBar) progressBar.style.width = `${percent}%`;
            if (currentTimeEl) currentTimeEl.textContent = formatTime(value);
        });
        
        audioSlider.addEventListener('change', () => {
            audio.currentTime = parseFloat(audioSlider.value);
            isDragging = false;
        });
        
        audioSlider.addEventListener('mouseup', () => {
            audio.currentTime = parseFloat(audioSlider.value);
            isDragging = false;
        });
        
        audioSlider.addEventListener('touchend', () => {
            audio.currentTime = parseFloat(audioSlider.value);
            isDragging = false;
        });
    }
    
    if (progressContainer) {
        progressContainer.onclick = (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const newTime = percent * audio.duration;
            
            if (!isNaN(newTime)) {
                audio.currentTime = newTime;
                const audioSlider = document.getElementById('audio-slider');
                if (audioSlider) audioSlider.value = newTime;
            }
        };
    }
    
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) {
        volumeSlider.oninput = (e) => {
            audio.volume = parseFloat(e.target.value);
            updateVolumeIcon(audio.volume);
        };
    }
}

// ============= Toggle Play/Pause =============
function togglePlay() {
    const audio = document.getElementById('audio-element');
    const playIcon = document.getElementById('play-icon');
    const waveform = document.querySelector('.waveform');
    
    if (!audio) return;
    
    if (isPlaying) {
        audio.pause();
        if (playIcon) playIcon.textContent = '▶️';
        if (waveform) waveform.classList.remove('playing');
        isPlaying = false;
    } else {
        audio.play().then(() => {
            if (playIcon) playIcon.textContent = '⏸️';
            if (waveform) waveform.classList.add('playing');
            isPlaying = true;
        }).catch(err => {
            showToast('❌ مشكلة في تشغيل الصوت', 'error');
        });
    }
}

// ============= Skip Audio =============
function skipAudio(seconds) {
    const audio = document.getElementById('audio-element');
    if (!audio || isNaN(audio.duration)) return;
    
    audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
}

// ============= Change Speed =============
function changeSpeed() {
    const audio = document.getElementById('audio-element');
    const speedBtn = document.getElementById('speed-btn');
    
    if (!audio) return;
    
    const speeds = [1, 1.25, 1.5, 0.75];
    const currentIndex = speeds.indexOf(audio.playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    
    audio.playbackRate = speeds[nextIndex];
    if (speedBtn) speedBtn.textContent = `${speeds[nextIndex]}x`;
}

// ============= Volume Control =============
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

// ============= Format Time =============
function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============= Download Audio =============
function downloadAudio(url, filename) {
    showToast('⬇️ جاري التحميل...', 'info');
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// ============= Toast Notifications =============
function showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => toast.classList.add('show'));
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============= Keyboard (Volume only) =============
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('audio-element');
    
    if (!modal || modal.classList.contains('hidden')) return;
    
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (audio) {
            audio.volume = Math.min(1, audio.volume + 0.1);
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) volumeSlider.value = audio.volume;
            updateVolumeIcon(audio.volume);
        }
    }
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (audio) {
            audio.volume = Math.max(0, audio.volume - 0.1);
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) volumeSlider.value = audio.volume;
            updateVolumeIcon(audio.volume);
        }
    }
    
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', () => {
    generateFolders();
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('audio-modal');
    if (e.target === modal) closeModal();
});
