const newman = require('newman');
//require('dotenv').config();
 
newman.run({
    collection: `https://api.postman.com/collections/36542635-0901e2eb-3e59-49d0-874d-a9ea8562ae2f?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    // environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run is complete!');
});