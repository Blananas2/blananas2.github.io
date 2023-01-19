function encrypt (text) {
    var charSet = "";
    var charCounts = [];
    text += "~";
    for (ch = 0; ch < text.length; ch++) {
        if (!charSet.includes(text[ch])) {
            charSet += text[ch];
            charCounts.push(0);
        }
        charCounts[charSet.indexOf(text[ch])] += 1;
    }
    var sortedSet = "";
    var sortedCounts = [];
    var betterSortedSet = [];
    for (var n = Math.min(...charCounts); n < Math.max(...charCounts)+1; n++) {
        for (var ix = 0; ix < charCounts.length; ix++) {
            if (charCounts[ix] == n) {
                sortedCounts.push(n);
                sortedSet += charSet[ix];
                betterSortedSet.push(charSet[ix]);
            }
        }
    }
    charSet = sortedSet;
    charCounts = sortedCounts;
    var bitRep = [];
    var numberSum = 0;
    var combinedStrings = "";
    for (var el = 0; el < charCounts.length; el++) { bitRep.push(""); }
    while (betterSortedSet.length != 1) {
        for (fs = 0; fs < betterSortedSet[0].length; fs++) {
            for (fc = 0; fc < charSet.length; fc++) {
                if (betterSortedSet[0][fs] == charSet[fc]) {
                    bitRep[fc] = "0" + bitRep[fc];
                }
            }
        }
        for (ss = 0; ss < betterSortedSet[1].length; ss++) {
            for (sc = 0; sc < charSet.length; sc++) {
                if (betterSortedSet[1][ss] == charSet[sc]) {
                    bitRep[sc] = "1" + bitRep[sc];
                }
            }
        }
        numberSum = charCounts[0] + charCounts[1];
        combinedStrings = betterSortedSet[0] + betterSortedSet[1];
        charCounts = charCounts.slice(2); 
        betterSortedSet = betterSortedSet.slice(2);
        var placed = false;
        for (bs = 1; bs < betterSortedSet.length; bs++) {
            if (betterSortedSet[bs] > numberSum) {
                betterSortedSet.splice(bs-1, 0, combinedStrings);
                charCounts.splice(bs-1, 0, numberSum);
                placed = true; break;
            }
        }
        if (!placed) {
            betterSortedSet.push(combinedStrings);
            charCounts.push(numberSum);
        }
    }
    var encryptedText = "";
    for (fc = 0; fc < text.length; fc++) {
        for (cx = charSet.length - 1; cx > -1; cx--) {
            if (text[fc] == charSet[cx]) {
                encryptedText += bitRep[cx];
                break;
            }
        }
    }
    while ((encryptedText.length % 5) != 0) {
        encryptedText += "0";
    }
    var b32 = "234567ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var unbasedText = encryptedText;
    var basedText = "";
    for (bg = 0; bg < unbasedText.length/5; bg++) {
        var bitGroup = unbasedText.substring(0, 5);
        var bgIx = 0;
        for (bt = 0; bt < 5; bt++) {
            if (bitGroup[4-bt] == "1") { bgIx += Math.pow(2,bt); }
        }
        basedText += b32[bgIx];
        unbasedText = unbasedText.slice(5);
    }
    encryptedText = basedText;
    var treeRep = "";
    for (br = 0; br < charSet.length; br++) {
        var brCopy = bitRep[br];
        var endLetter = "";
        if (brCopy.length % 2 == 1) {
            if (originalText.includes("~")) { 
                if (brCopy[bitRep.length-1] == "0") { endLetter = "k"; }
                else { endLetter = "l"; }
            } else { 
                if (brCopy[bitRep.length-1] == "0"){ endLetter = "e"; } 
                else { endLetter = "f"; }
            }
            brCopy = brCopy.slice(0, -1);
        }
        var letters = "";
        while (brCopy != "") {
            switch (brCopy[0] + brCopy[1]) {
                case "00": letters += "a"; break;
                case "01": letters += "b"; break;
                case "10": letters += "c"; break;
                case "11": letters += "d"; break;
            }
            brCopy = brCopy.slice(2);
        }
        treeRep += (letters + endLetter + charSet[br]);
    }
    return treeRep + "x" + encryptedText;
}