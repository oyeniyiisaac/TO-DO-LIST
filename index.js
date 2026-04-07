allTasks = []
// activeTask = []
let editIndex;
let deleteIndex;
const addTask = () => {
    const taskInput = document.getElementById('taskInput').value
    const taskContent = document.getElementById('taskContent').value
    const taskDate = document.getElementById('taskDate').value
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
        // console.log(allTasks);
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
    if (editTaskOBJInput){
        allTasks.splice(editIndex,1,editTaskOBJInput)
        // console.log(allTasks);
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
            // const tasks = allTasks[i];
            // taskSection.innerHTML += `
            // <div class="task-item card shadow-sm border-1 rounded-4 p-3 mb-3">
            //     <div class="d-flex justify-content-between align-items-center mb2 gap-3" class="task-dot">
            //         <div class="flex-grow-1">
            //             <p class="h6 mb-0 fw-bold" style="color: #14b8a6; font-size: 22px;">${tasks.title}</p>
            //             <p class="mb-0" style="color: #ffffff;">${tasks.content}</p>
            //         </div>
            //         <div class="d-flex flex-column align-items-end">
            //             <span class="badge bg-light border mb-2" style="color: #042924;">${tasks.date}</span>
            //             <div class="d-flex gap-3">
            //             <button class="btn btn-sm btn-outline-danger" onclick="confirmDel(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button><button class="btn btn-sm btn-outline-danger" onclick="confirmEdit(${i})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                        
            //             </div>
            //         </div>
            //     </div>
            // </div>`;
        }
    }
};

const toggleMark = (i) => {
    if (!allTasks[i]) return;

    if (typeof allTasks[i].isActive !== "boolean") {
        allTasks[i].isActive = false;
    }

    allTasks[i].isActive = !allTasks[i].isActive;
    // console.log("Task Status:", allTasks[i].isActive);

    showTask(); // re-render
};

// Wrap showTask so colors are always applied after every render
const _showTask = showTask;
showTask = function () {
    _showTask();
    // applyMarkStyles();
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
    for(i=0; i < allTasks.length; i++) {
        const tasks = allTasks[i]
        taskSection.innerHTML += `
        <div class="task-item card shadow-sm border-1 rounded-4 p-3 mb-3">
            <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
            <div class="flex-grow-1 w-100">
                <p class="h6 mb-1 fw-bold text-break" style="color: #14b8a6; font-size: clamp(18px, 4vw, 22px);">${tasks.title}</p>
                <p class="mb-0 text-break" style="color: #ffffff; font-size: clamp(14px, 3.5vw, 16px);">${tasks.content}</p>
            </div>
            <div class="d-flex flex-column align-items-start align-items-sm-end w-100 w-sm-auto">
                <span class="badge bg-light border mb-2 text-break" style="color: #042924;">${tasks.date}</span>
                <div class="d-flex flex-wrap gap-2 w-100 justify-content-start justify-content-sm-end">
                <button class="btn btn-sm btn-outline-danger flex-fill flex-sm-grow-0" onclick="confirmDel(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                <button class="btn btn-sm btn-outline-secondary flex-fill flex-sm-grow-0" onclick="confirmEdit(${i})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                <button class="btn btn-sm btn-outline-secondary flex-fill flex-sm-grow-0" style="background-color: dark;" onclick="toggleMark(${i})">Mark</button>
                </div>
            </div>
            </div>
        </div>`;
        applyMarkStyles()===''
    }
    TaskCount.innerHTML =  allTasks.length === 1 ? `${allTasks.length} Task` : `${allTasks.length} Tasks`;
    taskCount2.innerHTML = allTasks.length
}
