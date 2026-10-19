# formik-yup-47

A sign-up form built with React, TypeScript, Formik and Yup.

The form has four fields: nickname, email, password and password confirmation. Yup checks each field, and Formik shows the error under the field after you leave it. When the form is valid and you press **Send**, the user is added to a list under the form and the form is cleared. The list is kept in React state, so it is empty again after a page reload.

## Demo

https://formik-yup-47.vercel.app

## Validation rules

| Field            | Rules                                                            |
| ---------------- | ---------------------------------------------------------------- |
| Nickname         | Required, at least 3 characters (spaces at the ends are ignored) |
| Email            | Required, valid email with a domain zone, e.g. `name@mail.com`   |
| Password         | Required, at least 8 characters                                  |
| Confirm password | Required, must match the password                                |

## Tech stack

- [React 19](https://react.dev/) + TypeScript
- [Formik](https://formik.org/) — form state and submission
- [Yup](https://github.com/jquense/yup) — validation schema
- [Vite](https://vite.dev/) — dev server and build
- ESLint

## Project structure

```
src/
├── App.tsx                     # renders the form
├── main.tsx                    # app entry point
├── index.css                   # styles
├── components/
│   ├── Form.tsx                # form, submit handler and list of users
│   ├── Input.tsx               # labeled input with error message (uses useField)
│   └── index.ts
└── validation/
    └── formValidation.ts       # Yup schema and FormValues type
```

## Installation and startup

You need [Node.js](https://nodejs.org/) 20.19+ (or 22.12+) and npm.

```bash
git clone <https://github.com/Bleachigo/react-forms-47>
cd formik-yup-47
npm install
npm run dev
```

Then open the address Vite prints in the terminal (usually http://localhost:5173).

### Other scripts

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run build`   | Type-checks and builds the app into `dist/` |
| `npm run preview` | Serves the built app from `dist/` locally   |
| `npm run lint`    | Runs ESLint                                 |
