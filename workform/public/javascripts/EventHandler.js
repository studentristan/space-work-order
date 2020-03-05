/**
 * Comment header block
 */

//setup-----------------------------------------------------------------------------------------------------------------
export default class EventHandler {  //everything goes in here
#location;
#priority;
#resourceFound;
#submitter;
#year;
#month;
#day;
#description;

  constructor() {
    this.handleLocationInput();
    this.handlePriorityInput();
    this.handleResourceFoundInput();
    this.handleSubmitterInput();
    this.handleYearInput();
    this.handleMonthInput();
    this.handleDayInput();
    this.handleDescriptionInput();
    this.handleSubmitPress();
    this.handleNextPress();
  }

  //handle change inputs------------------------------------------------------------------------------------------------
  handleLocationInput() {
    document.getElementById('location').addEventListener('change', () => {
      this.setLocation(document.getElementById('location').value);
      console.log(`Location Updated: ${this.#location}`);
    })
  }

  handlePriorityInput() {
    document.getElementById('priority').addEventListener('change', () => {
      this.setPriority(document.getElementById('priority').value);
      console.log(`Priority Updated: ${this.#priority}`);
    })
  }

  handleResourceFoundInput() {
    document.getElementById('resourceFound').addEventListener('change', () => {
      this.setResourceFound(document.getElementById('resourceFound').value);
      console.log(`Resource Found Updated: ${this.#resourceFound}`);
    })
  }

  handleSubmitterInput() {
    document.getElementById('submitter').addEventListener('change', () => {
      this.setSubmitter(document.getElementById('submitter').value);
      console.log(`Submitter Updated: ${this.#submitter}`);
    })
  }

  handleYearInput() {
    document.getElementById('year').addEventListener('change', () => {
      this.setYear(document.getElementById('year').value);
      console.log(`Year Updated ${this.#year}`);
    })
  }

  handleMonthInput() {
    document.getElementById('month').addEventListener('change', () => {
      this.setMonth(document.getElementById('month').value);
      console.log(`Month Updated: ${this.#month}`);
    })
  }

  handleDayInput() {
    document.getElementById('day').addEventListener('change', () => {
      this.setDay(document.getElementById('day').value);
      console.log(`Day Updated: ${this.#day}`);
    })
  }

  handleDescriptionInput() {
    document.getElementById('description').addEventListener('change', () => {
      this.setDescription(document.getElementById('description').value);
      console.log(`Description Updated: ${this.#description}`);
    })
  }

  //handle buttons------------------------------------------------------------------------------------------------------
  handleSubmitPress() {
    let submittedAnswer = [];
    document.getElementById('submit').addEventListener('click', () => {
      submittedAnswer[0] = this.#location;
      submittedAnswer[1] = this.#priority;
      submittedAnswer[2] = this.#resourceFound;
      submittedAnswer[3] = this.#submitter;
      submittedAnswer[4] = this.#description;
      submittedAnswer[5] = this.#year;
      submittedAnswer[6] = this.#month;
      submittedAnswer[7] = this.#day;
    console.log(submittedAnswer.length);
    console.log(submittedAnswer);
    })
  }

  handleNextPress() {
    let preset1 = ["Mars", 4, "Iron", "Dove Sanders", "A big piece of Iron!", 2004, "July", 4];
    let preset2 = ["Earth", 5, "Ice", "Dove Sanders", "A big piece of Ice!", 2004, "June", 5];
    let i = 0;
    document.getElementById('next').addEventListener('click', () => {
        if (i === 0) {
          document.getElementById('location').value = preset1[0];
          document.getElementById('priority').value = preset1[1];
          document.getElementById('resourceFound').value = preset1[2];
          document.getElementById('submitter').value = preset1[3];
          document.getElementById('description').value = preset1[4];
          document.getElementById('year').value = preset1[5];
          document.getElementById('month').value = preset1[6];
          document.getElementById('day').value = preset1[7];
          i ++;
        }
        else if (i === 1) {
          document.getElementById('location').value = preset2[0];
          document.getElementById('priority').value = preset2[1];
          document.getElementById('resourceFound').value = preset2[2];
          document.getElementById('submitter').value = preset2[3];
          document.getElementById('description').value = preset2[4];
          document.getElementById('year').value = preset2[5];
          document.getElementById('month').value = preset2[6];
          document.getElementById('day').value = preset2[7];
          i ++;
        }
      else {console.log("out of places to mine!");}
    });
  }



  //variable setters
  setLocation(location) {
    this.#location = location;
  }

  setPriority(priority) {
    this.#priority = priority;
  }

  setResourceFound(resourceFound) {
    this.#resourceFound = resourceFound;
  }

  setSubmitter(submitter) {
    this.#submitter = submitter;
  }

  setYear(year) {
    this.#year = year;
  }

  setMonth(month) {
    this.#month = month;
  }

  setDay(day) {
    this.#day = day;
  }

  setDescription(description) {
    this.#description = description;
  }
}

