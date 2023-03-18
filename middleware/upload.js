const multer=require('multer');

const path=require("path");

const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads");

    },
     filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.organizationName);   //
     }
});

const fileFilter=(req,file,callback)=>{
    const validExts=[".png",".jpg"];
    if(!validExts.includes(Path.extname(file.orginalname))){
        return callback(new Error("Only  .png jpeg format allow"));
    }
    const filesize=parseInt(req.header["content-length"]);
    if(fileSize>1048576){
        return callback(new Error("File size is Big"));
    }

    callback(null,true); //no issue
}

let upload=multer({
    storage:storage,
    fileFilter:fileFilter,
    fileSize:1048576,
});

module.exports=upload.single("productImage");