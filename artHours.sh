#!/bin/bash
curDir=`pwd`
newDir='/Users/'`whoami`'/copyOfProduction'
sudo rsync -a $curDir $newDir  --include "*/" --include "*.jpg" --include "*.jpeg" --exclude "*"

#Add to /usr/local/bin
#chmod u+x artHours