const period = document.querySelector('.pro')
const prev = document.querySelectorAll(".prev")
const current = document.querySelectorAll(".current")
const active = document.querySelectorAll(".active")

period.addEventListener("click", show)

let arr = []

 function getData() {
     fetch("data.json")
     .then(res => res.json())
     .then(data => {
          arr.push(data)
          Title(data)
     })
}

getData()

function Title(item) {
     console.log(item)
     for(let i=0; i < active.length; i++){
          active[i].innerHTML = `${ item[i].title}
          <span><img src="./images/icon-ellipsis.svg" alt=""></span>
          `
        }
}


function show(e) {
    
    if( e.target.matches(".daily")) 
         Daily(arr)
    else if( e.target.matches(".weekly"))
        Weekly(arr)
    else Monthly(arr)
}


function Daily(item) {

  for(let i=0; i < prev.length; i++){
       prev[i].innerHTML = "Last Week" + "-" + item[0][i].timeframes.daily.previous + "hrs"
       current[i].textContent = item[0][i].timeframes.daily.current + "hrs"
      
  }
}

function Weekly(item) {

     for(let i=0; i < prev.length; i++){
          prev[i].innerHTML = "Last Week" + "-" + item[0][i].timeframes.weekly.previous + "hrs"
          current[i].textContent = item[0][i].timeframes.weekly.current + "hrs"
     }
}

function Monthly(item) {

     for(let i=0; i < prev.length; i++){
          prev[i].innerHTML = "Last Week" + "-" + item[0][i].timeframes.monthly.previous + "hrs"
          current[i].textContent = item[0][i].timeframes.monthly.current + "hrs"
     }
}

