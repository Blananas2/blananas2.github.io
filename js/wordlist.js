//url consts
const rghuc = "https://raw.githubusercontent.com/";
const ultimateSource = rghuc + "obachs971/UltimateCipher/master/Assets/Scripts/Data.cs";
const compressionSource = rghuc + "Timwi/KtaneCompressionCiphers/master/Lib/Data.cs";
const seperatedSource = rghuc + "VFlyer/SeparatedUFCiphers/main/Assets/Scripts/CipherMachineData.cs";
const buttonSource = rghuc + "QuinnWuest/KtaneBundleOfABunchOfButtons/master/Lib/WordLists.cs";
//pad consts
const p = "\"*\"";
const s = ",*,";

const moduleData = [
    { mod: "3x3 Yellow Cipher", url: seperatedSource, pad: p, cap: true },
    { mod: "Anagrams", url: rghuc + "timtmok/ktanemod-anagrams/master/Assets/Scripts/AnagramsModule.cs", pad: p, cap: false },
    { mod: "Arithmetic Cipher", url: compressionSource, pad: p, cap: true },
    { mod: "The Azure Button", url: buttonSource, pad: s, cap: true },
    { mod: "Basic Morse", url: rghuc + "Fartlicker777/Basic-Morse/master/Basic%20Morse/Assets/BasicMorse.cs", pad: p, cap: true },
    { mod: "Black Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "The Blue Button", url: buttonSource, pad: s, cap: true },
    { mod: "Blue Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Blue Huffman Cipher", url: compressionSource, pad: p, cap: true },
    { mod: "Boggle", url: rghuc + "AAces/KTaNE-Boggle/master/Assets/boggle.cs", pad: s, cap: true },
    { mod: "Boomtar the Great", url: rghuc + "TasThiluna/Boomtar-the-Great/master/Assets/wordList.cs", pad: s, cap: true },
    { mod: "Brown Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Caesar Psycho", url: rghuc + "Speakingevil/caesar-psycho/main/Assets/Wordlist.cs", pad: p, cap: true },
    { mod: "Cipher Machine", url: rghuc + "obachs971/CipherCollection/main/Assets/Scripts/Data.cs", pad: p, cap: true },
    { mod: "Color Braille", url: rghuc + "Timwi/KtaneColorBraille/master/Assets/WordsData.cs", pad: p, cap: false },
    { mod: "Coral Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Cornflower Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Cream Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Crimson Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Decomposed RGB Arithmetic", url: seperatedSource, pad: p, cap: true },
    { mod: "Dice Cipher", url: rghuc + "tandyCake/KTaNEDiceCipher/main/Dice%20Cipher/Assets/WordList.cs", pad: p, cap: false },
    { mod: "Distance Cipher", url: rghuc + "Eltrick/KtaneDistanceCipher/master/Assets/ModuleScripts/WordList.cs", pad: p, cap: true },
    { mod: "Dreamcipher", url: rghuc + "KScl/KTaNE-Dreamcipher/master/Assets/DreamcipherAssets/word_list.json", pad: p, cap: false },
    { mod: "☺NA Cipher", url: rghuc + "KiloBites/ktane-ENA-Cipher/master/Assets/Data.cs", pad: p, cap: true },
    { mod: "Encryption Lingo", url: rghuc + "QuinnWuest/KtaneEncryptionLingo/master/Assets/Data.cs", pad: p, cap: true },
    { mod: "Finite Loop", url: rghuc + "Blananas2/ktane-finiteLoop/main/Assets/finiteLoopScript.cs", pad: p, cap: true },
    { mod: "Forest Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Fur Cipher", url: rghuc + "MageoMage/FurCipher/main/Assets/Data.cs", pad: p, cap: true },
    { mod: "Gray Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Green Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Indigo Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Jailbreak", url: rghuc + "Fartlicker777/Trivia-Murder-Party/master/Trivia%20Murder%20Party/Assets/Modules/Jailbreak/WordList.cs", pad: p, cap: false },
    { mod: "Lempel-Ziv Cipher", url: compressionSource, pad: p, cap: true },
    { mod: "Linked Wordle", url: rghuc + "VFlyer/FlyersOtherModules/master/Assets/Scripts/LingoWordBank.cs", pad: p, cap: true },
    { mod: "Maas Cipher", url: rghuc + "Awesome7285/MaasCipher/main/MaasCipher/Assets/MaasCipher.cs", pad: p, cap: true },
    { mod: "Magenta Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Maroon Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Mechanus Cipher", url: rghuc + "Ob3vious/KTaNE_PlanarCiphers/master/Assets/Wordlist.cs", pad: p, cap: false },
    { mod: "Metapuzzle", url: rghuc + "EpicToastTM/ktaneMetapuzzle/main/ktaneMetapuzzle-master/Assets/Misc/MainWordList.cs", pad: p, cap: true },
    { mod: "Modern Cipher", url: rghuc + "TheFe91/ktane-CC/master/Assets/modernCipher.cs", pad: p, cap: true },
    { mod: "The Navy Button", url: rghuc + "QuinnWuest/KtaneBundleOfABunchOfButtons/master/Lib/NavyButtonData.cs", pad: ";*=", cap: true },
    { mod: "Notre-Dame Cipher", url: rghuc + "Gameplushy/notreDameCipher/master/notre-Dame%20Cipher/Assets/WordList.cs", pad: p, cap: true },
    { mod: "Obscurdle", url: rghuc + "VFlyer/FlyersOtherModules/master/Assets/Scripts/LingoWordBank.cs", pad: p, cap: true },
    { mod: "Odd One Out", url: rghuc + "Timwi/KtaneOddOneOut/master/Assets/OddOneOutModule.cs", pad: s, cap: true },
    { mod: "Off-White Cipher", url: rghuc + "tandyCake/KTaNEOffWhiteCipher/master/Assets/Scripts/Data.cs", pad: p, cap: true },
    { mod: "Orange Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Outrageous", url: rghuc + "Blananas2/ktane-outrageous/master/Assets/outrageousScript.cs", pad: p, cap: true },
    { mod: "Pandemonium Cipher", url: rghuc + "Ob3vious/KTaNE_PlanarCiphers/master/Assets/Wordlist.cs", pad: p, cap: false },
    { mod: "Phosphorescence", url: rghuc + "Emik03/EmikModules/main/Assets/Modules/Phosphorescence/Data/WordList.txt", pad: "|*|", cap: false },
    { mod: "Pigfair Cipher", url: rghuc + "QuinnWuest/KtanePigfairCipher/main/Assets/PigfairCipher.cs", pad: p, cap: true },
    { mod: "Pokémon Sprite Cipher", url: compressionSource, pad: p, cap: true },
    { mod: "Puzzword", url: rghuc + "Timwi/KtanePuzzword/master/Assets/Scripts/Data.cs", pad: p, cap: true },
    { mod: "RSA Cipher", url: rghuc + "obachs971/RSACipher/main/Assets/rsaCipher.cs", pad: p, cap: true },
    { mod: "Red Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Red Huffman Cipher", url: seperatedSource, pad: p, cap: true },
    { mod: "The Sapphire Button", url: buttonSource, pad: s, cap: true },
    { mod: "Shape Cipher", url: rghuc + "TracksJosh/ktaneShapeCipher-master/main/Assets/Scripts/Data.cs", pad: p, cap: true },
    { mod: "Shufflewords", url: rghuc + "Speakingevil/shufflewords/main/Assets/ShufflewordsScript.cs", pad: p, cap: true },
    { mod: "Solitaire Cipher", url: rghuc + "obachs971/SolitaireCipher/main/Assets/solitaireCipher.cs", pad: p, cap: true },
    { mod: "Spelling Buzzed", url: rghuc + "alex-chew/ktane-spelling-buzzed/master/Assets/SpellingBuzzed/Resources/words.txt", pad: "|*|", cap: true },
    { mod: "Touch Transmission", url: rghuc + "tandyCake/KTaNETouchTransmission/main/TouchTransmission/Assets/wordList.cs", pad: p, cap: false },
    { mod: "Transmission Transposition", url: rghuc + "tandyCake/KTaNETransmissionTranslation/master/KTaNEMorseAnagrams/Assets/wordList.cs", pad: p, cap: true }, 
    { mod: "Ultimate Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Unfair's Forgotten Ciphers", url: rghuc + "VFlyer/UnfairsRevenge/master/Assets/Scripts/UnfairsRevengeHandlers/Extreme%20Revenge%20Scripts/CipherMachineData.cs", pad: p, cap: true },
    { mod: "Vigilant Psycho", url: rghuc + "VFlyer/vigilant-psycho/main/Assets/Wordlist.cs", pad: p, cap: true },
    { mod: "Violet Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "White Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Word Scramble", url: rghuc + "timtmok/ktanemod-anagrams/master/Assets/Scripts/WordScrambleModule.cs", pad: p, cap: false },
    { mod: "Wordle", url: rghuc + "Blananas2/blananas2.github.io/main/js/wordle.txt", pad: s, cap: false }, //technically will require manual updating, however i do not want to fetch twice
    { mod: "Words", url: rghuc + "Fartlicker777/Trivia-Murder-Party/master/Trivia%20Murder%20Party/Assets/Modules/Words/AllWordList.cs", pad: s, cap: true },
    { mod: "XO", url: rghuc + "vitzlo/KTaNE-XO/main/Assets/xoScript.cs", pad: p, cap: true },
    { mod: "Yellow Cipher", url: ultimateSource, pad: p, cap: true },
    { mod: "Yellow Huffman Cipher", url: compressionSource, pad: p, cap: true },
];

function findWord (mdl, wrd) {
    return new Promise((resolve, reject) => {
        if (wrd.match(/[^A-Z]/gi)) { reject({ text: "Please enter a word.", color: "white" }); }
        if (mdl === "") { reject({ text: "Please choose a module.", color: "white" }); }

        for (md = 0; md < moduleData.length; md++) {
            if (mdl === moduleData[md].mod) {
                let word = (moduleData[md].pad).replace("*", wrd);
                word = moduleData[md].cap ? word.toUpperCase() : word.toLowerCase();
                fetch(moduleData[md].url).then(response => {
                    if (!response.ok) {
                        reject({ text: "Response was not OK", color: "crimson" });
                    }
                    return response.text();
                }).then(data => { 
                    resolve(inWordListObj(word, data, mdl));
                }).catch(error => {
                    reject({ text: error, color: "crimson" });
                });
                return;
            }
        }

        reject({ text: "Module could not be found.", color: "crimson" });
    });
}

//exception consts
const butNot = " is in the word list for *,<br>but cannot be the answer";
const isNot = " is not in the word list for *";
const isIn = " is in the word list for *";

const exceptionData = [
    { mod: "3x3 Yellow Cipher", eqlLength: 6 },
    { mod: "Arithmetic Cipher", befAftReplace: ["\n", "\""], minMaxLength: [4, 6], excText: butNot },
    { mod: "The Azure Button", befAftReplace: ["\"", ",\","], splitSpec: ["FiveLetters", [isIn, isNot], ["forestgreen", "crimson"]] },
    { mod: "Basic Morse", minMaxLength: [4, 9] },
    { mod: "Black Cipher", eqlLength: 6, excText: butNot },
    { mod: "The Blue Button", befAftReplace: ["\"", ",\","], splitSpec: ["FiveLetters", [isNot, isIn], ["crimson", "forestgreen"]] },
    { mod: "Blue Cipher", eqlLength: 6, excText: butNot },
    { mod: "Blue Huffman Cipher", befAftReplace: ["\n", "\""], minMaxLength: [5, 8], excText: butNot },
    { mod: "Boggle", befAftReplace: ["\"", ",\","] },
    { mod: "Boomtar the Great", befAftReplace: ["\"", ",\","] },
    { mod: "Brown Cipher", eqlLength: 6, excText: butNot },
    { mod: "Coral Cipher", eqlLength: 6, excText: butNot },
    { mod: "Cornflower Cipher", eqlLength: 6, excText: butNot },
    { mod: "Cream Cipher", eqlLength: 6, excText: butNot },
    { mod: "Crimson Cipher", eqlLength: 6, excText: butNot },
    { mod: "Decomposed RGB Arithmetic", minMaxLength: [4, 6] },
    { mod: "Dreamcipher", excWords: ["DREAMCIPHER", "LESBIANPRIDE", "GAYPRIDE", "BIPRIDE", "TRANSPRIDE", "TRANSRIGHTS", "ENBYPRIDE", "GFLUIDPRIDE"], excText: " is a * easter egg,<br>not an answer", excColor: "pink" },
    { mod: "☺NA Cipher", eqlLength: 6, excText: butNot },
    { mod: "Encryption Lingo", splitSpec: ["ObscureWordList", [isIn, butNot], ["forestgreen", "gold"]] },
    { mod: "Finite Loop", splitSpec: ["word", [isNot, isIn], ["crimson", "forestgreen"]] },
    { mod: "Forest Cipher", eqlLength: 6, excText: butNot },
    { mod: "Fur Cipher", eqlLength: 6, excText: butNot },
    { mod: "Gray Cipher", eqlLength: 6, excText: butNot },
    { mod: "Green Cipher", eqlLength: 6, excText: butNot },
    { mod: "Indigo Cipher", eqlLength: 6, excText: butNot },
    { mod: "Jailbreak", excWords: ["HELP", "VIEW", "SHOW", "ZOOM", "TILT", "KEEP", "TAKE", "MINE"], excText: isIn + ",<br>but is also a reserved Twitch Plays word", excColor: "cyan" },
    { mod: "Lempel-Ziv Cipher", befAftReplace: ["\n", "\""] },
    { mod: "Linked Wordle", splitSpec: ["ObscureWordList", [isIn, butNot], ["forestgreen", "gold"]] },
    { mod: "Maas Cipher", eqlLength: 4 },
    { mod: "Magenta Cipher", eqlLength: 6, excText: butNot },
    { mod: "Maroon Cipher", eqlLength: 6, excText: butNot },
    { mod: "Mechanus Cipher", forceCap: false },
    { mod: "Metapuzzle", eqlLength: 7, excText: butNot },
    { mod: "Modern Cipher", minMaxLength: [4, 8], excWords: ["AEIOU", "SUBMIT"], excText: isNot, excColor: "crimson" },
    { mod: "The Navy Button", befAftReplace: ["\"", "\";"] },
    { mod: "Obscurdle", splitSpec: ["ObscureWordList", [isIn, butNot], ["forestgreen", "gold"]] },
    { mod: "Odd One Out", befAftReplace: ["\"", ","], splitSpec: [".Split(',')", [isIn, butNot], ["forestgreen", "gold"]] },
    { mod: "Orange Cipher", eqlLength: 6, excText: butNot },
    { mod: "Outrageous", eqlLength: 6 },
    { mod: "Pandemonium Cipher", forceCap: false },
    { mod: "Phosphorescence", surround: "|*|", forceCap: false, befAftReplace: ["\n", "|"], minMaxLength: [3, 6] },
    { mod: "Pigfair Cipher", eqlLength: 8 },
    { mod: "Pokémon Sprite Cipher", befAftReplace: ["\n", "\""] },
    { mod: "RSA Cipher", eqlLength: 6, excWords: ["MODULE", "SOLVED"], excText: isNot, excColor: "crimson" },
    { mod: "Red Cipher", eqlLength: 6, excText: butNot },
    { mod: "Red Huffman Cipher", minMaxLength: [4, 9] },
    { mod: "The Sapphire Button", befAftReplace: ["\"", ",\","], splitSpec: ["FiveLetters", [isNot, isIn], ["crimson", "forestgreen"]] },
    { mod: "Shape Cipher", splitSpec: ["new List<string>", [null, butNot, butNot, isIn, butNot, butNot], [null, "gold", "gold", "forestgreen", "gold", "gold"]] },
    { mod: "Shufflewords", eqlLength: 5 },
    { mod: "Solitaire Cipher", eqlLength: 6 },
    { mod: "Spelling Buzzed", surround: "|*|", befAftReplace: ["\n", "|"] },
    { mod: "Ultimate Cipher", eqlLength: 6, excText: butNot },
    { mod: "Unfair's Forgotten Ciphers", eqlLength: 6, excText: butNot },
    { mod: "Violet Cipher", eqlLength: 6, excText: butNot },
    { mod: "White Cipher", eqlLength: 6, excText: butNot },
    { mod: "Word Scramble", excWords: ["PAPERS"], excText: isNot + ",<br>but is a valid answer if Module Tweaks is enabled", excColor: "cyan" },
    { mod: "Wordle", splitSpec: ["|", [isIn, butNot], ["forestgreen", "gold"]] },
    { mod: "Words", befAftReplace: ["\"", ",\","] },
    { mod: "XO", eqlLength: 6, excWords: ["TOGGLE"], excText: isNot, excColor: "crimson" },
    { mod: "Yellow Cipher", eqlLength: 6, excText: butNot },
    { mod: "Yellow Huffman Cipher", befAftReplace: ["\n", "\""] },
];

function inWordListObj (word, data, mod) {
    let wordInAllCaps = document.getElementById('word').value.toUpperCase();
    let notQuite = false;
    let exc = { };
    for (ex = 0; ex < exceptionData.length; ex++) {
        if (exceptionData[ex].mod === mod) {
            exc = exceptionData[ex];
            break;
        }
    }

    if (exc.hasOwnProperty("forceCap")) { //forces capitalization
        data = exc.forceCap ? data.toUpperCase() : data.toLowerCase();
    }

    if (exc.hasOwnProperty("surround")) { data = (exc.surround).replace("*", data); } //adds to start and end of data

    if (exc.hasOwnProperty("befAftReplace")) { data = data.replaceAll(exc.befAftReplace[0], exc.befAftReplace[1]); } //replaces bits so they're easier to manage

    if (exc.hasOwnProperty("eqlLength") && wordInAllCaps.length !== exc.eqlLength) { //checks for specified length
        if (exc.hasOwnProperty("excText")) {
            notQuite = true;
        } else {
            return { text: (wordInAllCaps + " is not in the word list for " + mod), color: "crimson" };
        }
    }
    if (exc.hasOwnProperty("minMaxLength") && (wordInAllCaps.length < exc.minMaxLength[0] || wordInAllCaps.length > exc.minMaxLength[1])) { //ditto
        if (exc.hasOwnProperty("excText")) {
            notQuite = true;
        } else {
            return { text: (wordInAllCaps + " is not in the word list for " + mod), color: "crimson" };
        }
    }

    if (exc.hasOwnProperty("excWords") && (exc.excWords.includes(wordInAllCaps))) { //exception word handling
        return { text: (wordInAllCaps + exc.excText.replace("*", mod)), color: exc.excColor };
    }

    if (exc.hasOwnProperty("splitSpec")) { //splits data into multiple chunks so they can be checked separately
        let splitData = data.split(exc.splitSpec[0]);
        for (d = 0; d < exc.splitSpec[1].length; d++) {
            if (splitData[d].includes(word)) {
                return { text: (wordInAllCaps + exc.splitSpec[1][d].replace("*", mod)), color: splitSpec[2][d] };
            }
        }
        return { text: (wordInAllCaps + " is not in the word list for " + mod), color: "crimson" };
    }

    if (data.includes(word)) {
        if (notQuite) {
            return { text: (wordInAllCaps + exc.excText.replace("*", mod)), color: "gold" };
        } else {
            return { text: (wordInAllCaps + " is in the word list for " + mod), color: "forestgreen" };
        }
    } else {
        return { text: (wordInAllCaps + " is not in the word list for " + mod), color: "crimson" };
    }
}