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
  const newTutorials = tutorials.map(tutorial => {
    // split sentence into array of words and iterate thru the array
    const words = tutorial.split(' ');
    // capitalize first letter of each word then join the words back into a sentence
    const newSentence = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return newSentence;
  });

  return newTutorials;
}

titleCased()
