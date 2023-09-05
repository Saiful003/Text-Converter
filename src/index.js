import "./styles.css";

// dom element select
const ourForm = document.getElementById("form");

// create a function that received a text and cleaned it
const removeHypenAndUnderscore = (inputText) => {
  // checking process if text is not contain regex value
  const regexOne = /[-_]/g;
  const isFound = inputText.match(regexOne);
  if (!isFound) return false;

  // Use a regular expression to remove hyphens and underscores
  const cleanedText = inputText
    .replace(regexOne, " ")
    .split(" ")
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
    .join(" ");

  return cleanedText;
};

// form submit handler
const handleSubmit = (e) => {
  e.preventDefault();
  // select input field
  const inputValue = document.getElementById("uncleanText").value;
  const inputElement = document.getElementById("uncleanText");

  // soft checking before passing value
  if (!inputValue) return alert("Enter Your Text Please");

  // pass this unclean value into our sanitize function perameter.
  const finalCleanText = removeHypenAndUnderscore(inputValue);

  // Dom Selection For Showing Clean Text
  const cleanTextPlaceholder = document.querySelector(".clean_text");

  // checking process
  if (!finalCleanText) {
    alert("Your provided text not contain any - or _");
    inputElement.value = "";
    cleanTextPlaceholder.textContent = "";
    return;
  }
  // showing clena text
  cleanTextPlaceholder.textContent = finalCleanText;

  // finally reset input value
  inputElement.value = "";
};

ourForm.addEventListener("submit", handleSubmit);
