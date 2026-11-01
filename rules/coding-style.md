# Coding style

## General

- After a refactor, fix all the warnings.
- Readability is more important than strict DRY. Do not add a helper, a generic type or an abstraction only to remove duplication.
- Write a comment only when the code cannot show the reason.

## Backend (Rust + Axum)

The backend crate is `backend/`.

- Use JSON for the request and the response unless the route needs special handling.
- Do not write doc comments.
- Do not write a request log event for a website static file request. This includes the SPA fallback that sends `index.html`. Write a request log event for each API request.
- This project reads its env variables and gives the values to `ian_framework`.
- When a cargo feature only adds a step to a function, write one function. Put the step in a `#[cfg(feature = "...")]` block, with an early return when the step gives the result. Do not write a second copy of the function for `#[cfg(not(feature = "..."))]`.

### Files

- In a source file, put the imports and the constants first. Then put each public type, its inherent `impl` block with the public methods first, and its trait impls (`Debug`, `Display`).
- In a file two or more levels deep, use `crate::` paths. Do not use `super::super::`.
- To use an item of `ian_framework`, import the public module that exports the item. Then use the module name in the code to refer to the item. Do not import the item directly. Do not write the full `ian_framework::` path in the code.
- If a module of this project has the same name as the `ian_framework` module, import the functions and the types of the project module directly. Do not import the project module. Do not give an alias to the `ian_framework` module.
- Do not use `self` in an import. To use a module and an item of that module, import only the module. Then use the module name to refer to the item.
- Keep a helper, a constant or a type in the file that uses it.
- Put the tests in one `#[cfg(test)] mod tests` at the end of the source file that holds the tested item. Keep each test helper in that test module. Do not share test helpers between test modules.
- Keep all test-only code in a test module. This includes test constructors, test-only methods and test doubles. Do not add a `#[cfg(test)]` item to the production code. An exception is a `#[cfg(test)]` enum variant and its match arms, because they cannot go in a different module.
- If the tests of two or more files use a test-only item, put the item in the `#[cfg(test)] mod tests` of the parent module. The other test modules can use it.

### Safety

- Do not show a secret, a token or a query string in `Debug` output or in an error message. For a type that holds a secret, write its `Debug` impl by hand.
- Do not use `unwrap`, `expect` or `panic!` outside tests.
- Read a secret, such as a key, a token or a password, from Secret Manager with `env::required` or `env::optional`. Read a value that is not a secret, such as a bucket name, a list, a path, a URL or a log level, only from the process environment with `std::env::var`. Do not read it from Secret Manager. When a value is not a secret, do not create a secret for it.

## Frontend (SolidJS + TypeScript)

The website is `frontend/`.

### Modules

- Put UI primitives and controls that have no domain logic in `frontend/src/component/`.
- A module is one feature. It has its own state, its own actions and its own entry component.
- Put each module in `frontend/src/module/{module}`.
- Give each module an id selector.
- The global context is `frontend/src/context.tsx`.
- Each module has one context in `context.ts` in the module folder. Put the actions that are not UI logic in this context.
- Put all tests in `frontend/test/`, with the same folder paths as in `frontend/src/`. Do not put tests in `frontend/src/`.

### Components

- If only one component uses a sub-component, put the sub-component in the folder of that component.
- Put the constants before the component.
- Use the file `Xxx.tsx`. If the component has styles, use the files `Xxx/index.tsx` and `Xxx/index.css`.
- Put the images for the component in an `asset/` folder next to the component.

### Styles

- Each `index.css` file has only one root selector.
- Nest each child selector inside the block of its parent.
- Give the outermost tag of each module component and sub-component a class name. Use this format: `{module}-{component}-{sub-component}`.
- Give the outermost tag of each component in `frontend/src/component/` a class name with the `g-` prefix. Use the `g-` prefix also for the modifier classes on that tag.
- If you override the internal parts of a different component, put the `g-` class of that component in the selector.

The lint config is `frontend/biome.json` and `frontend/stylelint.config.js`.
