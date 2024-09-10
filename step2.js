//STEP TWO

const fs = require('fs');
const process = require('process');
const axios = require('axios');

//read file and print 

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(`ERROR!!! ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

//read page and print

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`ERROR when fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}