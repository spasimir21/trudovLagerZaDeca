#!/bin/bash

cd ../backend

echo "Building auth..."
npm run build auth

cd ../frontend

echo "Building frontend..."
npm run build
