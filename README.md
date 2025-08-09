# Online E‑Learning (React + Tailwind)

A single‑page online e‑learning website built with React, React Router, and Tailwind CSS. It includes a marketing homepage, course listing, detailed course pages, and basic auth pages (signup/login UI).


## Tech Stack
- React (Create React App)
- React Router
- Tailwind CSS
- Testing Library + Jest (via react-scripts)


## Features
- Responsive UI styled with Tailwind
- Client‑side routing for pages and course detail
- Course detail data loaded from public/courses.json
- Static assets served from the public/ directory


## Getting Started
Prerequisites:
- Node.js LTS (18+) and npm

Install dependencies and start the dev server:
```
npm install
npm start
```
The app runs at http://localhost:3000.

Build production assets:
```
npm run build
```
Run tests:
```
npm test
```


## Available Scripts
- npm start – Start the development server
- npm run build – Build for production into the build/ directory
- npm test – Run tests in watch mode
- npm run eject – Eject CRA config (irreversible)


## Project Structure (high level)
- public/
  - index.html
  - courses.json
  - images/ (static images referenced by pages)
  - manifest.json, robots.txt, favicons
- src/
  - App.js (route definitions and homepage composition)
  - components/ (Navbar, Hero, Benefits, Courses, Pricing, FAQs, Footer, etc.)
  - pages/ (about, contact, pricing, signup, login, courses, CourseDetail)
  - index.css (Tailwind directives)
  - index.js (React root)
  - tailwind.config.js (root)


## Routing
Defined in src/App.js using react-router-dom:
- / – Homepage (Hero, Sponsors, video poster, featured courses, benefits, testimonials, pricing, FAQs)
- /courses – Course listing page (uses local sample data inside src/pages/courses.jsx)
- /courses/:id – Course detail page (loads a single course from public/courses.json)
- /about – About page
- /contact – Contact page
- /pricing – Pricing page
- /signup – Signup page (UI only)
- /login – Login page (UI only)


## Data: Courses
- The detail page (src/pages/CourseDetail.jsx) fetches course data from public/courses.json.
- The listing page (src/pages/courses.jsx) currently uses a local in-file sample array to render cards.

To add or edit courses for the detail page, update public/courses.json. Schema example:
```
{
  "id": 1,
  "title": "Web Design Fundamentals",
  "author": "By John Smith",
  "category": "Design",
  "level": "Beginner",
  "duration": "4h 30m",
  "image": "/images/web design.png", // path in public/images
  "description": "Short summary...",
  "curriculum": [
    {
      "title": "Section Title",
      "description": "Section description",
      "duration": "45m",
      "subtopics": [
        { "title": "Topic A", "duration": "10m" },
        { "title": "Topic B", "duration": "15m" }
      ]
    }
  ],
  "totalDuration": "4h 30m"
}
```
Notes:
- Place referenced images in public/images and use paths that start with /images/...
- Make sure each course id is unique and numeric.

If you prefer the listing page to use the same JSON, you can refactor src/pages/courses.jsx to fetch /courses.json similar to the detail page.


## Styling: Tailwind CSS
- Tailwind directives are in src/index.css:
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities;
- Tailwind content scan is configured in tailwind.config.js to include "./src/**/*.{js,jsx,ts,tsx}".

If Tailwind utilities are not being applied, ensure PostCSS is configured. Create a postcss.config.js at the project root:
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
Then restart the dev server.


## Static Assets
- Images live in public/images and are referenced by absolute paths (e.g., /images/thumbnail.png).
- App.js references a poster and a video at /images/thumbnail.png and /videos/intro.mp4 respectively. If you want the video to be playable, add a file at public/videos/intro.mp4 or update the path in App.js.


## Testing
- Uses react-scripts with Testing Library configuration in src/setupTests.js.
- Run tests: npm test


## Deployment
- Build with npm run build. The output in build/ can be served by any static hosting provider (Netlify, Vercel, GitHub Pages, a static HTTP server, etc.).
- To preview locally you can use a static file server, for example:
```
npm i -g serve
serve -s build
```


## Known Notes
- File names in public/images include spaces (e.g., "web design.png"); the app references them with URL paths which is fine, but avoid renaming without updating references.
- The course listing currently duplicates a subset of data in src/pages/courses.jsx for demo purposes.


## License
No license specified. This project is marked "private" in package.json.
