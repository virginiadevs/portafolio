/* --- LIGHT/DARK MODE --- */
const theme = (() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    
    return "light";
})();

if (theme === "light") {
    document.documentElement.classList.remove("dark");
}
else {
    document.documentElement.classList.add("dark");
}

window.localStorage.setItem("theme", theme);

const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.getElementById("headerThemeToggle").addEventListener("click", handleToggleClick);
document.getElementById("mobileThemeToggle").addEventListener("click", handleToggleClick);
// ---------------------------------------------------------------------------------------

/* --- PROJECTS FILTER --- */
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const filterId = e.target.id;
        
        const projects = document.querySelectorAll(".featured article");

        projects.forEach(project => {
            project.classList.remove("hidden");

            if(filterId != "allFilter") {
                let exists = false;

                const keywords = project.querySelectorAll(".keywords span");
                keywords.forEach(key => {
                    if(key.textContent.includes(filterId.replace("Filter", ""))) {
                        exists = true;
                    }
                });
            
                if(!exists) {
                    project.classList.add("hidden");
                }
            }
        });
    });
});

// Checked/unchecked buttons
const buttons = document.querySelectorAll(".filter-list button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Removes 'active' class from all buttons
        buttons.forEach(b => b.classList.remove("active"));
        
        // Adds 'active' class to the clicked button
        button.classList.add("active");
    });
});
// ---------------------------------------------------------------------------------------

/* --- BUTTON STATE --- */
function updateBtnState() {
    const actionBtn = document.querySelector(".action-btn");
    const officeImg = document.querySelector(".office-img");
    const workingHours = document.querySelector(".contact-message figure");

    const now = new Date(); 
    const hour = now.getHours();
    const day = now.getDay();

    const worktime = hour >= 8 && hour < 18;
    const workday = day >= 1 && day <= 5;

    if(worktime && workday) {
        actionBtn.classList.remove("disabled");
        officeImg.src = "img/oficina.webp";
        workingHours.style.display = "none";
    }
    else {
        actionBtn.classList.add("disabled");
        officeImg.src = "img/oficina-noche.webp";
        workingHours.style.display = "block";
    }
}

/*updateBtnState();
setInterval(updateBtnState, 60 * 1000);*/