var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'pdfviewerApp', 'coolMethod', [arg0]);
};

// module.exports.print = function (arg0, success, error) {
//     exec(success, error, 'pdfviewerApp', 'print', [arg0]);
// };