# Quick Reference Guide

## Essential Imports

```tsx
// Core UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Form Components
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Custom Hooks
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

// Utilities
import { cn } from '@/lib/utils';
```

## Component Cheat Sheet

### Button Variants
```tsx
<Button variant="default">Primary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Subtle</Button>
<Button variant="link">Link Style</Button>
```

### Button Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="default">Normal</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔧</Button>
```

### Form Pattern
```tsx
const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { email: '', name: '' },
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

### Toast Notifications
```tsx
const { toast } = useToast();

// Success toast
toast({
  title: "Success!",
  description: "Action completed.",
});

// Error toast
toast({
  title: "Error",
  description: "Something went wrong.",
  variant: "destructive",
});
```

### Responsive Detection
```tsx
const isMobile = useIsMobile();

return (
  <div>
    {isMobile ? <MobileComponent /> : <DesktopComponent />}
  </div>
);
```

### Class Name Merging
```tsx
// Merges classes intelligently, resolving conflicts
const className = cn(
  "base-classes p-4",
  isActive && "bg-blue-500",
  customClassName
);
```

## Common Patterns

### Modal/Dialog
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    <p>Content</p>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Card Layout
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Chart Integration
```tsx
<ChartContainer config={chartConfig}>
  <LineChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line dataKey="value" />
  </LineChart>
</ChartContainer>
```

## Project Structure
```
src/
├── components/ui/     # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Available UI Components

### Form Controls
- `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Slider`, `RadioGroup`

### Layout
- `Card`, `Sheet`, `Dialog`, `Popover`, `Tooltip`, `Accordion`, `Tabs`, `Separator`

### Navigation
- `Breadcrumb`, `Command`, `ContextMenu`, `DropdownMenu`, `NavigationMenu`, `Pagination`

### Data Display
- `Table`, `Badge`, `Avatar`, `Progress`, `Skeleton`, `Alert`, `Calendar`, `Chart`

### Feedback
- `Toast`, `AlertDialog`, `HoverCard`, `Drawer`

### Advanced
- `InteractiveRobotSpline` (3D Spline integration)
- `Carousel`, `Resizable`, `ScrollArea`

## TypeScript Tips

### Component Props Pattern
```tsx
interface ComponentProps {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  variant = "default", 
  children 
}) => {
  return <div>{title}</div>;
};
```

### Form Type Safety
```tsx
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

const onSubmit = (data: FormData) => {
  // data is fully typed
  console.log(data.email, data.age);
};
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```