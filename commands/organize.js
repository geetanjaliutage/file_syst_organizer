let fs=require("fs");
let path=require("path");
//organize
function organizeFn(dirPath){
    if(dirPath==undefined)
        dirPath=process.cwd();//if path node given works on current folder
    else if(fs.existsSync(dirPath)==false){
        console.log("No such folder.Please enter the correct one");
        return;}
    else if(fs.lstatSync(dirPath).isFile()){
        console.log("Folder is required not the file");
        return;}
         
    console.log("implementing organize for, ",path.basename(dirPath),".........");
    let organizedPath=path.join(dirPath,"organized");
    if(fs.existsSync(organizedPath)==false){
        fs.mkdirSync(organizedPath);
    }
    organizeHelper(dirPath,organizedPath);
}

function organizeHelper(dirPath,organizedPath){
    let files=fs.readdirSync(dirPath);//returns an arr listing childs of dir(could be files or folders)
    for(let idx in files){
        let filePath=path.join(dirPath,files[idx]);
        
        if(fs.lstatSync(filePath).isFile()){
            let ext=path.extname(filePath);
            let type=getType(ext);
            if(type!="others"){
                let typeFolderPath=path.join(organizedPath,type);
                sendFiles(filePath,typeFolderPath);
            }
        }
    }
}

function getType(ext){
    for(let type in types){
        for(let idx in types[type]){
            if(types[type][idx]==ext){
                return type;
            }
        }
    }
    return "other";
}

function sendFiles(filePath,typeFolderPath){
    if(fs.existsSync(typeFolderPath)==false){
        fs.mkdirSync(typeFolderPath);
    }
    let filename=path.basename(filePath);
    let destPath=path.join(typeFolderPath,filename);
    fs.copyFileSync(filePath,destPath);//src,dest(overwrites if file already present)
    fs.unlinkSync(filePath);//removes original file
}

module.exports={
    organizeKey:organizeFn
}