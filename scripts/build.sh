#!/bin/bash

DIRS=`ls -l ./src/ | grep "^d"|awk '{print $9}'`
PS3='Select Build TypeScript directory : '

echo TypeScript src directory list
echo

select dir in ${DIRS}
do
    echo 
    echo '$ sudo tsc && node ./dist/$dir'
    sudo tsc && node ./dist/$dir
break
done