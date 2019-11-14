set -e
export CI=TRUE
echo 
echo ------------------
echo  LINT CLIENT
echo ------------------
echo 
npm run lint
echo 
echo ------------------
echo  BUILD CLIENT
echo ------------------
echo 
npm run build
echo
echo ------------------
echo  RUN CLIENT TESTS
echo ------------------
echo
echo "Test coverage must be above threshold of ${COVERAGE_THRESHOLD}%"
echo "Coverage threshold can be set in the root package.json's test script"
npm run test -- --coverage