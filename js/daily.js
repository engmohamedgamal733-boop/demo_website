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

// ╔════════════════════════════════════════════════════════════════════╗
// ║  🎵 الريكوردات من Google Drive - 30 ريكورد                        ║
// ║                                                                    ║
// ║  📌 طريقة الحصول على الـ ID:                                       ║
// ║  الرابط: https://drive.google.com/file/d/XXXXX/view               ║
// ║                                       └─────┘                      ║
// ║                                        ده الـ ID                   ║
// ║                                                                    ║
// ║  ⚠️ مهم: لازم الملف يكون "Anyone with link can view"              ║
// ╚════════════════════════════════════════════════════════════════════╝

const dailyRecordsDriveIds = {
    //  اليوم :  "الـ Drive ID"
    
    1:  "1hPlz-Y7WiQvtNo7wjE3YiGfrCc4WcpIj",   // ← ريكورد اليوم 1
    2:  "",   // ← ريكورد اليوم 2
    3:  "",   // ← ريكورد اليوم 3
    4:  "",   // ← ريكورد اليوم 4
    5:  "",   // ← ريكورد اليوم 5
    6:  "",   // ← ريكورد اليوم 6
    7:  "",   // ← ريكورد اليوم 7
    8:  "",   // ← ريكورد اليوم 8
    9:  "",   // ← ريكورد اليوم 9
    10: "",   // ← ريكورد اليوم 10
    11: "",   // ← ريكورد اليوم 11
    12: "",   // ← ريكورد اليوم 12
    13: "",   // ← ريكورد اليوم 13
    14: "",   // ← ريكورد اليوم 14
    15: "",   // ← ريكورد اليوم 15
    16: "",   // ← ريكورد اليوم 16
    17: "",   // ← ريكورد اليوم 17
    18: "",   // ← ريكورد اليوم 18
    19: "",   // ← ريكورد اليوم 19
    20: "",   // ← ريكورد اليوم 20
    21: "",   // ← ريكورد اليوم 21
    22: "",   // ← ريكورد اليوم 22
    23: "",   // ← ريكورد اليوم 23
    24: "",   // ← ريكورد اليوم 24
    25: "",   // ← ريكورد اليوم 25
    26: "",   // ← ريكورد اليوم 26
    27: "",   // ← ريكورد اليوم 27
    28: "",   // ← ريكورد اليوم 28
    29: "",   // ← ريكورد اليوم 29
    30: "",   // ← ريكورد اليوم 30
};

// ╔════════════════════════════════════════════════════════════╗
// ║  Helper Functions for Google Drive                         ║
// ╚════════════════════════════════════════════════════════════╝

// رابط التشغيل المباشر
function getDriveAudioUrl(driveId) {
    return `https://docs.google.com/uc?export=download&id=${driveId}`;
}

// رابط الـ Embed (للتشغيل في iframe)
function getDriveEmbedUrl(driveId) {
    return `https://drive.google.com/file/d/${driveId}/preview`;
}

// رابط الفتح في تاب جديد
function getDriveViewUrl(driveId) {
    return `https://drive.google.com/file/d/${driveId}/view`;
}

// تحويل الـ object لـ array
function getAvailableRecords() {
    const records = [];
    for (let day = 1; day <= 30; day++) {
        const driveId = dailyRecordsDriveIds[day];
        if (driveId && driveId.trim() !== "") {
            records.push({
                day: day,
                driveId: driveId
            });
        }
    }
    return records;
}

// ============= Audio Player State =============
let isPlaying = false;
let isDragging = false;
let useIframePlayer = false; // هنستخدم iframe لو الـ audio مشتغلش

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
    
    // لو التاريخ لسه ماجاش
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
    const allRecords = getAvailableRecords();
    const visibleRecords = allRecords.filter(record => record.day <= availableDays);
    
    // لو مفيش ريكوردات متاحة
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
    
    // إنشاء الفولدرات
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
    
    // لو في ريكوردات تانية مش ظهرت لسه
    if (visibleRecords.length < allRecords.length) {
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
    
    // تحديث المعلومات
    document.getElementById('modal-day').textContent = `${mood} اليوم ${record.day}`;
    document.getElementById('modal-date').textContent = formatArabicDate(record.day);
    document.getElementById('modal-message').textContent = message;
    
    // تجهيز الصوت من Google Drive
    const audio = document.getElementById('audio-element');
    const audioUrl = getDriveAudioUrl(record.driveId);
    
    audio.src = audioUrl;
    audio.load();
    
    // Reset state
    isPlaying = false;
    isDragging = false;
    useIframePlayer = false;
    
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
    
    // زر التحميل - يفتح في Drive
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.onclick = () => {
            window.open(getDriveViewUrl(record.driveId), '_blank');
        };
    }
    
    // حفظ الـ driveId للاستخدام لاحقاً
    modal.dataset.currentDriveId = record.driveId;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    setupAudioPlayer(record.driveId);
}

