#!/usr/bin/env node
let helpObj=require("./commands/help");//. mans in same dir,..maens parent dir
let organizeObj=require("./commands/organize");//returns obj(fun) from there
let treeObj=require("./commands/tree");
let types={
    images:['.jpg','.jpeg','.png'],
    audio:['.aif','.cda','.iff','.mid','.midi','.mp3','.mpa','.wav','.wma','.wpl'],
    video:['.avi','.flv','.h264', '.m4v','.mkv','.mov','.mp4','.mpg','.mpeg','.rm','.swf','.vob','.wmv','.3g2','.3gp'],
    archives:['.zip', '.rar', '.7z', '.tar'],
    documents:['.doc', '.docx',	'.odt',	'.msg',	'.pdf',	'.rtf','.text','.txt','.wks','.wps','.wpd','.key','.odp','.pps','.ppt','.pptx'],
    spreadsheets:['.ods','.xlr','.xls','.xlsx'],
    databses:['.accdb','.csv','.dat','.db' ,'.dbf','.log','.mdb','.pdb','.sav','.sql','.tar'],
    web:['.asp','.aspx','.cer','.cfm','.cgi','.pl','.css','.htm','.html','.js','.jsp','.part','.php','.rss','.xhtml'],
    apps:['.exe','.dmg','.pkg','.deb']
};

/*(process.argv->creates array from input splitting on the basis of spaces)
  1st for the path of node.exe ;2nd for the path of js file you are running*/
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let dirPath=inputArr[1];//if folder path not given then undefined

//main executing if-else if-else ladder
switch(command){
    case "tree":
        treeObj.treeKey(dirPath);
        break;
    case "organize":
        organizeObj.organizeKey(dirPath);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please 🙏 enter the correct command  ");//windows+. (for emojis)
}  
    

    




