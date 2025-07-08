# 🍽️ Tastico – Gourmet Food Website

Tastico is a modern, responsive food-themed landing page built with vanilla HTML, CSS, and JavaScript. It showcases a restaurant's menu, dynamic daily specials, user testimonials, and a contact form with validation. The design emphasizes elegance, accessibility, and user engagement.

---

## 🚀 Features

- ⚡ **Responsive Design** – Optimized for desktop, tablet, and mobile.
- 🍕 **Dynamic Menu Section** – 10 curated dishes with visual styling.
- 👤 **Live Testimonials** – Fetched from the RandomUser API.
- 🍽️ **Dish of the Day** – Fetched from [TheMealDB](https://themealdb.com/) API.
- 🧠 **Form Validation** – Validates name, email, password strength, and message.
- 👁️ **Password Toggle** – Eye icon to show/hide password input.
- 🍪 **Cookie Consent Banner** – LocalStorage-based consent handling.
- 🍔 **Burger Navigation Menu** – Mobile-friendly navigation toggle.
- 🎨 **CSS Variables** – Theming powered by `:root` custom properties.
- 💡 **Scroll Behavior** – Header styling changes on scroll.

---

## 🧱 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **[RandomUser API](https://randomuser.me)**
- **[TheMealDB API](https://www.themealdb.com)**

---

## 📁 Project Structure

```
Tastico/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── favicon.png
├── README.md
└── .gitignore
```

---

## 📋 Form Validation Rules

The contact form enforces the following:

- ✅ All fields are required
- ✅ Email must be valid (`example@domain.com`)
- ✅ Password must:
  - Be at least 8 characters long
  - Contain at least one uppercase letter
  - Contain at least one lowercase letter
  - Contain at least one digit
  - Contain at least one special character (`@$!%*?&`)

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/measivs/food-web
   cd food-web
   ```

2. **Open `index.html` in your browser**
   You can use VS Code Live Server, or just double-click the file.

3. **(Optional)** Host it online via Netlify, Vercel, or GitHub Pages.

---

## 🧪 Live APIs Used

- **RandomUser API** – Used to populate 8 testimonials.
- **TheMealDB API** – Used to fetch a random dish of the day.

---

## 📝 License

This project is open source and free to use under the MIT License.
