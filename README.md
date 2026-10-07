# Sharath A B — Professional Portfolio Website

An ultra-modern, high-performance multi-page developer portfolio engineered for **Sharath A B** (MCA Graduate & Software Developer).

---

## 🌟 Key Features & Highlights

- **Multi-Page Architecture**:
  - `index.html` — **Home**: Dynamic interactive hero with typewriter effect, statistics counters, featured projects, and skill categories.
  - `about.html` — **About Me**: Full professional narrative, personal details, Cognifyz Technologies internship experience, and leadership history.
  - `projects.html` — **Projects**: Filterable project gallery (.NET/C#, Machine Learning, Power BI) with interactive architecture modals and code preview window.
  - `education.html` — **Education**: Academic milestone timeline detailing MCA (8.9 CGPA), BCA (8.21 CGPA), PUC, and SSLC, along with campus leadership achievements.
  - `certifications.html` — **Certifications Vault**: High-resolution vector credential previews, interactive certificate viewer modal, and direct download links.
  - `contact.html` — **Contact & Connect**: Direct contact cards, one-click email/phone copying, and prefilled message dispatcher.

- **Dynamic Theme Switcher**:
  - Features 5 themes accessible via the palette icon in the navigation bar:
    1. **Cyber Violet (Default)** — Sleek obsidian dark mode with electric violet and cyan accents.
    2. **Emerald Tech** — Cyberpunk terminal green & mint theme.
    3. **Sunset Rose** — Crimson & warm amber neon glow.
    4. **Sapphire Blue** — Enterprise deep royal blue & azure.
    5. **Clean Light** — Polished, high-contrast light mode.
  - Saves your theme preference automatically to `localStorage`.

- **Resume Features**:
  - **Online Viewer**: Built-in glass modal that renders `assets/docs/sharath-resume.pdf` directly inside the browser.
  - **Direct Download**: One-click download button configured across all pages (`SHARATH_AB_RESUME.pdf`).

- **Certificate Viewer**:
  - Click on any certificate card to open a full credentials modal displaying issuing body, verification ID, date, and description.
  - Direct download option for each certificate.

- **Visual Effects & Micro-Interactions**:
  - Interactive ambient particle mesh canvas (`#particle-canvas`).
  - Fluid glassmorphism styling with glowing borders and backdrop filters.
  - Scroll-triggered reveal animations via `IntersectionObserver`.
  - Floating action dock for quick phone calls, email copying, and resume viewing.
  - Instant toast notification system for feedback.

---

## 📂 File Structure

```text
Sharath/
├── index.html                   # Home Page
├── about.html                   # About Me Page
├── projects.html                # Projects Page
├── education.html               # Education & Milestones Page
├── certifications.html          # Certifications Vault
├── contact.html                 # Contact Page
├── README.md                    # Documentation & Customization Guide
│
└── assets/
    ├── css/
    │   ├── style.css            # Master stylesheet & CSS variables
    │   ├── animations.css       # Keyframes, scroll reveals & transitions
    │   └── responsive.css       # Mobile & tablet responsiveness
    │
    ├── js/
    │   ├── main.js              # Theme manager, typewriter, contact & filters
    │   ├── particles.js         # Interactive canvas particle network
    │   └── modal.js             # Resume & Certificate modal system
    │
    ├── images/
    │   ├── sharath-photo.jpeg   # High-resolution profile portrait
    │   └── certificates/
    │       ├── power-bi-cert.svg        # Coursera Power BI Certificate
    │       ├── data-warehousing-cert.svg # Coursera Data Warehousing Certificate
    │       └── leadership-cert.svg      # Anti-Ragging Leadership Certificate
    │
    └── docs/
        └── sharath-resume.pdf   # Official 2026 MCA Resume (PDF)
```

---

## 🚀 How to Run Locally

1. Open this folder in File Explorer: `c:\Users\DELL\Downloads\Sharath`
2. Simply **double-click** `index.html` to open it in Google Chrome, Microsoft Edge, or any modern web browser.
3. No build tools, Node.js, or server installations are required. Everything is pure HTML5, CSS3, and JavaScript!

---

## 📜 How to Add Your Official Certificates Later

When you receive your official PDF scans or images of your certificates:

1. Copy your certificate images (`.jpg`, `.png`) or PDF files into the directory:
   ```text
   assets/images/certificates/
   ```
2. Open `certifications.html` in an editor.
3. Update the `data-cert-image` and `<img src="...">` attributes with the name of your file:
   ```html
   <!-- Example: -->
   <div class="cert-preview-img-wrap" 
     data-action="view-cert"
     data-cert-title="Building Data Visualization and Reports using Power BI"
     data-cert-image="assets/images/certificates/my-power-bi-cert.jpg">
     <img src="assets/images/certificates/my-power-bi-cert.jpg" alt="Power BI Certification" class="cert-preview-img">
   </div>
   ```
4. Save the file. The modal viewer and download buttons will now display your uploaded certificate file automatically!

---

## 🌐 Free One-Click Deployment Options

### Option A: GitHub Pages
1. Create a new GitHub repository (e.g. `sharath-portfolio`).
2. Push all files from this directory to the repository.
3. Go to **Settings > Pages > Branch: main / root** and click **Save**.
4. Your website will be live at `https://<your-username>.github.io/sharath-portfolio/`.

### Option B: Netlify / Vercel
1. Drag and drop the `Sharath` folder directly into [Netlify Drop](https://app.netlify.com/drop) or Vercel.
2. It will deploy immediately with a free SSL certificate.

---

## 📞 Contact Information Configured

- **Full Name**: Sharath A B
- **Education**: MCA, Presidency College, Bengaluru (CGPA: 8.9 / 10)
- **Email**: `sharathab74@gmail.com`
- **Phone**: `+91 9606640323`
- **LinkedIn**: `https://www.linkedin.com/in/sharath-a-b-243a53295`
- **Location**: Bengaluru - 560097, Karnataka, India
