node build/index.js production # Build the files.xml and minify files
cd ./site # Go to the site directory
sudo python3 -m http.server 9000 --bind localhost # Serve the site
