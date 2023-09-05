#!/bin/bash

cd ../backend

echo "Building auth..."
npm run build auth

echo "Building wiki..."
npm run build wiki

cd ../frontend

echo "Building frontend..."
npm run build
