# mjc-plus

2026 mjc Japanese learning website repository.

## Naming Conventions

### Components (JSX/TSX)

- **Files & component names:** `PascalCase`
  ```txt
  AuthForm.tsx, Navbar.tsx
  ```

### Folders

- **Feature & component folders:** `kebab-case`
- **Internal & shared folders:** `prefix _`
  ```txt
  auth-form/, _components/
  ```

### CSS

- **Component CSS Modules:** `match component name + .module.css`
  ```txt
  AuthForm.module.css, Navbar.module.css
  ```
- **Shared CSS Modules:** `lowercase/kebab-case + .module.css`
  ```txt
  buttons.module.css, form.module.css
  ```

