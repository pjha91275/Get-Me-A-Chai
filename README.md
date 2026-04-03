# 🍵 Get Me A Chai

**Get Me A Chai** is a professional-grade full-stack simulation of a crowdfunding platform, built to explore the integration of secure payment gateways, OAuth authentication, and dynamic user environments. 

🚀 **Live Demo:** [getmeachai-app.vercel.app](https://getmeachai-app.vercel.app/)

---

## 🛠️ Technical Stack & Architecture

This project is built using a modern, high-performance stack, ensuring a seamless experience for practicing full-stack workflows.

### **Core Technologies**
*   **Languages:** JavaScript (ES6+), HTML5, CSS3.
*   **Frontend Library:** [React 19](https://react.dev/) (Utilizing advanced hooks and concurrent rendering).
*   **Framework:** [Next.js 16.1 (App Router)](https://nextjs.org/) (Leveraging Server Actions for unified backend logic).
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (Next-gen utility-first CSS framework).
*   **Database:** [MongoDB Atlas](https://www.mongodb.com/) (Cloud NoSQL storage).
*   **ORM:** [Mongoose](https://mongoosejs.com/) (Schema-based modeling for data integrity).

### **MVC Architectural Model**
The project implements a clean **Model-View-Controller (MVC)** pattern within the Next.js ecosystem:
*   **Model:** Structured data schemas in `models/` (User & Payment).
*   **View:** Interactive and responsive UI layers within the `app/` directory and `components/`.
*   **Controller:** Server-side logic residing in `actions/useractions.js`, managing secure database operations via **Next.js Server Actions**.

---

## 👥 Practical Workflow (Current State)
Unlike commercial platforms, this project is designed as a **Technical Simulation Environment**:
*   **Unified Account:** Each authenticated user creates a personal creator profile.
*   **Self-Support Loop:** Users can explore the payment ecosystem by initiating and testing donation flows on their own profile pages.
*   **Identity Management:** Secure authentication handled exclusively via GitHub OAuth.

---

## ✨ Features

### **Frontend & UI Features**
*   **Dynamic User Profiles:** Every user gets a unique URL (`/[username]`) generated instantly upon login.
*   **Premium Aesthetics:** A high-fidelity dark-mode UI featuring Glassmorphism, tailored gradients, and custom animated GIFs.
*   **Interactive Leaderboard:** A "Supporters" list that updates in real-time based on transaction state.
*   **Dashboard Management:** An integrated dashboard for creators to customize their profile identity (Name, Bio, Profile & Cover Pictures).
*   **Real-time Feedback:** Integrated `react-toastify` for instant visual cues during profile updates and payment outcomes.

### **Backend & Implementation**
*   **Server Actions Architecture:** Implements a revolutionary "no-API" approach where frontend components trigger secure server-side functions directly.
*   **OAuth 2.0 Integration:** Robust session management using **NextAuth.js** with GitHub as the primary identity provider.
*   **Payment Orchestration:** Comprehensive integration with the **Razorpay SDK**, handling order creation, secret verification, and callback orchestration.

### **Database Implementation**
*   **Mongoose Modeling:** Strict schema enforcement ensures that every payment and user update follows predictable data patterns.
*   **Relational Logic:** Advanced logic in `useractions.js` ensures that if a user changes their username, all historical payment records are automatically re-associated with the new identity.
*   **Optimized Connectivity:** Centralized database connection logic in `db/connectDb.js` to manage pooled connections efficiently in a serverless environment.

---

## 📂 Project Structure

```text
get-me-a-chai/
├── actions/           # Server Actions (Controllers - Backend Logic)
│   └── useractions.js # Core logic for database & payment operations
├── app/               # Routes & Views (App Router)
│   ├── [username]/    # Dynamic profile pages for donation testing
│   ├── dashboard/     # User profile management center
│   ├── api/           # Handlers for Auth and Razorpay callbacks
│   └── layout.js      # Global providers and theme structure
├── components/        # Reusable UI Architecture
│   ├── Navbar.js      # Dynamic navigation with session state
│   ├── Footer.js      # Modular global footer
│   └── PaymentPage.js # Payment processing & leaderboard view
├── db/                # Database Layer
│   └── connectDb.js   # Mongoose connection manager
├── models/            # Data Layer (Models)
│   ├── User.js        # User credentials and profile schema
│   └── Payment.js     # Transaction history and message logs
├── public/            # Static assets and media files
└── package.json       # Project dependencies and deployment scripts
```

---

## 📦 Getting Started

### **Prerequisites**
*   Node.js 18.x or later.
*   MongoDB Atlas cluster setup.
*   Razorpay developer account (Test mode).
*   GitHub OAuth App credentials.

### **Installation**
1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/pjha91275/Get-Me-A-Chai.git
    cd Get-Me-A-Chai
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment:**
    Create a `.env.local` file:
    ```env
    NEXT_PUBLIC_URL=http://localhost:3000
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_secret_key
    MONGODB_URI=your_mongodb_uri
    GITHUB_ID=your_id
    GITHUB_SECRET=your_secret
    ```
4.  **Launch Platform:**
    ```bash
    npm run dev
    ```

---

## 🚧 Known Limitations & Development Status
*   **Self-Donation Only:** The current architecture is optimized for a self-support practice loop; cross-user donations are intentionally restricted in this version.
*   **Unified Account Structure:** There is no distinction between "Fan" and "Creator" roles; every user account possesses both capabilities.
*   **Single Auth Channel:** Authentication is currently limited to GitHub; additional providers are not yet integrated.
*   **Admin Oversight:** Lacks a centralized administrative dashboard for platform-wide metrics and user moderation.
*   **Discovery Tools:** Does not include a global search or discovery feed for finding other user profiles.

---

Built for educational exploration and technical mastery by [pjha91275](https://github.com/pjha91275).
