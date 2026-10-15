# Casino

A Spring Boot backend (`src/`, `pom.xml`) and a React frontend (`casino-react-app/`).

## Prerequisites

- Java 17
- Node.js 22 or newer (comes with npm)

## Frontend setup

`node_modules/` is not committed to the repository. Install the packages from the lockfile after cloning or pulling:

```sh
cd casino-react-app
npm ci
```

`npm ci` installs exactly what `package-lock.json` specifies. It then runs `patch-package` automatically, which applies the patches in `casino-react-app/patches/`.

Use `npm install <package>` only when adding or upgrading a dependency, and commit both `package.json` and `package-lock.json` afterwards.

Available scripts, run from `casino-react-app/`:

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm start`     | Dev server on http://localhost:3000        |
| `npm test`      | Runs the tests in watch mode               |
| `npm run build` | Production build into `casino-react-app/build` |

## Backend setup

The backend connects to MongoDB using these environment variables:

- `MONGO_USER`
- `MONGO_PASSWORD`
- `MONGO_CLUSTER`
- `MONGO_DATABASE`

Run it with the Maven wrapper:

```sh
./mvnw spring-boot:run
```
