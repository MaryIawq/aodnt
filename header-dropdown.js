// Функция для открытия и закрытия dropdown
function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    dropdownContent.classList.toggle("show");

    var dropdownBtn = document.querySelector("#" + dropdownId.replace("dropdown-content", "dropdown-btn"));

    dropdownBtn.classList.toggle("active", dropdownContent.classList.contains("show"));
}

document.querySelectorAll(".dropdown-btn").forEach(function(dropdownBtn) {
    dropdownBtn.addEventListener("click", function() {
        var dropdownId = this.id.replace("dropdown-btn", "dropdown-content");
        toggleDropdown(dropdownId);
    });
});

window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropdown-btn")) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function(openDropdown) {
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");

                var dropdownBtn = document.querySelector("#" + openDropdown.id.replace("dropdown-content", "dropdown-btn"));

                dropdownBtn.classList.remove("active");
            }
        });
    }
});
