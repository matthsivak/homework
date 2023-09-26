# Phrase TMS - Integrations homework

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

To install dependencies:

```bash
bun install
```

To seed database:

```bash
bun run migrate
```

To run:

```bash
bun run start
```

## Assignment

1. Display all entries in the table and include abilities
   1. filter by author (select from the list of names)
   2. filter by tag (select from the list of tags)
   3. search by title 
   4. sorting
2. Above the table display some useful statistics like:
   1. total number of entries
   2. number of entries by author 
   3. number of entries by tag
   4. number of entries by month or year
      etc.
3. Display a single entry
4. On single entry view add the ability to create a new localization project by posting to /api/projects
5. When the localization project is submitted display the status of the localization project and a status of individual locales

### Required technologies:
- Vue.js 3 with Composition API and TypeScript
- Vite
- Tailwind CSS
- Vue Router

### Assignment notes:
- table filtering and sorting should be kept between page reloads


## API documentation
https://documenter.getpostman.com/view/7163817/2s9YJW7Rte