#comment This file will automatically watch for changes in sass and compile them
sc#!/bin/bash

rm ../css/dev/*
echo "Watching SASS"
sudo sass --watch ../css/sass:../css/dev --style expanded --no-cache --line-numbers
