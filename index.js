const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        // Handle specific words with special capitalization
        if (word === 'stopPropagation') {
          return 'StopPropagation';
        } else if (word === 'preventDefault') {
          return 'PreventDefault';
        }
        // Handle special cases for acronyms
        if (word === 'JSONP') {
          return 'JSONP'; // Ensure JSONP is in uppercase
        }
        // For special words that should remain unchanged
        if (["API", "OO", "NaN"].includes(word)) {
          return word;
        }
        // Capitalize the first letter of other words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
};

console.log(titleCased());
