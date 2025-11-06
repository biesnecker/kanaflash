#!/usr/bin/env python3
# /// script
# dependencies = [
#   "azure-cognitiveservices-speech>=1.40.0",
#   "python-dotenv>=1.0.0",
#   "numpy>=1.24.0",
#   "scipy>=1.11.0",
# ]
# ///

"""
Generate audio files for all kana using Azure TTS.
Reads AZURE_KEY and AZURE_REGION from .env file.
"""

import os
import sys
import time
import wave
import struct
from pathlib import Path
from dotenv import load_dotenv

try:
    import azure.cognitiveservices.speech as speechsdk
except ImportError as e:
    print(f"Error: azure-cognitiveservices-speech not installed: {e}")
    print("Run with: uv run generate_audio.py")
    sys.exit(1)

try:
    import numpy as np
    from scipy.io import wavfile
except ImportError as e:
    print(f"Error: numpy/scipy not installed: {e}")
    print("Run with: uv run generate_audio.py")
    sys.exit(1)


# All kana data
KANA_DATA = [
    # Basic
    {'romaji': 'a', 'hiragana': 'あ', 'katakana': 'ア', 'group': 'basic'},
    {'romaji': 'i', 'hiragana': 'い', 'katakana': 'イ', 'group': 'basic'},
    {'romaji': 'u', 'hiragana': 'う', 'katakana': 'ウ', 'group': 'basic'},
    {'romaji': 'e', 'hiragana': 'え', 'katakana': 'エ', 'group': 'basic'},
    {'romaji': 'o', 'hiragana': 'お', 'katakana': 'オ', 'group': 'basic'},
    {'romaji': 'ka', 'hiragana': 'か', 'katakana': 'カ', 'group': 'basic'},
    {'romaji': 'ki', 'hiragana': 'き', 'katakana': 'キ', 'group': 'basic'},
    {'romaji': 'ku', 'hiragana': 'く', 'katakana': 'ク', 'group': 'basic'},
    {'romaji': 'ke', 'hiragana': 'け', 'katakana': 'ケ', 'group': 'basic'},
    {'romaji': 'ko', 'hiragana': 'こ', 'katakana': 'コ', 'group': 'basic'},
    {'romaji': 'sa', 'hiragana': 'さ', 'katakana': 'サ', 'group': 'basic'},
    {'romaji': 'shi', 'hiragana': 'し', 'katakana': 'シ', 'group': 'basic'},
    {'romaji': 'su', 'hiragana': 'す', 'katakana': 'ス', 'group': 'basic'},
    {'romaji': 'se', 'hiragana': 'せ', 'katakana': 'セ', 'group': 'basic'},
    {'romaji': 'so', 'hiragana': 'そ', 'katakana': 'ソ', 'group': 'basic'},
    {'romaji': 'ta', 'hiragana': 'た', 'katakana': 'タ', 'group': 'basic'},
    {'romaji': 'chi', 'hiragana': 'ち', 'katakana': 'チ', 'group': 'basic'},
    {'romaji': 'tsu', 'hiragana': 'つ', 'katakana': 'ツ', 'group': 'basic'},
    {'romaji': 'te', 'hiragana': 'て', 'katakana': 'テ', 'group': 'basic'},
    {'romaji': 'to', 'hiragana': 'と', 'katakana': 'ト', 'group': 'basic'},
    {'romaji': 'na', 'hiragana': 'な', 'katakana': 'ナ', 'group': 'basic'},
    {'romaji': 'ni', 'hiragana': 'に', 'katakana': 'ニ', 'group': 'basic'},
    {'romaji': 'nu', 'hiragana': 'ぬ', 'katakana': 'ヌ', 'group': 'basic'},
    {'romaji': 'ne', 'hiragana': 'ね', 'katakana': 'ネ', 'group': 'basic'},
    {'romaji': 'no', 'hiragana': 'の', 'katakana': 'ノ', 'group': 'basic'},
    {'romaji': 'ha', 'hiragana': 'は', 'katakana': 'ハ', 'group': 'basic'},
    {'romaji': 'hi', 'hiragana': 'ひ', 'katakana': 'ヒ', 'group': 'basic'},
    {'romaji': 'fu', 'hiragana': 'ふ', 'katakana': 'フ', 'group': 'basic'},
    {'romaji': 'he', 'hiragana': 'へ', 'katakana': 'ヘ', 'group': 'basic'},
    {'romaji': 'ho', 'hiragana': 'ほ', 'katakana': 'ホ', 'group': 'basic'},
    {'romaji': 'ma', 'hiragana': 'ま', 'katakana': 'マ', 'group': 'basic'},
    {'romaji': 'mi', 'hiragana': 'み', 'katakana': 'ミ', 'group': 'basic'},
    {'romaji': 'mu', 'hiragana': 'む', 'katakana': 'ム', 'group': 'basic'},
    {'romaji': 'me', 'hiragana': 'め', 'katakana': 'メ', 'group': 'basic'},
    {'romaji': 'mo', 'hiragana': 'も', 'katakana': 'モ', 'group': 'basic'},
    {'romaji': 'ya', 'hiragana': 'や', 'katakana': 'ヤ', 'group': 'basic'},
    {'romaji': 'yu', 'hiragana': 'ゆ', 'katakana': 'ユ', 'group': 'basic'},
    {'romaji': 'yo', 'hiragana': 'よ', 'katakana': 'ヨ', 'group': 'basic'},
    {'romaji': 'ra', 'hiragana': 'ら', 'katakana': 'ラ', 'group': 'basic'},
    {'romaji': 'ri', 'hiragana': 'り', 'katakana': 'リ', 'group': 'basic'},
    {'romaji': 'ru', 'hiragana': 'る', 'katakana': 'ル', 'group': 'basic'},
    {'romaji': 're', 'hiragana': 'れ', 'katakana': 'レ', 'group': 'basic'},
    {'romaji': 'ro', 'hiragana': 'ろ', 'katakana': 'ロ', 'group': 'basic'},
    {'romaji': 'wa', 'hiragana': 'わ', 'katakana': 'ワ', 'group': 'basic'},
    {'romaji': 'wo', 'hiragana': 'を', 'katakana': 'ヲ', 'group': 'basic'},
    {'romaji': 'n', 'hiragana': 'ん', 'katakana': 'ン', 'group': 'basic'},

    # Dakuten & Handakuten
    {'romaji': 'ga', 'hiragana': 'が', 'katakana': 'ガ', 'group': 'dakuten'},
    {'romaji': 'gi', 'hiragana': 'ぎ', 'katakana': 'ギ', 'group': 'dakuten'},
    {'romaji': 'gu', 'hiragana': 'ぐ', 'katakana': 'グ', 'group': 'dakuten'},
    {'romaji': 'ge', 'hiragana': 'げ', 'katakana': 'ゲ', 'group': 'dakuten'},
    {'romaji': 'go', 'hiragana': 'ご', 'katakana': 'ゴ', 'group': 'dakuten'},
    {'romaji': 'za', 'hiragana': 'ざ', 'katakana': 'ザ', 'group': 'dakuten'},
    {'romaji': 'ji', 'hiragana': 'じ', 'katakana': 'ジ', 'group': 'dakuten'},
    {'romaji': 'zu', 'hiragana': 'ず', 'katakana': 'ズ', 'group': 'dakuten'},
    {'romaji': 'ze', 'hiragana': 'ぜ', 'katakana': 'ゼ', 'group': 'dakuten'},
    {'romaji': 'zo', 'hiragana': 'ぞ', 'katakana': 'ゾ', 'group': 'dakuten'},
    {'romaji': 'da', 'hiragana': 'だ', 'katakana': 'ダ', 'group': 'dakuten'},
    {'romaji': 'ji2', 'hiragana': 'ぢ', 'katakana': 'ヂ', 'group': 'dakuten'},
    {'romaji': 'zu2', 'hiragana': 'づ', 'katakana': 'ヅ', 'group': 'dakuten'},
    {'romaji': 'de', 'hiragana': 'で', 'katakana': 'デ', 'group': 'dakuten'},
    {'romaji': 'do', 'hiragana': 'ど', 'katakana': 'ド', 'group': 'dakuten'},
    {'romaji': 'ba', 'hiragana': 'ば', 'katakana': 'バ', 'group': 'dakuten'},
    {'romaji': 'bi', 'hiragana': 'び', 'katakana': 'ビ', 'group': 'dakuten'},
    {'romaji': 'bu', 'hiragana': 'ぶ', 'katakana': 'ブ', 'group': 'dakuten'},
    {'romaji': 'be', 'hiragana': 'べ', 'katakana': 'ベ', 'group': 'dakuten'},
    {'romaji': 'bo', 'hiragana': 'ぼ', 'katakana': 'ボ', 'group': 'dakuten'},
    {'romaji': 'pa', 'hiragana': 'ぱ', 'katakana': 'パ', 'group': 'dakuten'},
    {'romaji': 'pi', 'hiragana': 'ぴ', 'katakana': 'ピ', 'group': 'dakuten'},
    {'romaji': 'pu', 'hiragana': 'ぷ', 'katakana': 'プ', 'group': 'dakuten'},
    {'romaji': 'pe', 'hiragana': 'ぺ', 'katakana': 'ペ', 'group': 'dakuten'},
    {'romaji': 'po', 'hiragana': 'ぽ', 'katakana': 'ポ', 'group': 'dakuten'},

    # Digraphs
    {'romaji': 'kya', 'hiragana': 'きゃ', 'katakana': 'キャ', 'group': 'digraphs'},
    {'romaji': 'kyu', 'hiragana': 'きゅ', 'katakana': 'キュ', 'group': 'digraphs'},
    {'romaji': 'kyo', 'hiragana': 'きょ', 'katakana': 'キョ', 'group': 'digraphs'},
    {'romaji': 'sha', 'hiragana': 'しゃ', 'katakana': 'シャ', 'group': 'digraphs'},
    {'romaji': 'shu', 'hiragana': 'しゅ', 'katakana': 'シュ', 'group': 'digraphs'},
    {'romaji': 'sho', 'hiragana': 'しょ', 'katakana': 'ショ', 'group': 'digraphs'},
    {'romaji': 'cha', 'hiragana': 'ちゃ', 'katakana': 'チャ', 'group': 'digraphs'},
    {'romaji': 'chu', 'hiragana': 'ちゅ', 'katakana': 'チュ', 'group': 'digraphs'},
    {'romaji': 'cho', 'hiragana': 'ちょ', 'katakana': 'チョ', 'group': 'digraphs'},
    {'romaji': 'nya', 'hiragana': 'にゃ', 'katakana': 'ニャ', 'group': 'digraphs'},
    {'romaji': 'nyu', 'hiragana': 'にゅ', 'katakana': 'ニュ', 'group': 'digraphs'},
    {'romaji': 'nyo', 'hiragana': 'にょ', 'katakana': 'ニョ', 'group': 'digraphs'},
    {'romaji': 'hya', 'hiragana': 'ひゃ', 'katakana': 'ヒャ', 'group': 'digraphs'},
    {'romaji': 'hyu', 'hiragana': 'ひゅ', 'katakana': 'ヒュ', 'group': 'digraphs'},
    {'romaji': 'hyo', 'hiragana': 'ひょ', 'katakana': 'ヒョ', 'group': 'digraphs'},
    {'romaji': 'mya', 'hiragana': 'みゃ', 'katakana': 'ミャ', 'group': 'digraphs'},
    {'romaji': 'myu', 'hiragana': 'みゅ', 'katakana': 'ミュ', 'group': 'digraphs'},
    {'romaji': 'myo', 'hiragana': 'みょ', 'katakana': 'ミョ', 'group': 'digraphs'},
    {'romaji': 'rya', 'hiragana': 'りゃ', 'katakana': 'リャ', 'group': 'digraphs'},
    {'romaji': 'ryu', 'hiragana': 'りゅ', 'katakana': 'リュ', 'group': 'digraphs'},
    {'romaji': 'ryo', 'hiragana': 'りょ', 'katakana': 'リョ', 'group': 'digraphs'},
    {'romaji': 'gya', 'hiragana': 'ぎゃ', 'katakana': 'ギャ', 'group': 'digraphs'},
    {'romaji': 'gyu', 'hiragana': 'ぎゅ', 'katakana': 'ギュ', 'group': 'digraphs'},
    {'romaji': 'gyo', 'hiragana': 'ぎょ', 'katakana': 'ギョ', 'group': 'digraphs'},
    {'romaji': 'ja', 'hiragana': 'じゃ', 'katakana': 'ジャ', 'group': 'digraphs'},
    {'romaji': 'ju', 'hiragana': 'じゅ', 'katakana': 'ジュ', 'group': 'digraphs'},
    {'romaji': 'jo', 'hiragana': 'じょ', 'katakana': 'ジョ', 'group': 'digraphs'},
    {'romaji': 'bya', 'hiragana': 'びゃ', 'katakana': 'ビャ', 'group': 'digraphs'},
    {'romaji': 'byu', 'hiragana': 'びゅ', 'katakana': 'ビュ', 'group': 'digraphs'},
    {'romaji': 'byo', 'hiragana': 'びょ', 'katakana': 'ビョ', 'group': 'digraphs'},
    {'romaji': 'pya', 'hiragana': 'ぴゃ', 'katakana': 'ピャ', 'group': 'digraphs'},
    {'romaji': 'pyu', 'hiragana': 'ぴゅ', 'katakana': 'ピュ', 'group': 'digraphs'},
    {'romaji': 'pyo', 'hiragana': 'ぴょ', 'katakana': 'ピョ', 'group': 'digraphs'},

    # Loan Words (Katakana only)
    {'romaji': 'va', 'hiragana': '', 'katakana': 'ヴァ', 'group': 'loanwords'},
    {'romaji': 'vi', 'hiragana': '', 'katakana': 'ヴィ', 'group': 'loanwords'},
    {'romaji': 'vu', 'hiragana': '', 'katakana': 'ヴ', 'group': 'loanwords'},
    {'romaji': 've', 'hiragana': '', 'katakana': 'ヴェ', 'group': 'loanwords'},
    {'romaji': 'vo', 'hiragana': '', 'katakana': 'ヴォ', 'group': 'loanwords'},
    {'romaji': 'fa', 'hiragana': '', 'katakana': 'ファ', 'group': 'loanwords'},
    {'romaji': 'fi', 'hiragana': '', 'katakana': 'フィ', 'group': 'loanwords'},
    {'romaji': 'fe', 'hiragana': '', 'katakana': 'フェ', 'group': 'loanwords'},
    {'romaji': 'fo', 'hiragana': '', 'katakana': 'フォ', 'group': 'loanwords'},
    {'romaji': 'wi', 'hiragana': '', 'katakana': 'ウィ', 'group': 'loanwords'},
    {'romaji': 'we', 'hiragana': '', 'katakana': 'ウェ', 'group': 'loanwords'},
    {'romaji': 'wo2', 'hiragana': '', 'katakana': 'ウォ', 'group': 'loanwords'},
    {'romaji': 'kwa', 'hiragana': '', 'katakana': 'クヮ', 'group': 'loanwords'},
    {'romaji': 'kye', 'hiragana': '', 'katakana': 'キェ', 'group': 'loanwords'},
    {'romaji': 'gwa', 'hiragana': '', 'katakana': 'グヮ', 'group': 'loanwords'},
    {'romaji': 'ti', 'hiragana': '', 'katakana': 'ティ', 'group': 'loanwords'},
    {'romaji': 'tu', 'hiragana': '', 'katakana': 'トゥ', 'group': 'loanwords'},
    {'romaji': 'di', 'hiragana': '', 'katakana': 'ディ', 'group': 'loanwords'},
    {'romaji': 'du', 'hiragana': '', 'katakana': 'ドゥ', 'group': 'loanwords'},
    {'romaji': 'she', 'hiragana': '', 'katakana': 'シェ', 'group': 'loanwords'},
    {'romaji': 'je', 'hiragana': '', 'katakana': 'ジェ', 'group': 'loanwords'},
    {'romaji': 'che', 'hiragana': '', 'katakana': 'チェ', 'group': 'loanwords'},
    {'romaji': 'tsa', 'hiragana': '', 'katakana': 'ツァ', 'group': 'loanwords'},
    {'romaji': 'tsi', 'hiragana': '', 'katakana': 'ツィ', 'group': 'loanwords'},
    {'romaji': 'tse', 'hiragana': '', 'katakana': 'ツェ', 'group': 'loanwords'},
    {'romaji': 'tso', 'hiragana': '', 'katakana': 'ツォ', 'group': 'loanwords'},
    {'romaji': 'ye', 'hiragana': '', 'katakana': 'イェ', 'group': 'loanwords'},
    {'romaji': 'vya', 'hiragana': '', 'katakana': 'ヴャ', 'group': 'loanwords'},
    {'romaji': 'vyu', 'hiragana': '', 'katakana': 'ヴュ', 'group': 'loanwords'},
    {'romaji': 'vye', 'hiragana': '', 'katakana': 'ヴェ', 'group': 'loanwords'},
    {'romaji': 'vyo', 'hiragana': '', 'katakana': 'ヴョ', 'group': 'loanwords'},
]


