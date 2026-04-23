// ===== ศูนย์รวมข้อความทั้งเว็บ (แก้ไฟล์นี้ไฟล์เดียว) =====

export const TEXT_CONTENT = {
  meta: {
    pageTitle: 'For Punch 💕'
  },

  // ข้อความที่ bind ตรงจาก HTML ผ่าน data-text-key
  sections: {
    PAGE_TITLE: 'For Punch 💕',
    ENTRY_TAG: 'Heart Unlock',
    ENTRY_TITLE: 'My heart is yours',
    ENTRY_SUB: 'กดค้างหรือแตะเพิ่มหัวใจให้เต็มคั้บ',
    ENTRY_HINT_IDLE: 'กดค้างหรือแตะเพิ่มได้เลยคั้บเธอ...',
    LOADER_SUB: 'แมวน้อยกำลังพาเธอไปนะคั้บ...',

    HOME_HERO_TAG: '✨ FOR YOUR EYES ONLY ✨',
    HOME_CARD_TITLE: '🤍 Ionic Bond 🤍',
    HOME_COUNTDOWN_TITLE: '💗 Countdown to the important day 💗',

    STATS_MONTHS_LABEL: 'คิดถึงเธอ',
    STATS_NIGHTS_LABEL: 'อยู่กับเธอ',
    STATS_MORNINGS_LABEL: 'ได้ยินเสียงเธอ',
    STATS_HEART_LABEL: 'ชอบเธอ',

    PROFILE_TITLE: 'Profile Punch',
    PROFILE_LABEL_NAME: 'ชื่อ:',
    PROFILE_LABEL_AGE: 'อายุ:',
    PROFILE_LABEL_BIRTHDAY: 'วันเกิด:',
    PROFILE_LABEL_BLOOD: 'กรุ๊ปเลือด:',
    PROFILE_LABEL_HOBBY: 'งานอดิเรก:',
    PROFILE_LABEL_FAVORITE: 'ของกินโปรด:',

    TODAY_CLOSE: 'ปิด ✕',
    THANKS_CLOSE: 'ปิด ✕',
    DREAM_CLOSE: 'ปิด ✕',

    LOVE_LETTER_PAGE_TITLE: 'ความรัก 💕',
    LOVE_LETTER_PAGE_GUIDE: 'ซีน Love Letter: แตะที่ซองจดหมาย แล้วเลือกคำตอบได้เลยน้า',
    LOVE_LETTER_PAGE_TIP: 'เคล็ดลับ: กด Esc (คอม) หรือปุ่มปิด เพื่อกลับหน้าแรก',

    RAIN_TITLE: 'โปรยข้อความ 💬',
    RAIN_DESC: 'ลองกดปุ่มนะคั้บคนน่ารัก 🫠',
    RAIN_BUTTON: 'เริ่มโปรยข้อความ',
    RAIN_STATUS_READY: 'พร้อมโปรยข้อความแล้ว...',

    FINGER_TITLE: 'ยืนยันตัวตนคนน่ารัก 🔍',
    FINGER_HINT_IDLE: 'วางนิ้วสแกนซะดีๆคั้บ...🤲🏻',

    ANNIV_COUNTDOWN_TITLE: 'กำลังนับถอยหลังเซอร์ไพรส์วันสำคัญ 😱',
    ANNIV_COUNTDOWN_SUBTITLE: 'วินาทีสุดท้ายกำลังเริ่มแล้ว ✨',
    ANNIV_POPUP_TITLE: 'Happy Anniversary 💞',
    ANNIV_PREPARE_TEXT: 'กำลังแสดงข้อความนะคั้บ...',

    NAV_HOME: 'Home',
    NAV_RAIN: 'TextLove',
    NAV_HYPER: 'Universe',
    NAV_FINGER: 'ScanLove',
    NAV_BEAR: 'EatBear',
    NAV_FLOWER: 'LikeMe',

    BGM_GATE_TITLE: 'เปิดเพลงพื้นหลัง 🎵',
    BGM_GATE_DESC: 'กรุณากดปุ่มนี้ด้านล่างด้วยนะคั้บคุณฑิตยา..🤗',
    BGM_GATE_BUTTON: 'PlayLoveSong'
  },

  // ข้อความ dynamic ของ logic
  app: {
    entryGate: {
      hintLoading: 'กำลังยืนยันตัวตนคนน่ารัก...',
      hintReset: 'ปล่อยแล้วรีเซ็ตนะคั้บ กดค้างใหม่เพื่อเติมหัวใจ',
      hintCompleted: 'เติมครบ 100% แล้ว',
      hintProgress: (pct) => `เติมแล้ว ${pct}% กดเพิ่มได้อีกนะ`
    },

    home: {
      greeting: (name) => `สวัสดี${name} 🌸`,
      daysSince: (d, m, y) => `เริ่มคุยกันตั้งแต่ ${d}/${m}/${y}`,
      monthStat: (v) => `${v} Month`,
      nightStat: (v) => `${v} Nigth`,
      morningStat: (v) => `${v} Day`,
      toastFxUnlocked: 'ปลดล็อกเอฟเฟกต์สำเร็จ ✨',
      toastFxTest: (count, target) => `ทดสอบเอฟเฟกต์: ${count}/${target}`,
      toastCountdownStart: 'เริ่มนับถอยหลังทดสอบแล้ว 💫',
      toastCountdownTest: (count, target) => `ทดสอบนับถอยหลัง: ${count}/${target}`
    },

    rain: {
      statusPreparing: 'กำลังเตรียมความรักให้...',
      statusReadyNext: 'พร้อมส่งข้อความรอบถัดไปแล้ว',
      countLabel: (count) => `กดไปแล้ว: ${count} ครั้ง`
    },

    finger: {
      phases: [
        'เชื่อมต่อคลังข้อมูลของคนน่ารัด...',
        'ถอดรหัสลายนิ้วมือของคนน่ารัก...',
        'สแกนความถี่ชีพจรแห่งความทรงจำ...',
        'ซิงก์คีย์ลับกับเซิร์ฟเวอร์ Soul-Link...',
        'วิเคราะห์รอยยิ้มและค่าความอบอุ่น...',
        'ยืนยันความปลอดภัยระดับ Heart Shield...',
        'ค้นหาข้อมูลพิเศษของคนสำคัญ...',
        'เตรียมผลสรุปสุดท้าย...'
      ],
      popupLoadingTitle: 'กำลังโหลดข้อมูลความรัก..เอ้ย...ความลับ 🫣',
      popupDoneTitle: 'ตรวจสอบเสร็จสิ้น 💖',
      dismissIn: (sec) => `จะปิดได้ใน ${sec} วิ...`,
      dismissReady: 'แตะเพื่อปิดหน้าต่างนี้คั้บ',
      hintIdle: 'วางนิ้วสแกนซะดีๆคั้บ...🤲🏻',
      hintHolding: 'อย่าพึ่งยกนิ้วนะคั้บ..จะได้ลายนิ้วมือเธอแล้ว...🤭',
      hintReading: 'กำลังอ่านลายนิ้วมือคนน่ารัก...😳',
      hintDone: 'ตรวจสอบเสร็จสิ้นแล้ว ✅',
      msgDone: 'สำเร็จ! 🟢 ระบบยืนยันตัวตนด้วยหัวใจเรียบร้อย 🩵'
    },

    hyper: {
      uiIdleMessage: 'กดปุ่มนี้หน่อยคั้บบเธอ....🥹',
      uiDoneText: 'จบข้อความแล้ว กดเริ่มเพื่อเล่นซ้ำได้คั้บ...ถ้าเธอชอบ 🤭',
      uiStartButton: 'เริ่มเดินทาง 🚀',
      uiLoadingLog: (pct) => `โหลดระบบนำทาง ${pct}%`,
      uiFinalTitle: 'Luv You Forever',
      uiFinalButton: 'ออกจากหน้านี้...🥲',
      loadingPreparing: 'กำลังเตรียม...อะไรนะ!! ลืมแล้ว',
      loadingReady: 'รอตรงนี้สักครู่นะคั้บ...อย่าพึ่งลุกไปไหนนะ 🥺',
      intro: 'เตรียมตัวเข้าสู่.....เอ่อ ลืมอีกละงั้นไปก่อนคั้บบ 😫'
    },

    today: {
      hint: 'นี่ๆ...คนน่ารักตรงนั้นหนะ ป้อนอาหารผมหน่อยสิคั้บ',
      feedbackLove: 'LOVE YOU',
      feedbackHit: 'HIT!',
      feedbackMiss: 'MISS YOU'
    },

    anniversary: {
      closeIn: (sec) => `แตะที่ไหนก็ได้เพื่อปิด (พร้อมใน ${sec} วินาที)`,
      closeReady: 'แตะที่ไหนก็ได้เพื่อกลับสู่หน้าแรก 💫',
      prepareText: 'เตรียมแสดงข้อความ...',
      blessingFallback: 'สุขสันต์วันครบรอบนะคนเก่งของฉัน 💕'
    },

    homeLove: {
      fallbackTitle: 'I LOVE YOU'
    },

    loveLetter: {
      catDanceAlt: 'แมวกำลังเต้น'
    },

    bgm: {
      warnMissing: '[BGM] playback blocked or source missing:',
      quickOn: '🎵 ON',
      quickOff: '🎵 OFF',
      quickAsk: '🎵 เปิดเพลง'
    }
  },

  // กลุ่มข้อความข้อมูลหลัก (เคยกระจายในหลายไฟล์)
  data: {
    herName: 'Punch',
    profile: {
      name: 'Baby Punch',
      age: '23 ปี',
      birthday: '30 พฤศจิกายน 2546',
      blood: 'O',
      hobby: 'ถ่ายรูป / ฟังเพลง / กอดเค้า / คุยเค้า ',
      favorite: 'Me'
    },
    hyperMessages: [
      'My feelings are overwhelmed by you',
      'You’re special to me',
      'You fill my heart',
      'You are the cutest thing in the universe',
      'My feelings are overwhelmed by you',
      'I think about you all the time',
      'I’ll stand by you no matter what',
      'I want to spend the rest of my life with you 💖'
    ],
    annivBlessings: [
      'สุขสันต์วันครบรอบนะคนเก่งของฉัน 💖 ขอบคุณที่เป็นความสบายใจในทุกวัน',
      'ทุกวินาทีที่มีเธอคือของขวัญล้ำค่าที่สุดสำหรับฉัน รักเธอเสมอ 🌷',
      'ขอให้เราจับมือกันแบบนี้ไปทุกเทศกาล ทุกฤดู และทุกความฝันเลยนะ ✨'
    ],
    rainMessages: [
      'ชอบเธอมาก 💕',
      'คิดถึงเธอ 🌸',
      'ขอบคุณที่มาเจอกัน 💝',
      'เธอทำให้โลกดูดีนะ 🌍',
      'อยากกอดเธอ 🤗',
      'อยู่ด้วยกันไปนานๆนะ ✨',
      'เธอคือเซฟโซน 🫶',
      'เธอคือของขวัญ 🎁',
      'glad you exist 🌸',
      'เธอทำให้เค้าสบายใจ 🌿',
      'you feel like home 🏡',
      'stay forever? 🥺',
      'my person 🫶',
      'สบายใจที่ได้อยู่ข้างๆเธอ 🌷',
      'โชคดีที่เจอเธอ 💝',
      'อบอุ่นใจมากๆเลย ☁️',
      'คิดถึงเธอตลอดเวลา 🌙',
      'ยิ้มทุกทีที่นึกถึงเธอ 😊',
      'you are irreplaceable 💎',
      'you changed everything 🌊',
      'เหตุผลที่ยิ้มคือเธอ 🌼'
    ],
    loveLetter: {
      envelopeLabel: '♡ จดหมายถึงเธอ ♡',
      titleInitial: 'จะเป็นวาเลนไทน์ของเราไหม?',
      titleAccepted: 'เย้~ ตกลงแล้วน้าา 💖',
      finalHtml: '<strong>เดตวาเลนไทน์:</strong> ร้าน Meow เวลา 19:00 น. แต่งตัวสวยๆ นะ 💐',
      yesAlt: 'ตกลง',
      noAlt: 'ยังไม่ตกลง'
    }
  }
};

export function applySectionTexts() {
  document.title = TEXT_CONTENT.meta.pageTitle;
  document.querySelectorAll('[data-text-key]').forEach((node) => {
    const key = node.getAttribute('data-text-key');
    const value = key ? TEXT_CONTENT.sections[key] : undefined;
    if (value) node.textContent = value;
  });
}
