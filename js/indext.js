
var bookmarkName=document.getElementById("bookmarkName");
var bookmarkURL= document.getElementById("bookmarkURL");


var productlist=[];

if(localStorage.getItem("container"!==null)){
productlist= JSON.parse(localStorage.getItem("container")) ;
displayData();
}



function addBroduct(){

    if(validationName()&& validationURL()==true){

    var product={
        name:bookmarkName.value,
        url:bookmarkURL.value,
    };

    productlist.push(product);

    localStorage.setItem("container",JSON.stringify(productlist) );


    displayData();

    // clearForm();
}
}


function clearForm(){
bookmarkName.value=null;
bookmarkURL.value=null;
}

function displayData(){
    var cont="";
    for(var i=0 ; i<productlist.length  ;i++){
        cont+=`<tr>
        <td>${i}</td>
        <td>${productlist[i].name}</td>              
        <td>
        ${productlist[i].url}
          <button class="btn btn-visit" data-index="0">
            <i class="fa-solid fa-eye pe-2"></i>Visit
          </button>
        </td>
        <td>
          <button onclick="deleteItems(${i})" class="btn btn-delete pe-2" data-index="0">
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
    </tr>`;
    }

    document.getElementById("tableContent").innerHTML=cont;
}

function deleteItems(indext){
 productlist.splice(indext,1)
 localStorage.setItem("container",JSON.stringify(productlist) );

 displayData();
}

function validationURL(){
    var text=bookmarkName.value;
    var regex=/^([a-zA-Z0-9_\-\.])$ /
    var massgeName=document.getElementById("masssge")


    if(regex.test(text)==true){
        bookmarkName.classList.add('is-valid')
        bookmarkName.classList.remove('is-invalid')
        massgeName.classList.add("d-none")

        return true;
    }
    else{
        bookmarkName.classList.add('is-invalid')
        bookmarkName.classList.remove('is-valid')
        massgeName.classList.remove("d-none")
        return false;
    }
}


function validationName(){
    var text=bookmarkURL.value;
    var regex=/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/

    var massgeName=document.getElementById("masssge")


    if(regex.test(text)==true){
        bookmarkURL.classList.add('is-valid')
        bookmarkURL.classList.remove('is-invalid')
        massgeName.classList.add("d-none")

        return true;
    }
    else{
        bookmarkURL.classList.add('is-invalid')
        bookmarkURL.classList.remove('is-valid')
        massgeName.classList.remove("d-none")
        return false;
    }
}