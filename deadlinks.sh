#!/bin/bash

# bash  deadlinks.sh old-website-urls.txt

# Check if a file was provided as an argument
if [ -z "$1" ]; then
    echo "Usage: $0 old-website-urls.txt"
    exit 1
fi

# Loop through each URL in the file
while IFS= read -r url; do
    # Send a request to check if the URL exists
    wget --spider --quiet "$url"

    if [ $? -eq 0 ]; then
        echo "URL exists: $url"
    else
        echo "URL failed: $url" >> output.txt
    fi
done < "$1"
