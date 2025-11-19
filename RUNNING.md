Local development (Vite)

For local development with this Vite + React project, follow these steps:

1. Install dependencies (run from repository root):
```powershell
cd "E:\data github\webgis"
npm install
```
2. Start the dev server:
```powershell
npm run dev
```
3. Open the URL printed by Vite (typically `http://localhost:5173`). Do NOT open `index.html` via `file://`.

If TypeScript/VS Code still shows JSX/type errors after installing dependencies, restart the TypeScript server in VS Code:
- Command Palette → "TypeScript: Restart TS Server"
- Command Palette → "TypeScript: Select TypeScript Version" → choose "Use Workspace Version"

If you want me to add `@types/react` / `@types/react-dom` automatically to `devDependencies` and run `npm install`, tell me and I can patch `package.json` (you still need to run `npm install` locally).