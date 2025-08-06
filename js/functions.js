/* --- LIGHT/DARK MODE --- */
const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    
    return 'light';
})();

if (theme === 'light') {
    document.documentElement.classList.remove('dark');
}
else {
    document.documentElement.classList.add('dark');
}

window.localStorage.setItem('theme', theme);

const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
// ---------------------------------------------------------------------------------------

/* --- ACTIVE TAB --- */
const links = document.querySelectorAll("#menu-nav a");
const sections = document.querySelectorAll(".main-content section");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        
        // Removes 'active' class from all links and sections
        removeActive();

        // Adds 'active' class to the clicked link
        e.target.classList.add("active");

        // Adds 'active' class to the correspondent section
        const route = link.getAttribute("href").substring(1);
        document.getElementById(route).classList.add("active");

        window.scrollTo(0, 0); 
    });
});

/* Change to email tab on clicking email */
const email = document.querySelector(".contact-link");
email.addEventListener("click", e => {
    e.preventDefault();
    removeActive();

    // Adds 'active' class to the contact tab and section
    document.querySelector("#menu-nav .contactTab").classList.add("active");
    document.querySelector(".main-content #contact").classList.add("active");
});

/* FUNCTION: to remove active tabs and sections */
function removeActive() {
    // Removes 'active' class from all links
    links.forEach(tab => {
        tab.classList.remove("active");
    });

    // Removes 'active' class from all sections
    sections.forEach(section => {
        section.classList.remove("active");
    });
}
// ---------------------------------------------------------------------------------------

/* --- PROJECTS FILTER --- */
const jsFilter = document.getElementById("jsFilter");
jsFilter.addEventListener("click", () => {
    const projects = document.querySelectorAll(".featured article");
    projects.forEach(project => {

        let exists = "";

        const techs = project.querySelectorAll(".techs span");
        techs.forEach(tech => {
            if(tech.textContent.includes("javascript")) {
                exists = true;
            }
        });
        
        if(!exists) {
            project.classList.add("hidden");
        }
    });
});

// Show all
const all = document.getElementById("allFilter");
all.addEventListener("click", () => {
    const projects = document.querySelectorAll(".featured article");
    projects.forEach(project => { project.classList.remove("hidden"); });
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

/* --- FORM VALIDATION --- */