let fs=require("fs");
let path=require("path");
//tree
function treeFn(dirPath){
    if(dirPath==undefined)
        dirPath=process.cwd();//if path node given works on current folder
    else if(fs.existsSync(dirPath)==false){
        console.log("No such folder.Please enter the correct one");
        return;}
    else if(fs.lstatSync(dirPath).isFile()){
        console.log("Folder is required not the file");
        return;}
    
    console.log("implementing organize for, ",path.basename(dirPath),".........");
    treeHelper(dirPath,"");
}

function treeHelper(dirPath,indent){
    if(fs.lstatSync(dirPath).isFile()){
        let fileName=path.basename(dirPath);
        console.log(indent+"|____"+fileName);
    }
    else{
        let folderName=path.basename(dirPath);
        console.log(indent+"|----📁"+folderName);
        let childs=fs.readdirSync(dirPath);
        for(let idx in childs){
            let childPath=path.join(dirPath,childs[idx]);
            treeHelper(childPath,indent+"|\t");
        }
    }
}

module.exports={
    treeKey:treeFn
}