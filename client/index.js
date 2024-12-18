// Envent handlers on when the page loads so when the page first loads we want to grab all the data from the database
// But if there is no data, it will put 'No Data' in the table
document.addEventListener('DOMContentLoaded',function(){
    loadHTMLTable([]);
});
//Function that check if there is data 
function loadHTMLTable(data)
{
    //Select the table body
    const table =  document.querySelector('table tbody');

    if(data.length ===0)
        {
            //Adds a row in our html table
            table.innerHTML = "<tr><td class='no-data' colspan='5'></td></tr>";
        }
}