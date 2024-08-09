//most important libraries os and fs and lodash also most important

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.user);
console.log(user.username);

fs.appendFile('greeting.txt','hi '+user.username+' !\n', ()=>{
    console.log('File created.');
})




