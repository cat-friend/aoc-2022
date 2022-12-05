#!/bin/bash

for i in {01..25};
do
    mkdir 12-${i}
    mv 12-${i}.js 12-${i}
    touch 12-${i}/input.js
    printf "export const input = ``;" >> 12-${i}/input.js
done
