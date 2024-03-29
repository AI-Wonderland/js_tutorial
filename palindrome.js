// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

// Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
// Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
  return this.processedContent() === this.processedContent().reverse();
  }
}
//
String.prototype.blank = function(string) {
  if (string == /\^$/ || string == /\s*$/) {
  console.log("True");
} else {
  console.log("Flase");
 }
}
//
 Array.prototype.last = function(array) {
   return array[array.length];
 }
