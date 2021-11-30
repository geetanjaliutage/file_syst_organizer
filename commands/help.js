let fs=require("fs");
let path=require("path");
//help
function helpFn(){
    console.log(`
    List of All the commands:
                    fso tree <dirPath>
                    fso organize <dirPath>
                    fso help
                    `);
}

module.exports={
    helpKey:helpFn
}