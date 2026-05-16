let functionData = [
    {
        name: "Add times",
        urlq: "addtimes",
        desc: "Calculates provided times added together.<br>Separate times with whitespace. Prepend with \"-\" to make a time negative.<br>It will use the number of decimal points of precision after seconds based on the first time."
    },
    {
        name: "Average times",
        urlq: "avgtimes",
        desc: "Calculates the average of provided times.<br>Separate times with whitespace. Prepend with \"-\" to make a time negative.<br>It will use the number of decimal points of precision after seconds based on the first time."
    },
    {
        name: "Base conversion",
        urlq: "baseconvert",
        desc: "Converts input from a specified base to another specified base.<br>Put your bases in square brackets at start or end.<br>Provide two bases separated by a space in base ten, with the 'from' base first and 'to' base second.<br>Optionally provide an alphabet to interpret the numbers with.<br>Bases are required to be at least 2."
    },
    {
        name: "Caesar cipher",
        urlq: "caesar",
        desc: "Applies Caesar cipher on the given key.<br>Put your key in square brackets at start or end.<br>Negative keys are supported."
    },
    {
        name: "Evaluate",
        urlq: "eval",
        desc: "Runs the eval() JavaScript function on the input.<br>Errors will be caught and shown."
    }
];

function runFunction(func, inpString) {
    let parsed = parseWithParam(inpString);
    switch (func) {
        case "Add times":
        case "Average times":
            if (inpString.match(/[^0-9:.\s-]+/)) {
                return "Remove strange characters."
            }
            return addtimes(inpString, func == "Average times");
        case "Base conversion":
            if (parsed && parsed.param.match(/^[0-9]+ [0-9]+( [0-9A-Za-z]+)?$/)) {
                let params = parsed.param.split(" ")
                
                let fromBase = parseInt(params[0]);
                let toBase = parseInt(params[1]);
                if (fromBase < 2 || toBase < 2) {
                    return "Bases cannot be less than 2."
                }

                let alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                if (params.length == 3) {
                    alphabet = params[2];
                }

                let absInput = parsed.input;
                if (absInput[0] == "-") {
                    absInput = absInput.slice(1);
                }

                if (absInput.split("").some((e) => alphabet.slice(0, fromBase).indexOf(e) < 0)) {
                    return "Character not present in the alphabet found.";
                }

                if (alphabet.length < Math.max(fromBase, toBase)) {
                    return "Not enough characters to represent numbers in the specified bases.";
                }

                return baseconvert(parsed.input, fromBase, toBase, alphabet);
            } else {
                return "Couldn't parse input."
            }
        case "Caesar cipher":
            if (parsed && parsed.param.match(/^-?[0-9]+$/)) {
                return caesar(parsed.input, parseInt(parsed.param))
            } else {
                return "Couldn't parse input."
            }
        case "Evaluate":
            try {
                return eval(inpString);
            } catch (error) {
                return error;
            }
        default:
            return "Please select a function.";
    }
}

function parseWithParam(str) { //thanks to Luminosity Tim for writing most of this function
    str = str.trim();
    const regex = /^(?:\[(.+)\](.+)|(.+)\[(.+)\])$/;
    const match = str.match(regex);
    if (!match) return null;
    let result = null;
    if (match[1] && match[2]) { // [param] input
      result = { input: match[2].trim(), param: match[1].trim() };
    } else if (match[3] && match[4]) { // input [param]
      result = { input: match[3].trim(), param: match[4].trim() };
    }
    if (result && result.input.length > 0 && result.param.length > 0 && !result.input.match(/(\[)|(\])/) && !result.param.match(/(\[)|(\])/))
      return result;
    return null;
}

function addtimes(times, avg) {
    times = times.replaceAll(/\s/g, " ");
    while (times.match("  ")) {
        times.replaceAll("  ", " ");
    }
    let splitInput = times.split(" ");
    let precisionLevel = splitInput[0].split(".")[1] == undefined ? 0 : splitInput[0].split(".")[1].length;
    let precisionPow = Math.pow(10, precisionLevel);
    let decimals = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    for (t = 0; t < splitInput.length; t++) {
        let negative = splitInput[t][0] == "-";
        if (negative) { splitInput[t] = splitInput[t].substring(1); }
        let splitTime = splitInput[t].split(".");
        if (splitTime.length == 1) { splitTime.push(0); }
        let prePoint = splitTime[0];
        let postPoint = splitTime[1];
        let splitPrePoint = prePoint.split(":");
        while (splitPrePoint.length < 3) {
            splitPrePoint.splice(0, 0, "0"); //INSERTS "0" string at index 0 (first int) and removing 0 (second int) elements
        }
        decimals += Number.parseInt(postPoint) * (negative ? -1 : 1);
        seconds += Number.parseInt(splitPrePoint[2]) * (negative ? -1 : 1);
        minutes += Number.parseInt(splitPrePoint[1]) * (negative ? -1 : 1);
        hours += Number.parseInt(splitPrePoint[0]) * (negative ? -1 : 1);
    }
    let summed = ((hours * 3600 + minutes * 60 + seconds) * precisionPow + decimals);
    if (avg) {
        summed = (summed / splitInput.length)|0;
    }
    let resultNegative = summed < 0;
    if (resultNegative) { summed *= -1; }
    seconds = 0;
    minutes = 0;
    hours = 0;
    while (summed >= 3600 * precisionPow) {
        summed -= 3600 * precisionPow;
        hours++;
    }
    while (summed >= 60 * precisionPow) {
        summed -= 60 * precisionPow;
        minutes++;
    }
    while (summed >= precisionPow) {
        summed -= precisionPow;
        seconds++;
    }
    decimals = summed;
    return `${resultNegative ? "-" : ""}${hours > 0 ? hours + ":" : ""}${hours == 0 ? minutes : minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${precisionLevel > 0 ? "." + decimals.toString().padStart(precisionLevel, '0') : ""}`;
}

function baseconvert(str, fr, to, alphabet) {
    let middle = 0n;

    let isNegative = str[0] == "-";
    if (isNegative) {
        str = str.slice(1);
    }

    let fromBig = BigInt(fr);
    for(let i = 0; i < str.length; i++) {
        middle = middle * fromBig + BigInt(alphabet.indexOf(str[i]));
    }

    let result = "";
    let toBig = BigInt(to);
    while (middle > 0) {
        let rem = middle % toBig;
        result = alphabet[rem] + result;
        middle /= toBig;
    }

    let portionLength = 37;
    let resultArr = [];
    let portions = result.length / portionLength + 1; // number of chars in the input box for reference.
    for (let i = 0; i < portions; i++) {
        resultArr.push(result.slice(portionLength * i, Math.min(portionLength * (i + 1), result.length)));
    }

    return (isNegative ? "-" : "") + resultArr.join("<br>");
}

function caesar(inp, par) {
    const ualp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lalp = "abcdefghijklmnopqrstuvwxyz";
    while (par < 26) { par += 26; }
    let out = "";
    for (ix = 0; ix < inp.length; ix++) {
        chr = inp[ix];
        if (chr.match(/[A-Z]/)) {
            out += ualp[(ualp.indexOf(chr) + par) % 26];
        } else if (chr.match(/[a-z]/))  {
            out += lalp[(lalp.indexOf(chr) + par) % 26];
        } else {
            out += chr;
        }
    }
    return out;
}