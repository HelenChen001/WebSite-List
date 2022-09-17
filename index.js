let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

/*
    This takes the info passed into the input and stores it in the local storage
    where if you refesh it, it is still there
*/

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

/* 
    This funtion takes the items that is was input and displays it into
    the row under the save input box
*/

tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);

    });

});

function render(leads){
    let listItems = "";

    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href= '${leads[i]}'>"
            ${leads[i]}
            </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value); //this takes whatever value that was inputted into the array  
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //Sets the item in the local storage

    render(myLeads);
})

/*
    What did we learn?
    1. const
    2. addEventListener()
    3. innerHTML
    4. input.value
    5. function parameters
    6. template strings
    7. localStorage
    8. The JSON object
    9. object in arrays

*/

