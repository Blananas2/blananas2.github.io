# Wordlist Checker documentation:
KTANE Wordlist Checker is a tool used to check for if specific words are in a module's wordlist, by fetching wordlists from GitHub repositories.
Note this is _not_ recessary for modules where the wordlist is listed in the manual, and cannot be done for modules which are not open-source.
Currently Wordlist Checker only accepts letters (in either case) as input.

Within ***`js/wordlist.js`*** there are two arrays of JavaScript objects which Wordlist Checker uses:<br>
**`moduleData`** is mandatory, and **`exceptionData`** is optional.

## `moduleData`
Each object in this array consists of five properties, none of which can be omitted:
- **`mod`** _(string)_ is the name of the module, which should match what is shown on the main page of the [Repository of Manual Pages](https://ktane.timwi.de/).
  - Sort these arrays in the same way as the manual repository: alphabetically omitting instances of "The" at the start, ignoring spaces.
  - In cases where the module name contains a `’` or `×`, replace them with `'` and `x` respectively as those characters are not supported by the site's font. If there's no fitting substitute for a character, `☺` can be used instead.
- **`id`** _(string)_ is the module ID of the module, which should also match that of what is shown on the Repository of Manual Pages.
  - The relevant use case here is for Wordlist Checker's URL parameters, appending `?m=moduleID` to the URL will set the module selection to whichever module has the ID `moduleID`, if present.
- **`url`** _(string)_ is the URL where the file containing the wordlist for the module is located.
  - Use the *raw* URL for this: Navigate to the file at the corresponding module's GitHub repository then click the "Raw" button to be sent to the raw page.
  - The specific file format is not relevant; the code will interpret the entire file's source as a string.
  - At the top of ***`wordlist.js`*** there are a few constants which serve to make the file less repetitive. The most applicable one is **`rghuc`** which is the string `https://raw.githubusercontent.com/`.
  - Wordlist Checker currently only has the ability to use _one_ URL, if the wordlist is split among two or more files, a file to use as an alternative should be provided within this repository instead so that the tool is able to function.
  - The `!` button on the site will open the page in a new tab, which is good because you doesn't send a fetch request just to ensure the URL is correct.
- **`pad`** _(string)_ is the padding which the word by the user will be expected to be surrounded by within the source file, the `*` in this string is where the word will be placed.
  - Like **`url`**, there's constants at the top of ***`wordlist.js`*** for the two most common paddings: **`q`** and **`c`** are the strings `"*"` and `,*,` respectively.
  - In cases where the padding is different for words at the start or end of the wordlist, use **`exceptionData`** for ways to work around such problems and make sure these specific cases are tested _before_ submitting a pull request.
- **`cap`** _(bool)_ specifies how the text within the file is capitalized, where `true` or `false` are uppercase or lowercase respectively.
  - In cases where the words within the wordlist are in mixed case, **`forceCap`** should be used within **`exceptionData`**. Set **`cap`** corresponding to the more frequent letter case.

To summarize in the context of the actual site, whenever the user selects the module matching **`mod`** property in one of these objects, that object is used. Specifically, the site will change the capitalization of the input based on **`cap`**, fetch from the specified **`url`** for the file which is then interpreted as a string, then looks for any instances of the input present with the specified **`pad`** present to determine whether that word is present within the wordlist.

## `exceptionData`
Each object in this array can have an arbitrary number of properties, depending on what should or should not be valid words:
- **`mod`** _(string)_ works in exactly the same way as it does in **`moduleData`**, this is the only mandatory property.
- **`befAftReplace`** _(array: [string, string])_ replaces all instances the first "before" string within the file string to the second "after" string.
- **`forceCap`** _(bool)_ forces the capitalization of the file string, where `true` or `false` makes the string uppercase or lowercase respectively.
- **`surround`** _(string)_ places the specified characters before or after the file string, relative to where they appear where `*` is replaced with the file string.
- **`excText`** _(string)_ specifies what text should be shown in the event a specific exception is triggered.
  - Exception text is not only allowed but encouraged to be more nuanced than words just being in or not in the wordlist, ideally descriptive but concise.
  - Just above **`exceptionData`**, there are a few constants for phrases commonly used for exception text, where `*` is replaced with the module name.
  - If this property is absent, it will say the word is not in the wordlist if triggered.
- **`excColor`** _(string)_ specifies the color of the exception text.
  - Use [named colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color) for readability, ideally those already present in the file. The site's preferred shades of green, yellow, and red are the **`g`**, **`y`**, and **`r`** constants respectively.
  - If this property is absent, the default color crimson is used if triggered.
- **`eqlLength`** _(int)_ or **`minMaxLength`** _(array: [int, int])_ will trigger an exception if the given word's length is not the specified number or within the specified range (inclusive).
- **`excWords`** _(array: strings)_ will trigger an exception if the given word is any of the words present in the array.
  - These strings _must_ be in all-caps.
- **`splitSpec`** _(array: [string, array: strings, array: strings])_ allows setting custom text by splitting the file string into multiple portions, split by any occurance of the first string in the array, with the two nested arrays containing the text and color respectively for the corresponding portion of the file string.
  - It is not recommended you use **`splitSpec`** alongside other exception triggers as those will take priority.
  - Ensure that the length of the nested arrays match the number of portions the file string should be split into, even if a section contains no words, and test each portion individually.
  - Should a section contain no words, for readability set it's corresponding locations in the nested arrays to `null`.
  - The nested arrays work in exactly the same way as **`excText`** and **`excColor`**.

When submitting a pull request, don't forget to update the date on line 70 of ***`wordlistchecker.html`***.<br>
If you have any comments, questions, concerns, suggestions: do not hesitate to contact me (@blananas2) on Discord.

Bonus tip: In addition to appending `?m=moduleID` to the URL, appending `?m=moduleID&q=query` will let you select a word to query for that module. Computing the result of that query will also be done automatically.