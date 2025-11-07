// Complete Kana Dataset
const KANA_DATA = [
    // Basic - Vowel row
    { romaji: 'a', hiragana: 'あ', katakana: 'ア', group: 'basic', row: 'a' },
    { romaji: 'i', hiragana: 'い', katakana: 'イ', group: 'basic', row: 'a' },
    { romaji: 'u', hiragana: 'う', katakana: 'ウ', group: 'basic', row: 'a' },
    { romaji: 'e', hiragana: 'え', katakana: 'エ', group: 'basic', row: 'a' },
    { romaji: 'o', hiragana: 'お', katakana: 'オ', group: 'basic', row: 'a' },
    // Ka row
    { romaji: 'ka', hiragana: 'か', katakana: 'カ', group: 'basic', row: 'ka' },
    { romaji: 'ki', hiragana: 'き', katakana: 'キ', group: 'basic', row: 'ka' },
    { romaji: 'ku', hiragana: 'く', katakana: 'ク', group: 'basic', row: 'ka' },
    { romaji: 'ke', hiragana: 'け', katakana: 'ケ', group: 'basic', row: 'ka' },
    { romaji: 'ko', hiragana: 'こ', katakana: 'コ', group: 'basic', row: 'ka' },
    // Sa row
    { romaji: 'sa', hiragana: 'さ', katakana: 'サ', group: 'basic', row: 'sa' },
    { romaji: 'shi', hiragana: 'し', katakana: 'シ', group: 'basic', row: 'sa' },
    { romaji: 'su', hiragana: 'す', katakana: 'ス', group: 'basic', row: 'sa' },
    { romaji: 'se', hiragana: 'せ', katakana: 'セ', group: 'basic', row: 'sa' },
    { romaji: 'so', hiragana: 'そ', katakana: 'ソ', group: 'basic', row: 'sa' },
    // Ta row
    { romaji: 'ta', hiragana: 'た', katakana: 'タ', group: 'basic', row: 'ta' },
    { romaji: 'chi', hiragana: 'ち', katakana: 'チ', group: 'basic', row: 'ta' },
    { romaji: 'tsu', hiragana: 'つ', katakana: 'ツ', group: 'basic', row: 'ta' },
    { romaji: 'te', hiragana: 'て', katakana: 'テ', group: 'basic', row: 'ta' },
    { romaji: 'to', hiragana: 'と', katakana: 'ト', group: 'basic', row: 'ta' },
    // Na row
    { romaji: 'na', hiragana: 'な', katakana: 'ナ', group: 'basic', row: 'na' },
    { romaji: 'ni', hiragana: 'に', katakana: 'ニ', group: 'basic', row: 'na' },
    { romaji: 'nu', hiragana: 'ぬ', katakana: 'ヌ', group: 'basic', row: 'na' },
    { romaji: 'ne', hiragana: 'ね', katakana: 'ネ', group: 'basic', row: 'na' },
    { romaji: 'no', hiragana: 'の', katakana: 'ノ', group: 'basic', row: 'na' },
    // Ha row
    { romaji: 'ha', hiragana: 'は', katakana: 'ハ', group: 'basic', row: 'ha' },
    { romaji: 'hi', hiragana: 'ひ', katakana: 'ヒ', group: 'basic', row: 'ha' },
    { romaji: 'fu', hiragana: 'ふ', katakana: 'フ', group: 'basic', row: 'ha' },
    { romaji: 'he', hiragana: 'へ', katakana: 'ヘ', group: 'basic', row: 'ha' },
    { romaji: 'ho', hiragana: 'ほ', katakana: 'ホ', group: 'basic', row: 'ha' },
    // Ma row
    { romaji: 'ma', hiragana: 'ま', katakana: 'マ', group: 'basic', row: 'ma' },
    { romaji: 'mi', hiragana: 'み', katakana: 'ミ', group: 'basic', row: 'ma' },
    { romaji: 'mu', hiragana: 'む', katakana: 'ム', group: 'basic', row: 'ma' },
    { romaji: 'me', hiragana: 'め', katakana: 'メ', group: 'basic', row: 'ma' },
    { romaji: 'mo', hiragana: 'も', katakana: 'モ', group: 'basic', row: 'ma' },
    // Ya row
    { romaji: 'ya', hiragana: 'や', katakana: 'ヤ', group: 'basic', row: 'ya' },
    { romaji: 'yu', hiragana: 'ゆ', katakana: 'ユ', group: 'basic', row: 'ya' },
    { romaji: 'yo', hiragana: 'よ', katakana: 'ヨ', group: 'basic', row: 'ya' },
    // Ra row
    { romaji: 'ra', hiragana: 'ら', katakana: 'ラ', group: 'basic', row: 'ra' },
    { romaji: 'ri', hiragana: 'り', katakana: 'リ', group: 'basic', row: 'ra' },
    { romaji: 'ru', hiragana: 'る', katakana: 'ル', group: 'basic', row: 'ra' },
    { romaji: 're', hiragana: 'れ', katakana: 'レ', group: 'basic', row: 'ra' },
    { romaji: 'ro', hiragana: 'ろ', katakana: 'ロ', group: 'basic', row: 'ra' },
    // Wa row
    { romaji: 'wa', hiragana: 'わ', katakana: 'ワ', group: 'basic', row: 'wa' },
    { romaji: 'wo', hiragana: 'を', katakana: 'ヲ', group: 'basic', row: 'wa' },
    // N
    { romaji: 'n', hiragana: 'ん', katakana: 'ン', group: 'basic', row: 'n' },

    // Dakuten & Handakuten
    { romaji: 'ga', hiragana: 'が', katakana: 'ガ', group: 'dakuten', row: 'ka' },
    { romaji: 'gi', hiragana: 'ぎ', katakana: 'ギ', group: 'dakuten', row: 'ka' },
    { romaji: 'gu', hiragana: 'ぐ', katakana: 'グ', group: 'dakuten', row: 'ka' },
    { romaji: 'ge', hiragana: 'げ', katakana: 'ゲ', group: 'dakuten', row: 'ka' },
    { romaji: 'go', hiragana: 'ご', katakana: 'ゴ', group: 'dakuten', row: 'ka' },
    { romaji: 'za', hiragana: 'ざ', katakana: 'ザ', group: 'dakuten', row: 'sa' },
    { romaji: 'ji', hiragana: 'じ', katakana: 'ジ', group: 'dakuten', row: 'sa' },
    { romaji: 'zu', hiragana: 'ず', katakana: 'ズ', group: 'dakuten', row: 'sa' },
    { romaji: 'ze', hiragana: 'ぜ', katakana: 'ゼ', group: 'dakuten', row: 'sa' },
    { romaji: 'zo', hiragana: 'ぞ', katakana: 'ゾ', group: 'dakuten', row: 'sa' },
    { romaji: 'da', hiragana: 'だ', katakana: 'ダ', group: 'dakuten', row: 'ta' },
    { romaji: 'ji', hiragana: 'ぢ', katakana: 'ヂ', group: 'dakuten', row: 'ta' },
    { romaji: 'zu', hiragana: 'づ', katakana: 'ヅ', group: 'dakuten', row: 'ta' },
    { romaji: 'de', hiragana: 'で', katakana: 'デ', group: 'dakuten', row: 'ta' },
    { romaji: 'do', hiragana: 'ど', katakana: 'ド', group: 'dakuten', row: 'ta' },
    { romaji: 'ba', hiragana: 'ば', katakana: 'バ', group: 'dakuten', row: 'ha' },
    { romaji: 'bi', hiragana: 'び', katakana: 'ビ', group: 'dakuten', row: 'ha' },
    { romaji: 'bu', hiragana: 'ぶ', katakana: 'ブ', group: 'dakuten', row: 'ha' },
    { romaji: 'be', hiragana: 'べ', katakana: 'ベ', group: 'dakuten', row: 'ha' },
    { romaji: 'bo', hiragana: 'ぼ', katakana: 'ボ', group: 'dakuten', row: 'ha' },
    { romaji: 'pa', hiragana: 'ぱ', katakana: 'パ', group: 'dakuten', row: 'ha' },
    { romaji: 'pi', hiragana: 'ぴ', katakana: 'ピ', group: 'dakuten', row: 'ha' },
    { romaji: 'pu', hiragana: 'ぷ', katakana: 'プ', group: 'dakuten', row: 'ha' },
    { romaji: 'pe', hiragana: 'ぺ', katakana: 'ペ', group: 'dakuten', row: 'ha' },
    { romaji: 'po', hiragana: 'ぽ', katakana: 'ポ', group: 'dakuten', row: 'ha' },

    // Digraphs
    { romaji: 'kya', hiragana: 'きゃ', katakana: 'キャ', group: 'digraphs', row: 'ka' },
    { romaji: 'kyu', hiragana: 'きゅ', katakana: 'キュ', group: 'digraphs', row: 'ka' },
    { romaji: 'kyo', hiragana: 'きょ', katakana: 'キョ', group: 'digraphs', row: 'ka' },
    { romaji: 'sha', hiragana: 'しゃ', katakana: 'シャ', group: 'digraphs', row: 'sa' },
    { romaji: 'shu', hiragana: 'しゅ', katakana: 'シュ', group: 'digraphs', row: 'sa' },
    { romaji: 'sho', hiragana: 'しょ', katakana: 'ショ', group: 'digraphs', row: 'sa' },
    { romaji: 'cha', hiragana: 'ちゃ', katakana: 'チャ', group: 'digraphs', row: 'ta' },
    { romaji: 'chu', hiragana: 'ちゅ', katakana: 'チュ', group: 'digraphs', row: 'ta' },
    { romaji: 'cho', hiragana: 'ちょ', katakana: 'チョ', group: 'digraphs', row: 'ta' },
    { romaji: 'nya', hiragana: 'にゃ', katakana: 'ニャ', group: 'digraphs', row: 'na' },
    { romaji: 'nyu', hiragana: 'にゅ', katakana: 'ニュ', group: 'digraphs', row: 'na' },
    { romaji: 'nyo', hiragana: 'にょ', katakana: 'ニョ', group: 'digraphs', row: 'na' },
    { romaji: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ', group: 'digraphs', row: 'ha' },
    { romaji: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ', group: 'digraphs', row: 'ha' },
    { romaji: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ', group: 'digraphs', row: 'ha' },
    { romaji: 'mya', hiragana: 'みゃ', katakana: 'ミャ', group: 'digraphs', row: 'ma' },
    { romaji: 'myu', hiragana: 'みゅ', katakana: 'ミュ', group: 'digraphs', row: 'ma' },
    { romaji: 'myo', hiragana: 'みょ', katakana: 'ミョ', group: 'digraphs', row: 'ma' },
    { romaji: 'rya', hiragana: 'りゃ', katakana: 'リャ', group: 'digraphs', row: 'ra' },
    { romaji: 'ryu', hiragana: 'りゅ', katakana: 'リュ', group: 'digraphs', row: 'ra' },
    { romaji: 'ryo', hiragana: 'りょ', katakana: 'リョ', group: 'digraphs', row: 'ra' },
    { romaji: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ', group: 'digraphs', row: 'ka' },
    { romaji: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ', group: 'digraphs', row: 'ka' },
    { romaji: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ', group: 'digraphs', row: 'ka' },
    { romaji: 'ja', hiragana: 'じゃ', katakana: 'ジャ', group: 'digraphs', row: 'sa' },
    { romaji: 'ju', hiragana: 'じゅ', katakana: 'ジュ', group: 'digraphs', row: 'sa' },
    { romaji: 'jo', hiragana: 'じょ', katakana: 'ジョ', group: 'digraphs', row: 'sa' },
    { romaji: 'bya', hiragana: 'びゃ', katakana: 'ビャ', group: 'digraphs', row: 'ha' },
    { romaji: 'byu', hiragana: 'びゅ', katakana: 'ビュ', group: 'digraphs', row: 'ha' },
    { romaji: 'byo', hiragana: 'びょ', katakana: 'ビョ', group: 'digraphs', row: 'ha' },
    { romaji: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ', group: 'digraphs', row: 'ha' },
    { romaji: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ', group: 'digraphs', row: 'ha' },
    { romaji: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ', group: 'digraphs', row: 'ha' },

    // Loan Words (Katakana only)
    { romaji: 'va', hiragana: '', katakana: 'ヴァ', group: 'loanwords', row: null },
    { romaji: 'vi', hiragana: '', katakana: 'ヴィ', group: 'loanwords', row: null },
    { romaji: 'vu', hiragana: '', katakana: 'ヴ', group: 'loanwords', row: null },
    { romaji: 've', hiragana: '', katakana: 'ヴェ', group: 'loanwords', row: null },
    { romaji: 'vo', hiragana: '', katakana: 'ヴォ', group: 'loanwords', row: null },
    { romaji: 'fa', hiragana: '', katakana: 'ファ', group: 'loanwords', row: null },
    { romaji: 'fi', hiragana: '', katakana: 'フィ', group: 'loanwords', row: null },
    { romaji: 'fe', hiragana: '', katakana: 'フェ', group: 'loanwords', row: null },
    { romaji: 'fo', hiragana: '', katakana: 'フォ', group: 'loanwords', row: null },
    { romaji: 'wi', hiragana: '', katakana: 'ウィ', group: 'loanwords', row: null },
    { romaji: 'we', hiragana: '', katakana: 'ウェ', group: 'loanwords', row: null },
    { romaji: 'wo', hiragana: '', katakana: 'ウォ', group: 'loanwords', row: null },
    { romaji: 'kwa', hiragana: '', katakana: 'クヮ', group: 'loanwords', row: null },
    { romaji: 'kye', hiragana: '', katakana: 'キェ', group: 'loanwords', row: null },
    { romaji: 'gwa', hiragana: '', katakana: 'グヮ', group: 'loanwords', row: null },
    { romaji: 'ti', hiragana: '', katakana: 'ティ', group: 'loanwords', row: null },
    { romaji: 'tu', hiragana: '', katakana: 'トゥ', group: 'loanwords', row: null },
    { romaji: 'di', hiragana: '', katakana: 'ディ', group: 'loanwords', row: null },
    { romaji: 'du', hiragana: '', katakana: 'ドゥ', group: 'loanwords', row: null },
    { romaji: 'she', hiragana: '', katakana: 'シェ', group: 'loanwords', row: null },
    { romaji: 'je', hiragana: '', katakana: 'ジェ', group: 'loanwords', row: null },
    { romaji: 'che', hiragana: '', katakana: 'チェ', group: 'loanwords', row: null },
    { romaji: 'tsa', hiragana: '', katakana: 'ツァ', group: 'loanwords', row: null },
    { romaji: 'tsi', hiragana: '', katakana: 'ツィ', group: 'loanwords', row: null },
    { romaji: 'tse', hiragana: '', katakana: 'ツェ', group: 'loanwords', row: null },
    { romaji: 'tso', hiragana: '', katakana: 'ツォ', group: 'loanwords', row: null },
    { romaji: 'ye', hiragana: '', katakana: 'イェ', group: 'loanwords', row: null },
    { romaji: 'vya', hiragana: '', katakana: 'ヴャ', group: 'loanwords', row: null },
    { romaji: 'vyu', hiragana: '', katakana: 'ヴュ', group: 'loanwords', row: null },
    { romaji: 'vye', hiragana: '', katakana: 'ヴェ', group: 'loanwords', row: null },
    { romaji: 'vyo', hiragana: '', katakana: 'ヴョ', group: 'loanwords', row: null }
];

// Game State
let gameState = {
    settings: {
        quizDirections: [
            'romaji-hiragana', 'hiragana-romaji',
            'romaji-katakana', 'katakana-romaji',
            'hiragana-katakana', 'katakana-hiragana',
            'audio-romaji', 'audio-hiragana', 'audio-katakana'
        ],
        kanaRows: ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa', 'n'],
        kanaGroups: ['dakuten', 'digraphs', 'loanwords']
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
const quizDirectionError = document.getElementById('quizDirectionError');
const kanaGroupError = document.getElementById('kanaGroupError');
const sessionStatsEl = document.getElementById('sessionStats');
const allTimeStatsEl = document.getElementById('allTimeStats');

// Initialize
loadSettings();
loadStats();
updateSettingsUI();
updateLoanWordsAvailability();

const AUDIO_CACHE = KANA_DATA.reduce((acc, k) => {
  acc[k.romaji] = new Audio(`audio/${k.romaji}.mp3`)
  return acc;
}, {});

// Event Listeners
startBtn.addEventListener('click', startNewSession);
closeBtn.addEventListener('click', closeSettings);
settingsLink.addEventListener('click', openSettings);

document.querySelectorAll('input[name="quizDirection"]').forEach(cb => {
    cb.addEventListener('change', () => {
        quizDirectionError.classList.remove('visible');
        updateLoanWordsAvailability();
    });
});

document.querySelectorAll('input[name="kanaRow"]').forEach(cb => {
    cb.addEventListener('change', () => kanaGroupError.classList.remove('visible'));
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
            const loadedSettings = JSON.parse(saved);

            // Migration: Convert old characterSets to quizDirections
            if (loadedSettings.characterSets && !loadedSettings.quizDirections) {
                const directions = [];
                const sets = loadedSettings.characterSets;

                // Convert all combinations to directions
                if (sets.includes('romaji') && sets.includes('hiragana')) {
                    directions.push('romaji-hiragana', 'hiragana-romaji');
                }
                if (sets.includes('romaji') && sets.includes('katakana')) {
                    directions.push('romaji-katakana', 'katakana-romaji');
                }
                if (sets.includes('hiragana') && sets.includes('katakana')) {
                    directions.push('hiragana-katakana', 'katakana-hiragana');
                }
                if (sets.includes('audio')) {
                    if (sets.includes('romaji')) directions.push('audio-romaji');
                    if (sets.includes('hiragana')) directions.push('audio-hiragana');
                    if (sets.includes('katakana')) directions.push('audio-katakana');
                }

                loadedSettings.quizDirections = directions;
                delete loadedSettings.characterSets;
            }

            // Migration: Convert old 'basic' group to individual rows
            if (loadedSettings.kanaGroups && loadedSettings.kanaGroups.includes('basic')) {
                // Remove 'basic' from groups
                loadedSettings.kanaGroups = loadedSettings.kanaGroups.filter(g => g !== 'basic');

                // Add all rows if not already present
                if (!loadedSettings.kanaRows) {
                    loadedSettings.kanaRows = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa', 'n'];
                }
            }

            // Ensure required fields exist for old saves
            if (!loadedSettings.kanaRows) {
                loadedSettings.kanaRows = [];
            }
            if (!loadedSettings.quizDirections) {
                loadedSettings.quizDirections = [];
            }

            gameState.settings = loadedSettings;
        } catch (e) {
            // Use defaults
        }
    }
}

function saveSettings() {
    localStorage.setItem('kanaflash-settings', JSON.stringify(gameState.settings));
}

function updateSettingsUI() {
    document.querySelectorAll('input[name="quizDirection"]').forEach(cb => {
        cb.checked = gameState.settings.quizDirections.includes(cb.value);
    });
    document.querySelectorAll('input[name="kanaRow"]').forEach(cb => {
        cb.checked = gameState.settings.kanaRows.includes(cb.value);
    });
    document.querySelectorAll('input[name="kanaGroup"]').forEach(cb => {
        cb.checked = gameState.settings.kanaGroups.includes(cb.value);
    });
}

function updateLoanWordsAvailability() {
    const quizDirections = Array.from(document.querySelectorAll('input[name="quizDirection"]:checked'))
        .map(cb => cb.value);
    const loanWordsCheckbox = document.querySelector('input[name="kanaGroup"][value="loanwords"]');

    // Loan words require at least one direction involving katakana and romaji/audio
    const hasKatakanaRomaji = quizDirections.some(d =>
        d === 'katakana-romaji' || d === 'romaji-katakana' ||
        d === 'audio-katakana'
    );

    if (!hasKatakanaRomaji) {
        loanWordsCheckbox.disabled = true;
        loanWordsCheckbox.checked = false;
    } else {
        loanWordsCheckbox.disabled = false;
    }
}

function getSettingsFromUI() {
    const quizDirections = Array.from(document.querySelectorAll('input[name="quizDirection"]:checked'))
        .map(cb => cb.value);
    const kanaRows = Array.from(document.querySelectorAll('input[name="kanaRow"]:checked'))
        .map(cb => cb.value);
    const kanaGroups = Array.from(document.querySelectorAll('input[name="kanaGroup"]:checked'))
        .map(cb => cb.value);
    return { quizDirections, kanaRows, kanaGroups };
}

function validateSettings(settings) {
    let valid = true;

    // Need at least 1 quiz direction
    if (settings.quizDirections.length < 1) {
        quizDirectionError.classList.add('visible');
        valid = false;
    } else {
        quizDirectionError.classList.remove('visible');
    }

    // Need at least one row or group selected
    if (settings.kanaRows.length < 1 && settings.kanaGroups.length < 1) {
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
    return KANA_DATA.filter(kana => {
        // For basic kana (group='basic'), check if the row is selected
        if (kana.group === 'basic') {
            return gameState.settings.kanaRows.includes(kana.row);
        }

        // For dakuten, digraphs - check if the group is selected AND the base row is selected
        if (kana.group === 'dakuten' || kana.group === 'digraphs') {
            return gameState.settings.kanaGroups.includes(kana.group) &&
                   gameState.settings.kanaRows.includes(kana.row);
        }

        // For loan words, just check if the group is selected (no row dependency)
        if (kana.group === 'loanwords') {
            return gameState.settings.kanaGroups.includes(kana.group);
        }

        return false;
    });
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

function getValidDirections(kana) {
    // Filter out directions that are invalid for this kana
    return gameState.settings.quizDirections.filter(direction => {
        const [from, to] = direction.split('-');

        // Check if 'from' is valid for this kana
        if (from === 'hiragana' && kana.hiragana === '') return false;
        if (from === 'katakana' && kana.katakana === '') return false;

        // Check if 'to' is valid for this kana
        if (to === 'hiragana' && kana.hiragana === '') return false;
        if (to === 'katakana' && kana.katakana === '') return false;

        return true;
    });
}

function playAudio(romaji) {
    AUDIO_CACHE[romaji].play();
}

function nextQuestion() {
    const availableKana = getAvailableKana();
    if (availableKana.length === 0) return;

    const quizDirections = gameState.settings.quizDirections;
    if (quizDirections.length < 1) return;

    // Try to find a non-recent question
    let attempts = 0;
    let questionType, answerType, selectedKana, questionKey, validDirections, chosenDirection;

    do {
        // Pick random kana
        selectedKana = availableKana[Math.floor(Math.random() * availableKana.length)];

        // Get valid directions for this kana
        validDirections = getValidDirections(selectedKana);

        if (validDirections.length < 1) {
            attempts++;
            continue;
        }

        // Pick random direction
        chosenDirection = validDirections[Math.floor(Math.random() * validDirections.length)];
        [questionType, answerType] = chosenDirection.split('-');

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
