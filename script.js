const NUMBEROFROWS = 16;


//Create Columcontainer, in which the Rows will be enlisted.
//create one Row:
const ColDiv = document.createElement("div");
ColDiv.classList.add("ColDiv");
ColDiv.textContent = "Testcontent"
//add to an empty html or get the reference to the whole html
document.documentElement.appendChild(ColDiv);
ColDiv.setAttribute("class", "ColContainer");

for (let i = 0; i < NUMBEROFROWS; i++) 
{
    const RowDiv = document.createElement("div");
    RowDiv.classList.add("RowDiv");
    RowDiv.setAttribute("class", "RowContainer");
    ColDiv.appendChild(RowDiv);

    // Create boxes in Rows
    for (let i = 0; i < NUMBEROFROWS; i++) 
    {
        const box = document.createElement("div");
        box.setAttribute("class", "Box");
        RowDiv.appendChild(box);
    }
}

/*//create one Row:
const RowDiv = document.createElement("div");
RowDiv.classList.add("RowDiv");
RowDiv.textContent = "Testcontent"
RowDiv.setAttribute("class", "RowContainer");
ColDiv.appendChild(RowDiv);

// Create boxes in Rows
for (let i = 0; i < NUMBEROFROWS; i++) 
{
    const box = document.createElement("div");
    box.setAttribute("class", "Box");
    RowDiv.appendChild(box);
}
*/
