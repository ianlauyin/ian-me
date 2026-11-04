# Coding style

## General

- After a refactor, fix all the warnings.
- Readability is more important than strict DRY. Do not add a helper, a generic type or an abstraction only to remove duplication.
- Write a comment only when the code cannot show the reason.
- Write tests only for functions that hold important logic. For each of these functions, test each edge case. Do not test a trivial function, a getter or a pass-through. This rule applies to the Rust code and to the frontend code.

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
