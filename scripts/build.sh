#!/bin/bash

echo -n "Build TypeScript Dir name : "
read dir
sudo tsc && node ./dist/$dir