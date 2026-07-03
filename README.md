<a name="readme-top"></a>

# Modern UI/UX Portfolio using React and Three.js

![Modern UI/UX Portfolio using React and Three.js](/.github/images/img_main.png "Modern UI/UX Portfolio using React and Three.js")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/ibrahimarchive/ "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/ibrahimarchive/interactive-3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/ibrahimarchive/interactive-3d-portfolio/?tab=MIT-1-ov-file "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/ibrahimarchive/interactive-3d-portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/ibrahimarchive/interactive-3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/ibrahimarchive/interactive-3d-portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/ibrahimarchive/interactive-3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/ibrahimarchive/interactive-3d-portfolio/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/ibrahimarchive/interactive-3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/ibrahimarchive/interactive-3d-portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/ibrahimarchive/interactive-3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/ibrahimarchive/interactive-3d-portfolio/pulls "GitHub pull requests")
[![Netlify Status](https://api.netlify.com/api/v1/badges/8c478bd6-ce9e-4d39-882e-a064a715cbd1/deploy-status)](https://interactive-3d-portfolio.netlify.app/ "Netlify Status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Netlify](#page_with_curl-deploy-on-netlify)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->
```bash
interactive-3d-portfolio/
  |- public/
  |- src/
    |-- components/
      |--- Button.tsx
      |--- CanvasLoader.tsx
      |--- Cube.tsx
      |--- DemoComputer.tsx
      |--- Developer.tsx
      |--- HackerRoom.tsx
      |--- HeroCamera.tsx
      |--- ReactLogo.tsx
      |--- Rings.tsx
      |--- Target.tsx
    |-- constants/
      |--- index.ts
    |-- lib/
      |--- utils.ts
    |-- sections/
      |--- About.tsx
      |--- Clients.tsx
      |--- Contact.tsx
      |--- Experience.tsx
      |--- Footer.tsx
      |--- Hero.tsx
      |--- Navbar.tsx
      |--- Projects.tsx
    |-- App.tsx
    |-- index.css
    |-- main.tsx
    |-- vite-env.d.ts
  |- .gitignore
  |- .prettierrc
  |- eslint.config.js
  |- index.html
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- tsconfig.app.json
  |- tsconfig.json
  |- tsconfig.node.json
  |- vite.config.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# emailjs configuration
VITE_APP_SERVICE_ID=service_xxxxxxxxxx
VITE_APP_TEMPLATE_ID=template_xxxxxxxxxx
VITE_APP_EMAIL=<your-email-here>
VITE_APP_PUBLIC_KEY=xxxxxxxxxxxxxx
```

### 5. Service ID (Replace VITE_APP_SERVICE_ID):

- Visit [EmailJS](https://emailjs.com "EmailJS") Website.
- Log in to your account or sign up with new account.
- Navigate to the API keys or services section.
- Find and copy the Service ID associated with your account.

### 6. Template ID (Replace VITE_APP_TEMPLATE_ID):

- Access the section for email templates or integration.
- Locate the template you want to use or create a new one and copy its Template ID.

### 7. EmailJS Public Key (Replace VITE_APP_PUBLIC_KEY):

- Navigate to the dashboard or settings page.
- Look for API keys or integration settings.
- Copy the Public Key associated with your account.

![Copy public key](/.github/images/step_emailjs.png "Copy public key")

### 8. EmailJS Receiver (Replace VITE_APP_EMAIL):

- Enter the email address where you want to receive emails.
- Ensure that the chosen email address is accessible and ready to receive emails.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps` or `bun install --legacy-peer-deps` to install dependencies.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev` or `bun dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Showcase your work](/.github/images/img2.png "Showcase your work")

![Testimonials section](/.github/images/img3.png "Testimonials section")

![Experience section](/.github/images/img4.png "Experience section")

![Working contact form](/.github/images/img5.png "Working contact form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Three JS](https://skillicons.dev/icons?i=threejs "Three JS")](https://threejs.org/ "Three JS") [![Javascript](https://skillicons.dev/icons?i=js "Javascript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Javascript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## :wrench: Stats

[![Stats for Interactive 3D Portfolio](/.github/images/stats.svg "Stats for Interactive 3D Portfolio")](https://pagespeed.web.dev/ "Stats for Interactive 3D Portfolio")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Interactive 3D Portfolio.

<!--- DEPENDENCIES_START --->
- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser): ^4.4.1
- [@eslint/js](https://www.npmjs.com/package/@eslint/js): ^9.30.1
- [@gsap/react](https://www.npmjs.com/package/@gsap/react): ^2.1.2
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^9.108.3
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): 8
- [@types/react](https://www.npmjs.com/package/@types/react): 18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): 18
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^5.0.0
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.21
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [eslint](https://www.npmjs.com/package/eslint): ^9.30.1
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): ^7.37.5
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^7.0.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.4.20
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^12.42.2
- [gh-pages](https://www.npmjs.com/package/gh-pages): ^6.3.0
- [globals](https://www.npmjs.com/package/globals): ^16.3.0
- [gsap](https://www.npmjs.com/package/gsap): ^3.13.0
- [leva](https://www.npmjs.com/package/leva): ^0.10.0
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^1.22.0
- [maath](https://www.npmjs.com/package/maath): ^0.10.8
- [postcss](https://www.npmjs.com/package/postcss): ^8.5.6
- [prettier](https://www.npmjs.com/package/prettier): ^3.6.2
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss): ^0.6.13
- [react](https://www.npmjs.com/package/react): 18
- [react-dom](https://www.npmjs.com/package/react-dom): 18
- [react-globe.gl](https://www.npmjs.com/package/react-globe.gl): ^2.34.0
- [react-responsive](https://www.npmjs.com/package/react-responsive): ^10.0.1
- [react-type-animation](https://www.npmjs.com/package/react-type-animation): ^3.2.0
- [sonner](https://www.npmjs.com/package/sonner): ^2.0.6
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^3.3.1
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): 3
- [three](https://www.npmjs.com/package/three): 0.180.0
- [typescript](https://www.npmjs.com/package/typescript): ^5.8.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint): ^8.35.1
- [vite](https://www.npmjs.com/package/vite): ^7.0.2
- [zod](https://www.npmjs.com/package/zod): ^4.4.3

<!--- DEPENDENCIES_END --->

## :coffee: Credit

All credit goes to Sanidhya Kumar Verma

[![Click here to see original repo](https://img.shields.io/badge/Click%20here%20to%20see%20original%20repo-blue?style=for-the-badge&logo=github)](https://github.com/sanidhyy/threejs-portfolio "Original Repository")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/ibrahimarchive?style=social&label=Follow&maxAge=2592000)](https://github.com/ibrahimarchive "Follow Me")

## :books: Learn More

To deepen your understanding of React.js and Netlify, explore the following resources:

- [React.js Documentation](https://reactjs.org/docs) - delve into React.js features, concepts, and API.
- [React Official Tutorial](https://reactjs.org/tutorial) - an interactive tutorial to get hands-on experience with React.

For Netlify-specific information:

- [Netlify Documentation](https://docs.netlify.com) - learn about Netlify's features, deployment options, and more.
- [Getting Started with Netlify and React](https://docs.netlify.com/frameworks/react) - a guide on deploying React applications on Netlify.

You're encouraged to contribute and provide feedback on [Netlify's GitHub repository](https://github.com/netlify/netlify).

## :page_with_curl: Deploy on Netlify

The simplest way to deploy your React.js app is to use the [Netlify Platform](https://app.netlify.com/start) - a powerful platform for modern web projects.

Explore the [Netlify deployment documentation](https://docs.netlify.com/site-deploys/create-deploys) for step-by-step instructions on deploying your React.js app on Netlify.

Happy coding, and feel free to share your thoughts and improvements with the [Netlify community](https://community.netlify.com)!

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
