/*
 * Authors - Sahar Weisbrot and Or Ben David
 */
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "text");

let line = "";

/*
 * Reads content from multiple text files, processes each line,
 * and writes the processed content to an output file.
 */
for (let i = 1, j = 0; i <= 10; i++, j++) {
  // Read the content of the current file
  let textIn = fs.readFileSync(`${dirPath}/${i}.txt`, "utf-8");

  // Split the content into lines
  let arr = textIn.split("\r\n");

  // Process the lines and append them to the output
  for (let j = 0; j < i; j++) {
    line += "\n" + arr[j].split(" ");
  }
}

// Remove the first newline character and prepare the final output
let textOut = line.substring(1);

// Write the processed content to the output file
fs.writeFileSync(`${dirPath}/output.txt`, textOut);
