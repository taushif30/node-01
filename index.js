const http = require("http") 
const {dummyData} = require("./dummyData")

const details=JSON.stringify(dummyData)

const app = http.createServer((req,res)=>{
   if(req.url==="/post" ){
    res.write(details)
    res.end();
   }

   else if(req.url === "/comment"){
    res.write("<h1>NODE</h1>")
    res.write("<p>Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm, unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming.</p>")
    res.end();
   }

   
   else{
    res.write("404 page not found")
    res.end();
   }
})


app.listen(4000,()=>{
    try{
    console.log("Server is running on port 4000")
    }
    catch(err){
        console.log('error occured during live server: ',err);
    }
})