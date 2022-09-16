let taskCounter = 0;

let light = () => {
    let bg = document.body;
    let inp = document.getElementById('txt');
    let btn = document.getElementById('addBtn');
    let ele = document.getElementById('ele');

    bg.style.color = "black";
    bg.style.backgroundColor = "white"
    
    inp.style.backgroundColor = "white";
    inp.style.borderColor = "black";
    inp.style.color = "black";

    btn.style.backgroundColor = "white";
    btn.style.borderColor = "black";
    btn.style.color = "black";

    ele.style.borderColor = "black";
    ele.style.backgroundColor = "black";
    ele.style.color = "white";
}

let dark = () => {
    let bg = document.body;
    let inp = document.getElementById('txt');
    let btn = document.getElementById('btn');

    bg.style.color = "white";
    bg.style.backgroundColor = "black"
    
    inp.style.backgroundColor = "black";
    inp.style.borderColor = "white";
    inp.style.color = "white";

    btn.style.backgroundColor = "black";
    btn.style.borderColor = "white";
    btn.style.color = "white";
}

let removeElement = (id) => {
    let ele = document.getElementById(id);
    let cont = document.getElementById('elements');
    cont.removeChild(ele);
}

let change = (id, value) => {
    let p = document.getElementById(id).firstChild;
    p.innerText = value; 
}

let addTask = () => {
    let text = document.getElementById("txt").value;

    let div = document.createElement("div");
    div.className = "ele";
    taskCounter++;
    div.id = taskCounter;

    // Text
    let p = document.createElement('p');
    p.innerText = text;
    p.id = taskCounter;

    // Edit button
    let edit = document.createElement('p');
    edit.innerText = "e";
    edit.className = "edit";
    edit.onclick = () => {
        editBox.style.display = "block";
    }

    // Delete button
    let del = document.createElement('p');
    del.innerText = 'x';
    del.className = 'del';
    del.id = taskCounter;
    del.onclick = function() {
        removeElement(del.id);
    }

    let editBox = document.createElement("input");
    editBox.type = text;
    editBox.className = "editBox";
    editBox.style.display = "none";
    editBox.style.width = "100%";
    editBox.placeholder = "Modify here";
    editBox.onkeyup = function (event) {
        if( event.code === 'Enter') {
                event.preventDefault();
                change(editBox.parentNode.id, editBox.value);
                editBox.style.display = "none";
        }
    }

    // Appending
    div.appendChild(p);
    div.appendChild(edit);
    div.append(del);
    div.append(editBox);

    

    let container = document.getElementById("elements");
    container.append(div);
}

let taskInput = document.getElementById("txt");
taskInput.onkeyup = function (event) {
    if(event.code === 'Enter') {
        event.preventDefault();
        addTask();
    }
}   