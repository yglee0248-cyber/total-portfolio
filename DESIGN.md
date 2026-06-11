---
name: Lavender & Mint Portfolio
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4a454e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#7b757f'
  outline-variant: '#ccc4cf'
  surface-tint: '#6c538b'
  primary: '#6a5188'
  on-primary: '#ffffff'
  primary-container: '#8369a3'
  on-primary-container: '#fffbff'
  inverse-primary: '#d8bafa'
  secondary: '#246a52'
  on-secondary: '#ffffff'
  secondary-container: '#a8eecf'
  on-secondary-container: '#296e56'
  tertiary: '#626117'
  on-tertiary: '#ffffff'
  tertiary-container: '#b1af5d'
  on-tertiary-container: '#434200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eedbff'
  primary-fixed-dim: '#d8bafa'
  on-primary-fixed: '#260e43'
  on-primary-fixed-variant: '#543b71'
  secondary-fixed: '#abf1d2'
  secondary-fixed-dim: '#90d5b7'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#00513b'
  tertiary-fixed: '#e9e78e'
  tertiary-fixed-dim: '#cdca75'
  on-tertiary-fixed: '#1d1d00'
  on-tertiary-fixed-variant: '#4a4900'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  max-width: 1140px
  gutter: 24px
  section-padding: 80px
  container-padding-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is centered around a professional yet approachable aesthetic for a junior developer. It leverages a modern **Minimalist** style with **Card-based** information architecture to provide a clear, scannable structure of technical skills and projects.

The personality is calm, precise, and organized, evoking a sense of reliability and modern technical literacy. By utilizing a soft, pastel-leaning palette against high-quality whitespace, the UI avoids the typical "dark mode developer" tropes, opting instead for a fresh, inviting, and highly readable professional presence.

## Colors

The color palette uses **Soft Lavender** as the primary brand anchor, used for key actions, brand marks, and active states. **Mint** serves as a refreshing accent color, primarily used for success states, highlights, and decorative elements that need to stand out without adding visual weight.

The background is a very light neutral to ensure the white cards have enough contrast to appear elevated. Text maintains high legibility with a deep charcoal grey rather than pure black to keep the interface soft.

## Typography

This design system utilizes a tiered typography approach:
- **Hanken Grotesk** for headlines provides a sharp, contemporary, and professional look.
- **Inter** for body text ensures maximum readability across all screen sizes.
- **JetBrains Mono** for labels and tech stack tags to subtly reference the backend developer nature of the portfolio.

Type hierarchy is established through significant size differences and weight shifts. On mobile, display sizes are scaled down to ensure the hero section remains impactful without requiring excessive scrolling.

## Layout & Spacing

The layout follows a **Fixed Grid** model with a maximum content width of 1140px. The vertical rhythm is generous, using 80px gaps between major sections to emphasize whitespace and focus.

- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** Single-column layout with 20px side margins.

Content is organized into logical "stacks." Use `stack-sm` for related elements (label + input), `stack-md` for standard component spacing (title + description), and `stack-lg` for separating internal card groups.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering. The base background is slightly off-white, allowing white cards to pop.

Shadows are exceptionally soft:
- **Default State:** A subtle, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) defines card boundaries.
- **Hover State:** Elements lift physically. Transition the shadow to (0px 12px 30px rgba(150, 123, 182, 0.12)) and translate the Y-axis by -4px.

This tactile feedback provides a sense of interactivity and depth without the harshness of high-contrast borders.

## Shapes

The design system uses **Rounded** geometry to maintain the friendly and modern aesthetic. 

- **Cards & Sections:** Use `rounded-lg` (1rem) to soften the layout.
- **Buttons & Inputs:** Use `rounded` (0.5rem) for a precise, clickable feel.
- **Tags & Chips:** Use `rounded-xl` (1.5rem) to create a distinct "pill" shape that contrasts with the structural cards.

## Components

### Navbar
A **Fixed Navbar** with a glassmorphism effect (backdrop-blur: 12px; background: rgba(255, 255, 255, 0.8)). It features simple text links that use the Primary color for the active state and a bottom-border hover transition.

### Cards (Project & Tech Stack)
Project cards feature a white background, `rounded-lg` corners, and subtle shadows. They must include a project thumbnail, title, description, and "Demo" / "GitHub" buttons at the bottom. Tech stack cards should be smaller, focusing on the icon and the name using `label-md` typography.

### Buttons
- **Primary:** Lavender background, white text, `rounded` corners. Subtle lift on hover.
- **Secondary/Outline:** Transparent background, Lavender border (1px), Lavender text.
- **Icon Buttons:** Small mint-tinted backgrounds for social links or external tools.

### Input Fields
Clean, minimal borders (1px solid #E0E0E0). On focus, the border transitions to Primary Lavender with a soft 2px outer glow of the same color at 20% opacity.

### Chips/Badges
Small pill-shaped elements used within cards to identify languages (e.g., Node.js, PostgreSQL). Use a light Mint background with dark Mint text for high legibility and a "fresh" feel.