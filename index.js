var assignmentCards = $('.assignment-cards');
var submit = $('.submit-btn');

submit.on("click", createNewAbsence);

function createNewAbsence() {
  var name = $('.student-name').val();
  var assignment = $('.assignment').val();
  var date = $('.date-absent').val();

  appendAbsentStudent(name, assignment, date);
  clearStudents();
}

function appendAbsentStudent(name, assignment, date) {
  assignmentCards.append(`
    <div class="whole-card">
      <p class="new-card">${name} is missing ${assignment} due to being absent on ${date}.</p>
      <button class="delete">Remove</button>
    </div>
  `);

  // var delete=$('.delete');
  // delete.on("click", remove);
}

function clearStudents() {
  $('.student-name').val("");
  $('.assignment').val("");
  $('.date-absent').val("");
}


// var wholeCard=$('.whole-card');

// //
// function remove() {
//   event.target.parentNode.remove();
//
// }
