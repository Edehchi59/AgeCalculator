function calculateAge() {
  //  Inputs
  const dayInput = parseInt(document.getElementById("day").value, 10);
  const monthInput = parseInt(document.getElementById("month").value, 10);
  const yearInput = parseInt(document.getElementById("year").value, 10);

  // Results fields
  const day = document.getElementById("days");
  const month = document.getElementById("months");
  const year = document.getElementById("years");

  //   Label Error message
  const errorLabel = document.querySelectorAll(".errorMsg");
  const errorText = document.querySelectorAll("#error i");

  // error input
  const focusInput = document.querySelectorAll(".errorFocus");

  // Check if the day input is valid for the selected month
  if (
    (dayInput === 31 &&
      (monthInput === 4 ||
        monthInput === 6 ||
        monthInput === 9 ||
        monthInput === 11)) ||
    (dayInput > 29 && monthInput === 2)
  ) {
    errorText.forEach((error, index) => {
      if (index == 0) {
        error.innerHTML = `Must be a valid date`;
      }
    });
    errorLabel.forEach((errlabel) => {
      errlabel.style.color = "hsl(0, 100%, 67%)";
    });
    focusInput.forEach((errfocus) => {
      errfocus.style.borderColor = "hsl(0, 100%, 67%) ";
    });
    return;
  }

  // Check if any input field is empty
  if (!dayInput || !monthInput || !yearInput) {
    errorText.forEach((error) => {
      error.innerHTML = `This field is required`;
    });
    errorLabel.forEach((errlabel) => {
      errlabel.style.color = "hsl(0, 100%, 67%)";
    });
    focusInput.forEach((errfocus) => {
      errfocus.style.borderColor = "hsl(0, 100%, 67%) ";
    });
    return;
  }

  // Clear any previous error messages
  errorText.forEach((error) => {
    error.innerHTML = "";
  });
  errorLabel.forEach((errlabel) => {
    errlabel.style.color = "";
  });
  focusInput.forEach((errfocus) => {
    errfocus.style.borderColor = "";
  });

  // Check if the inputs are valid
  if (
    isNaN(dayInput) ||
    isNaN(monthInput) ||
    isNaN(yearInput) ||
    dayInput < 1 ||
    dayInput > 31 ||
    monthInput < 1 ||
    monthInput > 12 ||
    yearInput < 1900 ||
    yearInput > 2099
  ) {
    errorText.forEach((error, index) => {
      if (index == 0) {
        error.innerHTML = `Must be a valid day`;
      }
      if (index == 1) {
        error.innerHTML = `Must be a valid month`;
      }
      if (index == 2) {
        error.innerHTML = `Must be in the past`;
      }
    });
    errorLabel.forEach((errlabel) => {
      errlabel.style.color = "hsl(0, 100%, 67%)";
    });
    focusInput.forEach((errfocus) => {
      errfocus.style.borderColor = "hsl(0, 100%, 67%) ";
    });
    return;
  }

  // Create a Date object from the inputs
  const dob = new Date(yearInput, monthInput - 1, dayInput);
  const currentDate = new Date();

  console.log(dob);
  console.log(currentDate);
  // Calculate the age difference in milliseconds
  const ageDiff = currentDate - dob;

  // Convert milliseconds to years, months, and days
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const years = Math.floor(ageDiff / (millisecondsPerDay * 365));
  const remainingDays = ageDiff % (millisecondsPerDay * 365);
  const months = Math.floor(remainingDays / (millisecondsPerDay * 30));
  const days = Math.floor(
    (remainingDays % (millisecondsPerDay * 30)) / millisecondsPerDay
  );

  // Display the result to the user
  day.innerHTML = `${days}`;
  month.innerHTML = `${months}`;
  year.innerHTML = `${years}`;
}
