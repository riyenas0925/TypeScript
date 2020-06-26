#!/bin/bash
 
DIRS=`ls -l ./src/ | grep "^d"|awk '{print $9}'`
PS3='Select Dev TypeScript directory : '

echo TypeScript src directory list
echo

select dir in ${DIRS}
do
    echo 
    echo '$ ts-node ./src/$dir'
    ts-node ./src/$dir
break
done