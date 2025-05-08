# 🌌 AppVerse - Discover, Install & Review Apps

**AppVerse** is a next-generation AppStore platform built with React where users can explore trending apps, browse by categories, install apps, and share their reviews. With a sleek and responsive design, AppVerse makes app discovery effortless and enjoyable.

## 🚀 Live Website
👉 [Live Site Link]()

## 🟣 Project Purpose
The purpose of **AppVerse** is to deliver a user-friendly and engaging app store experience that simplifies the process of discovering, installing, and managing apps. Users can explore trending apps, filter apps by categories like Education, Gaming, and Productivity, and share feedback through reviews. AppVerse aims to make app exploration seamless while encouraging user interaction.

---

## 🟠 Key Features

- 🔥 Browse and Discover Trending Apps
- 🎯 Filter Apps by Categories (Education, Gaming, Productivity)
- ✅ Secure User Authentication (Email/Password & Google Login)
- 🔒 Protected Routes using Firebase Authentication
- 🌟 Submit and View App Reviews with 5-Star Ratings
- 📱 Fully Responsive Design (Mobile, Tablet, Desktop)
- 🛠️ One-Click App Install/Uninstall Button Toggle
- ✍️ Edit User Profile (Update Name & Photo)
- 🚫 Custom 404 Not Found Page
- 🔗 Dynamic Routing with Dynamic Page Titles
- 🎉 Sweet Alert & Toast Notifications for Success/Error Messages
- 🚀 Fast Loading & SEO Friendly

---

## 🟢 Technologies & Packages Used

- **React JS**
- **CSS**
- **JavaScript**
- **Firebase Authentication**
- **Swiper JS** (for slider)
- **Daisy UI**
- **SweetAlert2**
- **React Icons**
- **Milify**
- **React Router DOM**
- **React Helmet Async** (Dynamic Titles)

---

## 🟣 Pages & Routes

- `/` - Home (Apps Page)
- `/login` - Login Page
- `/register` - Register Page
- `/apps/:id` - App Details Page (Protected)
- `/my-profile` - My Profile Page (Protected)
- `/about` - About Us (Extra Route)
- `*` - 404 Not Found Page

---

## 🟡 JSON Data Example

The apps data is stored in JSON format, with fields like id, name, category, rating, downloads, and reviews.

```json
[
  {
    "id": "app001",
    "name": "ProgramHero",
    "developer": "Programming Hero Ltd.",
    "thumbnail": "https://i.ibb.co.com/VcZ3RS5x/web-thumbnail.webp",
    "banner": "https://i.ibb.co.com/kgJTQ4xT/programming-hero-banner.png",
    "downloads": 3500000,
    "category": "Education",
    "rating": 4.8,
    "description": "Learn programming in an interactive and fun way with Programming Hero.",
    "features": ["Interactive coding lessons", "Real-world projects", "Gamified learning experience"],
    "reviews": [{ "user": "coder_nadia", "rating": 5, "comment": "Best app for beginners!" }]
  }
]
