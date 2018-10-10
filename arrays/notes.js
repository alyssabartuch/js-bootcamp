const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Europe'
  }, {
    title: 'habits to work on',
    body: 'exercise, eat healthier'
  }, {
    title: 'office modification',
    body: 'get a new seat'
  }];

console.log('March' < 'January');

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }

  });
}

const findNote = function(notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  })
}

const findNotes = function(notes, queryText) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(queryText.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(queryText.toLowerCase());

    return isTitleMatch || isBodyMatch
  })
}

//console.log(findNotes(notes, 'exercise'));


// const note = findNote(notes, 'OFFICE MODIFICATION');
// console.log(note);

sortNotes(notes);
console.log(notes);
