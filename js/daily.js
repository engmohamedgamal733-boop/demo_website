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

// ============= Audio Player State =============
let isPlaying = false;
let isDragging = false;
let currentAudio = null;

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

// ============= Format Arabic Date =============
function formatArabicDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-EG', options);
}

// ============= Open Record Modal =============
function openRecord(record) {
    const modal = document.getElementById('audio-modal');
    if (!modal) return;
    
    // Set content
    document.getElementById('modal-day').textContent = `${record.mood || '💝'} اليوم ${record.day}`;
    document.getElementById('modal-date').textContent = formatArabicDate(record.date);
    document.getElementById('modal-message').textContent = record.message;
    
    // Setup audio
    const audio = document.getElementById('audio-element');
    audio.src = record.audioFile;
    audio.load();
    
    // Reset player state
    isPlaying = false;
    isDragging = false;
    
    // Reset UI
    const playIcon = document.getElementById('play-icon');
    if (playIcon) playIcon.textContent = '▶️';
    
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = '0%';
    
    const slider = document.getElementById('audio-slider');
    if (slider) {
        slider.value = 0;
        slider.max = 100;
    }
    
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) timeDisplay.textContent = '0:00 / 0:00';
    
    const currentTimeEl = document.getElementById('current-time');
    if (currentTimeEl) currentTimeEl.textContent = '0:00';
    
    const durationEl = document.getElementById('duration');
    if (durationEl) durationEl.textContent = '0:00';
    
    const waveform = document.querySelector('.waveform');
    if (waveform) waveform.classList.remove('playing');
    
    // Reset speed
    const speedBtn = document.getElementById('speed-btn');
    if (speedBtn) speedBtn.textContent = '1x';
    audio.playbackRate = 1;
    
    // Reset volume
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) volumeSlider.value = 1;
    audio.volume = 1;
    updateVolumeIcon(1);
    
    // Setup download button
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.onclick = () => downloadAudio(record.audioFile, `رسالة-يوم-${record.day}.mp3`);
    }
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Setup audio events
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
    const timeDisplay = document.getElementById('time-display');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const playIcon = document.getElementById('play-icon');
    const progressContainer = document.querySelector('.progress-container');
    
    if (!audio) return;
    
    // Store reference
    currentAudio = audio;
    
    // ===== Loaded Metadata =====
    audio.onloadedmetadata = () => {
        const duration = audio.duration;
        
        if (timeDisplay) {
            timeDisplay.textContent = `0:00 / ${formatTime(duration)}`;
        }
        if (durationEl) {
            durationEl.textContent = formatTime(duration);
        }
        if (slider) {
            slider.max = duration;
            slider.value = 0;
        }
    };
    
    // ===== Time Update =====
    audio.ontimeupdate = () => {
        if (isDragging) return;
        
        const current = audio.currentTime;
        const duration = audio.duration;
        
        if (isNaN(duration)) return;
        
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
    };
    
    // ===== Ended =====
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
    
    // ===== Error =====
    audio.onerror = (e) => {
        console.error('Audio error:', e);
        showToast('❌ مشكلة في تحميل الصوت', 'error');
    };
    
    // ===== Can Play =====
    audio.oncanplay = () => {
        console.log('Audio ready to play');
    };
    
    // ===== Slider Events (Fixed) =====
    if (slider) {
        // Remove old listeners by replacing element
        const newSlider = slider.cloneNode(true);
        slider.parentNode.replaceChild(newSlider, slider);
        const audioSlider = document.getElementById('audio-slider');
        
        // Mouse down - start dragging
        audioSlider.addEventListener('mousedown', (e) => {
            isDragging = true;
        });
        
        // Touch start - start dragging
        audioSlider.addEventListener('touchstart', (e) => {
            isDragging = true;
        });
        
        // Input - while dragging, update UI only
        audioSlider.addEventListener('input', (e) => {
            const value = parseFloat(audioSlider.value);
            const duration = audio.duration;
            
            if (isNaN(duration)) return;
            
            const percent = (value / duration) * 100;
            
            if (progressBar) {
                progressBar.style.width = `${percent}%`;
            }
            if (timeDisplay) {
                timeDisplay.textContent = `${formatTime(value)} / ${formatTime(duration)}`;
            }
            if (currentTimeEl) {
                currentTimeEl.textContent = formatTime(value);
            }
        });
        
        // Change - final value, seek audio
        audioSlider.addEventListener('change', (e) => {
            const value = parseFloat(audioSlider.value);
            audio.currentTime = value;
            isDragging = false;
        });
        
        // Mouse up - stop dragging and seek
        audioSlider.addEventListener('mouseup', (e) => {
            if (isDragging) {
                const value = parseFloat(audioSlider.value);
                audio.currentTime = value;
                isDragging = false;
            }
        });
        
        // Touch end - stop dragging and seek
        audioSlider.addEventListener('touchend', (e) => {
            if (isDragging) {
                const value = parseFloat(audioSlider.value);
                audio.currentTime = value;
                isDragging = false;
            }
        });
        
        // Mouse leave - if was dragging, seek
        audioSlider.addEventListener('mouseleave', (e) => {
            if (isDragging) {
                const value = parseFloat(audioSlider.value);
                audio.currentTime = value;
                isDragging = false;
            }
        });
    }
    
    // ===== Click on Progress Container =====
    if (progressContainer) {
        progressContainer.onclick = (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percent = clickX / width;
            const newTime = percent * audio.duration;
            
            if (!isNaN(newTime)) {
                audio.currentTime = newTime;
                
                const audioSlider = document.getElementById('audio-slider');
                if (audioSlider) {
                    audioSlider.value = newTime;
                }
            }
        };
    }
    
    // ===== Volume Slider =====
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) {
        volumeSlider.oninput = (e) => {
            const value = parseFloat(e.target.value);
            audio.volume = value;
            updateVolumeIcon(value);
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
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                if (playIcon) playIcon.textContent = '⏸️';
                if (waveform) waveform.classList.add('playing');
                isPlaying = true;
            }).catch(err => {
                console.error('Play error:', err);
                showToast('❌ مشكلة في تشغيل الصوت', 'error');
            });
        }
    }
}

