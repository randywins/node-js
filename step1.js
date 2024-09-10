//STEP ONE

const fs = require('fs');
const process = require('process');

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

cat(process.argv[2]);