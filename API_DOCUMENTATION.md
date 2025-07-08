# API Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Core Application](#core-application)
3. [Custom Hooks](#custom-hooks)
4. [Utility Functions](#utility-functions)
5. [UI Components](#ui-components)
6. [Page Components](#page-components)
7. [Configuration](#configuration)
8. [Examples and Usage Patterns](#examples-and-usage-patterns)

## Project Overview

This is a modern React TypeScript application built with Vite, featuring:

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with shadcn/ui component library
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **3D Graphics**: Spline for interactive 3D models
- **Charts**: Recharts integration
- **Icons**: Lucide React

## Core Application

### App Component

**Location**: `src/App.tsx`

The main application component that sets up providers and routing.

```tsx
import App from './App';

// Usage: This is the root component, typically imported in main.tsx
```

**Features**:
- QueryClient setup for TanStack Query
- Toast providers (both Toaster and Sonner)
- Tooltip provider
- Browser routing with catch-all 404 handling

### Main Entry Point

**Location**: `src/main.tsx`

```tsx
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(<App />);
```

## Custom Hooks

### useIsMobile

**Location**: `src/hooks/use-mobile.tsx`

A hook to detect if the current viewport is mobile-sized.

```tsx
import { useIsMobile } from '@/hooks/use-mobile';

function Component() {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? 'Mobile View' : 'Desktop View'}
    </div>
  );
}
```

**API**:
- **Returns**: `boolean` - `true` if viewport width is less than 768px
- **Breakpoint**: 768px (configurable via `MOBILE_BREAKPOINT` constant)
- **Features**: 
  - Responsive to window resize events
  - SSR-safe (returns `undefined` initially)

### useToast

**Location**: `src/hooks/use-toast.ts`

A comprehensive toast notification system.

```tsx
import { useToast } from '@/hooks/use-toast';

function Component() {
  const { toast, dismiss } = useToast();
  
  const showToast = () => {
    toast({
      title: "Success!",
      description: "Your action was completed.",
      variant: "default", // "default" | "destructive"
    });
  };
  
  return <button onClick={showToast}>Show Toast</button>;
}
```

**API**:
- **toast(options)**: Create a new toast
  - `title?: React.ReactNode` - Toast title
  - `description?: React.ReactNode` - Toast description  
  - `variant?: "default" | "destructive"` - Toast style variant
  - `action?: ToastActionElement` - Custom action element
- **dismiss(toastId?)**: Dismiss toast(s)
- **Returns**: Object with `toasts`, `toast`, and `dismiss`

**Configuration**:
- `TOAST_LIMIT`: 1 (maximum concurrent toasts)
- `TOAST_REMOVE_DELAY`: 1000000ms (auto-dismiss delay)

## Utility Functions

### cn (Class Name Utility)

**Location**: `src/lib/utils.ts`

Utility for merging Tailwind CSS classes with clsx and tailwind-merge.

```tsx
import { cn } from '@/lib/utils';

function Component({ className }: { className?: string }) {
  return (
    <div className={cn(
      "base-class p-4 bg-white", // base classes
      "hover:bg-gray-100", // conditional classes
      className // user-provided classes
    )}>
      Content
    </div>
  );
}
```

**API**:
- **Parameters**: `...inputs: ClassValue[]` - Any number of class values
- **Returns**: `string` - Merged and deduplicated class string
- **Features**: 
  - Automatically resolves Tailwind class conflicts
  - Supports conditional classes
  - Handles arrays, objects, and strings

## UI Components

### Button

**Location**: `src/components/ui/button.tsx`

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui/button';

function Example() {
  return (
    <div className="space-x-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">⚙</Button>
      
      <Button asChild>
        <a href="/link">As Link</a>
      </Button>
    </div>
  );
}
```

**Props**:
- `variant`: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`
- `size`: `"default" | "sm" | "lg" | "icon"`
- `asChild?: boolean` - Render as child element using Radix Slot
- All standard `HTMLButtonElement` props

### Card Components

**Location**: `src/components/ui/card.tsx`

A set of components for creating card layouts.

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main card content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

**Components**:
- `Card` - Main container with border and shadow
- `CardHeader` - Header section with padding
- `CardTitle` - Styled heading (renders as `h3`)
- `CardDescription` - Muted description text
- `CardContent` - Main content area
- `CardFooter` - Footer section with flex layout

### Input

**Location**: `src/components/ui/input.tsx`

A styled input component with consistent design.

```tsx
import { Input } from '@/components/ui/input';

function Example() {
  return (
    <div className="space-y-2">
      <Input type="text" placeholder="Enter text..." />
      <Input type="email" placeholder="email@example.com" />
      <Input type="password" placeholder="Password" />
      <Input disabled placeholder="Disabled input" />
    </div>
  );
}
```

**Props**:
- All standard `HTMLInputElement` props
- Automatically styled with focus states and disabled styling

### Form Components

**Location**: `src/components/ui/form.tsx`

React Hook Form integration with validation support.

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', name: '' },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>Enter your full name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

**Components**:
- `Form` - Form provider wrapper
- `FormField` - Field wrapper with validation
- `FormItem` - Individual form item container
- `FormLabel` - Accessible form label
- `FormControl` - Form control wrapper
- `FormDescription` - Help text
- `FormMessage` - Error message display

### Dialog Components

**Location**: `src/components/ui/dialog.tsx`

Modal dialog components with accessibility support.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of what this dialog does.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          Dialog content goes here...
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

**Components**:
- `Dialog` - Root dialog component
- `DialogTrigger` - Element that opens the dialog
- `DialogContent` - Main dialog content container
- `DialogHeader` - Header section
- `DialogTitle` - Accessible dialog title
- `DialogDescription` - Dialog description
- `DialogFooter` - Footer with actions
- `DialogClose` - Element that closes the dialog

### Chart Components

**Location**: `src/components/ui/chart.tsx`

Recharts integration with consistent theming.

```tsx
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  { month: "Jan", revenue: 1200, expenses: 800 },
  { month: "Feb", revenue: 1400, expenses: 900 },
  { month: "Mar", revenue: 1100, expenses: 700 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#8884d8",
  },
  expenses: {
    label: "Expenses", 
    color: "#82ca9d",
  },
};

function RevenueChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[400px]">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="revenue" strokeWidth={2} />
        <Line type="monotone" dataKey="expenses" strokeWidth={2} />
      </LineChart>
    </ChartContainer>
  );
}
```

**Components**:
- `ChartContainer` - Main chart wrapper with theming
- `ChartTooltip` - Tooltip component
- `ChartTooltipContent` - Styled tooltip content
- `ChartLegend` - Chart legend
- `ChartLegendContent` - Styled legend content

### InteractiveRobotSpline

**Location**: `src/components/ui/interactive-robot-spline.tsx`

3D Spline integration component with loading and error states.

```tsx
import SplineSection, { InteractiveRobotSpline } from '@/components/ui/interactive-robot-spline';

// Simple usage with default scene
function HomePage() {
  return <SplineSection />;
}

// Custom scene URL
function CustomSpline() {
  return (
    <SplineSection 
      sceneUrl="https://prod.spline.design/your-scene-id/scene.splinecode"
      className="h-96"
    />
  );
}

// Direct component usage
function AdvancedSpline() {
  return (
    <InteractiveRobotSpline
      scene="https://prod.spline.design/your-scene-id/scene.splinecode"
      className="w-full h-full"
    />
  );
}
```

**Components**:

#### `SplineSection`
- **Props**:
  - `sceneUrl?: string` - Spline scene URL (defaults to robot scene)
  - `className?: string` - Additional CSS classes
- **Features**: Full-screen container, default scene

#### `InteractiveRobotSpline`  
- **Props**:
  - `scene: string` - Required Spline scene URL
  - `className?: string` - Additional CSS classes
- **Features**: 
  - Lazy loading with Suspense
  - Loading and error states
  - Retry functionality
  - Performance optimized

### Other UI Components

The application includes many additional shadcn/ui components:

- **Navigation**: `accordion`, `breadcrumb`, `command`, `context-menu`, `dropdown-menu`, `hover-card`, `menubar`, `navigation-menu`, `pagination`, `tabs`
- **Data Display**: `alert`, `avatar`, `badge`, `calendar`, `carousel`, `collapsible`, `progress`, `scroll-area`, `separator`, `skeleton`, `table`
- **Form Controls**: `checkbox`, `input-otp`, `label`, `radio-group`, `select`, `slider`, `switch`, `textarea`, `toggle`, `toggle-group`
- **Feedback**: `alert-dialog`, `drawer`, `popover`, `sheet`, `sonner`, `toast`, `tooltip`
- **Layout**: `aspect-ratio`, `resizable`, `sidebar`

Each follows similar patterns with TypeScript support, Radix UI primitives, and Tailwind styling.

## Page Components

### Index Page

**Location**: `src/pages/Index.tsx`

The main landing page featuring the interactive 3D robot.

```tsx
import Index from '@/pages/Index';

// Usage in routing
<Route path="/" element={<Index />} />
```

**Features**:
- Full-screen 3D Spline integration
- Responsive design
- Background styling

### NotFound Page

**Location**: `src/pages/NotFound.tsx`

404 error page with navigation back to home.

```tsx
import NotFound from '@/pages/NotFound';

// Usage in routing  
<Route path="*" element={<NotFound />} />
```

**Features**:
- Error logging to console
- User-friendly error message
- Navigation link back to home
- Responsive layout

## Configuration

### TypeScript Configuration

The project uses multiple TypeScript configurations:

- **`tsconfig.json`** - Base configuration
- **`tsconfig.app.json`** - Application-specific settings
- **`tsconfig.node.json`** - Node.js tooling configuration

### Vite Configuration

**Location**: `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### Tailwind Configuration

**Location**: `tailwind.config.ts`

Includes shadcn/ui theming, custom animations, and responsive breakpoints.

### Component Configuration

**Location**: `components.json`

shadcn/ui component configuration for consistent styling and imports.

## Examples and Usage Patterns

### Complete Form Example

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const profileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const { toast } = useToast();
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    // Simulate API call
    console.log('Form submitted:', data);
    
    toast({
      title: 'Profile updated!',
      description: 'Your profile has been successfully updated.',
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>
          Update your personal information below.
        </CardDescription>
      </CardHeader>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    We'll never share your email with anyone else.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          
          <CardFooter>
            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
```

### Dashboard with Charts Example

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, target: 3500 },
  { month: 'Feb', sales: 3000, target: 3500 },
  { month: 'Mar', sales: 5000, target: 3500 },
  { month: 'Apr', sales: 4500, target: 3500 },
  { month: 'May', sales: 6000, target: 3500 },
  { month: 'Jun', sales: 5500, target: 3500 },
];

const chartConfig = {
  sales: {
    label: 'Sales',
    color: '#8884d8',
  },
  target: {
    label: 'Target',
    color: '#82ca9d',
  },
};

export function SalesDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
          <CardDescription>This month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$45,231</div>
          <div className="text-sm text-muted-foreground">
            +12.5% from last month
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>New Customers</CardTitle>
          <CardDescription>This month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">324</div>
          <div className="text-sm text-muted-foreground">
            +8.2% from last month
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Sales vs Target</CardTitle>
          <CardDescription>Monthly comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sales" fill="var(--color-sales)" />
              <Bar dataKey="target" fill="var(--color-target)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
```

### Mobile-Responsive Layout

```tsx
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Menu } from 'lucide-react';

function ResponsiveModal({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Mobile menu content</SheetDescription>
          </SheetHeader>
          {children}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Navigation</DialogTitle>
          <DialogDescription>Desktop menu content</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
```

This documentation covers all the major public APIs, components, and usage patterns in your React TypeScript application. Each component includes TypeScript definitions, usage examples, and configuration options to help developers effectively use and extend the codebase.