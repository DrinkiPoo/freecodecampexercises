/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let obj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.split("")
  .map(char => (obj.hasOwnProperty(char))
  ? obj[char]
  : char
  ).join("");
}

convertHTML("Dolce & Gabbana"); // returns "Dolce &amp; Gabbana"

