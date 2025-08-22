document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Fungsi untuk mengubah tema
    const toggleTheme = () => {
        body.classList.toggle('dark-theme');
    };

    // Menambahkan event listener ke tombol
    themeToggleButton.addEventListener('click', toggleTheme);

    console.log("Website ESP32 siap!");
});