# Component Index

## Core Application Components

| Component | Location | Description |
|-----------|----------|-------------|
| `App` | `src/App.tsx` | Main application component with providers and routing |
| `Index` | `src/pages/Index.tsx` | Landing page with 3D Spline integration |
| `NotFound` | `src/pages/NotFound.tsx` | 404 error page |

## Custom Hooks

| Hook | Location | Description |
|------|----------|-------------|
| `useIsMobile` | `src/hooks/use-mobile.tsx` | Detects mobile viewport (< 768px) |
| `useToast` | `src/hooks/use-toast.ts` | Toast notification system |

## Utility Functions

| Function | Location | Description |
|----------|----------|-------------|
| `cn` | `src/lib/utils.ts` | Merges Tailwind CSS classes intelligently |

## UI Components

### Form Controls

| Component | Location | Description |
|-----------|----------|-------------|
| `Button` | `src/components/ui/button.tsx` | Versatile button with variants and sizes |
| `Input` | `src/components/ui/input.tsx` | Styled text input field |
| `Textarea` | `src/components/ui/textarea.tsx` | Multi-line text input |
| `Checkbox` | `src/components/ui/checkbox.tsx` | Checkbox input with custom styling |
| `RadioGroup` | `src/components/ui/radio-group.tsx` | Radio button group |
| `Select` | `src/components/ui/select.tsx` | Dropdown select component |
| `Switch` | `src/components/ui/switch.tsx` | Toggle switch component |
| `Slider` | `src/components/ui/slider.tsx` | Range slider input |
| `Label` | `src/components/ui/label.tsx` | Form label component |
| `InputOtp` | `src/components/ui/input-otp.tsx` | OTP/PIN input component |
| `Toggle` | `src/components/ui/toggle.tsx` | Toggle button |
| `ToggleGroup` | `src/components/ui/toggle-group.tsx` | Group of toggle buttons |

### Layout Components

| Component | Location | Description |
|-----------|----------|-------------|
| `Card` | `src/components/ui/card.tsx` | Card container with header, content, footer |
| `Separator` | `src/components/ui/separator.tsx` | Visual divider line |
| `AspectRatio` | `src/components/ui/aspect-ratio.tsx` | Maintains aspect ratio wrapper |
| `ScrollArea` | `src/components/ui/scroll-area.tsx` | Custom scrollable area |
| `Resizable` | `src/components/ui/resizable.tsx` | Resizable panels |
| `Sidebar` | `src/components/ui/sidebar.tsx` | Collapsible sidebar component |

### Form Components

| Component | Location | Description |
|-----------|----------|-------------|
| `Form` | `src/components/ui/form.tsx` | React Hook Form integration |
| `FormField` | `src/components/ui/form.tsx` | Form field wrapper with validation |
| `FormItem` | `src/components/ui/form.tsx` | Individual form item container |
| `FormLabel` | `src/components/ui/form.tsx` | Accessible form label |
| `FormControl` | `src/components/ui/form.tsx` | Form control wrapper |
| `FormDescription` | `src/components/ui/form.tsx` | Form help text |
| `FormMessage` | `src/components/ui/form.tsx` | Form error message |

### Feedback Components

| Component | Location | Description |
|-----------|----------|-------------|
| `Toast` | `src/components/ui/toast.tsx` | Toast notification component |
| `Toaster` | `src/components/ui/toaster.tsx` | Toast notification container |
| `Sonner` | `src/components/ui/sonner.tsx` | Alternative toast implementation |
| `AlertDialog` | `src/components/ui/alert-dialog.tsx` | Modal alert dialog |
| `Alert` | `src/components/ui/alert.tsx` | Inline alert message |
| `Tooltip` | `src/components/ui/tooltip.tsx` | Hover tooltip |

### Navigation Components

| Component | Location | Description |
|-----------|----------|-------------|
| `NavigationMenu` | `src/components/ui/navigation-menu.tsx` | Main navigation menu |
| `Breadcrumb` | `src/components/ui/breadcrumb.tsx` | Breadcrumb navigation |
| `Pagination` | `src/components/ui/pagination.tsx` | Page navigation |
| `Command` | `src/components/ui/command.tsx` | Command palette/search |
| `Menubar` | `src/components/ui/menubar.tsx` | Menu bar component |
| `ContextMenu` | `src/components/ui/context-menu.tsx` | Right-click context menu |
| `DropdownMenu` | `src/components/ui/dropdown-menu.tsx` | Dropdown menu |
| `Tabs` | `src/components/ui/tabs.tsx` | Tab navigation |

