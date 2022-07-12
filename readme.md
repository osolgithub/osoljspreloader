# OSOLJSPreloader
### Author
Author: Sreekanth Dayanand
Site <a href="https://outsource-online.net">Outsource Online Internet Solutions</a>

## Synopsis
Vanilla JS Preloader. JS class to show preloader

## Description
Vanilla JS Class . Can be used to easily show preloader for AJAX, dynamic Image loading etc.
This documentation is created with `jsdoc OSOLJSPreloader.js -c jsdoc.json`
Uploaded to git via
```
git init
git remote add origin https://github.com/osolgithub/osoljspreloader.git
git pull origin main
git add .
git commit -m "First commit to upload"
git push origin HEAD:main
```

## Prerequisites
Browser must support ES6 classes

## Installation
1. load js file &lt;script src="OSOLJSPreloader.js"&gt;</script>
2. declare preloaderInst
	var preloaderInst;
3. add codes in window.onload & window.onresize

	window.onload = function(){
			
		preloaderInst =  new OSOLJSPreloader();
		preloaderInst.init();
	}

	window.onresize = function(){preloaderInst.adjustOnWindowResize()};
4. To show Preloader, just before the ajax call is made,
	preloaderInst.show();
5. And upon receiving result or error
	preloaderInst.hide();


## Contributing
Issue Tracker: github.com/project/issues

## License / Copyright Info
You can use, redistribute this file and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation.

## Citation
1. How this software can be cited
2. DOI(Digital Object Identifier) link/image

## Contact
osolgithub@gmail.com

