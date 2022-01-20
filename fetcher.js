//It should take two command line arguments:
//a URL - download it to the local file path and print message
//a local file path

//message
//"Downloaded and saved 1235 bytes to ./index.html"

//two operations in this problem will take an unknown amount of time:

//make an http request and wait for the response.
//After its complete, you need to take the data you receive and write it to a file in your local filesystem.
const request = require("request");
const fs = require("fs");

const file = process.argv[3];
const url = process.argv[2];

request(url, (error, response, body) => {
  // console.log("making a request");
  if (!error && response === 200) {
    console.log('error:', error);
  } else {
    fs.writeFile(`${file}`, body, (err) => {
      if (err) {
        console.error(`HERE is the Error : ${err}`);
      } else {
        //file written successfully
        console.log(`Downloaded and saved to ${file}`);
      }
    });
  }
})

//EDGE CASE
// - What should happen if:
//1 - the local file already exists?
// 2 - the local file path given is invalid?
