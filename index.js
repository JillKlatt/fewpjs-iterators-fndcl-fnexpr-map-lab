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

const titleCased = (input) => {
  return tutorials.map( line => {
    const elements = line.split(' ');
    // console.log(elements)
    const capitals = 
      elements.map( element => element.charAt(0).toUpperCase() + element.slice(1) );
    const solution = capitals.join(' ');
    console.log(solution)
    return solution;
  })
}

