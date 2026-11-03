# Venture 3D Studio — Carellas Kitchen

A free, local-first browser design studio for Mission 2. Built with Three.js, Vite, and JSZip. No image-to-3D service, API key, or Blender required. The supplied concept has been interpreted as editable geometric parts, not reconstructed from pixels.

## Open the studio

Published target: https://ryancarella.github.io/Food-Truck-3D/

Locally: install Node 22, run `npm install`, then `npm run dev`. Follow the printed address including `/Food-Truck-3D/`. `npm run build` produces `dist/`. Serve that folder over HTTP at the same subpath, not `file://`.

## Student guide

1. Drag to orbit, scroll/pinch to zoom, right drag to pan. Use Front, Side, Top, Isometric, Perspective/Orthographic, and Fit.
2. Select a part on the model or in Scene. Use move, rotate, and resize tools, or enter numerical values in the inspector. Values use meters; dimensions are approximate bounding-box measurements.
3. Set the base color, choose a finish, adjust metallic/roughness/opacity. Branding & texture accepts images on component surfaces and text on boxes. Texture controls change repeat and offset. All textures are embedded in backups and GLB exports.
4. Concept accepts multiple reference images and view labels, an object type, and a description. These are references, not reconstruction inputs. Eight editable templates include the concept truck and seven general product templates.
5. Save project writes to IndexedDB on this browser. Download editable backup for portability. Open project / GLB restores a JSON backup or displays an imported GLB. Recovery holds a previous saved design; undo/redo covers common scene changes.
6. Confirm model verifies geometry, exports a GLB, reimports it into a separate GLTFLoader scene, embeds assets, captures the current view, and stores a confirmed snapshot. Click **Download confirmed handoff ZIP**.
7. Bring `Venture_3D_Confirmed_Handoff.zip` into Mission 3. It contains the real `model.glb`, `model-manifest.json`, `project.json`, `preview.png`, and `README.txt`. Extract all files together. Confirmation never modifies another website.

## Deployment

Vite base is `/Food-Truck-3D/`. The included Actions workflow builds and deploys `dist`. In repository Settings → Pages select **GitHub Actions** as the source if it is not already enabled. Push to `main` to run deployment. Do not report a live deployment until the URL has been checked.

## Handoff schema 1.0

`model-manifest.json` uses stable version `1.0`. Fields: `schemaVersion`, `projectName`, `modelName`, `modelType`, `confirmedAt` (UTC ISO-8601), `version` (timestamp-based package version), `dimensions` (`x`, `y`, `z`, `units`), `coordinateSystem` (`up`, `front`, `units`), `preferredCamera` (`position`, `target`, `projection`), `environment` (`background`, `lighting`), `description`, `hotspots`, `files` (relative filenames), and `integrity` (`algorithm: SHA-256`, `model` hexadecimal hash, `bytes`). Coordinates use +Y up, truck front +X, meters.

`project.json` schema `1.0` records named components, primitive shapes, position/rotation/scale, material settings, embedded textures and references, and studio settings. Rotation arrays are radians. Imported GLBs are embedded data URLs. Unknown schema versions are rejected.

## Practical limits

- The truck is a stylized prototype with approximate dimensions, not engineering CAD, a measured reconstruction, or a watertight print-ready mesh.
- Templates use editable primitives. Imported GLBs can be viewed, saved, and re-exported; use the editable project JSON to recover original component editing.
- Browser storage can be cleared, fill up, or fail in private mode. Keep downloadable backups and confirmed ZIPs.
- Fonts are optional Google Fonts with local fallbacks; core functionality and model assets have no third-party network dependency once served. WebGL and a modern browser are required.
- Images are resized to at most 2048 pixels; references under 20 MB, projects under 60 MB and up to 2000 editable parts are accepted.
