import { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn about the new features and improvements in Next.js 14.",
    date: "2024-03-15",
    readTime: "5 min read",
    slug: "getting-started-with-nextjs-14",
    data: `Next.js 14 brings exciting new features that enhance both developer experience and application performance. This latest version introduces significant improvements in server-side rendering and static site generation capabilities.

The new App Router provides better file-system based routing with improved nested layouts and loading states. Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client.

Incremental Static Regeneration (ISR) has been enhanced to provide better caching strategies and more granular control over when pages should be regenerated. This means faster load times and better user experience.

The built-in Image Optimization component has been improved with better performance metrics and automatic WebP conversion for supported browsers.

Whether you're building a simple blog or a complex e-commerce platform, Next.js 14 provides the tools and optimizations you need to create fast, scalable web applications.`,
  },
  {
    id: 2,
    title: "Mastering TypeScript for React",
    excerpt:
      "A comprehensive guide to using TypeScript with React applications.",
    date: "2024-03-10",
    readTime: "8 min read",
    slug: "mastering-typescript-for-react",
    data: `TypeScript has become an essential tool for React development, providing type safety and better developer experience. By adding static type checking to JavaScript, TypeScript helps catch errors at compile time rather than runtime.

When working with React components, TypeScript enables you to define precise prop types, state interfaces, and event handlers. This leads to more robust components and better code documentation.

Key benefits include improved IDE support with intelligent autocomplete, refactoring capabilities, and inline documentation. TypeScript interfaces help define the shape of your data, making it easier to work with APIs and complex state management.

Generic types allow you to create reusable components while maintaining type safety. Custom hooks become more powerful when properly typed, enabling better composition and reusability across your application.

Advanced features like discriminated unions and conditional types help model complex business logic while keeping your code maintainable and understandable.`,
  },
  {
    id: 3,
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt:
      "Tips and tricks for creating responsive designs using Tailwind CSS.",
    date: "2024-03-05",
    readTime: "6 min read",
    slug: "building-responsive-layouts-with-tailwind-css",
    data: `Tailwind CSS revolutionizes how we approach responsive design with its utility-first methodology. Instead of writing custom CSS, you compose designs using pre-built utility classes directly in your HTML.

The framework provides a comprehensive set of responsive utilities that follow a mobile-first approach. Breakpoint prefixes like 'sm:', 'md:', 'lg:', and 'xl:' allow you to apply different styles at different screen sizes.

Flexbox and Grid utilities make creating complex layouts straightforward. Classes like 'flex', 'grid', 'justify-center', and 'items-center' provide powerful layout capabilities without writing custom CSS.

The spacing system is consistent and logical, using a scale that works well across different design requirements. Margin, padding, and gap utilities follow predictable patterns that speed up development.

Customization is powerful yet simple through the tailwind.config.js file, allowing you to extend the default theme with your brand colors, fonts, and spacing requirements while maintaining the utility-first philosophy.`,
  },
  {
    id: 4,
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React Hooks and how to use them effectively.",
    date: "2024-03-01",
    readTime: "7 min read",
    slug: "understanding-react-hooks",
    data: `React Hooks transformed how we write React components by enabling state and lifecycle management in functional components. The useState hook provides a simple way to add state to functional components without converting them to class components.

The useEffect hook handles side effects like data fetching, subscriptions, and DOM manipulation. Understanding its dependency array is crucial for preventing infinite loops and ensuring optimal performance.

Custom hooks are perhaps the most powerful feature, allowing you to extract component logic into reusable functions. They promote code reuse and separation of concerns, making your components cleaner and more focused.

Performance hooks like useMemo and useCallback help optimize rendering by memoizing expensive calculations and preventing unnecessary re-renders. However, they should be used judiciously as overuse can actually hurt performance.

Advanced hooks like useReducer provide more sophisticated state management for complex state logic, while useContext enables elegant state sharing across component trees without prop drilling.`,
  },
  {
    id: 5,
    title: "Deploying Next.js Applications on Vercel",
    excerpt:
      "Step-by-step guide to deploying your Next.js applications on Vercel.",
    date: "2024-02-25",
    readTime: "4 min read",
    slug: "deploying-nextjs-applications-on-vercel",
    data: `Vercel provides the most seamless deployment experience for Next.js applications, offering zero-configuration deployments with optimal performance out of the box. The platform automatically detects Next.js projects and applies the best optimization strategies.

The deployment process is remarkably simple: connect your Git repository, and Vercel automatically builds and deploys your application on every push to your main branch. Preview deployments are generated for pull requests, enabling easy collaboration and testing.

Edge functions and serverless functions are automatically configured, allowing your API routes to scale infinitely without server management. The global CDN ensures fast loading times worldwide through intelligent caching and edge optimization.

Environment variables can be managed through the Vercel dashboard, with support for different values across development, preview, and production environments. Custom domains are easy to configure with automatic SSL certificates.

Analytics and performance monitoring are built-in, providing insights into your application's Core Web Vitals and user experience metrics without additional configuration.`,
  },
  {
    id: 6,
    title: "Building a RESTful API with Node.js and Express",
    excerpt: "Learn how to create a RESTful API using Node.js and Express.",
    date: "2024-02-20",
    readTime: "10 min read",
    slug: "building-a-restful-api-with-nodejs-and-express",
    data: `Express.js is the most popular web framework for Node.js, providing a minimal and flexible foundation for building web applications and APIs. Its middleware-based architecture allows for modular and maintainable code organization.

Setting up a basic Express server requires just a few lines of code, but the framework's power lies in its ecosystem of middleware for handling authentication, logging, parsing, and validation. Popular middleware like body-parser, cors, and helmet provide essential functionality.

RESTful routing in Express follows HTTP conventions with methods like GET, POST, PUT, and DELETE mapped to appropriate controller functions. Route parameters and query strings are easily accessible through the request object.

Database integration is straightforward with ORMs like Mongoose for MongoDB or Sequelize for SQL databases. Connection pooling and transaction management help ensure data consistency and optimal performance.

Error handling middleware provides a centralized way to manage errors, log issues, and send appropriate responses to clients. Proper error handling is crucial for production applications and debugging during development.

Security considerations include input validation, rate limiting, and protection against common vulnerabilities like SQL injection and cross-site scripting attacks.`,
  },
];
