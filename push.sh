#!/data/data/com.termux/files/usr/bin/bash

# Stage all changes
git add -A

# Commit with a timestamp message
git commit -m "Update on $(date '+%Y-%m-%d %H:%M:%S')"

# Push to main branch
git push -u origin main