// ============= Skip Audio =============
function skipAudio(seconds) {
    const audio = document.getElementById('audio-element');
    if (!audio || isNaN(audio.duration)) return;
    
    const newTime = audio.currentTime + seconds;
    audio.currentTime = Math.max(0, Math.min(audio.duration, newTime));
    
    // Update slider
    const slider = document.getElementById('audio-slider');
    if (slider) {
        slider.value = audio.currentTime;
    }
    
    // Show feedback
    const skipText = seconds > 0 ? `⏩ +${seconds} ثانية` : `⏪ ${seconds} ثانية`;
    showToast(skipText, 'info');
}

// ============= Change Playback Speed =============
function changeSpeed() {
    const audio = document.getElementById('audio-element');
    const speedBtn = document.getElementById('speed-btn');
    
    if (!audio) return;
    
    const speeds = [1, 1.25, 1.5, 1.75, 2, 0.5, 0.75];
    const currentSpeed = audio.playbackRate;
    const currentIndex = speeds.indexOf(currentSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    
    audio.playbackRate = speeds[nextIndex];
    
    if (speedBtn) {
        speedBtn.textContent = `${speeds[nextIndex]}x`;
    }
    
    showToast(`🎵 السرعة: ${speeds[nextIndex]}x`, 'info');
}

// ============= Volume Control =============
function changeVolume(value) {
    const audio = document.getElementById('audio-element');
    if (audio) {
        audio.volume = parseFloat(value);
        updateVolumeIcon(parseFloat(value));
    }
}

function updateVolumeIcon(value) {
    const icon = document.getElementById('volume-icon');
    if (!icon) return;
    
    if (value === 0) {
        icon.textContent = '🔇';
    } else if (value < 0.3) {
        icon.textContent = '🔈';
    } else if (value < 0.7) {
        icon.textContent = '🔉';
    } else {
        icon.textContent = '🔊';
    }
}

function toggleMute() {
    const audio = document.getElementById('audio-element');
    const volumeSlider = document.getElementById('volume-slider');
    
    if (!audio) return;
    
    if (audio.volume > 0) {
        audio.dataset.prevVolume = audio.volume;
        audio.volume = 0;
        if (volumeSlider) volumeSlider.value = 0;
        showToast('🔇 صوت مكتوم', 'info');
    } else {
        const prevVolume = parseFloat(audio.dataset.prevVolume) || 1;
        audio.volume = prevVolume;
        if (volumeSlider) volumeSlider.value = prevVolume;
        showToast('🔊 الصوت شغال', 'info');
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
    
    // Try fetch first
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.blob();
        })
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(blobUrl);
            }, 100);
            
            showToast('✅ تم التحميل بنجاح!', 'success');
        })
        .catch(err => {
            console.error('Download error:', err);
            // Fallback: direct link
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showToast('📥 جاري فتح الملف...', 'info');
        });
}

