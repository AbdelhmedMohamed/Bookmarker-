

var bookmarkNameInput = document.getElementById('bookmarkNameInput') ;
var bookmarkURLInput = document.getElementById('bookmarkURLInput') ;

var tableBody =document.getElementById('tableContent') ;



var webContainer  ;
if(localStorage.getItem('myWebs')!=null){
    webContainer=JSON.parse(localStorage.getItem('myWebs'))
    displayWebs(webContainer) ;
}else{
    webContainer =[] ;
}

//=======================================

function addWeb(){

  if(validateWeb(bookmarkNameInput.value)&&validatURLeWeb(bookmarkURLInput.value)){
    var web ={
        webName : bookmarkNameInput.value ,
        webURL  :bookmarkURLInput.value ,
        
    }
    webContainer.push(web) ;
    localStorage.setItem('myWebs' , JSON.stringify(webContainer)) ;

    console.log(webContainer);

    clearForm() ;
    displayWebs(webContainer) ;
  }else{
    alert('Site Name or Url is not valid, Please follow the rules below : Site name must contain at least 3 characters ; Site URL must be a valid one')
  }

}

//========================================


function clearForm(){
    bookmarkNameInput.value = '' ;
    bookmarkURLInput.value = '' ;
   
 }

//=========================================

function displayWebs(arr){
    var cartoona = `` ;

    for(var i=0 ; i<arr.length ; i++){
var webIndex=i+1 ;
cartoona +=`
<tr>

<td>${webIndex}</td>
<td>${arr[i].webName}</td>

<td><a href="${arr[i].webURL}" target="_blank"><button class="btn btn-success" data-index="0">
<i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>



<td><button onclick="deletWeb(${i})" class="btn btn-danger pe-2" data-index="0">
    <i class="fa-solid fa-trash-can"></i>Delete</button></td>

</tr> `
    }
    tableBody.innerHTML = cartoona ;


}

console.log(toString(arr[i].bookmarkURLInput));

//================================================

function deletWeb(deleteIndex){

    webContainer.splice(deleteIndex,1) ;
    localStorage.setItem('myWebs' , JSON.stringify(webContainer)) ;

    displayWebs(webContainer) ;

}

//================================================

function validateWeb(name){
    var regex = /^[a-zA-Z0-9 ]{3,}$/ ;
    if(regex.test(name)){
        bookmarkNameInput.classList.replace('is-invalid' ,'is-valid')
        return true 
    }else{
        bookmarkNameInput.classList.add('is-invalid') 
        return false
    }

}

//===================================================

function validatURLeWeb(name){
    var regex =/^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
    if(regex.test(name)){
        bookmarkURLInput.classList.replace('is-invalid' ,'is-valid')
        return true 
    }else{
        bookmarkURLInput.classList.add('is-invalid') 
        return false
    }

}

//===============================================

