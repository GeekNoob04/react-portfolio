# Portfolio Website 🚀

This project is a personal portfolio website built with React and styled with Tailwind CSS. It showcases my skills, projects, and provides a way for visitors to contact me. The website features a responsive design, smooth scrolling, and a modern aesthetic. It's designed to be a central hub for showcasing my work and connecting with potential employers or collaborators.

## 🚀 Key Features

*   **Responsive Design:** Adapts seamlessly to different screen sizes, providing an optimal viewing experience on desktops, tablets, and mobile devices. 📱
*   **Interactive Hero Section:** Features a dynamic background animation using HTML5 canvas to create an engaging first impression. ✨
*   **Clear Navigation:**  A `Navbar` component provides easy navigation to different sections of the portfolio. 🧭
*   **Skills Showcase:**  Displays a list of my skills with logos and names, providing a quick overview of my technical expertise. 💻
*   **Project Highlights:** Showcases my projects with descriptions, images, tags, and links to live demos and code repositories. 💡
*   **Contact Form:**  Allows visitors to send me messages directly through the website using EmailJS. 📧
*   **Smooth Scrolling:**  Implements smooth scrolling for a better user experience when navigating between sections. 🖱️
*   **Scroll to Top Button:** Provides a convenient way to quickly return to the top of the page. ⬆️

## 🛠️ Tech Stack

*   **Frontend:**
    *   React
    *   React Hooks (useState, useEffect, useRef)
    *   Tailwind CSS
    *   lucide-react (for icons)
    *   framer-motion (for animations)
*   **Build Tool:**
    *   Vite
*   **Email Service:**
    *   EmailJS
*   **Other:**
    *   JavaScript (ES6+)
    *   HTML5 Canvas (for background animation)

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/GeekNoob04/react-portfolio/
    cd <project-directory>
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Configure EmailJS (if you want the contact form to work):

    *   Create an account on [EmailJS](https://www.emailjs.com/).
    *   Get your Service ID, Template ID, and Public Key.
    *   Update the `src/components/Contact.jsx` file with your EmailJS credentials.

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

## 💻 Usage

The website is designed to be intuitive and easy to use. Simply navigate through the different sections using the navigation bar or by scrolling down the page.

## 📂 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── projects.jsx
│   │   ├── Skills.jsx
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
├── vite.config.js
├── package.json
├── README.md
```

## 📬 Contact

If you have any questions or feedback, feel free to contact me at [harshitbudhraja0@gmail.com](mailto:harshitbudhraja0@gmail.com).

💖 Thanks for checking out my portfolio website!

This README is written by [readme.ai](https://readme-generator-phi.vercel.app/).
