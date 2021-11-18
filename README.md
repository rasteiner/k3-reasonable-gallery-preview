# k3-reasonable-gallery-preview
Fixes https://github.com/getkirby/kirby/pull/3907 until a solution ends up in the core. 

## What do this? 
Replaces the default gallery block preview to make it use resized thumbnails instead of the original files. 
If you have a gallery of thirty 5000x7000px images (weighting something like 30 x 5MB = 150MB) this should help you keep 
the panel a bit more responsive (otherwhise the browser needs to do a lot of work to load, resize and show the images). 

## Why no composer?
This is meant as a temporary fix. Just download and install the folder :)
