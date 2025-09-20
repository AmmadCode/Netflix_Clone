# Netflix Clone

A modern Netflix clone built with React, Firebase, and Vite. This project replicates core Netflix functionalities including user authentication, movie browsing, and video playback.

## 🚀 Features

- 🔐 User Authentication (Sign up, Sign in, Sign out)
- ▶️ Video Player
- 🔥 Real-time Firebase Backend
- 📱 Responsive Design

## 🛠️ Technologies Used

- React.js
- Firebase (Authentication & Firestore)
- React Router DOM
- React Toastify
- CSS3

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AmmadCode/Netflix_Clone.git
```

2. Install dependencies:
```bash
cd Netflix_Clone
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
netflix-clone/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   │   ├── Home/       # Home page
│   │   ├── Login/      # Authentication pages
│   │   └── Player/     # Video player page
│   ├── App.jsx         # Main app component
│   ├── firebase.js     # Firebase configuration
│   └── index.css       # Global styles
├── .env                # Environment variables
├── .gitignore         # Git ignore rules
└── package.json       # Project dependencies
```

## 🔒 Environment Variables

This project uses environment variables to secure sensitive data. Create a `.env` file with the following variables:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Netflix UI Design
- Firebase Documentation
- React Community


