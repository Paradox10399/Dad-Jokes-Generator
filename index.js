const btnEl = document.getElementById("btn");
const jokeEL =document.getElementById("joke");


const apiKey = "MFow5RFcguf5m1qnS6LWKw==FjHvvrZLTjzpEoEK"


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};


const apiUrl ="https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){

    try {  
    jokeEL.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "LOADING...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";


    jokeEL.innerText = data[0].joke;
        
    } catch (error) {
        jokeEL.innerText = "An error happened, try again later";
        btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
        console.log(error);
    }

  

}



btnEl.addEventListener("click", getJoke);
