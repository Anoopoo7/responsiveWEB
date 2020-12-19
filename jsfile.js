
document.querySelector('.button').addEventListener("click",function(){
  data= document.querySelector('#name').value;
  password= document.querySelector('#password').value;
  localStorage.setItem("name",data);
  localStorage.setItem("password",password);
});
