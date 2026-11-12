# Spec update

When you change the code, update the spec for that code in the same change. A spec that is not up to date is a bug.

The spec tree is in `spec/structure.md`.

Update the feature spec `spec/<package>/NN_kebab-name.md` when the change affects user-visible behaviour, a domain rule, or the wire contract.

If the code does not obey a rule in `spec/<package>/NN_kebab-name.md`, and the task did not tell you to change that rule, stop and ask. The code can be incorrect.

Do not update a spec only for these changes:

- Formatting
- Lint fixes
- Comments
- Dependency version updates
