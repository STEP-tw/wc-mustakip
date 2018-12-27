#! /bin/bash


./scripts/run_test.sh wc.js ./testData/input/singleFileInput ./testData/output/singleFileOutput 0 > /dev/null

result1=$?;

./scripts/run_test.sh wc.js ./testData/input/multipleFileInput ./testData/output/multipleFileOutput 0 > /dev/null

result2=$?;

if [ $result1 != 0 ]; then
  echo "FAILED - Tests for single file"
  exit 1;
else 
  echo "PASSED - Tests for single file"
fi

if [ $result2 != 0 ]; then
  echo "FAILED - Tests for multiple files"
  exit 1;
else
  echo "PASSED - Tests for multiple files"
fi


