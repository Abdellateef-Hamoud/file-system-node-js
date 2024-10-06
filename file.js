const fs = require('fs')


///////    function for create a new file.txt 
fs.open('file1.txt','w',function(err,data){
    if(err){
        console.log("~ fs.open ~ error:",err)
    }
    console.log("~ fs.open ~ data:",data)
})



/////////    function for append on file if already created or create it and append if dont created
fs.appendFile('file2.txt','hello world im my new file ',function(err){
    if(err){
        console.log("~ fs.open ~ error:",err)
    }
})


/////////    function for read from file if already created
fs.readFile('file2.txt',function(err,data){
    console.log("~ fs.open ~ data:",data.toString())
})



/////////    function for delete file if already created
fs.unlink('file1.txt',function(err){
    if(err){
        console.log("~ fs.open ~ error:",err)
    }
})



/////////    function for rename file if already created
fs.rename('file2.txt','index.html',function(err){})

