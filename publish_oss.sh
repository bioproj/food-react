#!/bin/bash
pnpm run build
ossutil64 cp -r dist/ $FOOD_MOBILE_OSS --force