def trim_silence_from_wav(wav_path, silence_threshold=0.01):
    """Trim silence from beginning and end of WAV file."""
    try:
        # Read the WAV file
        sample_rate, audio_data = wavfile.read(wav_path)

        # Convert to float and normalize
        if audio_data.dtype == np.int16:
            audio_data = audio_data.astype(np.float32) / 32768.0
        elif audio_data.dtype == np.int32:
            audio_data = audio_data.astype(np.float32) / 2147483648.0

        # Calculate absolute amplitude
        if len(audio_data.shape) > 1:  # Stereo
            amplitude = np.abs(audio_data).mean(axis=1)
        else:  # Mono
            amplitude = np.abs(audio_data)

        # Find first and last sample above threshold
        above_threshold = amplitude > silence_threshold
        if not np.any(above_threshold):
            return False

        first_sample = np.argmax(above_threshold)
        last_sample = len(amplitude) - np.argmax(above_threshold[::-1])

        # Trim the audio
        trimmed = audio_data[first_sample:last_sample]

        # Convert back to int16 for WAV
        trimmed_int16 = (trimmed * 32767).astype(np.int16)

        # Write back
        wavfile.write(wav_path, sample_rate, trimmed_int16)
        return True
    except Exception as e:
        print(f"  Warning: Could not trim silence: {e}")
        return False


