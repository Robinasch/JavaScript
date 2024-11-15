document.addEventListener("DOMContentLoaded", () => {
    function addTask() {
        const taskInput = document.getElementById("paste");
        const taskText = taskInput.value.trim();

        if (taskText) {
            const taskList = document.getElementById("aufgaben");

            const newTask = document.createElement("li");
            newTask.classList.add("offen");
            newTask.innerHTML = `${taskText} <a href="#" class="toggle">erledigt</a>`;

            taskList.appendChild(newTask);


            taskInput.value = "";

            addlinkEvent(newTask.querySelector(".toggle"));
        }
    }

    document.getElementById("butt1").addEventListener("click", addTask);

    function addlinkEvent(linkLink) {
        linkLink.addEventListener("click", function (event) {
            event.preventDefault();
            const liElement = this.parentElement;

            if (liElement.classList.contains("offen")) {
                liElement.classList.remove("offen");
                liElement.classList.add("erledigt");
            } else {
                liElement.classList.remove("erledigt");
                liElement.classList.add("offen");
            }
        });
    }

    const existingLinks = document.querySelectorAll(".link");
    existingLinks.forEach(link => addlinkEvent(link));

    function markAllTasks() {
        const tasks = document.querySelectorAll("#aufgaben li");
        tasks.forEach(task => {
            task.classList.remove("offen");
            task.classList.add("erledigt");
        });
    }

    document.getElementById("markAll").addEventListener("click", markAllTasks);
});
