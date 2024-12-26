let key = "4434b286e0d446749766acc77130c465";
let cardData= document.querySelector(".cardData");
let searchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
//let searchType = document.getElementById("type");

    const getData = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData=  await res.json();
      console.log(jsonData.articles); 

      cardData.innerHTML="";
      jsonData.articles.forEach(function(article){
       console.log(article);

       let data = document.createElement("div");
      data.classList.add("card");
      cardData.appendChild(data);

      data.innerHTML=`
      <img src ="${article.urlToImage}" alt="">
      <h3> ${article.title}</h3>
       <p>${article.description } </p>

      `
      data.addEventListener("click",function(){
    window.open(article.url);
      });

      })
    }
      window.addEventListener("load",function(){
        getData("India")

      });
    searchBtn.addEventListener("click",function(){
        let inputText= inputData.value
        getData(inputText);
    })

    function navclick(navName){


      getData(navName);
    };
    