### Modal/Overlay Components

| Component | Location | Description |
|-----------|----------|-------------|
| `Dialog` | `src/components/ui/dialog.tsx` | Modal dialog |
| `Sheet` | `src/components/ui/sheet.tsx` | Slide-out panel |
| `Drawer` | `src/components/ui/drawer.tsx` | Bottom drawer |
| `Popover` | `src/components/ui/popover.tsx` | Floating popover |
| `HoverCard` | `src/components/ui/hover-card.tsx` | Hover-triggered card |

### Data Display Components

| Component | Location | Description |
|-----------|----------|-------------|
| `Table` | `src/components/ui/table.tsx` | Data table with styling |
| `Badge` | `src/components/ui/badge.tsx` | Status badge |
| `Avatar` | `src/components/ui/avatar.tsx` | User avatar with fallback |
| `Calendar` | `src/components/ui/calendar.tsx` | Date picker calendar |
| `Progress` | `src/components/ui/progress.tsx` | Progress bar |
| `Skeleton` | `src/components/ui/skeleton.tsx` | Loading skeleton |
| `Collapsible` | `src/components/ui/collapsible.tsx` | Collapsible content |
| `Accordion` | `src/components/ui/accordion.tsx` | Expandable accordion |
| `Carousel` | `src/components/ui/carousel.tsx` | Image/content carousel |

### Chart Components

| Component | Location | Description |
|-----------|----------|-------------|
| `ChartContainer` | `src/components/ui/chart.tsx` | Chart wrapper with theming |
| `ChartTooltip` | `src/components/ui/chart.tsx` | Chart tooltip |
| `ChartTooltipContent` | `src/components/ui/chart.tsx` | Styled tooltip content |
| `ChartLegend` | `src/components/ui/chart.tsx` | Chart legend |
| `ChartLegendContent` | `src/components/ui/chart.tsx` | Styled legend content |

### Special Components

| Component | Location | Description |
|-----------|----------|-------------|
| `InteractiveRobotSpline` | `src/components/ui/interactive-robot-spline.tsx` | 3D Spline integration |
| `SplineSection` | `src/components/ui/interactive-robot-spline.tsx` | Full-screen Spline container |

## Component Usage Examples

### Quick Setup Examples

```tsx
// Basic button
<Button variant="default" size="lg">Click me</Button>

// Form with validation
<Form {...form}>
  <FormField name="email" render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl><Input {...field} /></FormControl>
      <FormMessage />
    </FormItem>
  )} />
</Form>

// Card layout
<Card>
  <CardHeader><CardTitle>Title</CardTitle></CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Dialog modal
<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>
    Content
  </DialogContent>
</Dialog>

// Toast notification
const { toast } = useToast();
toast({ title: "Success!", description: "Done!" });

// Mobile detection
const isMobile = useIsMobile();
```

## Import Patterns

```tsx
// Individual component imports
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Multiple related components
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

// Form components
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '@/components/ui/form';

// Dialog components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
```

## Component Categories by Use Case

### Building Forms
- `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`
- `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`

### Creating Layouts
- `Card`, `Separator`, `ScrollArea`, `Resizable`, `AspectRatio`
- `Tabs`, `Accordion`, `Collapsible`

### User Feedback
- `Toast`, `Alert`, `AlertDialog`, `Progress`, `Skeleton`

### Navigation
- `NavigationMenu`, `Breadcrumb`, `Pagination`, `Command`
- `DropdownMenu`, `ContextMenu`, `Menubar`

### Data Presentation
- `Table`, `Badge`, `Avatar`, `Calendar`, `Chart*`, `Carousel`

### Interactive Elements
- `Dialog`, `Sheet`, `Drawer`, `Popover`, `HoverCard`, `Tooltip`

All components are built with accessibility in mind, use Radix UI primitives where applicable, and are fully typed with TypeScript.