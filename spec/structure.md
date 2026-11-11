# Spec

A spec records the key design decisions, the behaviour and the requirements. Implementation details stay in the code.

Each package folder has a `spec/<package>/00_context.md` file. Before you make the first edit in a package, read that file.

A feature spec is one file `spec/<package>/NN_kebab-name.md` in that package folder. `NN` is a two-digit number. Separate the words of the name with a hyphen.

| Package | Scope |
| --- | --- |
| `spec/frontend/00_context.md` | The web page |

## Open behaviour

The repo has one file for open items: `spec/open-behaviour.json`. It uses the same rules as `ian-cloud-storage` `spec/structure.md`. When no spec has items, the file is an empty list.
