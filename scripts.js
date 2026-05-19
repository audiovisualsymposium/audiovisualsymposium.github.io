document.addEventListener("DOMContentLoaded", function () {
  const current = window.location.pathname.split("/").pop();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove("active-link");
  });

  if (current.startsWith("symposiumnotes2024")) {
    document.querySelector('.navbar a[href="symposiumnotes2024.html"]')?.classList.add("active-link");
  } else if (current.startsWith("symposiumnotes2022")) {
    document.querySelector('.navbar a[href="symposiumnotes2022.html"]')?.classList.add("active-link");
  } else {
    document.querySelector('.navbar a[href="audiovisualsymposium2026.html"]')?.classList.add("active-link");
  }

  if (current === "" || current === "audiovisualsymposium2026.html") {
    document.querySelector('header a[href="audiovisualsymposium2026.html"]')?.classList.add("active-link");
  } else {
    document.querySelector(`header a[href="${current}"]`)?.classList.add("active-link");
  }
});