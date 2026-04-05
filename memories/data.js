// ╔════════════════════════════════════════════════════════════════════╗
// ║                     📸 ذكرياتنا الحلوة                             ║
// ╚════════════════════════════════════════════════════════════════════╝

const memoriesData = [

    // ═══════════════════════════════════════════════════════════
    // ║  📝 التواريخ المهمة والكلام                              ║
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
    // ║  📷🎬 الصور والفيديوهات (مخلوطين)                        ║
    // ═══════════════════════════════════════════════════════════

    {
        type: "image",
        driveId: "16kouq_blPVtG9yv8hzunT-eJ8u72D_V5",
        emoji: "💕",
        date: "",
        title: "",
        description: "بحبك أكتر ما الكلام يقدر يوصف 💕"
    },

    {
        type: "video",
        driveId: "17VPBXSBR_QO2TdljnX6nGyUh_7A0K-SD",
        emoji: "🎬",
        date: "",
        title: "",
        description: "لحظات مش هتتنسى أبداً 🎬💕"
    },

    {
        type: "image",
        driveId: "16R8WGObV31M8pitDC1mtzcb41Kc5Es9N",
        emoji: "🌹",
        date: "",
        title: "",
        description: "إنتي أحلى حاجة حصلتلي في حياتي 🌹"
    },

    {
        type: "video",
        driveId: "18D00lLdLL19ZHlxJj-89CbIYESy34nUi",
        emoji: "🎥",
        date: "",
        title: "",
        description: "كل ثانية معاكي بتساوي عمر 🎥✨"
    },

    {
        type: "image",
        driveId: "16Fg5EYmmhGZ1Rf0Xv-Yon1no7gMUHrus",
        emoji: "💗",
        date: "",
        title: "",
        description: "قلبي بينبض باسمك 💗"
    },

    {
        type: "video",
        driveId: "17r2O_IRsGMCkSV0yu4MyerdadU5fUMeG",
        emoji: "📹",
        date: "",
        title: "",
        description: "ذكرى هتفضل في قلبي للأبد 📹💖"
    },

    {
        type: "image",
        driveId: "16dGAvFmQRFPN2wNS13-0z9ijW7LknUAy",
        emoji: "🌟",
        date: "",
        title: "",
        description: "إنتي نور عينيا وروحي 🌟"
    },

    {
        type: "video",
        driveId: "17Z_RLK-8U0asudiy1_YDtedlXy9QU12L",
        emoji: "🎬",
        date: "",
        title: "",
        description: "أحلى لحظة في حياتي 🎬💕"
    },

    {
        type: "image",
        driveId: "169Jdwm7K7itfFP_BSyXENkI4ildd5cjf",
        emoji: "✨",
        date: "",
        title: "",
        description: "معاكي بحس إن الدنيا حلوة ✨"
    },

    {
        type: "video",
        driveId: "18HKa51x5NEgvfbgnZTD8ReAknbzn1idY",
        emoji: "🎥",
        date: "",
        title: "",
        description: "ضحكتك أحلى موسيقى 🎥🎵"
    },

    {
        type: "image",
        driveId: "160tiB_CpXEW1K1AhnfNXqChHyEtaOo4d",
        emoji: "😊",
        date: "",
        title: "",
        description: "ضحكتك بتنور حياتي كلها 😊"
    },

    {
        type: "video",
        driveId: "17mvc0RiFy0MqNzMqMGV14n1lwQ0x147G",
        emoji: "📹",
        date: "",
        title: "",
        description: "بحب أشوفك وأنتي مبسوطة 📹💕"
    },

    {
        type: "image",
        driveId: "16SId4jTDjdaE4u4Dgq820c_o8jmf75B8",
        emoji: "💫",
        date: "",
        title: "",
        description: "إنتي كل حلم كنت بحلم بيه 💫"
    },

    {
        type: "video",
        driveId: "17SmFf_uEASMNoCzbBxa8MHBScSvEgE_e",
        emoji: "🎬",
        date: "",
        title: "",
        description: "لحظة مش هتتكرر 🎬❤️"
    },

    {
        type: "image",
        driveId: "16ahx9YzOJrbjvx7iEVpOhgsY5jHt4-nY",
        emoji: "🥰",
        date: "",
        title: "",
        description: "قربك بيخليني أحسن إنسان 🥰"
    },

    {
        type: "video",
        driveId: "18ItYpZZDRnbOL9qgJyXqWumjmnfZNbuR",
        emoji: "🎥",
        date: "",
        title: "",
        description: "أجمل ذكرى ليكي 🎥💖"
    },

    {
        type: "image",
        driveId: "16b8RG4Wk6m89qJGsxv50EBKBx1FeR-4-",
        emoji: "💖",
        date: "",
        title: "",
        description: "من يوم ما قابلتك وحياتي اتغيرت 💖"
    },

    {
        type: "video",
        driveId: "14ucht7tTfIlDcJ71Qduag5HI9E5bZabr",
        emoji: "📹",
        date: "",
        title: "",
        description: "كل يوم معاكي أحلى من اللي قبله 📹✨"
    },

    {
        type: "image",
        driveId: "16aLvJ5CTdFi-9VhXaZ7MRDq_Fc84JDVu",
        emoji: "🦋",
        date: "",
        title: "",
        description: "إنتي السعادة اللي كنت بدور عليها 🦋"
    },

    {
        type: "video",
        driveId: "14ytBAGN0JptOGPPklBiN0ujSYqz2gyPv",
        emoji: "🎬",
        date: "",
        title: "",
        description: "وحشتيني أوي يا بنوتي 🎬💕"
    },

    {
        type: "image",
        driveId: "16ZZzxT5kYbXfAYCJZ2pWgBlZGraokfBz",
        emoji: "🌸",
        date: "",
        title: "",
        description: "كل لحظة معاكي بتساوي الدنيا كلها 🌸"
    },

    {
        type: "video",
        driveId: "16lBd_XEdS7ERMeS2MLVKyxPst1UhT86P",
        emoji: "🎥",
        date: "",
        title: "",
        description: "أحلى ضحكة في الكون 🎥😊"
    },

    {
        type: "image",
        driveId: "157NDdK-gj-ca_vua9Z6EaCTTj3teHYii",
        emoji: "💕",
        date: "",
        title: "",
        description: "بحبك من أول نظرة وللأبد 💕"
    },

    {
        type: "video",
        driveId: "18NlVk0VNGvV7zu6FBYkXk_N-DDoVp1TO",
        emoji: "📹",
        date: "",
        title: "",
        description: "لحظة سعادة مش هتتنسى 📹💗"
    },

    {
        type: "image",
        driveId: "159zUKX9Cqz3VjjV7Cqp-XtlD1IKBe7z2",
        emoji: "🏠",
        date: "",
        title: "",
        description: "إنتي البيت والأمان والحب 🏠"
    },

    {
        type: "video",
        driveId: "18CfqIadV0X1cr0jURr2mUDp5f1KkN8wd",
        emoji: "🎬",
        date: "",
        title: "",
        description: "معاكي الدنيا أحلى 🎬🌹"
    },

    {
        type: "image",
        driveId: "15Bc6CF8JOZtvTki-OwvWH19jVw_02DT2",
        emoji: "💝",
        date: "",
        title: "",
        description: "معاكي مش محتاج حاجة تانية في الدنيا 💝"
    },

    {
        type: "video",
        driveId: "17Ugw940tRCrmkfgitZ7ehbPfsMeFMy0N",
        emoji: "🎥",
        date: "",
        title: "",
        description: "كل لحظة معاكي كنز 🎥💎"
    },

    {
        type: "image",
        driveId: "15GYP_inyMdO9v9NmUhipZjDTE9DLaWSo",
        emoji: "😍",
        date: "",
        title: "",
        description: "إنتي الضحكة اللي مش بتروح من وشي 😍"
    },

    {
        type: "video",
        driveId: "18HgxL5Z4nl3pMBkPokuRLqOBis0c5r-Q",
        emoji: "📹",
        date: "",
        title: "",
        description: "قلبي بيطير من الفرحة 📹💕"
    },

    {
        type: "image",
        driveId: "15JbCl-eXSS1icGcXJ6KQnPwSB_RwON-1",
        emoji: "💗",
        date: "",
        title: "",
        description: "روحي وقلبي ملك ليكي 💗"
    },

    {
        type: "video",
        driveId: "19IGoNumRRjqqSyXouPGijxb-3i4Gp7IF",
        emoji: "🎬",
        date: "",
        title: "",
        description: "أحلى لحظات عمري 🎬✨"
    },

    {
        type: "image",
        driveId: "15PPvf8Aq8mzpwachJuNjuwKFFW6Hs5qd",
        emoji: "✨",
        date: "",
        title: "",
        description: "إنتي أجمل صدفة في حياتي ✨"
    },

    {
        type: "video",
        driveId: "17Q-KvWhWQjbt020OrP52l1tOEW1umVUh",
        emoji: "🎥",
        date: "",
        title: "",
        description: "بحب أسمع صوتك 🎥🎵"
    },

    {
        type: "image",
        driveId: "15QH1JHKiRpp5dMPHQnp79A9FJlBPQv8F",
        emoji: "🌙",
        date: "",
        title: "",
        description: "بتفكر فيكي كل ثانية 🌙"
    },

    {
        type: "video",
        driveId: "18cQYCIqjpt-GPmKfVpMMVHLh16TXyBHZ",
        emoji: "📹",
        date: "",
        title: "",
        description: "ذكرى من أحلى الأيام 📹💖"
    },

    {
        type: "image",
        driveId: "15YQHX1otwM8AP79mnNRoEaXGY5AxGQng",
        emoji: "🌹",
        date: "",
        title: "",
        description: "حبك غير كل حاجة في حياتي للأحسن 🌹"
    },

    {
        type: "video",
        driveId: "18rWrd5GDFfoFTBuNEHCiQyw6LikTW9q9",
        emoji: "🎬",
        date: "",
        title: "",
        description: "لحظة سحر مش هتتكرر 🎬🌟"
    },

    {
        type: "image",
        driveId: "15Z0LSk42jcQkchxxOzcumCKGLVJ8DjF_",
        emoji: "💕",
        date: "",
        title: "",
        description: "إنتي مش بس حبيبتي، إنتي كل حاجة 💕"
    },

    {
        type: "video",
        driveId: "18GXQSdMNbhgwx9fehcwfusXCOJTT5or2",
        emoji: "🎥",
        date: "",
        title: "",
        description: "بحبك أكتر من أي حاجة 🎥❤️"
    },

    {
        type: "image",
        driveId: "15ZhYoE7Awgh6uBWgCePo3-IT5QhIKX0-",
        emoji: "💪",
        date: "",
        title: "",
        description: "معاكي بحس إني أقوى إنسان في الكون 💪"
    },

    {
        type: "video",
        driveId: "1828pzUE4trzZvekgSqg2b847hi4OU0st",
        emoji: "📹",
        date: "",
        title: "",
        description: "إنتي الدنيا كلها 📹💕"
    },

    {
        type: "image",
        driveId: "15jTY5ZAzNxWt5cnDZ_l0uMGEq6SR9ndR",
        emoji: "🎵",
        date: "",
        title: "",
        description: "ضحكتك موسيقى بتعزف في قلبي 🎵"
    },

    {
        type: "video",
        driveId: "19z6H48aO8-3ssqK8o7e8ImzGo2C_ircN",
        emoji: "🎬",
        date: "",
        title: "",
        description: "أحلى صوت في الكون 🎬🎵"
    },

    {
        type: "image",
        driveId: "15p3AOqfa4B72AxJ5GSqEN9TNDA15Jeth",
        emoji: "🎁",
        date: "",
        title: "",
        description: "إنتي الهدية اللي ربنا بعتهالي 🎁"
    },

    {
        type: "video",
        driveId: "16v5ocYTT86cYbYkPl57YsRyeDp_rfQVK",
        emoji: "🎥",
        date: "",
        title: "",
        description: "لحظة فرح مش هتتنسى 🎥😊"
    },

    {
        type: "image",
        driveId: "15zQynUiqH2MbEzQ-RPHCy_lrbBoPmOjn",
        emoji: "❤️",
        date: "",
        title: "",
        description: "كل يوم بحبك أكتر من اللي فات ❤️"
    },

    {
        type: "video",
        driveId: "19pmFdWAVKPJ6yYWY_kyzwB07DKaoFH9a",
        emoji: "📹",
        date: "",
        title: "",
        description: "معاكي بنسى الدنيا كلها 📹💗"
    },

    {
        type: "image",
        driveId: "16-4VGJNoOgLMdwjqEDd1l7-YGp_OvslH",
        emoji: "💫",
        date: "",
        title: "",
        description: "إنتي الحلم اللي ماكنتش متخيل يتحقق 💫"
    },

    {
        type: "video",
        driveId: "19nlBQ4vUMAxGVsK6fjgaWZcuV_aiLZeJ",
        emoji: "🎬",
        date: "",
        title: "",
        description: "كل ثانية معاكي نعمة 🎬🤲"
    },

    {
        type: "image",
        driveId: "16-aKDpmLoC6Sw46ZxFo-jftdeWlpSAa6",
        emoji: "💗",
        date: "",
        title: "",
        description: "قلبي اتعلم يحب من يوم ما شافك 💗"
    },

    {
        type: "video",
        driveId: "19qS45iq3EZuBI1tVGm1IdHwRTD9QU9cZ",
        emoji: "🎥",
        date: "",
        title: "",
        description: "بحب أشوفك سعيدة 🎥💕"
    },

    {
        type: "image",
        driveId: "160QffkkfY8oHj0-pFIZ8uHXdDrbUfaB0",
        emoji: "📖",
        date: "",
        title: "",
        description: "إنتي أحلى قصة حب في حياتي 📖"
    },

    {
        type: "video",
        driveId: "19uqkOt6z3nkfKCYdr8EwxqU0qz62gibq",
        emoji: "📹",
        date: "",
        title: "",
        description: "أجمل لحظة في يومي 📹✨"
    },

    {
        type: "video",
        driveId: "19KhIgKlhH4xwx69mZbe3pzG1-lRerVPM",
        emoji: "🎬",
        date: "",
        title: "",
        description: "ذكرى من ذهب 🎬💛"
    },

    {
        type: "video",
        driveId: "19h2HiL7zxDTYq-1tVn2v6JBcC-MmYYHG",
        emoji: "🎥",
        date: "",
        title: "",
        description: "لحظة حب مش هتتكرر 🎥❤️"
    },

    {
        type: "video",
        driveId: "176iTMMxC7h9Oi9Ka_4sZWmY4QDkNXe0P",
        emoji: "📹",
        date: "",
        title: "",
        description: "إنتي أحلى حاجة شفتها 📹💕"
    },

    {
        type: "video",
        driveId: "16zCsUJA8XHEhFbgNDoWJmeANsSNlGOle",
        emoji: "🎬",
        date: "",
        title: "",
        description: "بحب أضحك معاكي 🎬😂"
    },

    {
        type: "video",
        driveId: "17GPxlct5dGcCBRS_odRgsj64Jr8_dUod",
        emoji: "🎥",
        date: "",
        title: "",
        description: "كل يوم معاكي عيد 🎥🎉"
    },

    {
        type: "video",
        driveId: "17bk4HrP9YnTr7QN_tY-oYIYyu-R8RiDQ",
        emoji: "📹",
        date: "",
        title: "",
        description: "أحلى وقت بقضيه معاكي 📹💖"
    },

    {
        type: "video",
        driveId: "18Whri0Alz77ScfC7wcNX-AH-PkXFrc6Q",
        emoji: "🎬",
        date: "",
        title: "",
        description: "لحظة سعادة نقية 🎬✨"
    },

    {
        type: "video",
        driveId: "189pUaVKg7vg73xN5Cn3JF6aoh5ik_E7C",
        emoji: "🎥",
        date: "",
        title: "",
        description: "إنتي نور حياتي 🎥🌟"
    },

    {
        type: "video",
        driveId: "17s54I16C3vDsZ6lJakD8ccA87r3frqSU",
        emoji: "📹",
        date: "",
        title: "",
        description: "بحبك يا أحلى بنوتة 📹💗"
    },

    {
        type: "video",
        driveId: "18tC6e74ckvrBA9AkA55BBa1sf9JBovmC",
        emoji: "🎬",
        date: "",
        title: "",
        description: "معاكي الحياة أحلى 🎬🌹"
    },

    {
        type: "video",
        driveId: "18Uz6X6xIo-iii0Xiz0k9ppjhihppXv7L",
        emoji: "🎥",
        date: "",
        title: "",
        description: "أجمل ذكرى في قلبي 🎥💕"
    },

    {
        type: "video",
        driveId: "18dB2UdbVha3iEWb_c8QoIwpbGrUrzZIH",
        emoji: "📹",
        date: "",
        title: "",
        description: "لحظة مش هتتعوض 📹❤️"
    },

    {
        type: "video",
        driveId: "18gqvgYm-7BKZqLWCmZua9ucC1I-7KKLz",
        emoji: "🎬",
        date: "",
        title: "",
        description: "إنتي كل حاجة حلوة 🎬🦋"
    },

    {
        type: "video",
        driveId: "18VsfbXL6y4NiBA6pI0-2XSnYRl66K8cF",
        emoji: "🎥",
        date: "",
        title: "",
        description: "بحب أشوفك كل ثانية 🎥💖"
    },

    {
        type: "video",
        driveId: "17Wxr0WZYwww5Q2GVsVUhj3mTuqLbIbkr",
        emoji: "📹",
        date: "",
        title: "",
        description: "أحلى لحظة في اليوم 📹😊"
    },

    {
        type: "video",
        driveId: "18DLUFsyFgrQGE0vpAoZTrpmMj13ApUay",
        emoji: "🎬",
        date: "",
        title: "",
        description: "ذكرى هتفضل في قلبي 🎬💗"
    },

    {
        type: "video",
        driveId: "17zpsFjLwpp_4mVvcgH_C_BYLFx7lL0dG",
        emoji: "🎥",
        date: "",
        title: "",
        description: "إنتي أحلى نهاية لأي يوم 🎥🌙"
    }

];
