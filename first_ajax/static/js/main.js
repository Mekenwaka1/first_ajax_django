document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("button1").addEventListener("click", e => {
    axios
      .get("http://intro-ajax-api.herokuapp.com/ping")
      .then(response => {
        console.log(response.data);
        const newParagraph = document.createElement("p");
        newParagraph.innerText = response.data;
        document.querySelector("#step3").appendChild(newParagraph);
      })
      .catch(error => {
        console.error("something bad happened", error.response);
        const newParagraph = document.createElement("p");
        newParagraph.innerText =
          "something bad happened: " + error.response.data;
        document.querySelector("#step3").appendChild(newParagraph);
      })
      .finally(() => console.log("The request has finished."));
  });

  document.getElementById("button2").addEventListener("click", e => {
    axios
      .get("http://intro-ajax-api.herokuapp.com/count")
      .then(response => {
        console.log(response.data);
        const newParagraph = document.createElement("p");
        newParagraph.innerText = response.data;
        document.querySelector("#step7").appendChild(newParagraph);
      })
      .catch(error => {
        const newParagraph = document.createElement("p");
        newParagraph.innerText =
          "Something bad happened: " + error.response.data;
        document.querySelector("#step7").appendChild(newParagraph);
      })
      .finally(() => "The request has finished.");
  });

  document.getElementById("button3").addEventListener("click", e => {
    const timezone = "America/Mexico_City";
    axios
      .get("http://intro-ajax-api.herokuapp.com/time", {timezone})
      .then(response => {
        console.log(response.data);
        const newParagraph = document.createElement("p");
        newParagraph.innerText = `Time in ${timezone} is ${response.data}`;
        document.querySelector("#step8").appendChild(newParagraph);
      })
      .catch(error => {
        const newParagraph = document.createElement("p");
        newParagraph.innerText =
          "Something bad happened: " + error.response.data;
        document.querySelector("#step8").appendChild(newParagraph);
      })
      .finally(() => "The request has finished.");
  });

  document.getElementById("button4").addEventListener("click", e => {
    const timezone = "America/Mexico_City";
    axios
      .get("http://intro-ajax-api.herokuapp.com/a_car", {timezone})
      .then(response => {
        console.log(response.data);
        const ul = document.querySelector("#cars");
        ul.innerHTML = ul.innerHTML + response.data;
      })
      .catch(error => {
        const newParagraph = document.createElement("p");
        newParagraph.innerText =
          "Something bad happened: " + error.response.data;
        document.querySelector("#step9").appendChild(newParagraph);
      })
      .finally(() => "The request has finished.");
  });
});
