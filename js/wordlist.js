//url consts
const rghuc = "https://raw.githubusercontent.com/";
const ultimateSource = rghuc + "obachs971/UltimateCipher/master/Assets/Scripts/Data.cs";
const compressionSource = rghuc + "Timwi/KtaneCompressionCiphers/master/Lib/Data.cs";
const seperatedSource = rghuc + "VFlyer/SeparatedUFCiphers/main/Assets/Scripts/CipherMachineData.cs";
const buttonSource = rghuc + "QuinnWuest/KtaneBundleOfABunchOfButtons/master/Lib/WordLists.cs";
//pad consts
const q = "\"*\"";
const c = ",*,";

const moduleData = [
    { mod: "3x3 Yellow Cipher", id: "3x3YellowCipher", url: seperatedSource, pad: q, cap: true },
    { mod: "Anagrams", id: "AnagramsModule", url: rghuc + "timtmok/ktanemod-anagrams/master/Assets/Scripts/AnagramsModule.cs", pad: q, cap: false },
    { mod: "The Aqua Button", id: "AquaButtonModule", url: buttonSource, pad: q, cap: true },
    { mod: "Arithmetic Cipher", id: "ArithmeticCipherModule", url: compressionSource, pad: q, cap: true },
    { mod: "The Azure Button", id: "AzureButtonModule", url: buttonSource, pad: q, cap: true },
    { mod: "Basic Morse", id: "BasicMorse", url: rghuc + "Fartlicker777/Basic-Morse/master/Basic%20Morse/Assets/BasicMorse.cs", pad: q, cap: true },
    { mod: "Bell of Tío", id: "BellOfTioModule", url: rghuc + "QuinnWuest/KtaneBellOfTio/refs/heads/master/Assets/BellOfTioScript.cs", pad: q, cap: true },
    { mod: "Black Cipher", id: "blackCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "The Blue Button", id: "BlueButtonModule", url: buttonSource, pad: q, cap: true },
    { mod: "Blue Cipher", id: "blueCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Blue Huffman Cipher", id: "BlueHuffmanCipherModule", url: compressionSource, pad: q, cap: true },
    { mod: "Boggle", id: "boggle", url: rghuc + "AAces/KTaNE-Boggle/master/Assets/boggle.cs", pad: c, cap: true },
    { mod: "Boomtar the Great", id: "boomtarTheGreat", url: rghuc + "TasThiluna/Boomtar-the-Great/master/Assets/wordList.cs", pad: c, cap: true },
    { mod: "Brown Cipher", id: "brownCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Caesar Psycho", id: "caesarPsycho", url: rghuc + "Speakingevil/caesar-psycho/main/Assets/Wordlist.cs", pad: q, cap: true },
    { mod: "Cipher Machine", id: "cipherMachine", url: rghuc + "obachs971/CipherCollection/main/Assets/Scripts/Data.cs", pad: q, cap: true },
    { mod: "Color Braille", id: "ColorBrailleModule", url: rghuc + "Timwi/KtaneColorBraille/master/Assets/WordsData.cs", pad: q, cap: false },
    { mod: "Copper-9", id: "copperNine", url: rghuc + "SerialDesignationF/Copper-9/refs/heads/main/Copper-9/Copper9.cs", pad: q, cap: true },
    { mod: "Coral Cipher", id: "coralCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Cornflower Cipher", id: "cornflowerCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Cream Cipher", id: "creamCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Crimson Cipher", id: "crimsonCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Decomposed RGB Arithmetic", id: "rgbArithmeticDecomposed", url: seperatedSource, pad: q, cap: true },
    { mod: "Dice Cipher", id: "diceCipher", url: rghuc + "tandyCake/KTaNEDiceCipher/main/Dice%20Cipher/Assets/WordList.cs", pad: q, cap: false },
    { mod: "Distance Cipher", id: "DistanceCipherModule", url: rghuc + "Eltrick/KtaneDistanceCipher/master/Assets/ModuleScripts/WordList.cs", pad: q, cap: true },
    { mod: "Dreamcipher", id: "ksmDreamcipher", url: rghuc + "KScl/KTaNE-Dreamcipher/master/Assets/DreamcipherAssets/word_list.json", pad: q, cap: false },
    { mod: "☺NA Cipher", id: "enaCipher", url: rghuc + "KiloBites/ktane-ENA-Cipher/master/Assets/Data.cs", pad: q, cap: true },
    { mod: "Encryption Lingo", id: "EncryptionLingoModule", url: rghuc + "QuinnWuest/KtaneEncryptionLingo/master/Assets/Data.cs", pad: q, cap: true },
    { mod: "Faulty Colored Cube", id: "faultyColoredCube", url: rghuc + "llPlayll/KTANE-Colored-Cube-Variants/refs/heads/main/Assets/Modules/Faulty%20Colored/WordList.cs", pad: q, cap: true },
    { mod: "Finite Loop", id: "finiteLoop", url: rghuc + "Blananas2/ktane-finiteLoop/main/Assets/finiteLoopScript.cs", pad: q, cap: true },
    { mod: "Forest Cipher", id: "forestCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Forteroudo", id: "ForteroudoModule", url: rghuc + "QuinnWuest/KtaneForteroudo/refs/heads/master/Assets/Data.cs", pad: q, cap: false },
    { mod: "Fur Cipher", id: "furCipher", url: rghuc + "MageoMage/FurCipher/main/Assets/Data.cs", pad: q, cap: true },
    { mod: "Gray Cipher", id: "grayCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Green Cipher", id: "greenCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Indigo Cipher", id: "indigoCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Jailbreak", id: "Jailbreak", url: rghuc + "Fartlicker777/Trivia-Murder-Party/master/Trivia%20Murder%20Party/Assets/Modules/Jailbreak/WordList.cs", pad: q, cap: false },
    { mod: "Lempel-Ziv Cipher", id: "LempelZivCipherModule", url: compressionSource, pad: q, cap: true },
    { mod: "Linked Wordle", id: "linkedWordleModule", url: rghuc + "VFlyer/FlyersOtherModules/master/Assets/Scripts/LingoWordBank.cs", pad: q, cap: true },
    { mod: "Maas Cipher", id: "MaasCipher", url: rghuc + "Awesome7285/MaasCipher/main/MaasCipher/Assets/MaasCipher.cs", pad: q, cap: true },
    { mod: "Magenta Cipher", id: "magentaCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Maroon Cipher", id: "maroonCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Mechanus Cipher", id: "mechanusCipher", url: rghuc + "Ob3vious/KTaNE_PlanarCiphers/master/Assets/Wordlist.cs", pad: q, cap: false },
    { mod: "Metapuzzle", id: "metapuzzle", url: rghuc + "EpicToastTM/ktaneMetapuzzle/main/ktaneMetapuzzle-master/Assets/Misc/MainWordList.cs", pad: q, cap: true },
    { mod: "Modern Cipher", id: "modernCipher", url: rghuc + "TheFe91/ktane-CC/master/Assets/modernCipher.cs", pad: q, cap: true },
    { mod: "The Navy Button", id: "NavyButtonModule", url: rghuc + "QuinnWuest/KtaneBundleOfABunchOfButtons/master/Lib/NavyButtonData.cs", pad: ";*=", cap: true },
    { mod: "Notre-Dame Cipher", id: "notreDameCipher", url: rghuc + "Gameplushy/notreDameCipher/master/notre-Dame%20Cipher/Assets/WordList.cs", pad: q, cap: true },
    { mod: "Obscurdle", id: "ObscurdleModule", url: rghuc + "VFlyer/FlyersOtherModules/master/Assets/Scripts/LingoWordBank.cs", pad: q, cap: true },
    { mod: "Odd One Out", id: "OddOneOutModule", url: rghuc + "Timwi/KtaneOddOneOut/master/Assets/OddOneOutModule.cs", pad: c, cap: true },
    { mod: "Off-White Cipher", id: "offWhiteCipher", url: rghuc + "tandyCake/KTaNEOffWhiteCipher/master/Assets/Scripts/Data.cs", pad: q, cap: true },
    { mod: "Orange Cipher", id: "orangeCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Outrageous", id: "outrageous", url: rghuc + "Blananas2/ktane-outrageous/master/Assets/outrageousScript.cs", pad: q, cap: true },
    { mod: "Pandemonium Cipher", id: "pandemoniumCipher", url: rghuc + "Ob3vious/KTaNE_PlanarCiphers/master/Assets/Wordlist.cs", pad: q, cap: false },
    { mod: "Password Hexaterminals", id: "hexaterminals", url: rghuc + "Speakingevil/password-hexaterminals/refs/heads/main/Assets/Wordlist.cs", pad: q, cap: true },
    { mod: "Phosphorescence", id: "Phosphorescence", url: rghuc + "Emik03/EmikModules/main/Assets/Modules/Phosphorescence/Data/WordList.txt", pad: "|*|", cap: false },
    { mod: "Pigfair Cipher", id: "PigfairCipher", url: rghuc + "QuinnWuest/KtanePigfairCipher/main/Assets/PigfairCipher.cs", pad: q, cap: true },
    { mod: "Pokémon Sprite Cipher", id: "PokemonSpriteCipherModule", url: compressionSource, pad: q, cap: true },
    { mod: "Pluto", id: "pluto", url: rghuc + "Blananas2/ktane-blanets/refs/heads/main/Assets/Planet Files/Pluto/PlutoScript.cs", pad: q, cap: true },
    { mod: "Puzzword", id: "PuzzwordModule", url: rghuc + "Timwi/KtanePuzzword/master/Assets/Scripts/Data.cs", pad: q, cap: true },
    { mod: "QWERTY Coordinates", id: "qwertyCoordinates", url: rghuc + "Red-P-enguin/qwertyCoordinates/refs/heads/main/Assets/Data.cs", pad: q, cap: true },
    { mod: "RSA Cipher", id: "RSACipher", url: rghuc + "obachs971/RSACipher/main/Assets/rsaCipher.cs", pad: q, cap: true },
    { mod: "Red Cipher", id: "redCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Red Huffman Cipher", id: "RedHuffmanCipherModule", url: seperatedSource, pad: q, cap: true },
    { mod: "The Sapphire Button", id: "SapphireButtonModule", url: buttonSource, pad: q, cap: true },
    { mod: "Scrambled Periodic Words", id: "periodicWordsScrambledRB", url: rghuc + "RazorBlade22/KTaNE-Periodic-Words/refs/heads/main/Assets/Data.cs", pad: q, cap: true },
    { mod: "Shape Cipher", id: "shapeCipher", url: rghuc + "TracksJosh/ktaneShapeCipher-master/main/Assets/Scripts/Data.cs", pad: q, cap: true },
    { mod: "Shufflewords", id: "shufflewords", url: rghuc + "Speakingevil/shufflewords/main/Assets/ShufflewordsScript.cs", pad: q, cap: true },
    { mod: "Solitaire Cipher", id: "solitaireCipher", url: rghuc + "obachs971/SolitaireCipher/main/Assets/solitaireCipher.cs", pad: q, cap: true },
    { mod: "Spelling Buzzed", id: "SpellingBuzzed", url: rghuc + "KtaneModules/ktane-spelling-buzzed-alex-chew/refs/heads/master/Assets/SpellingBuzzed/Resources/words.txt", pad: "|*|", cap: true },
    { mod: "Sudoku Cipher", id: "sudokuCipher", url: rghuc + "xMcacutt/KTaNE-Coloured-Sudokus/refs/heads/master/Assets/Scripts/Utility/Data.cs", pad: q, cap: true },
    { mod: "Touch Transmission", id: "touchTransmission", url: rghuc + "tandyCake/KTaNETouchTransmission/main/TouchTransmission/Assets/wordList.cs", pad: q, cap: false },
    { mod: "Transmission Transposition", id: "transmissionTransposition", url: rghuc + "tandyCake/KTaNETransmissionTranslation/master/KTaNEMorseAnagrams/Assets/wordList.cs", pad: q, cap: true }, 
    { mod: "Twodoku", id: "TwodokuModule", url: rghuc + "Timwi/KtaneTwodoku/refs/heads/master/Lib/Data.cs", pad: q, cap: true },
    { mod: "Ultimate Cipher", id: "ultimateCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Unfair's Forgotten Ciphers", id: "unfairsForgottenCiphers", url: rghuc + "VFlyer/UnfairsRevenge/master/Assets/Scripts/UnfairsRevengeHandlers/Extreme%20Revenge%20Scripts/CipherMachineData.cs", pad: q, cap: true },
    { mod: "Vigilant Psycho", id: "vigilantPsycho", url: rghuc + "VFlyer/vigilant-psycho/main/Assets/Wordlist.cs", pad: q, cap: true },
    { mod: "Violet Cipher", id: "violetCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "White Cipher", id: "whiteCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Word Scramble", id: "WordScrambleModule", url: rghuc + "timtmok/ktanemod-anagrams/master/Assets/Scripts/WordScrambleModule.cs", pad: q, cap: false },
    { mod: "Wordle", id: "Wordle", url: rghuc + "Blananas2/blananas2.github.io/main/js/wordle.txt", pad: c, cap: false }, //technically will require manual updating, however i do not want to fetch twice
    { mod: "Words", id: "Words", url: rghuc + "Fartlicker777/Trivia-Murder-Party/master/Trivia%20Murder%20Party/Assets/Modules/Words/AllWordList.cs", pad: c, cap: true },
    { mod: "XO", id: "xo", url: rghuc + "vitzlo/KTaNE-XO/main/Assets/xoScript.cs", pad: q, cap: true },
    { mod: "Yellow Cipher", id: "yellowCipher", url: ultimateSource, pad: q, cap: true },
    { mod: "Yellow Huffman Cipher", id: "YellowHuffmanCipherModule", url: compressionSource, pad: q, cap: true },
];

//color consts
const g = "forestgreen";
const y = "gold";
const r = "crimson";

function findWord (mdl, wrd) {
    return new Promise((resolve, reject) => {
        if (wrd.match(/[^A-Z]/gi) || wrd === "") { reject({ text: "Please enter a word.", color: "white" }); }
        if (mdl === "") { reject({ text: "Please choose a module.", color: "white" }); }

        for (md = 0; md < moduleData.length; md++) {
            if (mdl === moduleData[md].mod) {
                let word = (moduleData[md].pad).replace("*", wrd);
                word = moduleData[md].cap ? word.toUpperCase() : word.toLowerCase();
                fetch(moduleData[md].url).then(response => {
                    if (!response.ok) {
                        reject({ text: "Response was not OK", color: r });
                    }
                    return response.text();
                }).then(data => { 
                    resolve(inWordListObj(word, data, mdl));
                }).catch(error => {
                    reject({ text: error, color: r });
                });
                return;
            }
        }

        reject({ text: "Module could not be found.", color: r });
    });
}

//exception consts
const butNot = " is in the wordlist for *,<br>but cannot be the answer";
const isNot = " is not in the wordlist for *";
const isIn = " is in the wordlist for *";

const exceptionData = [
    { mod: "3x3 Yellow Cipher", eqlLength: 6 },
    { mod: "The Aqua Button", eqlLength: 6 },
    { mod: "Arithmetic Cipher", befAftReplace: ["\n", "\""], minMaxLength: [4, 6], excText: butNot },
    { mod: "The Azure Button", eqlLength: 4 },
    { mod: "Basic Morse", minMaxLength: [4, 9] },
    { mod: "Bell of Tío", eqlLength: 5 },
    { mod: "Black Cipher", eqlLength: 6, excText: butNot },
    { mod: "The Blue Button", eqlLength: 5 },
    { mod: "Blue Cipher", eqlLength: 6, excText: butNot },
    { mod: "Blue Huffman Cipher", befAftReplace: ["\n", "\""], minMaxLength: [5, 8], excText: butNot },
    { mod: "Boggle", befAftReplace: ["\"", ",\","] },
    { mod: "Boomtar the Great", befAftReplace: ["\"", ",\","] },
    { mod: "Brown Cipher", eqlLength: 6, excText: butNot },
    { mod: "Copper-9", befAftReplace: ["_moduleIdCounter =", "new List<string>()"], splitSpec: ["new List<string>()", [null, butNot, butNot, isIn, butNot, butNot, isNot], [null, y, y, g, y, y, r] ] },
    { mod: "Coral Cipher", eqlLength: 6, excText: butNot },
    { mod: "Cornflower Cipher", eqlLength: 6, excText: butNot },
    { mod: "Cream Cipher", eqlLength: 6, excText: butNot },
    { mod: "Crimson Cipher", eqlLength: 6, excText: butNot },
    { mod: "Decomposed RGB Arithmetic", minMaxLength: [4, 6] },
    { mod: "Dreamcipher", excWords: ["DREAMCIPHER", "LESBIANPRIDE", "GAYPRIDE", "BIPRIDE", "TRANSPRIDE", "TRANSRIGHTS", "ENBYPRIDE", "GFLUIDPRIDE"], excText: " is a * easter egg,<br>not an answer", excColor: "pink" },
    { mod: "☺NA Cipher", eqlLength: 6, excText: butNot },
    { mod: "Encryption Lingo", splitSpec: ["ObscureWordList", [isIn, butNot], [g, y]] },
    { mod: "Finite Loop", splitSpec: ["word", [isNot, isIn], [r, g]] },
    { mod: "Forest Cipher", eqlLength: 6, excText: butNot },
    { mod: "Forteroudo", splitSpec: ["_alphabetSets", [isIn, isNot], [g, r] ] },
    { mod: "Fur Cipher", eqlLength: 6, excText: butNot },
    { mod: "Gray Cipher", eqlLength: 6, excText: butNot },
    { mod: "Green Cipher", eqlLength: 6, excText: butNot },
    { mod: "Indigo Cipher", eqlLength: 6, excText: butNot },
    { mod: "Jailbreak", excWords: ["HELP", "VIEW", "SHOW", "ZOOM", "TILT", "KEEP", "TAKE", "MINE", "MARK"], excText: isIn + ",<br>but is also a reserved Twitch Plays word", excColor: "cyan" },
    { mod: "Lempel-Ziv Cipher", befAftReplace: ["\n", "\""] },
    { mod: "Linked Wordle", splitSpec: ["ObscureWordList", [isIn, butNot], [g, y]] },
    { mod: "Maas Cipher", eqlLength: 4 },
    { mod: "Magenta Cipher", eqlLength: 6, excText: butNot },
    { mod: "Maroon Cipher", eqlLength: 6, excText: butNot },
    { mod: "Mechanus Cipher", forceCap: false },
    { mod: "Metapuzzle", eqlLength: 7, excText: butNot },
    { mod: "Modern Cipher", minMaxLength: [4, 8], excWords: ["AEIOU", "SUBMIT"], excText: isNot, excColor: r },
    { mod: "The Navy Button", befAftReplace: ["\"", "\";"] },
    { mod: "Obscurdle", splitSpec: ["ObscureWordList", [isIn, butNot], [g, y]] },
    { mod: "Odd One Out", befAftReplace: ["\"", ","], splitSpec: [".Split(',')", [isIn, butNot], [g, y]] },
    { mod: "Orange Cipher", eqlLength: 6, excText: butNot },
    { mod: "Outrageous", eqlLength: 6 },
    { mod: "Pandemonium Cipher", forceCap: false },
    { mod: "Phosphorescence", surround: "|*|", forceCap: false, befAftReplace: ["\n", "|"], minMaxLength: [3, 6] },
    { mod: "Pigfair Cipher", eqlLength: 8 },
    { mod: "Pokémon Sprite Cipher", befAftReplace: ["\n", "\""] },
    { mod: "Pluto", eqlLength: 4 },
    { mod: "QWERTY Coordinates", befAftReplace: ["P", "~"] }, //words with a P are not valid
    { mod: "RSA Cipher", eqlLength: 6, excWords: ["MODULE", "SOLVED"], excText: isNot, excColor: r },
    { mod: "Red Cipher", eqlLength: 6, excText: butNot },
    { mod: "Red Huffman Cipher", minMaxLength: [4, 9] },
    { mod: "The Sapphire Button", eqlLength: 5 },
    { mod: "Scrambled Periodic Words", splitSpec: ["Elements", [isIn, isNot], [g, r]] },
    { mod: "Shape Cipher", splitSpec: ["new List<string>", [null, butNot, butNot, isIn, butNot, butNot], [null, y, y, g, y, y]] },
    { mod: "Shufflewords", eqlLength: 5 },
    { mod: "Solitaire Cipher", eqlLength: 6 },
    { mod: "Spelling Buzzed", surround: "|*|", befAftReplace: ["\n", "|"] },
    { mod: "Sudoku Cipher", eqlLength: 6, excText: butNot },
    { mod: "Ultimate Cipher", eqlLength: 6, excText: butNot },
    { mod: "Unfair's Forgotten Ciphers", splitSpec: ["new List<string>", [null, isNot, butNot, butNot, isIn, butNot, butNot], [null, r, y, y, g, y, y]] },
    { mod: "Violet Cipher", eqlLength: 6, excText: butNot },
    { mod: "White Cipher", eqlLength: 6, excText: butNot },
    { mod: "Word Scramble", excWords: ["PAPERS"], excText: isNot + ",<br>but is a valid answer if Module Tweaks is enabled", excColor: "cyan" },
    { mod: "Wordle", splitSpec: ["|", [isIn, butNot], [g, y]] },
    { mod: "Words", befAftReplace: ["\"", ",\","] },
    { mod: "XO", eqlLength: 6, excWords: ["TOGGLE"], excText: isNot, excColor: r },
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
            return { text: (wordInAllCaps + " is not in the wordlist for " + mod), color: r };
        }
    }
    if (exc.hasOwnProperty("minMaxLength") && (wordInAllCaps.length < exc.minMaxLength[0] || wordInAllCaps.length > exc.minMaxLength[1])) { //ditto
        if (exc.hasOwnProperty("excText")) {
            notQuite = true;
        } else {
            return { text: (wordInAllCaps + " is not in the wordlist for " + mod), color: r };
        }
    }

    if (exc.hasOwnProperty("excWords") && (exc.excWords.includes(wordInAllCaps))) { //exception word handling
        return { text: (wordInAllCaps + exc.excText.replace("*", mod)), color: exc.excColor };
    }

    if (exc.hasOwnProperty("splitSpec")) { //splits data into multiple chunks so they can be checked separately
        let splitData = data.split(exc.splitSpec[0]);
        for (d = 0; d < exc.splitSpec[1].length; d++) {
            if (splitData[d].includes(word)) {
                return { text: (wordInAllCaps + exc.splitSpec[1][d].replace("*", mod)), color: exc.splitSpec[2][d] };
            }
        }
        return { text: (wordInAllCaps + " is not in the wordlist for " + mod), color: r };
    }

    if (data.includes(word)) {
        if (notQuite) {
            return { text: (wordInAllCaps + exc.excText.replace("*", mod)), color: y };
        } else {
            return { text: (wordInAllCaps + " is in the wordlist for " + mod), color: g };
        }
    } else {
        return { text: (wordInAllCaps + " is not in the wordlist for " + mod), color: r };
    }
}