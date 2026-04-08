// ╔════════════════════════════════════════════════════════════════════╗
// ║                     📸 ذكرياتنا الحلوة                             ║
// ╚════════════════════════════════════════════════════════════════════╝

const memoriesData = [

    // ═══════════════════════════════════════════════════════════
    // ║  📝 التواريخ المهمة والكلام (11 نص)                      ║
    // ═══════════════════════════════════════════════════════════

    {
        type: "text",
        emoji: "💘",
        date: "29 ديسمبر 2016",
        title: "أول يوم اتقابلنا 💕",
        description: "اليوم ده غير حياتي للأبد... من ساعتها وأنا مش قادر أبعد عنك لحظة. يوم ما شفتك أول مرة، عرفت إنك هتكوني كل حاجة في حياتي 💕✨"
    },

    {
        type: "text",
        emoji: "🎁",
        date: "23 نوفمبر 2017",
        title: "أول هدية 🎀",
        description: "فاكرة أول هدية جبتهالك؟ كنت خايف تعجبك ولا لأ، بس ابتسامتك ساعتها خلتني أحس إني أسعد إنسان في الدنيا 🎁💖"
    },

    {
        type: "text",
        emoji: "👸",
        date: "",
        title: "داليدا 🌸",
        description: "داليدا... الأميرة الأولى، هتكون زي ماما في الجمال والرقة. متخيل شكلها وهي بتضحك زيك بالظبط 👸💕"
    },

    {
        type: "text",
        emoji: "🧕",
        date: "",
        title: "خديجة 🌹",
        description: "خديجة... اسم على مسمى، هتكون قوية وحنونة زي ماما. أجمل اسم لأجمل بنوتة 🧕✨"
    },

    {
        type: "text",
        emoji: "💝",
        date: "",
        title: "مودة 🦋",
        description: "مودة... لأن الحب والمودة هما أساس بيتنا. هتكون أحلى هدية من ربنا ليكي 💝🦋"
    },

    {
        type: "text",
        emoji: "🐋",
        date: "",
        title: "يونس 🌊",
        description: "يونس... الولد الأول، هيكون راجل زي باباه بالظبط 😂 بس أحلى! متخيله وهو بيلعب ويجري حوالينا 🐋💙"
    },

    {
        type: "text",
        emoji: "🦁",
        date: "",
        title: "حمزة 🌟",
        description: "حمزة... أسد البيت الصغير، هيكون شجاع وقوي. أول ما يتولد هقوله إن ماما أحلى حاجة في الدنيا 🦁💪"
    },

    {
        type: "text",
        emoji: "🏠",
        date: "",
        title: "بيتنا الصغير 🏡",
        description: "متخيل بيتنا الصغير؟ إنتي وأنا والولاد... صباحات جميلة وضحك وحب. ده الحلم اللي بحلم بيه كل يوم 🏠💕"
    },

    {
        type: "text",
        emoji: "👵",
        date: "",
        title: "لما نكبر 👴",
        description: "متخيلة لما نكبر سوا؟ هفضل أحبك لحد آخر يوم في عمري. هتفضلي أحلى حاجة في حياتي مهما حصل 👵👴💕"
    },

    {
        type: "text",
        emoji: "🤲",
        date: "",
        title: "دعوة من القلب 💫",
        description: "ربنا يجمعنا على خير ويكملنا بأحلى كتاب ويرزقنا الذرية الصالحة. يارب تكوني ليا في الدنيا والآخرة 🤲💕"
    },

    {
        type: "text",
        emoji: "💍",
        date: "",
        title: "وعد 💕",
        description: "بوعدك إني هفضل جنبك في كل حاجة... في الحلو والوحش، في الفرح والزعل. إنتي اختياري للأبد 💍❤️"
    },

    // ═══════════════════════════════════════════════════════════
    // ║  📷 الصور (27 صورة)                                      ║
    // ═══════════════════════════════════════════════════════════

    { type: "image", driveId: "16kouq_blPVtG9yv8hzunT-eJ8u72D_V5", emoji: "💕", date: "", title: "", description: "بحبك أكتر ما الكلام يقدر يوصف 💕" },
    { type: "image", driveId: "16R8WGObV31M8pitDC1mtzcb41Kc5Es9N", emoji: "🌹", date: "", title: "", description: "إنتي أحلى حاجة حصلتلي في حياتي 🌹" },
    { type: "image", driveId: "16Fg5EYmmhGZ1Rf0Xv-Yon1no7gMUHrus", emoji: "💗", date: "", title: "", description: "قلبي بينبض باسمك 💗" },
    { type: "image", driveId: "16dGAvFmQRFPN2wNS13-0z9ijW7LknUAy", emoji: "🌟", date: "", title: "", description: "إنتي نور عينيا وروحي 🌟" },
    { type: "image", driveId: "169Jdwm7K7itfFP_BSyXENkI4ildd5cjf", emoji: "✨", date: "", title: "", description: "معاكي بحس إن الدنيا حلوة ✨" },
    { type: "image", driveId: "160tiB_CpXEW1K1AhnfNXqChHyEtaOo4d", emoji: "😊", date: "", title: "", description: "ضحكتك بتنور حياتي كلها 😊" },
    { type: "image", driveId: "16SId4jTDjdaE4u4Dgq820c_o8jmf75B8", emoji: "💫", date: "", title: "", description: "إنتي كل حلم كنت بحلم بيه 💫" },
    { type: "image", driveId: "16ahx9YzOJrbjvx7iEVpOhgsY5jHt4-nY", emoji: "🥰", date: "", title: "", description: "قربك بيخليني أحسن إنسان 🥰" },
    { type: "image", driveId: "16b8RG4Wk6m89qJGsxv50EBKBx1FeR-4-", emoji: "💖", date: "", title: "", description: "من يوم ما قابلتك وحياتي اتغيرت 💖" },
    { type: "image", driveId: "16aLvJ5CTdFi-9VhXaZ7MRDq_Fc84JDVu", emoji: "🦋", date: "", title: "", description: "إنتي السعادة اللي كنت بدور عليها 🦋" },
    { type: "image", driveId: "16ZZzxT5kYbXfAYCJZ2pWgBlZGraokfBz", emoji: "🌸", date: "", title: "", description: "كل لحظة معاكي بتساوي الدنيا كلها 🌸" },
    { type: "image", driveId: "157NDdK-gj-ca_vua9Z6EaCTTj3teHYii", emoji: "💕", date: "", title: "", description: "بحبك من أول نظرة وللأبد 💕" },
    { type: "image", driveId: "159zUKX9Cqz3VjjV7Cqp-XtlD1IKBe7z2", emoji: "🏠", date: "", title: "", description: "إنتي البيت والأمان والحب 🏠" },
    { type: "image", driveId: "15Bc6CF8JOZtvTki-OwvWH19jVw_02DT2", emoji: "💝", date: "", title: "", description: "معاكي مش محتاج حاجة تانية في الدنيا 💝" },
    { type: "image", driveId: "15GYP_inyMdO9v9NmUhipZjDTE9DLaWSo", emoji: "😍", date: "", title: "", description: "إنتي الضحكة اللي مش بتروح من وشي 😍" },
    { type: "image", driveId: "15JbCl-eXSS1icGcXJ6KQnPwSB_RwON-1", emoji: "💗", date: "", title: "", description: "روحي وقلبي ملك ليكي 💗" },
    { type: "image", driveId: "15PPvf8Aq8mzpwachJuNjuwKFFW6Hs5qd", emoji: "✨", date: "", title: "", description: "إنتي أجمل صدفة في حياتي ✨" },
    { type: "image", driveId: "15QH1JHKiRpp5dMPHQnp79A9FJlBPQv8F", emoji: "🌙", date: "", title: "", description: "بتفكر فيكي كل ثانية 🌙" },
    { type: "image", driveId: "15YQHX1otwM8AP79mnNRoEaXGY5AxGQng", emoji: "🌹", date: "", title: "", description: "حبك غير كل حاجة في حياتي للأحسن 🌹" },
    { type: "image", driveId: "15Z0LSk42jcQkchxxOzcumCKGLVJ8DjF_", emoji: "💕", date: "", title: "", description: "إنتي مش بس حبيبتي، إنتي كل حاجة 💕" },
    { type: "image", driveId: "15ZhYoE7Awgh6uBWgCePo3-IT5QhIKX0-", emoji: "💪", date: "", title: "", description: "معاكي بحس إني أقوى إنسان في الكون 💪" },
    { type: "image", driveId: "15jTY5ZAzNxWt5cnDZ_l0uMGEq6SR9ndR", emoji: "🎵", date: "", title: "", description: "ضحكتك موسيقى بتعزف في قلبي 🎵" },
    { type: "image", driveId: "15p3AOqfa4B72AxJ5GSqEN9TNDA15Jeth", emoji: "🎁", date: "", title: "", description: "إنتي الهدية اللي ربنا بعتهالي 🎁" },
    { type: "image", driveId: "15zQynUiqH2MbEzQ-RPHCy_lrbBoPmOjn", emoji: "❤️", date: "", title: "", description: "كل يوم بحبك أكتر من اللي فات ❤️" },
    { type: "image", driveId: "16-4VGJNoOgLMdwjqEDd1l7-YGp_OvslH", emoji: "💫", date: "", title: "", description: "إنتي الحلم اللي ماكنتش متخيل يتحقق 💫" },
    { type: "image", driveId: "16-aKDpmLoC6Sw46ZxFo-jftdeWlpSAa6", emoji: "💗", date: "", title: "", description: "قلبي اتعلم يحب من يوم ما شافك 💗" },
    { type: "image", driveId: "160QffkkfY8oHj0-pFIZ8uHXdDrbUfaB0", emoji: "📖", date: "", title: "", description: "إنتي أحلى قصة حب في حياتي 📖" },

    // ═══════════════════════════════════════════════════════════
    // ║  🎬 الفيديوهات القديمة (44 فيديو)                        ║
    // ═══════════════════════════════════════════════════════════

    { type: "video", driveId: "17VPBXSBR_QO2TdljnX6nGyUh_7A0K-SD", emoji: "🎬", date: "", title: "", description: "لحظات مش هتتنسى أبداً 🎬💕" },
    { type: "video", driveId: "18D00lLdLL19ZHlxJj-89CbIYESy34nUi", emoji: "🎥", date: "", title: "", description: "كل ثانية معاكي بتساوي عمر 🎥✨" },
    { type: "video", driveId: "17r2O_IRsGMCkSV0yu4MyerdadU5fUMeG", emoji: "📹", date: "", title: "", description: "ذكرى هتفضل في قلبي للأبد 📹💖" },
    { type: "video", driveId: "17Z_RLK-8U0asudiy1_YDtedlXy9QU12L", emoji: "🎬", date: "", title: "", description: "أحلى لحظة في حياتي 🎬💕" },
    { type: "video", driveId: "18HKa51x5NEgvfbgnZTD8ReAknbzn1idY", emoji: "🎥", date: "", title: "", description: "ضحكتك أحلى موسيقى 🎥🎵" },
    { type: "video", driveId: "17mvc0RiFy0MqNzMqMGV14n1lwQ0x147G", emoji: "📹", date: "", title: "", description: "بحب أشوفك وأنتي مبسوطة 📹💕" },
    { type: "video", driveId: "17SmFf_uEASMNoCzbBxa8MHBScSvEgE_e", emoji: "🎬", date: "", title: "", description: "لحظة مش هتتكرر 🎬❤️" },
    { type: "video", driveId: "18ItYpZZDRnbOL9qgJyXqWumjmnfZNbuR", emoji: "🎥", date: "", title: "", description: "أجمل ذكرى ليكي 🎥💖" },
    { type: "video", driveId: "14ucht7tTfIlDcJ71Qduag5HI9E5bZabr", emoji: "📹", date: "", title: "", description: "كل يوم معاكي أحلى من اللي قبله 📹✨" },
    { type: "video", driveId: "14ytBAGN0JptOGPPklBiN0ujSYqz2gyPv", emoji: "🎬", date: "", title: "", description: "وحشتيني أوي يا بنوتي 🎬💕" },
    { type: "video", driveId: "16lBd_XEdS7ERMeS2MLVKyxPst1UhT86P", emoji: "🎥", date: "", title: "", description: "أحلى ضحكة في الكون 🎥😊" },
    { type: "video", driveId: "18NlVk0VNGvV7zu6FBYkXk_N-DDoVp1TO", emoji: "📹", date: "", title: "", description: "لحظة سعادة مش هتتنسى 📹💗" },
    { type: "video", driveId: "18CfqIadV0X1cr0jURr2mUDp5f1KkN8wd", emoji: "🎬", date: "", title: "", description: "معاكي الدنيا أحلى 🎬🌹" },
    { type: "video", driveId: "17Ugw940tRCrmkfgitZ7ehbPfsMeFMy0N", emoji: "🎥", date: "", title: "", description: "كل لحظة معاكي كنز 🎥💎" },
    { type: "video", driveId: "18HgxL5Z4nl3pMBkPokuRLqOBis0c5r-Q", emoji: "📹", date: "", title: "", description: "قلبي بيطير من الفرحة 📹💕" },
    { type: "video", driveId: "19IGoNumRRjqqSyXouPGijxb-3i4Gp7IF", emoji: "🎬", date: "", title: "", description: "أحلى لحظات عمري 🎬✨" },
    { type: "video", driveId: "17Q-KvWhWQjbt020OrP52l1tOEW1umVUh", emoji: "🎥", date: "", title: "", description: "بحب أسمع صوتك 🎥🎵" },
    { type: "video", driveId: "18cQYCIqjpt-GPmKfVpMMVHLh16TXyBHZ", emoji: "📹", date: "", title: "", description: "ذكرى من أحلى الأيام 📹💖" },
    { type: "video", driveId: "18rWrd5GDFfoFTBuNEHCiQyw6LikTW9q9", emoji: "🎬", date: "", title: "", description: "لحظة سحر مش هتتكرر 🎬🌟" },
    { type: "video", driveId: "18GXQSdMNbhgwx9fehcwfusXCOJTT5or2", emoji: "🎥", date: "", title: "", description: "بحبك أكتر من أي حاجة 🎥❤️" },
    { type: "video", driveId: "1828pzUE4trzZvekgSqg2b847hi4OU0st", emoji: "📹", date: "", title: "", description: "إنتي الدنيا كلها 📹💕" },
    { type: "video", driveId: "19z6H48aO8-3ssqK8o7e8ImzGo2C_ircN", emoji: "🎬", date: "", title: "", description: "أحلى صوت في الكون 🎬🎵" },
    { type: "video", driveId: "16v5ocYTT86cYbYkPl57YsRyeDp_rfQVK", emoji: "🎥", date: "", title: "", description: "لحظة فرح مش هتتنسى 🎥😊" },
    { type: "video", driveId: "19pmFdWAVKPJ6yYWY_kyzwB07DKaoFH9a", emoji: "📹", date: "", title: "", description: "معاكي بنسى الدنيا كلها 📹💗" },
    { type: "video", driveId: "19nlBQ4vUMAxGVsK6fjgaWZcuV_aiLZeJ", emoji: "🎬", date: "", title: "", description: "كل ثانية معاكي نعمة 🎬🤲" },
    { type: "video", driveId: "19qS45iq3EZuBI1tVGm1IdHwRTD9QU9cZ", emoji: "🎥", date: "", title: "", description: "بحب أشوفك سعيدة 🎥💕" },
    { type: "video", driveId: "19uqkOt6z3nkfKCYdr8EwxqU0qz62gibq", emoji: "📹", date: "", title: "", description: "أجمل لحظة في يومي 📹✨" },
    { type: "video", driveId: "19KhIgKlhH4xwx69mZbe3pzG1-lRerVPM", emoji: "🎬", date: "", title: "", description: "ذكرى من ذهب 🎬💛" },
    { type: "video", driveId: "19h2HiL7zxDTYq-1tVn2v6JBcC-MmYYHG", emoji: "🎥", date: "", title: "", description: "لحظة حب مش هتتكرر 🎥❤️" },
    { type: "video", driveId: "176iTMMxC7h9Oi9Ka_4sZWmY4QDkNXe0P", emoji: "📹", date: "", title: "", description: "إنتي أحلى حاجة شفتها 📹💕" },
    { type: "video", driveId: "16zCsUJA8XHEhFbgNDoWJmeANsSNlGOle", emoji: "🎬", date: "", title: "", description: "بحب أضحك معاكي 🎬😂" },
    { type: "video", driveId: "17GPxlct5dGcCBRS_odRgsj64Jr8_dUod", emoji: "🎥", date: "", title: "", description: "كل يوم معاكي عيد 🎥🎉" },
    { type: "video", driveId: "17bk4HrP9YnTr7QN_tY-oYIYyu-R8RiDQ", emoji: "📹", date: "", title: "", description: "أحلى وقت بقضيه معاكي 📹💖" },
    { type: "video", driveId: "18Whri0Alz77ScfC7wcNX-AH-PkXFrc6Q", emoji: "🎬", date: "", title: "", description: "لحظة سعادة نقية 🎬✨" },
    { type: "video", driveId: "189pUaVKg7vg73xN5Cn3JF6aoh5ik_E7C", emoji: "🎥", date: "", title: "", description: "إنتي نور حياتي 🎥🌟" },
    { type: "video", driveId: "17s54I16C3vDsZ6lJakD8ccA87r3frqSU", emoji: "📹", date: "", title: "", description: "بحبك يا أحلى بنوتة 📹💗" },
    { type: "video", driveId: "18tC6e74ckvrBA9AkA55BBa1sf9JBovmC", emoji: "🎬", date: "", title: "", description: "معاكي الحياة أحلى 🎬🌹" },
    { type: "video", driveId: "18Uz6X6xIo-iii0Xiz0k9ppjhihppXv7L", emoji: "🎥", date: "", title: "", description: "أجمل ذكرى في قلبي 🎥💕" },
    { type: "video", driveId: "18dB2UdbVha3iEWb_c8QoIwpbGrUrzZIH", emoji: "📹", date: "", title: "", description: "لحظة مش هتتعوض 📹❤️" },
    { type: "video", driveId: "18gqvgYm-7BKZqLWCmZua9ucC1I-7KKLz", emoji: "🎬", date: "", title: "", description: "إنتي كل حاجة حلوة 🎬🦋" },
    { type: "video", driveId: "18VsfbXL6y4NiBA6pI0-2XSnYRl66K8cF", emoji: "🎥", date: "", title: "", description: "بحب أشوفك كل ثانية 🎥💖" },
    { type: "video", driveId: "17Wxr0WZYwww5Q2GVsVUhj3mTuqLbIbkr", emoji: "📹", date: "", title: "", description: "أحلى لحظة في اليوم 📹😊" },
    { type: "video", driveId: "18DLUFsyFgrQGE0vpAoZTrpmMj13ApUay", emoji: "🎬", date: "", title: "", description: "ذكرى هتفضل في قلبي 🎬💗" },
    { type: "video", driveId: "17zpsFjLwpp_4mVvcgH_C_BYLFx7lL0dG", emoji: "🎥", date: "", title: "", description: "إنتي أحلى نهاية لأي يوم 🎥🌙" },

    // ═══════════════════════════════════════════════════════════
    // ║  🎬 الفيديوهات الجديدة (82 فيديو)                        ║
    // ═══════════════════════════════════════════════════════════

    { type: "video", driveId: "1E1P9pTB2XGfdYk9uikVLnjooEd6BCJeh", emoji: "💕", date: "", title: "", description: "كل ما بشوفك بحبك أكتر 💕" },
    { type: "video", driveId: "1COBtOyB3oMgIyTexZV_djDSfeOyBPWIO", emoji: "🌹", date: "", title: "", description: "إنتي وردة حياتي 🌹" },
    { type: "video", driveId: "1CAzgGoWAg38s0x9KW-2dhhSvEfA_Uodt", emoji: "✨", date: "", title: "", description: "بتنوري حياتي كلها ✨" },
    { type: "video", driveId: "1DOWa2x_tiuAtXGA6sfAGc8EbvSMccLao", emoji: "💖", date: "", title: "", description: "قلبي مليان بيكي 💖" },
    { type: "video", driveId: "1CXR9BsGGxqsF_x-zB4wgk9mDfEn6zgkI", emoji: "🎬", date: "", title: "", description: "لحظة من أحلى اللحظات 🎬" },
    { type: "video", driveId: "1B5vIImSspmxqzltehaiduATvVJNiNH7E", emoji: "🥰", date: "", title: "", description: "بحن ليكي كل ثانية 🥰" },
    { type: "video", driveId: "1E0Kpc1P3jlt8s3a7Qe50MvMNgye0fvmG", emoji: "💗", date: "", title: "", description: "حبك في قلبي نار 💗" },
    { type: "video", driveId: "1DNFy4c6qnNwWJWim_pubrPUu5JdWPW0f", emoji: "🌙", date: "", title: "", description: "إنتي قمر لياليا 🌙" },
    { type: "video", driveId: "1EiiwWHsJRkjhmaE9tlKBJqu0_psHnOyb", emoji: "😍", date: "", title: "", description: "مش قادر أبعد عينيا عنك 😍" },
    { type: "video", driveId: "1Fpvkiz5gs6YobO3WcX7HY_w1NnnUWReF", emoji: "🎥", date: "", title: "", description: "أحلى ذكرى معاكي 🎥" },
    { type: "video", driveId: "1FpRDhb0jWkOGVhVln99l8Q-EKLsT25x3", emoji: "💫", date: "", title: "", description: "إنتي نجمة سمايا 💫" },
    { type: "video", driveId: "1E1WnGUIDat5RZoTqFGXCFwUK-Fk2ucAZ", emoji: "🦋", date: "", title: "", description: "قلبي بيرفرف لما بشوفك 🦋" },
    { type: "video", driveId: "1CglOkgZyrhO1qqD9W28F89gYepD6SvfN", emoji: "💝", date: "", title: "", description: "إنتي هدية من السما 💝" },
    { type: "video", driveId: "1DmjWNAffFHDRWQGl-gaadRyM_uv5Pmbt", emoji: "🌟", date: "", title: "", description: "بتضيئي عتمة أيامي 🌟" },
    { type: "video", driveId: "1Bp6khPZhGDEPFGs-ZG-Maig3Q8t3o-5_", emoji: "❤️", date: "", title: "", description: "حبك أكبر من الكلام ❤️" },
    { type: "video", driveId: "1FrsZ_L_TZcAKQVoa3L2kHzwCmyh7NE0h", emoji: "📹", date: "", title: "", description: "لحظة مش هتتكرر 📹" },
    { type: "video", driveId: "1DAQhUOJEyJv1YLSFfX7WHFSVIRupRmdR", emoji: "🌸", date: "", title: "", description: "إنتي ربيع عمري 🌸" },
    { type: "video", driveId: "1CUeaAx3K1najvVKPCqmjLJUAhyc2RTi5", emoji: "💕", date: "", title: "", description: "بحبك بجنون 💕" },
    { type: "video", driveId: "1FljIBBqfPLduf1vlzcTDJpej9PR-hpt7", emoji: "🎵", date: "", title: "", description: "صوتك أحلى موسيقى 🎵" },
    { type: "video", driveId: "1FtzfYJDHvwyCiHTwOM0M4Fvsa2UzDpix", emoji: "💖", date: "", title: "", description: "قلبي ملكك للأبد 💖" },
    { type: "video", driveId: "1F_ZmBDCNcXcXwg7Xsm-kWIa8EMKunb5u", emoji: "🥹", date: "", title: "", description: "بتوحشيني حتى وإنتي معايا 🥹" },
    { type: "video", driveId: "1E2GXC9zhudz_TUtwyt1dbznC5eBsfitf", emoji: "🎬", date: "", title: "", description: "ذكرى حلوة أوي 🎬" },
    { type: "video", driveId: "1FmcLUNVNzB5xbjtH5mEoEW9jRa43L7BT", emoji: "💗", date: "", title: "", description: "معاكي بحس بالأمان 💗" },
    { type: "video", driveId: "1B6o-ypJ46Tj6Y9K-Z2vWAsM8cbQACCV-", emoji: "✨", date: "", title: "", description: "إنتي سر سعادتي ✨" },
    { type: "video", driveId: "1ClgDNk-F61yeiuVbL7rzdKjkn_wn5-ZT", emoji: "🌹", date: "", title: "", description: "أجمل ورده في البستان 🌹" },
    { type: "video", driveId: "1BUUth3SHHL3h8PJWChKZ79mwRW6Zq5Zz", emoji: "💫", date: "", title: "", description: "إنتي حظي الحلو 💫" },
    { type: "video", driveId: "1EwQOvL-CZrIPY96jCUWMhUy4NGBvpSAa", emoji: "🎥", date: "", title: "", description: "لحظة سحرية 🎥" },
    { type: "video", driveId: "1Fjkp4hisp20FTGqLMkKP4J0K8E-WyW7E", emoji: "😊", date: "", title: "", description: "ابتسامتك بتشفي قلبي 😊" },
    { type: "video", driveId: "1CiGY_oAHJljqxWaub-gNtvWzDVOWkHOj", emoji: "💕", date: "", title: "", description: "بحبك أكتر كل يوم 💕" },
    { type: "video", driveId: "1ESJKfW5wc47ZERY-G8NRQzjh-zUUxOo2", emoji: "🦋", date: "", title: "", description: "قلبي طاير من الفرحة 🦋" },
    { type: "video", driveId: "1EP5sTCfOAKy1qgQSN20rVDGabyhhS0Lg", emoji: "💖", date: "", title: "", description: "إنتي أغلى من الدنيا 💖" },
    { type: "video", driveId: "1C0gqZGqgcfkz5cOEWePNwJi6AKTVdDAL", emoji: "🌙", date: "", title: "", description: "ليالينا أحلى ليالي 🌙" },
    { type: "video", driveId: "1BV5C2m48daBCZECDeEsQeJURcG5Ok_nf", emoji: "🎬", date: "", title: "", description: "فيلم حياتي معاكي 🎬" },
    { type: "video", driveId: "1CQt8DPZdHmS4bsMxhAtAT_VxekMbs-I3", emoji: "💝", date: "", title: "", description: "أنتي الهدية الكبيرة 💝" },
    { type: "video", driveId: "1FjDNvOrMj086ZMMPbd2LASKuIx5GpUVg", emoji: "🌟", date: "", title: "", description: "نورك مش بينطفي 🌟" },
    { type: "video", driveId: "1EgLSgu0g-T63heZJy1krDXqwUGXXGUm1", emoji: "❤️", date: "", title: "", description: "قلبي بيحبك بس ❤️" },
    { type: "video", driveId: "1Fd1RfvkUxwYk6qkamIyvQhIwtfdW0vyG", emoji: "📹", date: "", title: "", description: "لحظة ذهبية 📹" },
    { type: "video", driveId: "1ELYH9j1tsbbiXnksT7FMCEzi96zfEqaU", emoji: "🌸", date: "", title: "", description: "إنتي زهرة حياتي 🌸" },
    { type: "video", driveId: "1CZa0-H_3f4iCtWgo1NPQOabHTtW0QyyJ", emoji: "💗", date: "", title: "", description: "حبك نعمة كبيرة 💗" },
    { type: "video", driveId: "1G3YmZmiXRKZEQnxsu_Xd_X8R3-9ln6lX", emoji: "😍", date: "", title: "", description: "عيونك سحرتني 😍" },
    { type: "video", driveId: "1EmtlPeuhjVxaESy9C_t8p_8MglIJj9va", emoji: "🎥", date: "", title: "", description: "ذكرى لا تنسى 🎥" },
    { type: "video", driveId: "1EXSmAcTgth-oluhNbML3xsD59RywMrt7", emoji: "💕", date: "", title: "", description: "روحي متعلقة بيكي 💕" },
    { type: "video", driveId: "1CrKy4AzENy4NcBaS6IbXak1Cfd4C_qb6", emoji: "✨", date: "", title: "", description: "إنتي نور البيت ✨" },
    { type: "video", driveId: "1C3svhyKF3cUkGNcKcnHKwxB2qkP6oY4W", emoji: "🌹", date: "", title: "", description: "جمالك فتان 🌹" },
    { type: "video", driveId: "1CQUJKVntBJOQ3P0j0knFA3URO1JhLd3H", emoji: "💫", date: "", title: "", description: "إنتي قدري الحلو 💫" },
    { type: "video", driveId: "1BpLCgbEPuo5-qf7Mwsgp3yG4Bo9FDUiB", emoji: "🎬", date: "", title: "", description: "أحلى مشهد في حياتي 🎬" },
    { type: "video", driveId: "1FaOJxzepGTk4fczd3q7rdZJ7i8kt8gi1", emoji: "💖", date: "", title: "", description: "قلبي سكنه حبك 💖" },
    { type: "video", driveId: "1FRkoqLPqRngHCztlmFuKKfMFFYUOm2SF", emoji: "🥰", date: "", title: "", description: "بموت فيكي 🥰" },
    { type: "video", driveId: "1FGdh3dQNGcrodYnNwkwLN4UWu_G76vdy", emoji: "🦋", date: "", title: "", description: "فراشة قلبي 🦋" },
    { type: "video", driveId: "1FHrYn-ffP3OfB7ahADVsjlDIs0sr5i4N", emoji: "💝", date: "", title: "", description: "كنز حياتي 💝" },
    { type: "video", driveId: "1FCLtyuplGWiwDQvS5rEWNSAYWGWrx472", emoji: "🌙", date: "", title: "", description: "قمر ليالينا 🌙" },
    { type: "video", driveId: "1F2oGCRvkfkOIXYtZfisWQFy-eCK1lnMB", emoji: "🎵", date: "", title: "", description: "لحن قلبي 🎵" },
    { type: "video", driveId: "1F3TLTSuA_IK1nag8pF4yDe2MvGjulOyY", emoji: "💗", date: "", title: "", description: "نبض قلبي إنتي 💗" },
    { type: "video", driveId: "1EYhk_zZWmoPw_tQhCkCHej8nsMk-_hyF", emoji: "😊", date: "", title: "", description: "فرحة عمري 😊" },
    { type: "video", driveId: "1BtybLnncaURM4MrTFLQndKKmuLqTL6Fm", emoji: "🌟", date: "", title: "", description: "نجمتي المضيئة 🌟" },
    { type: "video", driveId: "1BOD4dJCkpWprJzqV4CyTGpm-ovf2hk6x", emoji: "💕", date: "", title: "", description: "حب عمري كله 💕" },
    { type: "video", driveId: "1BAXpeUiwE1hkpfi-HSneR4RU5ryZLFQr", emoji: "❤️", date: "", title: "", description: "قلب واحد ليكي ❤️" },
    { type: "video", driveId: "1BKeTOEzCgI6m9pSlLEcq0RglZoX1L0ao", emoji: "📹", date: "", title: "", description: "لحظة جميلة 📹" },
    { type: "video", driveId: "1BtRzXXJeSThVTN756DMLlhkal5I9lTzv", emoji: "🌸", date: "", title: "", description: "عطر حياتي 🌸" },
    { type: "video", driveId: "1D60rcTf6rUwDsCFe_OFZ46lQm5N9xiJC", emoji: "✨", date: "", title: "", description: "بريق عينيكي ✨" },
    { type: "video", driveId: "1Cp8_HgZUhHTGOCPWcar_JSeonEnJ9YgG", emoji: "💖", date: "", title: "", description: "حبيبة القلب 💖" },
    { type: "video", driveId: "1CwA1eC4wKnzxBwYEEbab_EvpcJ5WCrmO", emoji: "🎬", date: "", title: "", description: "قصة حبنا 🎬" },
    { type: "video", driveId: "1C_EFfApFGrH-3pxStOwlu236N1uhiAQk", emoji: "💫", date: "", title: "", description: "حلم حياتي 💫" },
    { type: "video", driveId: "1CCF2EsMpiUYdAwKbbYlEFMG0T6BIgPrg", emoji: "🌹", date: "", title: "", description: "ملكة الورد 🌹" },
    { type: "video", driveId: "1DEn5lKt3zuxGtn2nlCT_B44gZjmksZH4", emoji: "💗", date: "", title: "", description: "أميرة قلبي 💗" },
    { type: "video", driveId: "1D806Scd4e9Anp2JL7t0MFSo7YVNTVc4z", emoji: "🥹", date: "", title: "", description: "شوقي ليكي كبير 🥹" },
    { type: "video", driveId: "1EUpeyPVH6mWV5FRn9yE50t6Qq4HIL817", emoji: "🎥", date: "", title: "", description: "أحلى ذكريات 🎥" },
    { type: "video", driveId: "1EH_pYqNOlFvXgRQPs-OcqMcv7hvB9TDq", emoji: "💝", date: "", title: "", description: "هديتي الغالية 💝" },
    { type: "video", driveId: "1DpDuB7F2UIpD2AjUC0KkF2Wwo75gZHOs", emoji: "😍", date: "", title: "", description: "جمالك أسرني 😍" },
    { type: "video", driveId: "1DrCAHx8vUK0VAjexCFV3QWdpcaTUiFEL", emoji: "🌙", date: "", title: "", description: "نور القمر 🌙" },
    { type: "video", driveId: "1EeiAj3GwDhtQrIE2cPQms3-b045q-GbE", emoji: "💕", date: "", title: "", description: "عشقي الأبدي 💕" },
    { type: "video", driveId: "1ERbvFmSxHeQthr3u0yvppHwZH8AKF7oj", emoji: "🦋", date: "", title: "", description: "طيران قلبي 🦋" },
    { type: "video", driveId: "1ESHZ7GflAmYRz19MU5cLNtfmZDdzh7HW", emoji: "🎬", date: "", title: "", description: "لحظة رائعة 🎬" },
    { type: "video", driveId: "1DktatnnaI2qb4gPDxqPqZmJ80TbjGZ1a", emoji: "💕", date: "", title: "", description: "روحي وروحك واحدة 💕" },
    { type: "video", driveId: "1EScFpl0u1XBT2Fq7E2pnaOwcllvzGq7p", emoji: "🌹", date: "", title: "", description: "عطرك سحرني 🌹" },
    { type: "video", driveId: "1DaZ_dSGNGN5KBc6q5GTp_xQ-sziCI39j", emoji: "✨", date: "", title: "", description: "بريقك ملأ حياتي ✨" },
    { type: "video", driveId: "1DkoTmGu1VMwKKTyvNA9sWXmRpoe34ql5", emoji: "💖", date: "", title: "", description: "قلبي ليكي وبس 💖" },
    { type: "video", driveId: "1C4WyYmzA_PClypkc4Y_ZVpybSeB1sbsE", emoji: "🎥", date: "", title: "", description: "ذكرى من القلب 🎥" },
    { type: "video", driveId: "1DbhJxih-uSjva7i6_8BVMbpoTfwCedRP", emoji: "💗", date: "", title: "", description: "حبك في دمي 💗" },
    { type: "video", driveId: "1EA_PLb62BKdUPTIFk0FMvecNs4FfSQos", emoji: "🌟", date: "", title: "", description: "نجمة قلبي 🌟" },
    { type: "video", driveId: "1EVt6ywSTg9ZkH-1KN4yyxOzEH8OdkqM9", emoji: "😊", date: "", title: "", description: "ابتسامتك حياتي 😊" },
    { type: "video", driveId: "1B3HGd6EJAN1OfXoiu_4zlvqCk3Z71nfc", emoji: "❤️", date: "", title: "", description: "حبك الأبدي في قلبي ❤️" }

];
