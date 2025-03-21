## Berget Design System

### Brand Identity

The Berget design system emphasizes clarity, professionalism, and modern aesthetics while maintaining excellent readability and accessibility.

### Typography

```css
/* System font stack optimized for modern browsers */
font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;

/* Font Features */
font-feature-settings: "ss01", "ss02", "cv01", "cv02";
```

Font Sizes:

-   Headings:
    -   H1: 2.25rem (36px) - font-medium
    -   H2: 1.5rem (24px) - font-medium
    -   H3: 1.25rem (20px) - font-medium
-   Body: 1rem (16px)
-   Small: 0.875rem (14px)
-   Micro: 0.75rem (12px)

### Color Palette

Primary Colors:

```css
--color-background: #1a1a1a; /* Main background */
--color-surface: #e5ddd5; /* Surface elements */
--color-text: #ffffff; /* Primary text */
--color-text-secondary: rgba(255, 255, 255, 0.6); /* Secondary text */
--color-text-tertiary: rgba(255, 255, 255, 0.4); /* Tertiary text */
```

Accent Colors:

```css
--color-primary: #4361ee; /* Primary actions */
--color-secondary: #7209b7; /* Secondary elements */
--color-success: #22c55e; /* Success states */
```

Status Colors:

```css
--color-error: #ff0033; /* Error states - Red LED */
--color-success: #22c55e; /* Success states - Green LED */
--color-warning: #f59e0b; /* Warning states */
--color-info: #3b82f6; /* Info states */
--color-offline: #4b5563; /* Offline states - Gray LED */
```

Status Indicators:

We use LED-style indicators for various states:

-   Red LED: Critical errors, failures, stopped services
-   Green LED: Success, running services, active status
-   Gray LED: Offline, disabled, or inactive states

The LED indicators feature:

-   Core color with glow effect
-   Subtle highlight reflection
-   Dark background container
-   Smooth transitions between states

### Component Design

#### Cards and Containers

```css
/* Base Card */
.content-card {
    background: rgba(26, 26, 26, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(229, 221, 213, 0.05);
    border-radius: 1rem;
    padding: 1.5rem 2rem;
}

/* Interactive Card Hover */
.content-card:hover {
    border-color: rgba(229, 221, 213, 0.1);
    transform: translateY(-2px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Buttons

```css
/* Primary Button */
.button-primary {
    background: #ffffff;
    color: #1a1a1a;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 500;
    transition: background-color 0.2s;
}

.button-primary:hover {
    background: rgba(255, 255, 255, 0.9);
}

/* Secondary Button */
.button-secondary {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    transition: background-color 0.2s;
}

.button-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
}
```

### Background Effects

#### Animated Background Grid

```css
body {
    background-image: linear-gradient(
            to bottom,
            rgba(229, 221, 213, 0.02) 1px,
            transparent 1px
        ),
        linear-gradient(to right, rgba(229, 221, 213, 0.02) 1px, transparent 1px);
    background-size: 24px 24px;
}
```

#### Bokeh Effect

```css
.bokeh {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.3;
    filter: blur(80px);
}

.bokeh-circle {
    position: absolute;
    border-radius: 50%;
    animation: float 20s infinite;
    background: radial-gradient(circle at center, var(--color) 0%, transparent 70%);
}

@keyframes float {
    0%,
    100% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(10px, 10px);
    }
    50% {
        transform: translate(-5px, 15px);
    }
    75% {
        transform: translate(-15px, -5px);
    }
}
```

### Technical Stack

-   Framework: React 18 with TypeScript
-   Build Tool: Vite
-   CSS Framework: Tailwind CSS
-   Icons: Lucide React
-   Charts: Recharts
-   State Management: Zustand
-   Routing: React Router DOM
-   Date Handling: date-fns

### Component Architecture

Components follow these principles:

1. Single Responsibility
2. Composition over Inheritance
3. Prop Type Safety
4. Controlled Components
5. Performance Optimization

Example Component Structure:

```tsx
interface ComponentProps {
    title: string;
    description?: string;
    onAction: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, description, onAction }) => {
    return (
        <div className="content-card group hover:border-white/20">
            <h2 className="text-xl font-medium mb-2">{title}</h2>
            {description && <p className="text-white/60 mb-4">{description}</p>}
            <button
                onClick={onAction}
                className="px-6 py-3 rounded-xl bg-white text-black font-medium 
                   hover:bg-white/90 transition-colors"
            >
                Action
            </button>
        </div>
    );
};
```

### Animation Guidelines

Transitions:

```css
/* Standard transition */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Smooth transition */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* Quick transition */
transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

Hover States:

```css
/* Background hover */
hover:bg-white/5

/* Border hover */
hover:border-white/20

/* Scale hover */
hover:scale-110

/* Text hover */
hover:text-white
```

### Accessibility

-   Color contrast ratios follow WCAG 2.1 guidelines
-   Interactive elements have focus states
-   Semantic HTML structure
-   ARIA labels where needed
-   Keyboard navigation support

### Responsive Design

Breakpoints:

```css
/* Mobile first approach */
sm: '640px',   /* Small devices */
md: '768px',   /* Medium devices */
lg: '1024px',  /* Large devices */
xl: '1280px',  /* Extra large devices */
2xl: '1536px'  /* 2X Extra large devices */
```

### Icons and Visual Elements

-   Use Lucide React icons with consistent sizing
-   Icon sizes: 16px (small), 20px (medium), 24px (large)
-   Stroke width: 1.5px for normal, 2px for emphasis
-   Icons in buttons should be 1px smaller than text height

### Data Visualization

Charts (using Recharts):

-   Consistent color palette
-   Gradient fills for areas
-   Interactive tooltips
-   Responsive layouts
-   Clear axes and labels
-   Smooth animations

### Code Organization

```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── charts/          # Chart components
│   └── layout/          # Layout components
├── hooks/               # Custom React hooks
├── store/              # State management
├── styles/             # Global styles
├── types/              # TypeScript types
└── utils/              # Utility functions
```

### Best Practices

1. Use TypeScript for type safety
2. Implement proper error boundaries
3. Optimize re-renders with useMemo and useCallback
4. Use CSS modules or Tailwind for styling
5. Follow ESLint and Prettier configurations
6. Write unit tests for critical components
7. Document complex logic and component APIs
8. Use proper semantic HTML elements
9. Implement proper loading states
10. Handle error states gracefully
