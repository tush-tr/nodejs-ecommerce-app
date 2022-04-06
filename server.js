const app = require("./app")
const setSecrets = require("./utils/secrets")

setSecrets().then((res)=>{
    if(res){
        app.listen(3001,()=>{
            console.log("Server is up")
        })
    }else{
        console.error("Problem in adding secrets")        
    }
})


