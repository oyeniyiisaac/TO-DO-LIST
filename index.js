allTasks = []
let editIndex;
let deleteIndex;
const addTask = () => {
    const taskInput = document.getElementById('taskInput').value
    const taskContent = document.getElementById('taskContent').value
    const taskDate = document.getElementById('taskDate').value
    // const taskSection = document.getElementById('taskSection')
    if(taskInput.trim(),taskContent.trim(),taskDate== ''){
        cancelBar.style.display="block"
    } else {
        cancelBar.style.display="none"
        const taskOBJ = {
            title: taskInput,
            content: taskContent,
            date: taskDate
        };
        allTasks.push(taskOBJ)
        console.log(allTasks);
        document.getElementById('taskInput').value = ''
        document.getElementById('taskContent').value =''
        document.getElementById('taskDate').value=''
        showTask()
    }
}
// --------Delete Task----------
const confirmDel = (i) => {
    deleteIndex = i
    warning = allTasks[i]
}
const delTask = (i) => {
    const warning = document.getElementById('warning')
    if(warning){
        allTasks.splice(i,1)
        console.log(allTasks);
        showTask()
    } else{
        showTask()
    }
    
}
let editTaskOBJInput = document.getElementById('editTaskOBJ');
const confirmEdit = (i) => {
    editIndex = i
    editTaskOBJInput = allTasks[i]
}
const confirmTask = () => {
    const editTaskInput = document.getElementById('editTaskInput').value
    const editTaskContent = document.getElementById('editTaskContent').value
    const editTaskDate = document.getElementById('editTaskDate').value
    const editTaskOBJInput = {
        title: editTaskInput,
        content: editTaskContent,
        date: editTaskDate
    };
    if(editTaskOBJInput){
        allTasks.splice(editIndex,1,editTaskOBJInput)
        console.log(allTasks);
        showTask()
        document.getElementById('editTaskInput').value = ''
        document.getElementById('editTaskContent').value = ''
        document.getElementById('editTaskDate').value = ''
    }
}

const applyMarkStyles = () => {
    for (let i = 0; i < allTasks.length; i++) {
        const markBtn = document.querySelector(`button[onclick="toggleMark(${i})"]`);
        if (!markBtn) continue;

        // Change color when false
        if (allTasks[i].isActive === false) {
            markBtn.style.backgroundColor = "#dc3545"; // red
            markBtn.style.color = "#fff";
        } else {
            markBtn.style.backgroundColor = "#198754"; // green
            markBtn.style.color = "#fff";
        }
    }
};

const toggleMark = (i) => {
    if (!allTasks[i]) return;

    if (typeof allTasks[i].isActive !== "boolean") {
        allTasks[i].isActive = false;
    }

    allTasks[i].isActive = !allTasks[i].isActive;
    console.log("Task Status:", allTasks[i].isActive);

    showTask(); // re-render
};

// Wrap showTask so colors are always applied after every render
const _showTask = showTask;
showTask = function () {
    _showTask();
    applyMarkStyles();
};



const cancel = () => {
    cancelBar.style.display="none"
}
const emptyTask = document.getElementById('emptyTask');
const taskSection = document.getElementById('taskSection');
const taskSectionContent = document.getElementById('taskSectionContent');
const taskSectionTitle = document.getElementById('taskSectionTitle');
const taskSectionDate = document.getElementById('taskSectionDate');
function showTask() {
    emptyTask.style.display="block"
    taskSection.innerHTML = ''
    // taskSectionContent.innerHTML=''
    // taskSectionTitle.innerHTML=''
    // taskSectionDate.innerHTML=''
    const checkDot = () => {
        console.log(checkDot);
    }
    for(i=0; i < allTasks.length; i++) {
        const tasks = allTasks[i]
        // taskSectionTitle.innerHTML += `<div>${tasks.title}</div>`
        // taskSectionContent.innerHTML += `<div>${tasks.content}</div>`
        // taskSectionDate.innerHTML += `<p>${tasks.date}</p>`
        taskSection.innerHTML += `
        <div class="task-item card shadow-sm border-1 rounded-4 p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center mb2 gap-3" class="task-dot">
                <div class="flex-grow-1">
                    <p class="h6 mb-0 fw-bold" style="color: #14b8a6; font-size: 22px;">${tasks.title}</p>
                    <p class="mb-0" style="color: #ffffff;">${tasks.content}</p>
                </div>
                <div class="d-flex flex-column align-items-end">
                    <span class="badge bg-light border mb-2" style="color: #042924;">${tasks.date}</span>
                    <div class="d-flex gap-3">
                    <button class="btn btn-sm btn-outline-danger" onclick="confirmDel(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button><button class="btn btn-sm btn-outline-danger" onclick="confirmEdit(${i})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                    <button class="btn btn-sm" style="background-color: dark; color: #14b8a6;" onclick="toggleMark(${i})" >Mark</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    TaskCount.innerHTML =  allTasks.length === 1 ? `${allTasks.length} Task` : `${allTasks.length} Tasks`;
    taskCount2.innerHTML = allTasks.length
    // const checkDot = document.getElementById('checkDot'); // Or your specific selector
    

}

// const activeTask = () => {
//     console.log('active');
//     const activeBtn = document.querySelector('[onclick="activeTask()"]');
//     const allBtn =
//         document.querySelector('[onclick="allTask()"]') ||
//         document.querySelector('[onclick="showTask()"]');

//     if (!activeBtn || !allBtn) return;

//     // Copy All Task button background/text style to Active Task
//     const allBtnStyle = getComputedStyle(allBtn);
//     activeBtn.style.backgroundColor = allBtnStyle.backgroundColor;
//     activeBtn.style.color = allBtnStyle.color;
//     activeBtn.style.borderColor = allBtnStyle.borderColor;

//     // Remove background from All Task button
//     allBtn.style.backgroundColor = "transparent";
//     allBtn.style.color = "";
//     allBtn.style.borderColor = "";
// }