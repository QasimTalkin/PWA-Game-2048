module.exports = function (grunt){
    grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.initConfig({connect:{
            localhost:{
                options:{
                        port:15000,
                        keepalive: true
                }
            }
        }
    });
};

//file path check. 
const path = './js/grid.js'
const fs = require('fs')
if (fs.existsSync(path)){
    console.log("yy");
};