// ============= Close Modal =============
function closeModal() {
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('audio-element');
    
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    
    // إزالة أي iframe
    const iframeContainer = document.getElementById('iframe-player-container');
    if (iframeContainer) {
        iframeContainer.remove();
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
function setupAudioPlayer(driveId) {
    const audio = document.getElementById('audio-element');
    const progressBar = document.getElementById('progress-bar');
    const slider = document.getElementById('audio-slider');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const playIcon = document.getElementById('play-icon');
    const progressContainer = document.querySelector('.progress-container');
    
    if (!audio) return;
    
    // لما الـ metadata تتحمل
    audio.onloadedmetadata = () => {
        const duration = audio.duration;
        if (durationEl && !isNaN(duration)) {
            durationEl.textContent = formatTime(duration);
        }
        if (slider && !isNaN(duration)) {
            slider.max = duration;
            slider.value = 0;
        }
    };
    
    // تحديث الـ progress
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
    
    // لما يخلص
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
    
    // لو حصل error - نستخدم iframe بدل
    audio.onerror = () => {
        console.log('Audio error, switching to iframe player');
        showIframePlayer(driveId);
    };
    
    // Slider controls
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
    
    // Click on progress bar
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
    
    // Volume slider
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) {
        volumeSlider.oninput = (e) => {
            audio.volume = parseFloat(e.target.value);
            updateVolumeIcon(audio.volume);
        };
    }
}

// ============= Show Iframe Player (Fallback) =============
function showIframePlayer(driveId) {
    useIframePlayer = true;
    
    // إخفاء الـ player العادي
    const audioPlayer = document.querySelector('.audio-player');
    if (!audioPlayer) return;
    
    // إزالة أي iframe سابق
    const existingIframe = document.getElementById('iframe-player-container');
    if (existingIframe) existingIframe.remove();
    
    // إنشاء iframe player
    const iframeContainer = document.createElement('div');
    iframeContainer.id = 'iframe-player-container';
    iframeContainer.style.cssText = `
        width: 100%;
        margin: 20px 0;
        text-align: center;
    `;
    
    iframeContainer.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(103,58,183,0.3), rgba(63,81,181,0.3));
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 15px;
        ">
            <div style="font-size: 3rem; margin-bottom: 15px;">🎵</div>
            <p style="color: rgba(255,255,255,0.7); margin-bottom: 20px;">اضغط Play للاستماع</p>
            <iframe 
                src="${getDriveEmbedUrl(driveId)}" 
                width="100%" 
                height="80" 
                style="border: none; border-radius: 10px; max-width: 400px;"
                allow="autoplay">
            </iframe>
        </div>
        <a href="${getDriveViewUrl(driveId)}" 
           target="_blank" 
           style="
               display: inline-block;
               padding: 12px 25px;
               background: var(--primary-color, #e91e63);
               color: white;
               text-decoration: none;
               border-radius: 25px;
               margin-top: 10px;
           ">
            🔗 فتح في Google Drive
        </a>
    `;
    
    // إخفاء الـ waveform والـ controls الأصلية
    const waveform = audioPlayer.querySelector('.waveform');
    const mainControls = audioPlayer.querySelector('.player-main-controls');
    const progressSection = audioPlayer.querySelector('.progress-section-player');
    const extraControls = audioPlayer.querySelector('.player-extra-controls');
    
    if (waveform) waveform.style.display = 'none';
    if (mainControls) mainControls.style.display = 'none';
    if (progressSection) progressSection.style.display = 'none';
    if (extraControls) extraControls.style.display = 'none';
    
    // إضافة الـ iframe
    audioPlayer.insertBefore(iframeContainer, audioPlayer.firstChild);
}

// ============= Toggle Play/Pause =============
function togglePlay() {
    if (useIframePlayer) {
        showToast('🎵 استخدم الـ Player في الأسفل', 'info');
        return;
    }
    
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
            console.log('Play error:', err);
            // لو فشل التشغيل، نستخدم iframe
            const modal = document.getElementById('audio-modal');
            if (modal && modal.dataset.currentDriveId) {
                showIframePlayer(modal.dataset.currentDriveId);
            }
        });
    }
}

// ============= Skip Audio =============
function skipAudio(seconds) {
    if (useIframePlayer) return;
    
    const audio = document.getElementById('audio-element');
    if (!audio || isNaN(audio.duration)) return;
    
    audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
}

// ============= Change Speed =============
function changeSpeed() {
    if (useIframePlayer) return;
    
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
    if (useIframePlayer) return;
    
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

// ============= Keyboard Shortcuts =============
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('audio-element');
    
    if (!modal || modal.classList.contains('hidden')) return;
    
    // Space for play/pause
    if (e.key === ' ' && !useIframePlayer) {
        e.preventDefault();
        togglePlay();
    }
    
    // Arrow keys for volume
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (audio && !useIframePlayer) {
            audio.volume = Math.min(1, audio.volume + 0.1);
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) volumeSlider.value = audio.volume;
            updateVolumeIcon(audio.volume);
        }
    }
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (audio && !useIframePlayer) {
            audio.volume = Math.max(0, audio.volume - 0.1);
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) volumeSlider.value = audio.volume;
            updateVolumeIcon(audio.volume);
        }
    }
    
    // Arrow left/right for skip
    if (e.key === 'ArrowLeft' && !useIframePlayer) {
        e.preventDefault();
        skipAudio(-10);
    }
    
    if (e.key === 'ArrowRight' && !useIframePlayer) {
        e.preventDefault();
        skipAudio(10);
    }
    
    // Escape to close
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
