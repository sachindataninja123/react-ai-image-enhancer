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

## 📸 How It Works

1. User uploads an image.
2. The image is sent to the **PicWish API**.
3. API generates a **Task ID** for processing.
4. The application continuously polls the API.
5. Once processing is complete, the **enhanced image** is returned and displayed to the user.

---

## 🎯 Learning Outcomes

This project helped in understanding:

* API integration in React
* Handling asynchronous requests
* File uploads in React
* Responsive UI development
* Environment variables management
* Clean component-based architecture

---

## 📱 Responsive Design

The UI is designed using **Tailwind CSS**, ensuring the application works smoothly on:

* Mobile devices
* Tablets
* Desktop screens

---

## 🔮 Future Improvements

* Drag & Drop image upload
* Image download option
* Image comparison slider (Before vs After)
* Multiple image uploads
* Dark mode support

---

## 👨‍💻 Author

**Sachin Kumar Kushwaha**

---

⭐ If you like this project, consider giving it a **star on GitHub**!
