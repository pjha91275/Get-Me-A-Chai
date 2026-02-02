# 🍵 Get Me A Chai

**Get Me A Chai** is a modern, high-performance "Buy Me a Coffee" clone designed for creators. This is a personal project built for practice and experimentation with the latest web technologies, allowing users to create personalized profile pages and test donation flows through self-support loops.

🚀 **Live Demo:** [getmeachai-app.vercel.app](https://getmeachai-app.vercel.app/)

![Get Me A Chai Banner](/tea.gif)

## 🚀 Features

- **GitHub Authentication**: Secure one-click login using GitHub integration.
- **Personalized Dashboards**: User-friendly form to set up creator profiles instantly.
- **Self-Donation Flow**: Automated creation of profile pages (Account/Payments) for testing and practice.
- **Premium UI/UX**: A dark-themed, responsive interface with Glassmorphism and dynamic animations.
- **Modern Tech**: Powered by Next.js 16 (App Router), React 19, and Tailwind CSS 4.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Frontend**: [React](https://react.dev/) 19, [Tailwind CSS](https://tailwindcss.com/) 4
- **Backend**: [Node.js](https://nodejs.org/) (for server-side logic and API routes)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud NoSQL Database)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **State Management**: React Session hooks
- **Assets**: Custom animated GIFs and SVG icons.

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/pjha91275/Get-Me-A-Chai.git
    cd Get-Me-A-Chai
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory:

    ```env
    NEXT_PUBLIC_URL=http://localhost:3000
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_secret_key

    # Database
    MONGODB_URI=your_mongodb_connection_string

    # OAuth Providers
    GITHUB_ID=your_github_id
    GITHUB_SECRET=your_github_secret

    ```

4.  **Run the project:**
    ```bash
    npm run dev
    ```

## � How It Works

This platform is currently designed as a dedicated self-support and practice project:

1. **Secure Login**: Users authenticate via GitHub.
2. **Profile Setup**: Creators fill out their dashboard details.
3. **Practice Page**: A unique page is created in the Account/Payments section.
4. **Self-Donation**: Currently, users can test the donation functionality on their own pages.

_Looking ahead: As the project grows, it will evolve into a full crowdfunding platform allowing cross-user support._

|                                                   |                                                  |
| :-----------------------------------------------: | :----------------------------------------------: |
| ![Fund Yourself](/man.gif) <br> **Setup Profile** | ![Community](/group.gif) <br> **Test Donations** |

## 🤝 Contributing

Contributions are welcome! If you'd like to help expand this into a full crowdfunding platform:

1. Fork the project.
2. Create your feature branch.
3. Open a Pull Request.

---

Built with ❤️ for creators everywhere.
