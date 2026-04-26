# Madiha Scrap Trading 🌐

A professional, high-performance scrap trading platform built with Next.js 14+ and Tailwind CSS v4. This website is designed to provide seamless scrap buying services with modern features like a floating WhatsApp chat, sticky mobile navigation, and interactive elements.

## 🎯 Features

- **Professional UI**: Modern, clean design with smooth animations and effects.
- **Floating WhatsApp Widget**: Easy one-click WhatsApp communication.
- **Sticky Mobile Navigation**: Always-accessible navigation on mobile devices.
- **Interactive Elements**: Custom cursor, hover effects, and scroll animations.
- **SEO Optimized**: Full Schema.org JSON-LD markup, Open Graph, Twitter Cards, and metadata.
- **Responsive Design**: Flawless layout across desktop, tablet, and mobile.
- **Dark Theme**: Auto-detects system preference.
- **Component Architecture**: Reusable components for Navbar, Footer, and Hero sections.
- **Progressive Enhancement**: Built with best practices for performance.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm/yarn/pnpm**: Any modern package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Madiha-Scrap-Trading.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Madiha-Scrap-Trading
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Create a `.env.local` file in the root directory (copy from `.env.local.example` if available) and add your configuration:
   ```env
   # Business Contact
   NEXT_PUBLIC_PHONE=+919876543210
   NEXT_PUBLIC_WHATSAPP=919876543210
   NEXT_PUBLIC_EMAIL=info@madihascraptrading.com
   NEXT_PUBLIC_ADDRESS=123 Industrial Area, Your City, India
   NEXT_PUBLIC_CITY=Your City
   
   # Google Maps Embed URL
   NEXT_PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
   
   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=
   
   # Website URL
   NEXT_PUBLIC_SITE_URL=https://madihascraptrading.com
   ```

## 💻 Usage

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build & Production

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 🎨 Styling

The project uses **Tailwind CSS v4** and **CSS Modules**.

- **Global Styles**: `src/app/globals.css`
- **Component Styles**: `.module.css` files in the `styles` directory.
- **Custom Cursor**: Defined in `src/app/globals.css`.

## 📊 SEO & Metadata

The site includes comprehensive SEO optimization:

- **Metadata API**: Dynamic title, description, and keywords.
- **Open Graph & Twitter Cards**: For social media sharing.
- **Schema.org**: LocalBusiness schema for better search engine visibility.
- **Robots Directives**: Configured for proper indexing.

## 📱 Mobile Features

- **Sticky Bottom Bar**: Always visible navigation on mobile.
- **Custom Cursor**: Animated cursor for interactive feel.
- **One-Page Design**: Smooth scrolling to different sections.

## 📂 Project Structure

```
Madiha-Scrap-Trading/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.js       # Home page
│   │   ├── layout.js     # Root layout with global styles
│   │   └── globals.css   # Global CSS and Tailwind configuration
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   └── MobileStickyBar.jsx
│   └── styles/           # CSS modules
├── .env.local            # Environment variables
├── package.json
└── README.md
```

## 🤝 Contributing

Feel free to open a Pull Request with your suggestions.

## 📄 License

This project is licensed under the MIT License.
