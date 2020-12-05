"use strict";

/*
    This file will work as a standalone pub on heroku.com, but all data will be lost at least every 24 hours.
    It will import the rest of the earthstar-pub package from npm.

    Since the data is so ephemeral, this is mostly for testing purposes.
*/

const pub = require('earthstar-pub');

const port = 80;
pub.serve({
    port: port,
    readonly: false,  // if true, don't accept any new data from users to any workspace
    allowPushToNewWorkspaces: true,  // if true, let users add new workspaces
    discoverableWorkspaces: false,  // if true, show workspace addesses in the web interface
    storageType: 'memory',  // use memory to store data because heroku doesn't support sqlite. this will be extra-ephemeral
    // dataFolder: '.data',  // put sqlite files here
    logLevel: 2,  // 2 = verbose, 3 = include sensitive info (workspace addresses)
});

console.log(`earthstar-pub is running on port ${port}.  ${new Date()}`);

/*
let printSqliteFiles = () => {
    console.log();
    let fs = require('fs');
    let files = fs.readdirSync('.data');
    console.log('.data files:\n'+files.join('\n'));
    console.log();
}
//printSqliteFiles();
*/
