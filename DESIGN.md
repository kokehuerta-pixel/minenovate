# Design System: Minenovate

**Project Philosophy:** Luxury Minimalist / Industrial Refined. 
The design focuses on a premium, editorial feel that reflects the innovation and deep impact of the modern mining industry.

## 1. Visual Theme & Atmosphere
The atmosphere is **Dense yet Refined**. It uses high-contrast typography and deep shadows to create a sense of weight and importance, balanced by generous whitespace and subtle grain textures that evoke professional print media.

## 2. Color Palette & Roles

*   **Minenovate Navy (#1C2B39):** The primary brand color. Used for deep-mode sections, primary text, and high-impact identity.
*   **Gallery White (#F8F8F8):** The primary surface color. Provides a clean, minimalist backdrop for content.
*   **Pure White (#FFFFFF):** Used for interactive elements (buttons), text on dark backgrounds, and highlights.
*   **Semi-Transparent White (White/80):** Used for secondary text on dark backgrounds and subtle dividers.
*   **Shadow/Overlay (Navy/60):** Used for glassmorphism effects and backdrop-blur containers.

## 3. Typography Rules

*   **Display Title (Outfit):** Modern, bold, and geometric. Used for primary branding and large section headers to command attention.
*   **Editorial Title (Cormorant Garamond):** A high-contrast serif font used for italic highlights or secondary headers to provide a sophisticated, magazine-like aesthetic.
*   **Body/UI (Plus Jakarta Sans):** A geometric sans-serif optimized for legibility. Used for all core body text and interactive interface elements.
*   **Labels & Metadata (JetBrains Mono):** A monospaced font used for data, episode numbers, and technical labels, conveying a sense of engineering precision.

## 4. Component Stylings

*   **Buttons:** Generally pill-shaped (`rounded-full`). Primary buttons use solid backgrounds with high contrast; secondary buttons use glassmorphism (`backdrop-blur`) with subtle borders (`border-white/20`).
*   **Cards:** Features "Subtly rounded corners" (`rounded-3xl` or `rounded-xl`). They use "Whisper-soft diffused shadows" on light backgrounds and "Atmospheric Glow" (`blur-3xl`) on dark backgrounds.
*   **Containers:** Utilize "Layered translucency" via `bg-white/5` and `backdrop-blur-xl` to create depth without clutter.

## 5. Layout Principles

*   **Asymmetrical Grid:** Sections like "Comunidad" and the "Hero" break the traditional symmetrical grid to create a more dynamic and engaging flow.
*   **Negative Space:** Significant use of whitespace to ensure the "Industrial" density doesn't become overwhelming, keeping the focus on individual stories.
*   **Atmospheric Geometry:** Use of repeating linear gradients and noise filters (`feTurbulence`) to provide tactile texture to the digital interface.
