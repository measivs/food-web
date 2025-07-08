document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-btn");
  const nav = document.getElementById("navbar");
  const header = document.querySelector(".site-header");

  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  const form = document.getElementById("contact-form");
  const passwordToggle = document.getElementById("toggle-password");
  const passwordInput = document.querySelector("input[name='password']");

  passwordToggle.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    passwordToggle.textContent = isPassword ? "🙈" : "👁️";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const message = form.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!name || !email || !password || !message) {
      alert("All fields are required.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email format.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include:\n" +
        "- one uppercase letter\n" +
        "- one lowercase letter\n" +
        "- one number\n" +
        "- one special character (@$!%*?&)"
      );
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });

  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  }

  acceptCookiesBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  fetch("https://randomuser.me/api/?results=8")
    .then(res => res.json())
    .then(data => {
      const box = document.getElementById("testimonial-data");
      box.innerHTML = "";
      data.results.forEach(user => {
        const div = document.createElement("div");
        div.className = "testimonial-item";
        div.innerHTML = `
          <p>"${user.name.first} ${user.name.last} loved our food!"</p>
          <img src="${user.picture.medium}" alt="${user.name.first}" style="border-radius: 50%;" />
        `;
        box.appendChild(div);
      });
    })
    .catch(() => {
      document.getElementById("testimonial-data").innerText = "Failed to load testimonials.";
    });

  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];
      document.getElementById("dish-of-day").innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 300px; border-radius: 8px; margin: 1rem 0;" />
        <p><strong>Category:</strong> ${meal.strCategory} | <strong>Area:</strong> ${meal.strArea}</p>
        <p>${meal.strInstructions.slice(0, 180)}...</p>
      `;
    })
    .catch(() => {
      document.getElementById("dish-of-day").innerText = "Could not load today's dish.";
    });
});
