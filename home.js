
document.querySelector('.packages').addEventListener("click",function(){
  const demo = localStorage.getItem("name");
  alert(`sorry ${demo}, this option is under construction. oyu cannot access it now`);
});
document.querySelector('#logout').addEventListener("click",function(){
  localStorage.clear();
});
