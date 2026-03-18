# Nuxt.js Articles Project

## Project Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/uroojk844/articles.git
   ```
2. Navigate to the project directory:
   ```bash
   cd articles
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. To generate a static site:
   ```bash
   npm run generate
   ```
6. For production build:
   ```bash
   npm run build
   ```

## Project Structure Explanation

The project follows a standard Nuxt.js structure with some customizations:

- **`app/`**: Contains the main application logic.
  - **`assets/`**: Static assets like CSS files.
  - **`components/`**: Reusable Vue components.
    - **`common/`**: Shared components like `ArticleCard.vue`.
    - **`ui/`**: UI-specific components like `FilledButton.vue`.
  - **`composables/`**: Contains reusable logic using Nuxt composables.
    - `useAppView.ts`: Manages app-wide view state.
    - `useNetwork.ts`: Handles network status.
  - **`models/`**: TypeScript models for domain-specific data.
    - `articles.ts`: Defines types for articles.
  - **`pages/`**: Nuxt pages for routing.
    - `index.vue`: Home page displaying articles.
    - `article/[index].vue`: Dynamic route for individual articles.
  - **`store/`**: Pinia store for state management.
    - `articles.store.ts`: Manages article data and API calls.
  - **`utils/`**: Utility functions.
    - `parseDate.ts`: Parses and formats dates.
- **`public/`**: Static files served directly (e.g., `robots.txt`).
- **`nuxt.config.ts`**: Nuxt configuration file.
- **`tsconfig.json`**: TypeScript configuration.

## API & Composables Strategy

- **API Strategy**:
  - The project uses Nuxt's `$fetch` for API calls.
  - API responses are cached in the Pinia store to prevent redundant calls.
  - Dynamic routes fetch data server-side for better SEO and performance.

- **Composables**:
  - `useAppView.ts`: Manages app-wide view states like loading indicators.
  - `useNetwork.ts`: Tracks network connectivity and handles offline scenarios.

## Typing/Modeling Decisions

- TypeScript is used for strict type checking and better developer experience.
- Models are defined in the `models/` directory to ensure consistency across the app.
- Example: `articles.ts` defines the `Article` type with fields like `id`, `title`, `content`, etc.

## Error-Handling Approach

- API errors are caught and logged in the console for debugging.
- User-friendly error messages are displayed using the `OfflineView.vue` component.
- Network errors are handled gracefully with `useNetwork.ts`.
- Fallback UI is provided for offline or failed API calls.

## Assumptions Made

- The API provides all necessary fields for articles (e.g., `id`, `title`, `content`).
- Dynamic routes are based on title provided by the API.
- The application is primarily used in modern browsers with JavaScript enabled.

## What You Would Improve With More Time

- **Testing**: Add unit tests for components and composables.
- **Error Handling**: Implement a global error boundary for better user experience.
- **Performance**: Optimize API calls further with server-side caching.
- **Accessibility**: Ensure all components are fully accessible (ARIA roles, keyboard navigation).
- **Styling**: Refactor CSS to use TailwindCSS more effectively.
- **Documentation**: Add more detailed comments and developer guides.

---

Feel free to reach out for any questions or improvements!
