#!/bin/bash
rnd=$RANDOM
rangernd=$((1+(((235886-1)/32767)*$rnd)))
str="${rangernd}q;d"
randomword=$(sed $str /usr/share/dict/words)
echo $randomword
git add *
git commit -m "$randomword"
git push