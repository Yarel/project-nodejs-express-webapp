#!/bin/bash

echo ${COVERALLS_REPO_TOKEN}
npm test
status=$?
cat coverage/lcov.info | node_modules/.bin/coveralls
exit $status
