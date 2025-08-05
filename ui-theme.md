# Vellum UI Theme Specification

## Vision Statement
Vellum's interface embodies the dark, atmospheric essence of graphic storytelling. Drawing inspiration from Frank Miller's stark contrasts in 300 and Neil Gaiman's ethereal darkness in Sandman, the UI becomes an extension of the stories it hosts—mysterious, dramatic, and immersive.

## Core Design Principles

### 1. Mobile-First Gothic
- Start with phone layouts (320px minimum)
- Progressive enhancement for tablets and desktops
- Touch-friendly interactions with generous tap targets (minimum 44px)
- Swipe gestures for natural reading flow

### 2. Narrative Atmosphere
- UI elements fade into shadows, letting content dominate
- Subtle textures and gradients evoke aged paper and ink
- Transitions mirror page turns and panel reveals
- Loading states use thematic animations (ink spreading, shadows emerging)

### 3. Dramatic Contrast
- High contrast ratios for readability (WCAG AAA where possible)
- Strategic use of pure black (#000000) for depth
- Selective color highlights for critical actions
- Typography as visual hierarchy anchor

## Color Palette

### Dark Mode (Primary)
```css
--ink-black: #0A0A0A;        /* Primary background */
--shadow-black: #000000;      /* True black for depth */
--parchment: #1A1816;         /* Secondary background */
--stone: #2C2826;            /* Tertiary background */
--ash: #3E3A37;              /* Borders and dividers */
--dust: #6B635D;             /* Muted text */
--bone: #A39891;             /* Secondary text */
--ivory: #E8E2DC;            /* Primary text */
--blood-red: #8B0000;        /* Primary accent - CTAs */
--dried-blood: #5C0000;      /* Hover state */
--gold-leaf: #B8860B;        /* Premium/special content */
--spectral-blue: #1E3A5F;    /* Links and info */
--poison-green: #2F4F2F;     /* Success states */
--warning-amber: #8B4513;    /* Warning states */
```

### Light Mode (Secondary)
```css
--vellum-white: #FAF8F5;     /* Primary background */
--paper-white: #FFFFFF;      /* Cards and panels */
--ink-wash: #F5F2EE;         /* Secondary background */
--pencil-gray: #E8E4E0;      /* Borders */
--charcoal: #1A1816;         /* Primary text */
--graphite: #3E3A37;         /* Secondary text */
--faded-ink: #6B635D;        /* Muted text */
--crimson: #DC143C;          /* Primary accent */
--burgundy: #8B0000;         /* Hover state */
--antique-gold: #DAA520;     /* Premium content */
--midnight-blue: #191970;    /* Links */
--forest: #228B22;           /* Success */
--burnt-sienna: #A0522D;     /* Warning */
```

## Typography

### Font Stack
```css
--font-display: 'Crimson Text', 'Garamond', serif;     /* Headings, dramatic text */
--font-body: 'Libre Baskerville', 'Georgia', serif;    /* Body text, readability */
--font-ui: 'Inter', -apple-system, system-ui, sans-serif; /* UI elements */
--font-mono: 'Fira Code', 'Consolas', monospace;       /* Code, technical */
```

### Type Scale (Mobile-First)
```css
/* Mobile (base) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */

/* Tablet (768px+) */
@media (min-width: 768px) {
  /* Scale up 10% */
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  /* Scale up 20% */
}
```

### Typography Styles
- **Headings**: High contrast, letter-spacing: -0.02em
- **Body**: Comfortable line-height: 1.7
- **Captions**: Uppercase, letter-spacing: 0.1em
- **Speech Bubbles**: Clean sans-serif for readability

## Spacing System

### Base Unit: 4px
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

## Component Patterns

### Buttons
```css
/* Primary CTA - Blood red with dramatic hover */
.btn-primary {
  background: var(--blood-red);
  color: var(--ivory);
  padding: var(--space-3) var(--space-6);
  border: 2px solid transparent;
  font-family: var(--font-ui);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(139, 0, 0, 0.3);
}

.btn-primary:hover {
  background: var(--dried-blood);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.4);
}

/* Ghost buttons for secondary actions */
.btn-ghost {
  background: transparent;
  color: var(--bone);
  border: 1px solid var(--ash);
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  border-color: var(--dust);
  color: var(--ivory);
  background: rgba(255, 255, 255, 0.05);
}
```

### Cards
```css
.card {
  background: var(--parchment);
  border: 1px solid var(--ash);
  border-radius: 0; /* Sharp corners for gothic feel */
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

/* Subtle texture overlay */
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml;base64,...'); /* Noise texture */
  opacity: 0.03;
  pointer-events: none;
}
```

### Navigation
- **Mobile**: Full-screen overlay with dramatic reveal
- **Tablet**: Collapsible sidebar with icon rail
- **Desktop**: Persistent sidebar with hover states

### Forms
```css
.input {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--ash);
  border-radius: 0;
  color: var(--ivory);
  padding: var(--space-3) var(--space-4);
  transition: all 0.2s ease;
}

.input:focus {
  border-color: var(--blood-red);
  box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.2);
  outline: none;
}
```

## Animations & Transitions

### Page Transitions
```css
/* Fade through black - like turning a page */
.page-transition {
  animation: fadeThrough 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeThrough {
  0% { opacity: 1; }
  50% { opacity: 0; background: var(--shadow-black); }
  100% { opacity: 1; }
}
```

### Panel Reveals
```css
/* Panels emerge from shadows */
.panel-reveal {
  animation: emergeFromShadow 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

@keyframes emergeFromShadow {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
    filter: brightness(0);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: brightness(1);
  }
}
```

### Loading States
- Ink spreading effect for content loading
- Skeletal screens with pulsing shadows
- Page number counters with typewriter effect

## Responsive Breakpoints

```css
--mobile: 320px;      /* Base */
--mobile-lg: 480px;   /* Larger phones */
--tablet: 768px;      /* Tablets portrait */
--tablet-lg: 1024px;  /* Tablets landscape */
--desktop: 1280px;    /* Desktop */
--desktop-lg: 1536px; /* Large monitors */
--desktop-xl: 1920px; /* Extra large */
```

## View-Specific Guidelines

### 1. Landing Page (Marketing)
- **Hero**: Full-bleed panel artwork with parallax scrolling
- **Mobile**: Stack features vertically with generous spacing
- **Tablet/Desktop**: Asymmetric grid layout mimicking comic panels
- **Special**: Animated ink-blot reveal on scroll

### 2. Authentication Views
- **Layout**: Centered card with textured background
- **Mobile**: Full-screen with soft keyboard consideration
- **Special**: Password strength indicator as filling ink well
- **Error states**: Blood-red highlights with subtle shake animation

### 3. Creator Dashboard
- **Mobile**: Tabbed interface with swipe navigation
- **Tablet**: Two-column layout with collapsible sections
- **Desktop**: Three-panel layout (projects, details, preview)
- **Special**: Drag-and-drop zones highlighted with spectral glow

### 4. Project Editor
- **Mobile**: Stacked workflow (metadata → pages → panels)
- **Tablet**: Split view (page list + editor)
- **Desktop**: Full editor with live preview panel
- **Special**: Grid overlay toggles with ghosted guidelines

### 5. Page Designer
- **Mobile**: Touch-optimized with pinch-zoom
- **Tablet**: Floating toolbar that follows touch
- **Desktop**: Persistent toolbars with keyboard shortcuts
- **Special**: Panel borders pulse when selected

### 6. Template Gallery
- **Mobile**: Single column with preview on tap
- **Tablet**: Two-column masonry grid
- **Desktop**: Filter sidebar + responsive grid
- **Special**: Hover reveals template structure wireframe

### 7. Text Element Editor
- **All devices**: Floating editor that avoids keyboard
- **Touch**: Larger grab handles for positioning
- **Special**: Speech bubble tails that snap to panel edges

### 8. Publication Scheduler
- **Mobile**: Linear timeline with expandable sections
- **Tablet/Desktop**: Calendar view with drag-to-reschedule
- **Special**: Chapter progress visualization as filling tome

### 9. Reader Discovery
- **Mobile**: Instagram-style story previews
- **Tablet**: Pinterest-style masonry with quick preview
- **Desktop**: Netflix-style rows by genre/popularity
- **Special**: Cover art with subtle 3D tilt on hover

### 10. Reading Interface
- **Mobile**: Full-screen with hidden UI, swipe navigation
- **Tablet**: Optional two-page spread in landscape
- **Desktop**: Cinematic mode with ambient lighting
- **Special**: 
  - Panel-by-panel mode for phones
  - Smart zoom that focuses on text bubbles
  - Reading progress saved as bookmark ribbon
  - Haptic feedback on page turns (mobile)

### 11. Creator Profile
- **Mobile**: Vertical scroll with sticky action button
- **Tablet/Desktop**: Hero banner with parallax
- **Special**: Published works displayed as bookshelf

### 12. Purchase/Subscription Flow
- **Mobile**: Apple/Google Pay prominence
- **All devices**: Progress indicator as filling grimoire
- **Special**: Success animation of tome closing with glow

### 13. Admin Dashboard
- **Mobile**: Metric cards with swipe actions
- **Tablet**: Data tables with inline actions
- **Desktop**: Full analytics dashboard
- **Special**: Real-time updates with subtle pulse effects

## Accessibility Considerations

### High Contrast Mode
- Increase contrast ratios to maximum
- Remove decorative shadows and textures
- Thicker borders and focus indicators

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Touch Targets
- Minimum 44x44px on mobile
- 48px spacing between interactive elements
- Larger hit areas than visual appearance

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for decorative elements
- Skip links for navigation
- Reading order matches visual hierarchy

## Theme Implementation

### CSS Custom Properties
All theme values use CSS custom properties for easy theming:

```css
:root {
  /* Colors */
  --color-primary: var(--blood-red);
  --color-background: var(--ink-black);
  /* ... etc */
}

[data-theme="light"] {
  --color-primary: var(--crimson);
  --color-background: var(--vellum-white);
  /* ... etc */
}
```

### Material-UI Integration
```javascript
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B0000', // blood-red
    },
    background: {
      default: '#0A0A0A', // ink-black
      paper: '#1A1816',   // parchment
    },
    // ... etc
  },
  typography: {
    fontFamily: '"Libre Baskerville", "Georgia", serif',
    h1: {
      fontFamily: '"Crimson Text", "Garamond", serif',
    },
    // ... etc
  },
});
```

## Performance Guidelines

### Image Optimization
- WebP with JPEG fallback
- Lazy loading for off-screen panels
- Progressive loading for large images
- Blur-up technique for placeholders

### CSS Performance
- Critical CSS inlined
- Component-specific styles code-split
- GPU-accelerated animations only
- Will-change used sparingly

### Mobile Performance
- Touch events over click events
- Passive event listeners
- Virtual scrolling for long lists
- Service worker for offline reading