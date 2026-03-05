# 🖼️ AI Image Enhancer

A modern **React-based web application** that enhances the quality of images using an external **AI Image Enhancement API from PicWish**. Users can upload an image, and the application processes it to generate an enhanced version with improved clarity and quality.

The project focuses on building a **clean UI, responsive layout, and smooth user experience** using modern frontend tools.

---

## 🚀 Features

* 📤 Upload any image for enhancement
* 🤖 AI-powered image enhancement using PicWish API
* ⚡ Fast image processing with API polling
* 📱 Fully responsive design (Mobile, Tablet, Desktop)
* 🎨 Modern UI built with Tailwind CSS
* 🔄 Real-time preview of enhanced images
* 🧩 Clean and modular React component structure

---

## 🛠️ Tech Stack

* **React.js** – Frontend library for building UI
* **Tailwind CSS** – Utility-first CSS framework for styling
* **PicWish API** – AI-powered image enhancement
* **JavaScript (ES6+)**
* **Axios** – For API requests

---

## 📂 Project Structure

```
src
 ┣ components
 ┃ ┣ ImageUpload.jsx
 ┃ ┣ ImageCard.jsx
 ┃ ┗ Loader.jsx
 ┣ services
 ┃ ┗ enhancedImageAPI.js
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project folder:

```bash
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_API_KEY=your_picwish_api_key
VITE_BASE_URL=picwish_api_url
```

---


