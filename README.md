# Aman Kumar Seth - Professional Portfolio

This is a modern, responsive personal portfolio website built to showcase my professional experience, projects, skills, and achievements as a **Java Spring Boot Backend Developer**.

## 🚀 Tech Stack

The project is built using modern web development technologies:

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI Pre-built primitives](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations/Effects**: [tsparticles](https://particles.js.org/) (for interactive backgrounds), [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## 🎨 Key Features & Sections

The application is structured as a single-page layout that smoothly navigates through various sections:

- **Hero**: Introduction and a brief overview of my role as a backend developer, featuring interactive particle backgrounds.
- **Projects**: A gallery of selected works and applications developed.
- **Experience**: Detailed chronological progression of my professional roles.
- **About**: Personal background and coding philosophy.
- **Education**: Academic history.
- **Skills**: Technical proficiencies categorized effectively.
- **Achievements & Certifications**: Notable accomplishments and professional credentials.
- **Training**: Specialized courses and workshops attended.
- **Contact**: A functional contact form for direct inquiries.
- **Theme Support**: Includes light and dark mode toggling support.

## 📂 Project Structure

- `src/app/` - Next.js App Router core files (pages, layouts, globals).
- `src/components/` - Reusable UI components (buttons, headers, footers).
- `src/components/ui/` - Custom UI components.
- `src/components/sections/` - Individual page sections (Hero, About, Projects, etc.).
- `src/lib/` - Utility functions.
- `src/hooks/` - Custom React hooks.

## ⚙️ Getting Started

To run this project locally, follow these steps:

1. **Install dependencies**:
   Make sure you have Node.js installed.
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:9002](http://localhost:9002) (or the port specified in console output) to see the application running.

## 📊 Analytics

Google Analytics 4 (GA4) tracking is implemented in `src/components/analytics.tsx` and mounted by the root layout. It stays disabled until `NEXT_PUBLIC_GA_ID` is set; no analytics package or code changes are needed to enable it.

### Set up GA4

1. Sign in to [Google Analytics](https://analytics.google.com/) and create an account if you do not already have one.
2. Create a GA4 property for the portfolio. Choose the appropriate reporting time zone and currency.
3. Add a **Web** data stream using the deployed site URL (for example, `https://amankrseth.netlify.app`). Copy the Measurement ID shown for the stream; it starts with `G-`.
4. In Netlify, open the portfolio site’s environment-variable settings (under **Project configuration** or **Site configuration**, depending on the UI). Add:

   | Key | Value |
   | --- | --- |
   | `NEXT_PUBLIC_GA_ID` | Your GA4 Measurement ID, e.g. `G-XXXXXXXXXX` |

   Make the variable available to the deploy contexts you use, including production. A `NEXT_PUBLIC_` variable is included in the browser bundle, so only put the Measurement ID here—never a secret.
5. Trigger a new deploy. Next.js reads this variable when building the app, so changing it does not affect an already-built deployment.
6. To enable analytics in a local development build instead, create `.env.local` in the repository root and add:

   ```dotenv
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

   Replace the example with your Measurement ID, restart the development server, and do not commit `.env.local`.

### Verify tracking and view interactions

1. Visit the deployed site after the new deploy. In Google Analytics, open **Reports → Realtime** and check whether your visit appears. Initial data can take a little time to show.
2. Click a link or button on the site, then look for the `ui_interaction` event in Realtime or **Admin → DebugView**. The site sends these parameters:
   - `element_type`: `link` or `button`
   - `element_label`: accessible label, title, or visible text
   - `destination`: link host and path, when the interaction is a link
3. To use these parameters in standard reports or explorations, register each one you need under **Admin → Data display → Custom definitions** as an **event-scoped custom dimension**. Set the event parameter to the exact parameter name (for example, `element_type`). Custom definitions are not retroactive and can take time to appear in reports.

GA4 also collects its configured page-view events. Its visitor metrics are estimates and do not identify visitors by name. Review applicable privacy and consent requirements for your audience, and disclose analytics in your privacy notice.
