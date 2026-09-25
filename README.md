# <img src="./src/assets/logo.png" width="25" height="25" alt="FitLog Logo" /> FitLog — Workout Library

> A dark, no-nonsense gym companion. Pick a lift, lock it into today's plan, and watch the week's work add up.

FitLog is a responsive workout-tracking web app where users can browse a library of exercises, explore detailed workout information, and build a daily training plan — all backed by live counters, toast notifications, and a clean, distraction-free dark UI.

---

## Live Demo

🔗 **[View Live Site](YOUR_VERCEL_LIVE_LINK)**

---

## Technologies Used

| Category               | Technology         |
| ---------------------- | ------------------ |
| **Language**           | TypeScript         |
| **Framework**          | Next.js            |
| **UI Library**         | React              |
| **Styling**            | Tailwind CSS       |
| **State Management**   | React Context API  |
| **Routing**            | Next.js App Router |
| **Notifications**      | React Toastify     |
| **Icons**              | Lucide React       |
| **Data**               | REST API           |
| **Image Optimization** | Next.js Image      |
| **Fonts**              | Google Fonts       |
| **Deployment**         | Vercel             |

---

## Key Features

* **Detailed Workout Pages** — Each workout has a dedicated two-column detail page with workout information, key specifications, instructions, and actions to add the workout to today's plan or save it for later.

* **Live Plan Tracking** — The `/my-plan` page displays live totals for exercises, minutes, and calories. Statistics update automatically when workouts are added or removed.

* **Workout Management & Feedback** — Users can add workouts to today's plan, save workouts for later, mark workouts as done, and remove workouts. Navbar counters and toast notifications provide immediate feedback.

* **Sorting & Responsive Design** — Workouts on the My Plan page can be sorted by duration, calories, or rating. The entire application is responsive across mobile, tablet, and desktop devices.

* **Dynamic Workout Library** — Twelve lifts are fetched from an API and displayed in a responsive 3×4 grid on large screens. Each card includes category tags, equipment, duration, calories, and rating.

---

## ✨ Additional Features

* Dark modern fitness-focused interface
* Active navigation state
* Plan and Saved counters in the navbar
* Smooth scroll from the hero section to the workout library
* Loading state while workout data is being fetched
* Custom 404 page for invalid routes
* Empty state for empty workout lists
* Five-lift daily plan limit
* Reusable React components
* Context API for shared workout state
* Toast notifications for workout actions
* Responsive footer
* Optimized images with Next.js `Image`
* Deep-link and page reload support after deployment

---

© 2026 FitLog — Workout Library. Train hard, log honest.