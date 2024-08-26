const rghuc = "https://raw.githubusercontent.com/";
const ultimateSource = rghuc + "obachs971/UltimateCipher/master/Assets/Scripts/Data.cs";
const compressionSource = rghuc + "Timwi/KtaneCompressionCiphers/master/Lib/Data.cs";
const seperatedSource = rghuc + "VFlyer/SeparatedUFCiphers/main/Assets/Scripts/CipherMachineData.cs";
const buttonSource = rghuc + "QuinnWuest/KtaneBundleOfABunchOfButtons/master/Lib/WordLists.cs";
const p = "\"*\"";
const s = ",*,";
const moduleData = [
    { mod: "3x3 Yellow Cipher", url: seperatedSource, pad: p, cap: 1 },
    { mod: "Anagrams", url: rghuc + "timtmok/ktanemod-anagrams/master/Assets/Scripts/AnagramsModule.cs", pad: p, cap: 0 },
    { mod: "Arithmetic Cipher", url: compressionSource, pad: p, cap: 1 },
    { mod: "The Azure Button", url: buttonSource, pad: s, cap: 1 },
    { mod: "Basic Morse", url: rghuc + "Fartlicker777/Basic-Morse/master/Basic%20Morse/Assets/BasicMorse.cs", pad: p, cap: 1 },
    { mod: "Black Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "The Blue Button", url: buttonSource, pad: s, cap: 1 },
    { mod: "Blue Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Blue Huffman Cipher", url: compressionSource, pad: p, cap: 1 },
    { mod: "Boggle", url: rghuc + "AAces/KTaNE-Boggle/master/Assets/boggle.cs", pad: s, cap: 1 },
    { mod: "Boomtar the Great", url: rghuc + "TasThiluna/Boomtar-the-Great/master/Assets/wordList.cs", pad: s, cap: 1 },
    { mod: "Brown Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Caesar Psycho", url: rghuc + "Speakingevil/caesar-psycho/main/Assets/Wordlist.cs", pad: p, cap: 1 },
    { mod: "Cipher Machine", url: rghuc + "obachs971/CipherCollection/main/Assets/Scripts/Data.cs", pad: p, cap: 1 },
    { mod: "Color Braille", url: rghuc + "Timwi/KtaneColorBraille/master/Assets/WordsData.cs", pad: p, cap: 0 },
    { mod: "Coral Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Cornflower Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Cream Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Crimson Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Decomposed RGB Arithmetic", url: seperatedSource, pad: p, cap: 1 },
    { mod: "Dice Cipher", url: rghuc + "tandyCake/KTaNEDiceCipher/main/Dice%20Cipher/Assets/WordList.cs", pad: p, cap: 0 },
    { mod: "Distance Cipher", url: rghuc + "Eltrick/KtaneDistanceCipher/master/Assets/ModuleScripts/WordList.cs", pad: p, cap: 1 },
    { mod: "Dreamcipher", url: rghuc + "KScl/KTaNE-Dreamcipher/master/Assets/DreamcipherAssets/word_list.json", pad: p, cap: 0 },
    { mod: "☺NA Cipher", url: rghuc + "KiloBites/ktane-ENA-Cipher/master/Assets/Data.cs", pad: p, cap: 1 },
    { mod: "Encryption Lingo", url: rghuc + "QuinnWuest/KtaneEncryptionLingo/master/Assets/Data.cs", pad: p, cap: 1 },
    { mod: "Finite Loop", url: rghuc + "Blananas2/ktane-finiteLoop/main/Assets/finiteLoopScript.cs", pad: p, cap: 1 },
    { mod: "Forest Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Fur Cipher", url: rghuc + "MageoMage/FurCipher/main/Assets/Data.cs", pad: p, cap: 1 },
    { mod: "Gray Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Green Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Indigo Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Jailbreak", url: rghuc + "Fartlicker777/Trivia-Murder-Party/master/Trivia%20Murder%20Party/Assets/Modules/Jailbreak/WordList.cs", pad: p, cap: 0 },
    { mod: "Lempel-Ziv Cipher", url: compressionSource, pad: p, cap: 1 },
    { mod: "Linked Wordle", url: rghuc + "VFlyer/FlyersOtherModules/master/Assets/Scripts/LingoWordBank.cs", pad: p, cap: 1 },
    { mod: "Maas Cipher", url: rghuc + "Awesome7285/MaasCipher/main/MaasCipher/Assets/MaasCipher.cs", pad: p, cap: 1 },
    { mod: "Magenta Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Maroon Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Mechanus Cipher", url: rghuc + "Ob3vious/KTaNE_PlanarCiphers/master/Assets/Wordlist.cs", pad: p, cap: 0 },
    { mod: "Metapuzzle", url: rghuc + "EpicToastTM/ktaneMetapuzzle/main/ktaneMetapuzzle-master/Assets/Misc/MainWordList.cs", pad: p, cap: 1 },
    { mod: "Modern Cipher", url: rghuc + "TheFe91/ktane-CC/master/Assets/modernCipher.cs", pad: p, cap: 1 },
    { mod: "The Navy Button", url: rghuc + "QuinnWuest/KtaneBundleOfABunchOfButtons/master/Lib/NavyButtonData.cs", pad: ";*=", cap: 1 },
    { mod: "Notre-Dame Cipher", url: rghuc + "Gameplushy/notreDameCipher/master/notre-Dame%20Cipher/Assets/WordList.cs", pad: p, cap: 1 },
    { mod: "Obscurdle", url: rghuc + "VFlyer/FlyersOtherModules/master/Assets/Scripts/LingoWordBank.cs", pad: p, cap: 1 },
    { mod: "Odd One Out", url: rghuc + "Timwi/KtaneOddOneOut/master/Assets/OddOneOutModule.cs", pad: s, cap: 1 },
    { mod: "Off-White Cipher", url: rghuc + "tandyCake/KTaNEOffWhiteCipher/master/Assets/Scripts/Data.cs", pad: p, cap: 1 },
    { mod: "Orange Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Outrageous", url: rghuc + "Blananas2/ktane-outrageous/master/Assets/outrageousScript.cs", pad: p, cap: 1 },
    { mod: "Pandemonium Cipher", url: rghuc + "Ob3vious/KTaNE_PlanarCiphers/master/Assets/Wordlist.cs", pad: p, cap: 0 },
    { mod: "Phosphorescence", url: rghuc + "Emik03/EmikModules/main/Assets/Modules/Phosphorescence/Data/WordList.txt", pad: "|*|", cap: 0 },
    { mod: "Pigfair Cipher", url: rghuc + "QuinnWuest/KtanePigfairCipher/main/Assets/PigfairCipher.cs", pad: p, cap: 1 },
    { mod: "Pokémon Sprite Cipher", url: compressionSource, pad: p, cap: 1 },
    { mod: "Puzzword", url: rghuc + "Timwi/KtanePuzzword/master/Assets/Scripts/Data.cs", pad: p, cap: 1 },
    { mod: "RSA Cipher", url: rghuc + "obachs971/RSACipher/main/Assets/rsaCipher.cs", pad: p, cap: 1 },
    { mod: "Red Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Red Huffman Cipher", url: seperatedSource, pad: p, cap: 1 },
    { mod: "The Sapphire Button", url: buttonSource, pad: s, cap: 1 },
    { mod: "Shape Cipher", url: rghuc + "TracksJosh/ktaneShapeCipher-master/main/Assets/Scripts/Data.cs", pad: p, cap: 1 },
    { mod: "Shufflewords", url: rghuc + "Speakingevil/shufflewords/main/Assets/ShufflewordsScript.cs", pad: p, cap: 1 },
    { mod: "Solitaire Cipher", url: rghuc + "obachs971/SolitaireCipher/main/Assets/solitaireCipher.cs", pad: p, cap: 1 },
    { mod: "Spelling Buzzed", url: rghuc + "alex-chew/ktane-spelling-buzzed/master/Assets/SpellingBuzzed/Resources/words.txt", pad: "|*|", cap: 1 },
    { mod: "Touch Transmission", url: rghuc + "tandyCake/KTaNETouchTransmission/main/TouchTransmission/Assets/wordList.cs", pad: p, cap: 0 },
    { mod: "Transmission Transposition", url: rghuc + "tandyCake/KTaNETransmissionTranslation/master/KTaNEMorseAnagrams/Assets/wordList.cs", pad: p, cap: 1 }, 
    { mod: "Ultimate Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Unfair's Forgotten Ciphers", url: rghuc + "VFlyer/UnfairsRevenge/master/Assets/Scripts/UnfairsRevengeHandlers/Extreme%20Revenge%20Scripts/CipherMachineData.cs", pad: p, cap: 1 },
    { mod: "Vigilant Psycho", url: rghuc + "VFlyer/vigilant-psycho/main/Assets/Wordlist.cs", pad: p, cap: 1 },
    { mod: "Violet Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "White Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Word Scramble", url: rghuc + "timtmok/ktanemod-anagrams/master/Assets/Scripts/WordScrambleModule.cs", pad: p, cap: 0 },
    { mod: "Wordle", url: rghuc + "Blananas2/blananas2.github.io/main/js/wordle.txt", pad: s, cap: 0 }, //technically will require manual updating, however i do not want to fetch twice
    { mod: "Words", url: rghuc + "Fartlicker777/Trivia-Murder-Party/master/Trivia%20Murder%20Party/Assets/Modules/Words/AllWordList.cs", pad: s, cap: 1 },
    { mod: "XO", url: rghuc + "vitzlo/KTaNE-XO/main/Assets/xoScript.cs", pad: p, cap: 1 },
    { mod: "Yellow Cipher", url: ultimateSource, pad: p, cap: 1 },
    { mod: "Yellow Huffman Cipher", url: compressionSource, pad: p, cap: 1 },
];

function findWord (mdl, wrd) {
    return new Promise((resolve, reject) => {
        if (wrd.match(/[^A-Z]/gi)) { reject({ text: "Please enter a word.", color: "white" }); }
        if (mdl === "") { reject({ text: "Please choose a module.", color: "white" }); }

        for (md = 0; md < moduleData.length; md++) {
            if (mdl === moduleData[md].mod) {
                let word = (moduleData[md].pad).replace("*", wrd);
                word = (moduleData[md].cap === 0) ? word.toLowerCase() : word.toUpperCase();
                fetch(moduleData[md].url).then(response => {
                    if (!response.ok) {
                        reject({ text: "Response was not OK", color: "maroon" });
                    }
                    return response.text();
                }).then(data => { 
                    resolve(inWordListObj(word, data, mdl));
                }).catch(error => {
                    reject({ text: error, color: "maroon" });
                });
                return;
            }
        }

        reject({ text: "Module could not be found.", color: "maroon" });
    });
}

//list of exceptions
const butNot = " is in the word list for *,<br>but cannot be the answer";
const isNot = " is not in the word list for *";
const isIn = " is in the word list for *";
const exceptionData = [
    { mod: "3x3 Yellow Cipher", minLength: 6, maxLength: 6 },
    { mod: "Arithmetic Cipher", befReplace: "\n", aftReplace: "\"", minLength: 4, maxLength: 6, excText: butNot },
    { mod: "The Azure Button", befReplace: "\"", aftReplace: ",\",", splitAt: "FiveLetters", splitText: [isIn, isNot], splitColors: [ "forestgreen", "crimson" ] },
    { mod: "Basic Morse", minLength: 4, maxLength: 9 },
    { mod: "Black Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "The Blue Button", befReplace: "\"", aftReplace: ",\",", splitAt: "FiveLetters", splitText: [isNot, isIn], splitColors: [ "crimson", "forestgreen" ] },
    { mod: "Blue Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Blue Huffman Cipher", befReplace: "\n", aftReplace: "\"", minLength: 5, maxLength: 8, excText: butNot },
    { mod: "Boggle", befReplace: "\"", aftReplace:",\"," },
    { mod: "Boomtar the Great", befReplace: "\"", aftReplace:",\"," },
    { mod: "Brown Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Coral Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Cornflower Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Cream Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Crimson Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Decomposed RGB Arithmetic", minLength: 4, maxLength: 6 },
    { mod: "Dreamcipher", excWords: [ "\"dreamcipher\"", "\"lesbianpride\"", "\"gaypride\"", "\"bipride\"", "\"transpride\"", "\"transrights\"", "\"enbypride\"", "\"gfluidpride\"" ], excText: " is a * easter egg,<br>not an answer", excColor: "pink" },
    { mod: "☺NA Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Encryption Lingo", splitAt: "ObscureWordList", splitText: [isIn, butNot], splitColors: ["forestgreen", "gold"] },
    { mod: "Finite Loop", splitAt: "word", splitText: [isNot, isIn], splitColors: [ "crimson", "forestgreen" ] },
    { mod: "Forest Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Fur Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Gray Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Green Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Indigo Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Jailbreak", excWords: ["\"help\"", "\"view\"", "\"show\"", "\"zoom\"", "\"tilt\"", "\"keep\"", "\"take\"", "\"mine\""], excText: isIn + ",<br>but is also a reserved Twitch Plays word", excColor: "cyan" },
    { mod: "Lempel-Ziv Cipher", befReplace: "\n", aftReplace: "\"" },
    { mod: "Linked Wordle", splitAt: "ObscureWordList", splitText: [isIn, butNot], splitColors: ["forestgreen", "gold"] },
    { mod: "Maas Cipher", minLength: 4, maxLength: 4 },
    { mod: "Magenta Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Maroon Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Mechanus Cipher", forceCap: 0 },
    { mod: "Metapuzzle", minLength: 7, maxLength: 7, excText: butNot },
    { mod: "Modern Cipher", minLength: 4, maxLength: 8, excWords: ["\"AEIOU\"", "\"SUBMIT\""], excText: isNot, excColor: "maroon" },
    { mod: "The Navy Button", befReplace: "\"", aftReplace: "\";" },
    { mod: "Obscurdle", splitAt: "ObscureWordList", splitText: [isIn, butNot], splitColors: ["forestgreen", "gold"] },
    { mod: "Odd One Out", befReplace: "\"", aftReplace:",", splitAt: ".Split(',')", splitText: [isIn, butNot], splitColors: ["forestgreen", "gold"] },
    { mod: "Orange Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Outrageous", minLength: 6, maxLength: 6 },
    { mod: "Pandemonium Cipher", forceCap: 0 },
    { mod: "Phosphorescence", surround: "|*|", forceCap: 0, befReplace: "\n", aftReplace: "|", minLength: 3, maxLength: 6 },
    { mod: "Pigfair Cipher", minLength: 8, maxLength: 8 },
    { mod: "Pokémon Sprite Cipher", befReplace: "\n", aftReplace: "\"" },
    { mod: "RSA Cipher", minLength: 6, maxLength: 6, excWords: ["\"MODULE\"", "\"SOLVED\""], excText: isNot, excColor: "maroon" },
    { mod: "Red Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Red Huffman Cipher", minLength: 4, maxLength: 9 },
    { mod: "The Sapphire Button", befReplace: "\"", aftReplace: ",\",", splitAt: "FiveLetters", splitText: [isNot, isIn], splitColors: [ "crimson", "forestgreen" ] },
    { mod: "Shape Cipher", splitAt: "new List<string>", splitText: [ null, butNot, butNot, isIn, butNot, butNot ], splitColors: [ null, "gold", "gold", "forestgreen", "gold", "gold" ] },
    { mod: "Shufflewords", minLength: 5, maxLength: 5 },
    { mod: "Solitaire Cipher", minLength: 6, maxLength: 6 },
    { mod: "Spelling Buzzed", surround: "|*|", befReplace: "\n", aftReplace: "|" },
    { mod: "Ultimate Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Unfair's Forgotten Ciphers", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Violet Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "White Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Word Scramble", excWords: ["\"papers\""], excText: isNot + ",<br>but is a valid answer if Module Tweaks is enabled", excColor: "cyan" },
    { mod: "Wordle", splitAt: "|", splitText: [isIn, butNot], splitColors: [ "forestgreen", "gold" ] },
    { mod: "Words", befReplace: "\"", aftReplace:",\"," },
    { mod: "XO", minLength: 6, maxLength: 6, excWords: ["\"TOGGLE\""], excText: isNot, excColor: "maroon" },
    { mod: "Yellow Cipher", minLength: 6, maxLength: 6, excText: butNot },
    { mod: "Yellow Huffman Cipher", befReplace: "\n", aftReplace: "\"" },
];

function inWordListObj (word, data, mod) {
    let actualWord = document.getElementById('word').value.toUpperCase();
    let notQuite = false;
    let exc = { };
    for (ex = 0; ex < exceptionData.length; ex++) {
        if (exceptionData[ex].mod === mod) {
            exc = exceptionData[ex];
            break;
        }
    }

    if (exc.hasOwnProperty("forceCap")) { //forces capitalization
        data = (exc.forceCap === 0) ? data.toLowerCase() : data.toUpperCase();
    }

    if (exc.hasOwnProperty("surround")) { data = (exc.surround).replace("*", data); } //adds to start and end of data

    if (exc.hasOwnProperty("befReplace")) { data = data.replaceAll(exc.befReplace, exc.aftReplace); } //replaces bits so they're easier to manage

    if (exc.hasOwnProperty("minLength") && (word.length < (exc.minLength + 2) || word.length > (exc.maxLength + 2))) { //checks for specified length
        if (exc.hasOwnProperty("excText")) {
            notQuite = true;
        } else {
            return { text: (actualWord + " is not in the word list for " + mod), color: "crimson" };
        }
    }

    if (exc.hasOwnProperty("excWords") && (exc.excWords.includes(word))) { //exception word handling
        return { text: (actualWord + exc.excText.replace("*", mod)), color: exc.excColor };
    }

    if (exc.hasOwnProperty("splitAt")) { //splits data into multiple chunks so they can be checked separately
        let splitData = data.split(exc.splitAt);
        for (d = 0; d < exc.splitText.length; d++) {
            if (splitData[d].includes(word)) {
                return { text: (actualWord + exc.splitText[d].replace("*", mod)), color: exc.splitColors[d] };
            }
        }
        return { text: (actualWord + " is not in the word list for " + mod), color: "crimson" };
    }

    if (data.includes(word)) {
        if (notQuite) {
            return { text: (actualWord + exc.excText.replace("*", mod)), color: "gold" };
        } else {
            return { text: (actualWord + " is in the word list for " + mod), color: "forestgreen" };
        }
    } else {
        return { text: (actualWord + " is not in the word list for " + mod), color: "crimson" };
    }
}