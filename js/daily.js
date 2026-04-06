// ╔════════════════════════════════════════════════════════════╗
// ║  تاريخ البداية - غيره هنا                                  ║
// ╚════════════════════════════════════════════════════════════╝
const START_DATE = "2026-04-05";  // ← غير التاريخ هنا (سنة-شهر-يوم)

// ╔════════════════════════════════════════════════════════════╗
// ║  الرسائل اليومية - 30 رسالة                                ║
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
    1:  "1m3CBo3zuYI6DDWLXko1PbxfVBMmRvrhN",   // ← ريكورد اليوم 1
    2:  "1SynYCt3Z4w326iIZ-jc84Z9VXKyRDO4c",   // ← ريكورد اليوم 2
    3:  "10JasyCQ7NlBwaKmtOwa3YZuWj7pSepQv",   // ← ريكورد اليوم 3
    4:  "1GHdd1l4CTp-Yb99m2lA6eD9yn4vQnWnE",   // ← ريكورد اليوم 4
    5:  "1G0JfOxN1pL03rtzM3KbLJ53AqY7I6z00",   // ← ريكورد اليوم 5
    6:  "1EiiLmEYkJx-VrnCU-wTbWa8_72Eg_0oL",   // ← ريكورد اليوم 6
    7:  "1VxX0jXQLtbUu3MoA07kSs0-nWugp-vz6",   // ← ريكورد اليوم 7
    8:  "1AsCS8lQ1FgiLKMsk_8ypcURcyPASgH8L",   // ← ريكورد اليوم 8
    9:  "16Nu-jMoKYXI7cwQzx5IrGiX4tAD7fW23",   // ← ريكورد اليوم 9
    10: "1C1gJPOk7ku8MMp6nNlvh6Uid3aFs0SQB",   // ← ريكورد اليوم 10
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
// ║  Helper Functions                                          ║
// ╚════════════════════════════════════════════════════════════╝

function getDriveEmbedUrl(driveId) {
    return `https://drive.google.com/file/d/${driveId}/preview`;
}

function getAvailableRecords() {
    const records = [];
    for (let day = 1; day <= 30; day++) {
        const driveId = dailyRecordsDriveIds[day];
        if (driveId && driveId.trim() !== "") {
            records.push({ day: day, driveId: driveId });
        }
    }
    return records;
}

// ╔════════════════════════════════════════════════════════════╗
// ║  حساب عدد الأيام من البداية                                ║
// ╚════════════════════════════════════════════════════════════╝
function getDaysSinceStart() {
    const startDate = new Date(START_DATE);
    startDate.setHours(0, 0, 0, 0);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// ╔════════════════════════════════════════════════════════════╗
// ║  Generate Folders                                          ║
// ╚════════════════════════════════════════════════════════════╝
function generateFolders() {
    const container = document.getElementById('folders-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const daysSinceStart = getDaysSinceStart();
    
    // لو التاريخ لسه ماجاش
    if (daysSinceStart < 0) {
        container.innerHTML = `
            <div class="empty-message">
                <div class="empty-icon">⏳</div>
                <h3>استنيني يا قمر...</h3>
                <p>المفاجآت هتبدأ قريب 💕</p>
                <p class="countdown">فاضل ${Math.abs(daysSinceStart)} يوم</p>
            </div>
        `;
        return;
    }
    
    const availableDays = daysSinceStart + 1;
    const allRecords = getAvailableRecords();
    const visibleRecords = allRecords.filter(record => record.day <= availableDays);
    
    // لو مفيش ريكوردات متاحة
    if (visibleRecords.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                <div class="empty-icon">📭</div>
                <h3>لسه مفيش رسائل</h3>
                <p>استنيني يا قمر... قريب هيبقى في مفاجآت 💕</p>
            </div>
        `;
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
            <div class="folder-status">${isToday ? '🎉 جديد!' : '✅ متاح'}</div>
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
        hint.innerHTML = `<p>♥️ كل يوم هيظهر فولدر جديد</p><p>استنيني يا قمر 😉</p>`;
        container.appendChild(hint);
    }
}

// ╔════════════════════════════════════════════════════════════╗
// ║  Format Arabic Date                                        ║
// ╚════════════════════════════════════════════════════════════╝
function formatArabicDate(dayNumber) {
    const startDate = new Date(START_DATE);
    startDate.setDate(startDate.getDate() + dayNumber - 1);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return startDate.toLocaleDateString('ar-EG', options);
}

// ╔════════════════════════════════════════════════════════════╗
// ║  Open Record Modal                                         ║
// ╚════════════════════════════════════════════════════════════╝
function openRecord(record) {
    const modal = document.getElementById('audio-modal');
    if (!modal) return;
    
    const mood = dailyMoods[record.day] || "💝";
    const message = dailyMessages[record.day] || "رسالة اليوم 💕";
    
    // تحديث المعلومات
    document.getElementById('modal-day').textContent = `${mood} اليوم ${record.day}`;
    document.getElementById('modal-date').textContent = formatArabicDate(record.day);
    document.getElementById('modal-message').textContent = message;
    
    // إعداد الـ iframe player
    const playerContainer = document.getElementById('drive-player-container');
    if (playerContainer) {
        playerContainer.innerHTML = `
            <iframe 
                src="${getDriveEmbedUrl(record.driveId)}" 
                width="100%" 
                height="80" 
                allow="autoplay"
                style="border: none; border-radius: 10px;">
            </iframe>
        `;
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// ╔════════════════════════════════════════════════════════════╗
// ║  Close Modal                                               ║
// ╚════════════════════════════════════════════════════════════╝
function closeModal() {
    const modal = document.getElementById('audio-modal');
    
    // إزالة الـ iframe لإيقاف الصوت
    const playerContainer = document.getElementById('drive-player-container');
    if (playerContainer) {
        playerContainer.innerHTML = '';
    }
    
    if (modal) {
        modal.classList.add('hidden');
    }
    
    document.body.style.overflow = '';
}

// ╔════════════════════════════════════════════════════════════╗
// ║  Toast Notifications                                       ║
// ╚════════════════════════════════════════════════════════════╝
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

// ╔════════════════════════════════════════════════════════════╗
// ║  Keyboard Shortcuts                                        ║
// ╚════════════════════════════════════════════════════════════╝
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ╔════════════════════════════════════════════════════════════╗
// ║  Initialize                                                ║
// ╚════════════════════════════════════════════════════════════╝
document.addEventListener('DOMContentLoaded', () => {
    generateFolders();
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('audio-modal');
    if (e.target === modal) closeModal();
});
