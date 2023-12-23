
# Fix insensitive imports in Javascript caused by FS like windows 

Fix insensitive import in Javascript/typescript caused by insensitive filesystems like Windows.   
When working on a project utilizing a JavaScript framework such as Angular on a Windows system, you may encounter an issue with case-insensitive imports.   
 This becomes especially problematic when deploying on a sensitive file system like Ubuntu, requiring tedious and frustrating manual fixes for each file. The primary goal of the project is to address this issue by dynamically resolving imports based on the actual filename where they are imported from.
# Install
```
npm install fix-insensitive-import
```

# Usage & Api

- 1 Create an instance of the FixInsencitiveImport :   
the configuration is very sample , you just need to configure the target
directory where the library will handle the files, by default the library
create a log directory named "fix_insencitive_import_logs" where the logs are stored 
you can disable the logs by setting the shouldLog to false


```javascript

 import  { FixInsencitiveImport }  from "fix-insensitive-import";

const fixInsencitiveImport = new FixInsencitiveImport({
    targetDir : "./sample",
    shouldLog : false 
})

fixInsencitiveImport.execute();

```

If you want to handle just a specefic file names for example the files that 
end with ".component.ts", you can add a file handle rule

```javascript

 fixInsencitiveImport.addHandleFileRule(function(filename){
     return filename.includes(".component.js")
 })

 fixInsencitiveImport.execute();

```
