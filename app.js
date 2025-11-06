// Complete Kana Dataset
const KANA_DATA = [
    // Basic
    { romaji: 'a', hiragana: 'あ', katakana: 'ア', group: 'basic' },
    { romaji: 'i', hiragana: 'い', katakana: 'イ', group: 'basic' },
    { romaji: 'u', hiragana: 'う', katakana: 'ウ', group: 'basic' },
    { romaji: 'e', hiragana: 'え', katakana: 'エ', group: 'basic' },
    { romaji: 'o', hiragana: 'お', katakana: 'オ', group: 'basic' },
    { romaji: 'ka', hiragana: 'か', katakana: 'カ', group: 'basic' },
    { romaji: 'ki', hiragana: 'き', katakana: 'キ', group: 'basic' },
    { romaji: 'ku', hiragana: 'く', katakana: 'ク', group: 'basic' },
    { romaji: 'ke', hiragana: 'け', katakana: 'ケ', group: 'basic' },
    { romaji: 'ko', hiragana: 'こ', katakana: 'コ', group: 'basic' },
    { romaji: 'sa', hiragana: 'さ', katakana: 'サ', group: 'basic' },
    { romaji: 'shi', hiragana: 'し', katakana: 'シ', group: 'basic' },
    { romaji: 'su', hiragana: 'す', katakana: 'ス', group: 'basic' },
    { romaji: 'se', hiragana: 'せ', katakana: 'セ', group: 'basic' },
    { romaji: 'so', hiragana: 'そ', katakana: 'ソ', group: 'basic' },
    { romaji: 'ta', hiragana: 'た', katakana: 'タ', group: 'basic' },
    { romaji: 'chi', hiragana: 'ち', katakana: 'チ', group: 'basic' },
    { romaji: 'tsu', hiragana: 'つ', katakana: 'ツ', group: 'basic' },
    { romaji: 'te', hiragana: 'て', katakana: 'テ', group: 'basic' },
    { romaji: 'to', hiragana: 'と', katakana: 'ト', group: 'basic' },
    { romaji: 'na', hiragana: 'な', katakana: 'ナ', group: 'basic' },
    { romaji: 'ni', hiragana: 'に', katakana: 'ニ', group: 'basic' },
    { romaji: 'nu', hiragana: 'ぬ', katakana: 'ヌ', group: 'basic' },
    { romaji: 'ne', hiragana: 'ね', katakana: 'ネ', group: 'basic' },
    { romaji: 'no', hiragana: 'の', katakana: 'ノ', group: 'basic' },
    { romaji: 'ha', hiragana: 'は', katakana: 'ハ', group: 'basic' },
    { romaji: 'hi', hiragana: 'ひ', katakana: 'ヒ', group: 'basic' },
    { romaji: 'fu', hiragana: 'ふ', katakana: 'フ', group: 'basic' },
    { romaji: 'he', hiragana: 'へ', katakana: 'ヘ', group: 'basic' },
    { romaji: 'ho', hiragana: 'ほ', katakana: 'ホ', group: 'basic' },
    { romaji: 'ma', hiragana: 'ま', katakana: 'マ', group: 'basic' },
    { romaji: 'mi', hiragana: 'み', katakana: 'ミ', group: 'basic' },
    { romaji: 'mu', hiragana: 'む', katakana: 'ム', group: 'basic' },
    { romaji: 'me', hiragana: 'め', katakana: 'メ', group: 'basic' },
    { romaji: 'mo', hiragana: 'も', katakana: 'モ', group: 'basic' },
    { romaji: 'ya', hiragana: 'や', katakana: 'ヤ', group: 'basic' },
    { romaji: 'yu', hiragana: 'ゆ', katakana: 'ユ', group: 'basic' },
    { romaji: 'yo', hiragana: 'よ', katakana: 'ヨ', group: 'basic' },
    { romaji: 'ra', hiragana: 'ら', katakana: 'ラ', group: 'basic' },
    { romaji: 'ri', hiragana: 'り', katakana: 'リ', group: 'basic' },
    { romaji: 'ru', hiragana: 'る', katakana: 'ル', group: 'basic' },
    { romaji: 're', hiragana: 'れ', katakana: 'レ', group: 'basic' },
    { romaji: 'ro', hiragana: 'ろ', katakana: 'ロ', group: 'basic' },
    { romaji: 'wa', hiragana: 'わ', katakana: 'ワ', group: 'basic' },
    { romaji: 'wo', hiragana: 'を', katakana: 'ヲ', group: 'basic' },
    { romaji: 'n', hiragana: 'ん', katakana: 'ン', group: 'basic' },

    // Dakuten & Handakuten
    { romaji: 'ga', hiragana: 'が', katakana: 'ガ', group: 'dakuten' },
    { romaji: 'gi', hiragana: 'ぎ', katakana: 'ギ', group: 'dakuten' },
    { romaji: 'gu', hiragana: 'ぐ', katakana: 'グ', group: 'dakuten' },
    { romaji: 'ge', hiragana: 'げ', katakana: 'ゲ', group: 'dakuten' },
    { romaji: 'go', hiragana: 'ご', katakana: 'ゴ', group: 'dakuten' },
    { romaji: 'za', hiragana: 'ざ', katakana: 'ザ', group: 'dakuten' },
    { romaji: 'ji', hiragana: 'じ', katakana: 'ジ', group: 'dakuten' },
    { romaji: 'zu', hiragana: 'ず', katakana: 'ズ', group: 'dakuten' },
    { romaji: 'ze', hiragana: 'ぜ', katakana: 'ゼ', group: 'dakuten' },
    { romaji: 'zo', hiragana: 'ぞ', katakana: 'ゾ', group: 'dakuten' },
    { romaji: 'da', hiragana: 'だ', katakana: 'ダ', group: 'dakuten' },
    { romaji: 'ji', hiragana: 'ぢ', katakana: 'ヂ', group: 'dakuten' },
    { romaji: 'zu', hiragana: 'づ', katakana: 'ヅ', group: 'dakuten' },
    { romaji: 'de', hiragana: 'で', katakana: 'デ', group: 'dakuten' },
    { romaji: 'do', hiragana: 'ど', katakana: 'ド', group: 'dakuten' },
    { romaji: 'ba', hiragana: 'ば', katakana: 'バ', group: 'dakuten' },
    { romaji: 'bi', hiragana: 'び', katakana: 'ビ', group: 'dakuten' },
    { romaji: 'bu', hiragana: 'ぶ', katakana: 'ブ', group: 'dakuten' },
    { romaji: 'be', hiragana: 'べ', katakana: 'ベ', group: 'dakuten' },
    { romaji: 'bo', hiragana: 'ぼ', katakana: 'ボ', group: 'dakuten' },
    { romaji: 'pa', hiragana: 'ぱ', katakana: 'パ', group: 'dakuten' },
    { romaji: 'pi', hiragana: 'ぴ', katakana: 'ピ', group: 'dakuten' },
    { romaji: 'pu', hiragana: 'ぷ', katakana: 'プ', group: 'dakuten' },
    { romaji: 'pe', hiragana: 'ぺ', katakana: 'ペ', group: 'dakuten' },
    { romaji: 'po', hiragana: 'ぽ', katakana: 'ポ', group: 'dakuten' },

    // Digraphs
    { romaji: 'kya', hiragana: 'きゃ', katakana: 'キャ', group: 'digraphs' },
    { romaji: 'kyu', hiragana: 'きゅ', katakana: 'キュ', group: 'digraphs' },
    { romaji: 'kyo', hiragana: 'きょ', katakana: 'キョ', group: 'digraphs' },
    { romaji: 'sha', hiragana: 'しゃ', katakana: 'シャ', group: 'digraphs' },
    { romaji: 'shu', hiragana: 'しゅ', katakana: 'シュ', group: 'digraphs' },
    { romaji: 'sho', hiragana: 'しょ', katakana: 'ショ', group: 'digraphs' },
    { romaji: 'cha', hiragana: 'ちゃ', katakana: 'チャ', group: 'digraphs' },
    { romaji: 'chu', hiragana: 'ちゅ', katakana: 'チュ', group: 'digraphs' },
    { romaji: 'cho', hiragana: 'ちょ', katakana: 'チョ', group: 'digraphs' },
    { romaji: 'nya', hiragana: 'にゃ', katakana: 'ニャ', group: 'digraphs' },
    { romaji: 'nyu', hiragana: 'にゅ', katakana: 'ニュ', group: 'digraphs' },
    { romaji: 'nyo', hiragana: 'にょ', katakana: 'ニョ', group: 'digraphs' },
    { romaji: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ', group: 'digraphs' },
    { romaji: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ', group: 'digraphs' },
    { romaji: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ', group: 'digraphs' },
    { romaji: 'mya', hiragana: 'みゃ', katakana: 'ミャ', group: 'digraphs' },
    { romaji: 'myu', hiragana: 'みゅ', katakana: 'ミュ', group: 'digraphs' },
    { romaji: 'myo', hiragana: 'みょ', katakana: 'ミョ', group: 'digraphs' },
    { romaji: 'rya', hiragana: 'りゃ', katakana: 'リャ', group: 'digraphs' },
    { romaji: 'ryu', hiragana: 'りゅ', katakana: 'リュ', group: 'digraphs' },
    { romaji: 'ryo', hiragana: 'りょ', katakana: 'リョ', group: 'digraphs' },
    { romaji: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ', group: 'digraphs' },
    { romaji: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ', group: 'digraphs' },
    { romaji: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ', group: 'digraphs' },
    { romaji: 'ja', hiragana: 'じゃ', katakana: 'ジャ', group: 'digraphs' },
    { romaji: 'ju', hiragana: 'じゅ', katakana: 'ジュ', group: 'digraphs' },
    { romaji: 'jo', hiragana: 'じょ', katakana: 'ジョ', group: 'digraphs' },
    { romaji: 'bya', hiragana: 'びゃ', katakana: 'ビャ', group: 'digraphs' },
    { romaji: 'byu', hiragana: 'びゅ', katakana: 'ビュ', group: 'digraphs' },
    { romaji: 'byo', hiragana: 'びょ', katakana: 'ビョ', group: 'digraphs' },
    { romaji: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ', group: 'digraphs' },
    { romaji: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ', group: 'digraphs' },
    { romaji: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ', group: 'digraphs' },

    // Loan Words (Katakana only)
    { romaji: 'va', hiragana: '', katakana: 'ヴァ', group: 'loanwords' },
    { romaji: 'vi', hiragana: '', katakana: 'ヴィ', group: 'loanwords' },
    { romaji: 'vu', hiragana: '', katakana: 'ヴ', group: 'loanwords' },
    { romaji: 've', hiragana: '', katakana: 'ヴェ', group: 'loanwords' },
    { romaji: 'vo', hiragana: '', katakana: 'ヴォ', group: 'loanwords' },
    { romaji: 'fa', hiragana: '', katakana: 'ファ', group: 'loanwords' },
    { romaji: 'fi', hiragana: '', katakana: 'フィ', group: 'loanwords' },
    { romaji: 'fe', hiragana: '', katakana: 'フェ', group: 'loanwords' },
    { romaji: 'fo', hiragana: '', katakana: 'フォ', group: 'loanwords' },
    { romaji: 'wi', hiragana: '', katakana: 'ウィ', group: 'loanwords' },
    { romaji: 'we', hiragana: '', katakana: 'ウェ', group: 'loanwords' },
    { romaji: 'wo', hiragana: '', katakana: 'ウォ', group: 'loanwords' },
    { romaji: 'kwa', hiragana: '', katakana: 'クヮ', group: 'loanwords' },
    { romaji: 'kye', hiragana: '', katakana: 'キェ', group: 'loanwords' },
    { romaji: 'gwa', hiragana: '', katakana: 'グヮ', group: 'loanwords' },
    { romaji: 'ti', hiragana: '', katakana: 'ティ', group: 'loanwords' },
    { romaji: 'tu', hiragana: '', katakana: 'トゥ', group: 'loanwords' },
    { romaji: 'di', hiragana: '', katakana: 'ディ', group: 'loanwords' },
    { romaji: 'du', hiragana: '', katakana: 'ドゥ', group: 'loanwords' },
    { romaji: 'she', hiragana: '', katakana: 'シェ', group: 'loanwords' },
    { romaji: 'je', hiragana: '', katakana: 'ジェ', group: 'loanwords' },
    { romaji: 'che', hiragana: '', katakana: 'チェ', group: 'loanwords' },
    { romaji: 'tsa', hiragana: '', katakana: 'ツァ', group: 'loanwords' },
    { romaji: 'tsi', hiragana: '', katakana: 'ツィ', group: 'loanwords' },
    { romaji: 'tse', hiragana: '', katakana: 'ツェ', group: 'loanwords' },
    { romaji: 'tso', hiragana: '', katakana: 'ツォ', group: 'loanwords' },
    { romaji: 'ye', hiragana: '', katakana: 'イェ', group: 'loanwords' },
    { romaji: 'vya', hiragana: '', katakana: 'ヴャ', group: 'loanwords' },
    { romaji: 'vyu', hiragana: '', katakana: 'ヴュ', group: 'loanwords' },
    { romaji: 'vye', hiragana: '', katakana: 'ヴェ', group: 'loanwords' },
    { romaji: 'vyo', hiragana: '', katakana: 'ヴョ', group: 'loanwords' }
];

// Game State
let gameState = {
    settings: {
        characterSets: ['romaji', 'hiragana', 'katakana', 'audio'],
        kanaGroups: ['basic', 'dakuten', 'digraphs', 'loanwords']
    },
    stats: {
        sessionCorrect: 0,
        sessionTotal: 0,
        allTimeCorrect: 0,
        allTimeTotal: 0
    },
    recentQuestions: [],
    currentQuestion: null,
    isInSession: false
};

// DOM Elements
const settingsScreen = document.getElementById('settingsScreen');
const reviewScreen = document.getElementById('reviewScreen');
const closeBtn = document.getElementById('closeBtn');
const startBtn = document.getElementById('startBtn');
const settingsLink = document.getElementById('settingsLink');
const questionBox = document.getElementById('questionBox');
const answerBtns = document.querySelectorAll('.answer-btn');
const characterSetError = document.getElementById('characterSetError');
const kanaGroupError = document.getElementById('kanaGroupError');
const sessionStatsEl = document.getElementById('sessionStats');
const allTimeStatsEl = document.getElementById('allTimeStats');

// Initialize
loadSettings();
loadStats();
updateSettingsUI();
updateLoanWordsAvailability();

// Event Listeners
startBtn.addEventListener('click', startNewSession);
closeBtn.addEventListener('click', closeSettings);
settingsLink.addEventListener('click', openSettings);

document.querySelectorAll('input[name="characterSet"]').forEach(cb => {
    cb.addEventListener('change', () => {
        characterSetError.classList.remove('visible');
        updateLoanWordsAvailability();
    });
});

document.querySelectorAll('input[name="kanaGroup"]').forEach(cb => {
    cb.addEventListener('change', () => kanaGroupError.classList.remove('visible'));
});

answerBtns.forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn));
});

// Settings Management
function loadSettings() {
    const saved = localStorage.getItem('kanaflash-settings');
    if (saved) {
        try {
            gameState.settings = JSON.parse(saved);
        } catch (e) {
            // Use defaults
        }
    }
}

function saveSettings() {
    localStorage.setItem('kanaflash-settings', JSON.stringify(gameState.settings));
}

function updateSettingsUI() {
    document.querySelectorAll('input[name="characterSet"]').forEach(cb => {
        cb.checked = gameState.settings.characterSets.includes(cb.value);
    });
    document.querySelectorAll('input[name="kanaGroup"]').forEach(cb => {
        cb.checked = gameState.settings.kanaGroups.includes(cb.value);
    });
}

function updateLoanWordsAvailability() {
    const romajiChecked = document.querySelector('input[name="characterSet"][value="romaji"]').checked;
    const katakanaChecked = document.querySelector('input[name="characterSet"][value="katakana"]').checked;
    const loanWordsCheckbox = document.querySelector('input[name="kanaGroup"][value="loanwords"]');

    // Loan words require both romaji and katakana
    if (!romajiChecked || !katakanaChecked) {
        loanWordsCheckbox.disabled = true;
        loanWordsCheckbox.checked = false;
    } else {
        loanWordsCheckbox.disabled = false;
    }
}

function getSettingsFromUI() {
    const characterSets = Array.from(document.querySelectorAll('input[name="characterSet"]:checked'))
        .map(cb => cb.value);
    const kanaGroups = Array.from(document.querySelectorAll('input[name="kanaGroup"]:checked'))
        .map(cb => cb.value);
    return { characterSets, kanaGroups };
}

function validateSettings(settings) {
    let valid = true;

    // Need at least 2 character sets total
    if (settings.characterSets.length < 2) {
        characterSetError.classList.add('visible');
        valid = false;
    }
    // Need at least one non-audio character set (for answers)
    else {
        const nonAudioSets = settings.characterSets.filter(s => s !== 'audio');
        if (nonAudioSets.length < 1) {
            characterSetError.classList.add('visible');
            valid = false;
        } else {
            characterSetError.classList.remove('visible');
        }
    }

    if (settings.kanaGroups.length < 1) {
        kanaGroupError.classList.add('visible');
        valid = false;
    } else {
        kanaGroupError.classList.remove('visible');
    }

    return valid;
}

// Stats Management
function loadStats() {
    const saved = localStorage.getItem('kanaflash-stats');
    if (saved) {
        try {
            const stats = JSON.parse(saved);
            gameState.stats.allTimeCorrect = stats.allTimeCorrect || 0;
            gameState.stats.allTimeTotal = stats.allTimeTotal || 0;
        } catch (e) {
            // Use defaults
        }
    }
}

function saveStats() {
    localStorage.setItem('kanaflash-stats', JSON.stringify({
        allTimeCorrect: gameState.stats.allTimeCorrect,
        allTimeTotal: gameState.stats.allTimeTotal
    }));
}

function updateStatsDisplay() {
    const sessionPercent = gameState.stats.sessionTotal > 0
        ? Math.round((gameState.stats.sessionCorrect / gameState.stats.sessionTotal) * 100)
        : 0;
    const allTimePercent = gameState.stats.allTimeTotal > 0
        ? Math.round((gameState.stats.allTimeCorrect / gameState.stats.allTimeTotal) * 100)
        : 0;

    sessionStatsEl.textContent = `${gameState.stats.sessionCorrect}/${gameState.stats.sessionTotal} (${sessionPercent}%) correct this session`;
    allTimeStatsEl.textContent = `${gameState.stats.allTimeCorrect}/${gameState.stats.allTimeTotal} (${allTimePercent}%) correct all time`;
}

// Screen Navigation
function showScreen(screen) {
    settingsScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
    screen.classList.add('active');
}

function startNewSession() {
    const settings = getSettingsFromUI();
    if (!validateSettings(settings)) {
        return;
    }

    gameState.settings = settings;
    saveSettings();

    gameState.stats.sessionCorrect = 0;
    gameState.stats.sessionTotal = 0;
    gameState.recentQuestions = [];
    gameState.isInSession = true;

    closeBtn.classList.add('visible');
    showScreen(reviewScreen);
    updateStatsDisplay();
    nextQuestion();
}

function openSettings() {
    updateSettingsUI();
    closeBtn.classList.add('visible');
    showScreen(settingsScreen);
}

function closeSettings() {
    if (gameState.isInSession) {
        showScreen(reviewScreen);
    }
}

// Question Generation
function getAvailableKana() {
    return KANA_DATA.filter(kana =>
        gameState.settings.kanaGroups.includes(kana.group)
    );
}

function getQuestionKey(kana) {
    // Just use romaji - blocks all 6 directions for this syllable
    return kana.romaji;
}

function isQuestionRecent(key) {
    return gameState.recentQuestions.includes(key);
}

function addToRecentQuestions(key) {
    gameState.recentQuestions.push(key);

    const availableKana = getAvailableKana();
    const maxRecentQuestions = Math.min(20, Math.floor(availableKana.length * 0.5));

    if (gameState.recentQuestions.length > maxRecentQuestions) {
        gameState.recentQuestions.shift();
    }
}

function extractVowel(romaji) {
    const vowels = ['a', 'i', 'u', 'e', 'o'];
    for (let vowel of vowels) {
        if (romaji.includes(vowel)) {
            return vowel;
        }
    }
    return null;
}

function extractConsonant(romaji) {
    const vowel = extractVowel(romaji);
    if (!vowel) return romaji;
    return romaji.replace(vowel, '');
}

function findSimilarKana(correctKana, availableKana) {
    const vowel = extractVowel(correctKana.romaji);
    const consonant = extractConsonant(correctKana.romaji);

    const similar = [];

    // Same consonant, different vowel
    similar.push(...availableKana.filter(k =>
        k !== correctKana && extractConsonant(k.romaji) === consonant
    ));

    // Same vowel, different consonant
    similar.push(...availableKana.filter(k =>
        k !== correctKana && extractVowel(k.romaji) === vowel
    ));

    // Remove duplicates
    return [...new Set(similar)];
}

function generateWrongAnswers(correctKana, answerType, availableKana) {
    const wrongAnswers = [];
    const used = new Set([correctKana.romaji]);

    // Filter to only same group (basic, dakuten, or digraphs)
    const sameGroup = availableKana.filter(k => k.group === correctKana.group && k !== correctKana);

    // Try to get similar kana first (from same group)
    const similar = findSimilarKana(correctKana, sameGroup);
    const shuffledSimilar = shuffle([...similar]);

    for (let kana of shuffledSimilar) {
        if (wrongAnswers.length >= 3) break;
        if (!used.has(kana.romaji)) {
            wrongAnswers.push(kana);
            used.add(kana.romaji);
        }
    }

    // Fill remaining with random from same group
    const remaining = sameGroup.filter(k => !used.has(k.romaji));
    const shuffledRemaining = shuffle(remaining);

    for (let kana of shuffledRemaining) {
        if (wrongAnswers.length >= 3) break;
        wrongAnswers.push(kana);
    }

    return wrongAnswers;
}

function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function getValidCharacterSets(kana, forQuestion = false) {
    // Filter out character sets that are empty for this kana
    return gameState.settings.characterSets.filter(set => {
        if (set === 'romaji') return true;
        if (set === 'hiragana') return kana.hiragana !== '';
        if (set === 'katakana') return kana.katakana !== '';
        if (set === 'audio') return forQuestion; // Audio only valid for questions
        return false;
    });
}

function playAudio(romaji) {
    const audio = new Audio(`audio/${romaji}.mp3`);
    audio.play();
}

function nextQuestion() {
    const availableKana = getAvailableKana();
    if (availableKana.length === 0) return;

    const characterSets = gameState.settings.characterSets;
    if (characterSets.length < 2) return;

    // Try to find a non-recent question
    let attempts = 0;
    let questionType, answerType, selectedKana, questionKey, validQuestionSets, validAnswerSets;

    do {
        // Pick random kana
        selectedKana = availableKana[Math.floor(Math.random() * availableKana.length)];

        // Get valid character sets for questions and answers
        validQuestionSets = getValidCharacterSets(selectedKana, true);
        validAnswerSets = getValidCharacterSets(selectedKana, false);

        // Need at least 1 valid question set and 1 valid answer set
        if (validQuestionSets.length < 1 || validAnswerSets.length < 1) {
            attempts++;
            continue;
        }

        // Pick random question type from valid question sets (can include audio)
        questionType = validQuestionSets[Math.floor(Math.random() * validQuestionSets.length)];

        // If question is audio, pick any valid answer type
        // Otherwise, make sure question and answer are different
        if (questionType === 'audio') {
            answerType = validAnswerSets[Math.floor(Math.random() * validAnswerSets.length)];
        } else {
            const otherAnswerSets = validAnswerSets.filter(s => s !== questionType);
            if (otherAnswerSets.length < 1) {
                attempts++;
                continue;
            }
            answerType = otherAnswerSets[Math.floor(Math.random() * otherAnswerSets.length)];
        }

        questionKey = getQuestionKey(selectedKana);
        attempts++;
    } while (isQuestionRecent(questionKey) && attempts < 50);

    addToRecentQuestions(questionKey);

    // Generate answers
    const wrongAnswers = generateWrongAnswers(selectedKana, answerType, availableKana);
    const allAnswers = shuffle([selectedKana, ...wrongAnswers]);

    gameState.currentQuestion = {
        kana: selectedKana,
        questionType,
        answerType,
        correctAnswer: selectedKana[answerType],
        answers: allAnswers
    };

    // Update UI
    questionBox.classList.remove('correct', 'wrong');

    if (questionType === 'audio') {
        // Display speaker icon for audio questions
        questionBox.innerHTML = '<span class="speaker-icon" onclick="playAudio(\'' + selectedKana.romaji + '\')">🔊</span>';
        // Play audio automatically
        playAudio(selectedKana.romaji);
    } else {
        // Display text for non-audio questions
        questionBox.textContent = selectedKana[questionType];
    }

    answerBtns.forEach((btn, index) => {
        if (allAnswers[index]) {
            btn.textContent = allAnswers[index][answerType];
            btn.disabled = false;
            btn.classList.remove('correct', 'wrong');
        }
    });
}

function handleAnswer(btn) {
    const selectedAnswer = btn.textContent;
    const isCorrect = selectedAnswer === gameState.currentQuestion.correctAnswer;

    if (isCorrect) {
        // Correct answer
        btn.classList.add('correct');
        questionBox.classList.add('correct');

        gameState.stats.sessionCorrect++;
        gameState.stats.sessionTotal++;
        gameState.stats.allTimeCorrect++;
        gameState.stats.allTimeTotal++;

        saveStats();
        updateStatsDisplay();

        // Play audio for reinforcement
        playAudio(gameState.currentQuestion.kana.romaji);

        // Disable all buttons
        answerBtns.forEach(b => b.disabled = true);

        // Move to next question after delay
        setTimeout(() => {
            nextQuestion();
        }, 800);
    } else {
        // Wrong answer
        btn.classList.add('wrong');
        questionBox.classList.add('wrong');
        btn.disabled = true;

        gameState.stats.sessionTotal++;
        gameState.stats.allTimeTotal++;

        saveStats();
        updateStatsDisplay();

        // Stay on screen, they can try again
    }
}
