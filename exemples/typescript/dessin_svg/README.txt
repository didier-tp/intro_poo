npm install -s @types/node
et "module": "commonjs" dans tsconfig.json
---------------
tsc -w
---------
dans autre terminal:
cd dist
node test-fig-v1.js
-------
dist/svg/dessin1.svg ou dist/index.html pour visualiser