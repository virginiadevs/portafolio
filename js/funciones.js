/* --- MODO CLARO/OSCURO --- */
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

/* --- FILTRO PROYECTOS --- */
const jsFilter = document.getElementById("jsFilter");
jsFilter.addEventListener("click", () => {
    const jsProjects = document.querySelectorAll("article");
    jsProjects.forEach(project => {

        let exists = "";

        const techs = project.querySelectorAll(".tecnologias span");
        techs.forEach(tech => {
            if(tech.textContent.includes("javascript")) {
                exists = true;
            }
        });

        if(!exists) {
            project.classList.add("oculto");
        }
    });
});

// Mostrar todos
const all = document.getElementById("allFilter");
all.addEventListener("click", () => {
    const jsProjects = document.querySelectorAll("article");
    jsProjects.forEach(project => { project.classList.remove("oculto"); });
});

// Botones checked/unchecked
const botones = document.querySelectorAll(".filtros button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Quitar la clase "checked" de todos los botones
        botones.forEach(b => b.classList.remove("checked"));
        
        // Agregar la clase "checked" solo al botón que fue clickado
        boton.classList.add("checked");
    });
});