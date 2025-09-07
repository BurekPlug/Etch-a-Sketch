const NUMBEROFROWS = 16;


//Create Columcontainer, in which the Rows will be enlisted.
//create one Row:
const ColDiv = document.createElement("div");
ColDiv.classList.add("ColDiv");
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


const Boxes = document.querySelectorAll(".Box")

Boxes.forEach( (boxRef) => {
    boxRef.addEventListener("mouseover", () => boxRef.setAttribute("class", "hoverBox"));
});

