
// Import 3rd Party
const shortid = require('shortid');
const moment = require('moment');

// Import Local
const chad = require('./self');

module.exports = function(){


    //console.log('shortid:', shortid);
    //console.log( shortid.generate() );

    console.log( moment().format('M-D-Y') );

    console.log("Self:", chad);

    chad.sayHi();
}();