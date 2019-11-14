set -e
export CI=TRUE
echo
echo ---------------------
echo LINT SERVER
echo ---------------------
echo
npm run lint
echo
echo ---------------------
echo RUN SERVER TESTS
echo ---------------------
echo
npm run test:coverage
echo
echo ---------------------
echo CHECK TEST COVERAGE
echo ---------------------
echo
echo "Test coverage can be set in the root package.json's test script"
npm run test:check-coverage
