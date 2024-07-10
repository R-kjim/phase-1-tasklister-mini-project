document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputData=document.querySelector("#new-task-description")
  const submitBtn=document.querySelector("input[type='submit']")
  let myLists=document.querySelector("#tasks")
  submitBtn.addEventListener('click',(e)=>{e.preventDefault(),printFn(e.target.inputData)})
  function printFn(x){
    let myLi=document.createElement("li")
    myLi.textContent=inputData.value
    myLists.append(myLi)
    document.querySelector('form').reset()
  }
});

