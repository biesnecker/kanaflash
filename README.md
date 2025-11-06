# Kana Flash

A simple, standalone Japanese kana flashcard app for learning hiragana, katakana, and romaji with audio pronunciation.

## Usage

Simply open `index.html` in any modern web browser. No build tools or server required.

The app works entirely offline once the audio files are generated.

You can also use the app at [https://kanaflash.pages.dev/](https://kanaflash.pages.dev/).

## Features

- **Multiple character sets**: Romaji, Hiragana, Katakana, and Audio
- **Kana groups**: Basic, Dakuten & Handakuten, Digraphs, and Loan Words
- **Audio pronunciation**: Japanese TTS audio plays on correct answers for reinforcement
- **Smart question generation**: Avoids repeating recent questions
- **Progress tracking**: Session and all-time statistics stored in localStorage
- **Similar answer selection**: Wrong answers are chosen to be deliberately tricky

## Settings

- **Question & Answer Types**: Choose which character sets to use
  - At least 2 types must be selected
  - At least one non-audio type required (for answers)
  - Audio can only appear as questions (the headword)

- **Which kana?**: Select which kana groups to practice
  - At least 1 group must be selected
  - Loan Words require both Romaji and Katakana to be selected

## Files

- `index.html` - Main application (standalone)
- `app.js` - Game logic and kana data
- `audio/` - MP3 pronunciation files (135 files)
- `generate_audio.py` - Script to regenerate audio files

## Regenerating Audio

The audio files are generated using Azure's Text-to-Speech service.

### Requirements

- [uv](https://docs.astral.sh/uv/) (Python package manager)
- Azure Speech Services account
- `.env` file with credentials:
  ```
  AZURE_KEY=your_key_here
  AZURE_REGION=your_region_here
  ```

### Generate Audio

```bash
# Generate all audio files (creates trimmed MP3s in audio/ folder)
uv run generate_audio.py
```

The script:
1. Generates WAV files using Azure TTS (ja-JP-NanamiNeural voice)
2. Trims silence from beginning and end
3. Converts to MP3 format using lame
4. Skips existing files on re-run

### Manual Conversion

If you need to convert WAV files to MP3 separately:

```bash
for f in audio/*.wav; do lame -q 0 "$f" "${f%.wav}.mp3"; done
```

## Local Storage

The app stores:
- Last used settings (character sets and kana groups)
- All-time statistics (total correct/incorrect answers)

Clear your browser's localStorage to reset.

## Browser Compatibility

Requires a modern browser with support for:
- ES6 JavaScript
- HTML5 Audio API
- localStorage

Tested on Chrome, Firefox, and Safari.
