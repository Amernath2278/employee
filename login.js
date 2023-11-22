function login(){
    const username=document.getElementById('uname').value
    console.log(username);

    localStorage.setItem("USERNAME",username)
    window.location="./index.html"  //redirect
}