// ============= Toast Notifications =============
function showToast(message, type = 'info') {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) {
        existing.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Hide after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 2500);
}

// ============= Keyboard Shortcuts =============
function handleKeyboard(e) {
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('audio-element');
    
    // Only work when modal is open
    if (!modal || modal.classList.contains('hidden')) return;
    
    switch(e.key) {
        case ' ':
        case 'k':
        case 'K':
            e.preventDefault();
            togglePlay();
            break;
            
        case 'ArrowRight':
            e.preventDefault();
            skipAudio(5);
            break;
            
        case 'ArrowLeft':
            e.preventDefault();
            skipAudio(-5);
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            if (audio) {
                audio.volume = Math.min(1, audio.volume + 0.1);
                const volumeSlider = document.getElementById('volume-slider');
                if (volumeSlider) volumeSlider.value = audio.volume;
                updateVolumeIcon(audio.volume);
                showToast(`🔊 الصوت: ${Math.round(audio.volume * 100)}%`, 'info');
            }
            break;
            
        case 'ArrowDown':
            e.preventDefault();
            if (audio) {
                audio.volume = Math.max(0, audio.volume - 0.1);
                const volumeSlider = document.getElementById('volume-slider');
                if (volumeSlider) volumeSlider.value = audio.volume;
                updateVolumeIcon(audio.volume);
                showToast(`🔉 الصوت: ${Math.round(audio.volume * 100)}%`, 'info');
            }
            break;
            
        case 'm':
        case 'M':
            e.preventDefault();
            toggleMute();
            break;
            
        case 'Escape':
            e.preventDefault();
            closeModal();
            break;
            
        case 'j':
        case 'J':
            e.preventDefault();
            skipAudio(-10);
            break;
            
        case 'l':
        case 'L':
            e.preventDefault();
            skipAudio(10);
            break;
            
        case 's':
        case 'S':
            e.preventDefault();
            changeSpeed();
            break;
            
        case '0':
            e.preventDefault();
            if (audio) audio.currentTime = 0;
            break;
            
        case '1':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.1;
            break;
            
        case '2':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.2;
            break;
            
        case '3':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.3;
            break;
            
        case '4':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.4;
            break;
            
        case '5':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.5;
            break;
            
        case '6':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.6;
            break;
            
        case '7':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.7;
            break;
            
        case '8':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.8;
            break;
            
        case '9':
            e.preventDefault();
            if (audio) audio.currentTime = audio.duration * 0.9;
            break;
    }
}

// ============= Initialize =============
document.addEventListener('DOMContentLoaded', () => {
    // Generate folders
    generateFolders();
    
    // Add keyboard listener
    document.addEventListener('keydown', handleKeyboard);
});

// ============= Close Modal Events =============
document.addEventListener('click', (e) => {
    const modal = document.getElementById('audio-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// ============= Prevent Body Scroll When Modal Open =============
document.addEventListener('touchmove', (e) => {
    const modal = document.getElementById('audio-modal');
    if (modal && !modal.classList.contains('hidden')) {
        const modalContent = document.querySelector('.modal-content');
        if (!modalContent.contains(e.target)) {
            e.preventDefault();
        }
    }
}, { passive: false });

// ============= Double Click to Seek =============
document.addEventListener('dblclick', (e) => {
    const modal = document.getElementById('audio-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) return;
    
    const rect = modalContent.getBoundingClientRect();
    const clickX = e.clientX;
    const midX = rect.left + rect.width / 2;
    
    // Double click on left side = skip back
    // Double click on right side = skip forward
    if (e.target.closest('.audio-player')) {
        if (clickX < midX) {
            skipAudio(-10);
        } else {
            skipAudio(10);
        }
    }
});

// ============= Visibility Change (Pause when tab hidden) =============
document.addEventListener('visibilitychange', () => {
    // Optional: pause audio when tab is hidden
    // const audio = document.getElementById('audio-element');
    // if (document.hidden && audio && isPlaying) {
    //     audio.pause();
    //     isPlaying = false;
    // }
});

// ============= Console Welcome =============
console.log('%c💕 أهلاً بيكي في موقعنا الصغير 💕', 'font-size: 20px; color: #e91e63;');
console.log('%c♥️ بحبك ♥️', 'font-size: 16px; color: #ff4081;');
            
