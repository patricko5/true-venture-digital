# Design System Specification: Industrial Boutique Agency

## 1. Overview & Creative North Star

### Creative North Star: "The Architectural Blueprint"
This design system is a manifestation of technical precision and industrial luxury. It moves away from the "soft" web of gradients and rounded corners, embracing a rigid, grid-based aesthetic reminiscent of high-end architectural schematics and technical drafting software (Framer/Linear style).

The system breaks the standard "template" feel through **Intentional Structuralism**. We use hard lines, mono-spaced influences, and high-contrast tonal shifts to create an interface that feels built, not just designed. It is unapologetically dark, utilizing a "Void" background strategy to let the vibrant industrial orange function as a high-visibility beacon for action.

## 2. Colors

The palette is engineered for high-impact dark mode environments. It relies on a deep black foundation with high-energy accents.

### Core Palette
- **Background (`#131313` / `#000000`):** The absolute foundation. Use `#000000` for primary page backgrounds to achieve "infinite depth."
- **Primary / Accent (`#FF4D00`):** Referred to as "Industrial Orange." This is reserved for critical actions, highlights, and technical data points.
- **Surface Tiers:**
    - `surface_container_lowest` (#0e0e0e): Background of secondary modules.
    - `surface_container` (#1f1f1f): Default card and section background.
    - `surface_container_highest` (#353535): Hover states and high-priority UI elements.

### The "No-Line" Rule & Tonal Boundary
Traditional 1px borders are largely prohibited for sectioning. Instead, boundaries must be defined by:
1. **Background Shifts:** Moving from `surface` (#131313) to `surface_container_low` (#1b1b1b) to define a new content area.
2. **The "Ghost Grid":** If a line is required to reinforce the "industrial" look, use `outline_variant` (#5c4037) at 20% opacity. It should feel like a drafting guideline, not a container.

### Glass & Texture
- **Technical Glass:** Floating panels (modals, dropdowns) should use `surface_container` with a `backdrop-blur` of 12px and 80% opacity.
- **Micro-Grids:** To achieve the "boutique agency" feel, apply a subtle 20px dot or square grid pattern (10% opacity) to `surface_container_lowest` sections to mimic technical paper.

## 3. Typography

The typography scale is built on **Inter**, chosen for its mathematical clarity and neutral, architectural tone.

- **Display (Large/Medium):** Set at 3.5rem / 2.75rem. Use tight letter-spacing (-0.02em) and SemiBold weights. This is the "Voice" of the agency—authoritative and loud.
- **Headlines:** 2rem to 1.5rem. These act as the structural anchors of the page.
- **Body (Large/Medium):** 1rem / 0.875rem. Always prioritize line height (1.6) to ensure the technical density of the UI remains readable.
- **Labels (Small/Caps):** 0.75rem. Used for metadata and technical annotations. Often paired with `letter-spacing: 0.1em` to evoke a "serial number" aesthetic.

## 4. Elevation & Depth

In this system, elevation is not achieved through "height," but through **Tonal Layering**.

- **The Layering Principle:** Treat the UI as a series of interlocking plates. A "Primary" module sits at `#131313`, while a "Secondary" detail sits inside it at `#0e0e0e`. This creates a sense of "carved" depth rather than "floating" depth.
- **Ambient Shadows:** Shadows are rarely used. If a floating element (like a context menu) requires one, use a large 40px blur with the color `#000000` at 40% opacity. It should look like a soft occlusion, not a drop shadow.
- **Forced Flatness:** All `borderRadius` tokens are set to **0px**. Every element must have sharp, 90-degree corners to maintain the industrial, precision-milled aesthetic.

## 5. Components

### Buttons
- **Primary:** Background `primary_container` (#ff571a), Text `on_primary_fixed` (#3a0b00). Hard edges. No gradients.
- **Secondary:** Border 1px `primary` (#ffb59e) at 40% opacity, Text `primary`.
- **Tertiary:** Text only, with a small 4x4px orange square icon prefix to denote interactivity.

### Cards & Modules
- **Rule:** Never use dividers within a card.
- **Structure:** Separate internal header and body using a shift from `surface_container_high` to `surface_container`.
- **Interaction:** On hover, a card's background should shift up one tier (e.g., from `low` to `default`).

### Input Fields
- **Styling:** Bottom-border only (1px `outline`). Background is a subtle `surface_container_low`.
- **Focus State:** The bottom border transforms to `primary` (#FF4D00) with a 2px weight. Helper text uses `label-sm` for a technical readout feel.

### Technical Elements (Bespoke)
- **The "Status Indicator":** A pulsating 6px circle in `primary` used next to section headers to indicate "Live" or "Active" agency status.
- **Breadcrumbs:** Small `label-md` text separated by forward slashes (`/`), mimicking a file directory structure.

## 6. Do's and Don'ts

### Do
- **Use "Void Space":** Allow large areas of `#000000` to exist. It forces the user to focus on the orange "data" points.
- **Align to the Grid:** Every element must snap to a strict 8px/16px grid. Asymmetry is encouraged, but it must be mathematically precise.
- **Use Thin Lines:** When using lines for decorative "blueprint" effects, use 0.5px or 1px weights only.

### Don't
- **No Rounded Corners:** Never use `border-radius`. It breaks the industrial precision.
- **No Soft Colors:** Avoid pastels or "safe" blues. If it’s not Black, Grey, or Industrial Orange, it doesn’t belong in the core UI.
- **No Standard Dividers:** Avoid horizontal rules (`<hr>`) that span the full width of a container. Use background color blocks to separate content instead.