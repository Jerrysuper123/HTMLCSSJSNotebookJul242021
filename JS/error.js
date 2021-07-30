var height="height";
var catchError = document.getElementById("catchError")
if(true){
    try{
        var area = height*3;
        if(!isNaN(area)){
            return area;
        } else{
            throw new Error('type error')
        }
    } catch(e){
        var errorMessage = e.name + ' '+ e.message;
        console.log(errorMessage)
        catchError.textContent = errorMessage;
        
    } finally{
        var sorry = document.createElement('p')
        sorry.textContent = "sorry about it"
        catchError.appendChild(sorry);
    }
}