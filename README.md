
# 📝 Simple Notes App (Next.js + MongoDB)

A full-stack **Notes Application** built with **Next.js**, **MongoDB**, and **Tailwind CSS**.  
---

## 🚀 Features

- ✅ Create new notes (Title + Content)  
- 📖 View a list of all saved notes  
- ✏️ Edit existing notes  
- ❌ Delete notes  
- 🗄️ Data stored in MongoDB  
- 🎨 Styled with Tailwind CSS (fully responsive)  
- 🔎 Search / Filter notes by title or content  
- 🌙 Dark Mode support  
- ⚡ Basic validation (title required)

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React Framework)  
- **Backend**: Next.js API Routes  
- **Database**: [MongoDB](https://www.mongodb.com/) (Atlas or local)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Deployment**: [Vercel](https://vercel.com/)  

---

## 📂 Project Structure

```

chironlabs-notes-nextjs/
├─ components/       # Reusable UI components
│  ├─ Layout.js
│  └─ NoteCard.js
├─ lib/
│  └─ mongodb.js     # MongoDB connection helper
├─ models/
│  └─ Note.js        # Input sanitization
├─ pages/
│  ├─ \_app.js        # App wrapper with layout + dark mode
│  ├─ index.js       # Notes list + search
│  ├─ new\.js         # Create note
│  ├─ \[id]/edit.js   # Edit note
│  └─ api/notes/     # API routes for CRUD
├─ styles/
│  └─ globals.css    # Tailwind global styles
├─ tailwind.config.js
├─ package.json
└─ README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chironlabs-notes-nextjs.git
cd chironlabs-notes-nextjs
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root of the project and add your MongoDB connection string:

```
MONGODB_URI="your-mongodb-connection-string"
MONGODB_DB="notes_app"
```

> You can use [MongoDB Atlas](https://www.mongodb.com/atlas) (free) or a local MongoDB instance.

### 4. Run the development server

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Deployment on Vercel

1. Push your project to a **GitHub repository**.
2. Go to [Vercel](https://vercel.com/), import the repository.
3. In **Vercel Project Settings → Environment Variables**, add:

   * `MONGODB_URI` → your MongoDB connection string
   * `MONGODB_DB` → notes\_app
4. Deploy! 🎉

---

## 🔗 API Endpoints

* `GET /api/notes` → Get all notes (supports `?q=search`)
* `POST /api/notes` → Create new note (`{ title, content }`)
* `GET /api/notes/:id` → Get note by ID
* `PUT /api/notes/:id` → Update note (`{ title, content }`)
* `DELETE /api/notes/:id` → Delete note

---

## ✨ Key Decisions

* Used **official MongoDB driver** (not Mongoose) for simplicity.
* Dark mode implemented using Tailwind’s `dark` class + `localStorage`.
* Search implemented with regex filtering in MongoDB (case-insensitive).
* Validation ensures notes must have a **title** (both client & server side).

---

## 🚀 Future Improvements

* 🔒 Add authentication (per-user notes).
* 📑 Add pagination for large notes lists.
* 📝 Support Markdown or rich text editor.
* 📱 Add PWA support for offline notes.

---

## 📸 Screenshots (Optional)

<img width="1917" height="938" alt="image" src="https://github.com/user-attachments/assets/db64d1be-bc11-4b69-b6ac-69b28a403799" />




