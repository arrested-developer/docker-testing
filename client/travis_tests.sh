set -e
export CI=TRUE
npm run lint
npm run build
npm run test -- --coverage