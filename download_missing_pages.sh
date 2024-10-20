#!/bin/bash

# bash download_missing_pages.sh output.txt backup-md

# Check if a file with URLs and a destination folder were provided as arguments
if [ $# -ne 2 ]; then
    echo "Usage: $0 <url_file.txt> <destination_directory>"
    exit 1
fi

url_file=$1
destination_dir=$2

# Create the destination directory if it doesn't exist
mkdir -p "$destination_dir"

# Loop through each URL in the file
while IFS= read -r url; do
    if [[ ! -z "$url" ]]; then  # Skip empty lines
        # Append .md to the URL
        modified_url="${url}.md"

        # Get the filename from the original URL (before .md is added)
        filename=$(basename "$url").md
        
        # Get the full path without the base URL to maintain structure
        full_path=$(dirname "$url")

        # Remove the scheme (http, https) and domain part from the path
        relative_path=${full_path#*://*/}

        # Download the file using wget while maintaining the directory structure
        wget -x -nH --cut-dirs=1 -P "$destination_dir" "$modified_url" -O "$destination_dir/$relative_path/$filename"

        # Make sure the folder structure is correct
        mkdir -p "$destination_dir/$relative_path"
    fi
done < "$url_file"