def generate_audio_file(speech_config, romaji, text, output_path):
    """Generate a single audio file using Azure TTS."""
    audio_config = speechsdk.audio.AudioOutputConfig(filename=str(output_path))

    # Use Japanese female voice
    speech_config.speech_synthesis_voice_name = 'ja-JP-NanamiNeural'

    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config,
        audio_config=audio_config
    )

    result = synthesizer.speak_text_async(text).get()

    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        # Trim silence from the generated file
        trim_silence_from_wav(output_path)
        return True
    elif result.reason == speechsdk.ResultReason.Canceled:
        cancellation = result.cancellation_details
        print(f"  Error for {romaji}: {cancellation.reason}")
        if cancellation.error_details:
            print(f"  Details: {cancellation.error_details}")
        return False
    return False


def main():
    # Load environment variables
    load_dotenv()

    speech_key = os.getenv('AZURE_KEY')
    speech_region = os.getenv('AZURE_REGION')

    if not speech_key or not speech_region:
        print("Error: AZURE_KEY and AZURE_REGION must be set in .env file")
        sys.exit(1)

    # Create audio directory
    audio_dir = Path('audio')
    audio_dir.mkdir(exist_ok=True)

    # Configure Azure Speech
    speech_config = speechsdk.SpeechConfig(
        subscription=speech_key,
        region=speech_region
    )

    print(f"Generating {len(KANA_DATA)} audio files...")

    success_count = 0
    fail_count = 0
    skip_count = 0

    for kana in KANA_DATA:
        romaji = kana['romaji']

        # Use hiragana if available, otherwise katakana
        text = kana['hiragana'] if kana['hiragana'] else kana['katakana']

        output_path = audio_dir / f"{romaji}.wav"

        # Skip if file already exists
        if output_path.exists():
            print(f"Skipping {romaji} ({text})... (already exists)")
            skip_count += 1
            continue

        print(f"Generating {romaji} ({text})...", end=' ')

        if generate_audio_file(speech_config, romaji, text, output_path):
            print("✓")
            success_count += 1
        else:
            print("✗")
            fail_count += 1

        # Small delay to avoid rate limiting
        time.sleep(0.5)

    print(f"\nComplete! {success_count} succeeded, {fail_count} failed, {skip_count} skipped")
    print(f"Audio files saved to {audio_dir}/")


if __name__ == '__main__':
    main()
