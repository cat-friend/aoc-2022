#!/bin/bash

for i in {05..25};
do
    mkdir 12-${i}
    mv 12-${i}.js 12-${i}
    touch 12-${i}/input.js
    printf "export const input = ``;" >> 12-${i}/input.js
    printf "import { input } from './input.js';" >> 12-${i}/12-${i}.js
done
