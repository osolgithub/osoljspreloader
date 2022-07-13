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
rem git init creates branch 'master', but for git hub default branch is 'main'
rem so rename branch to match the remote repository branch name.
git branch -m "main"
git remote add origin https://github.com/osolgithub/osoljspreloader.git
git pull origin main
git commit -a -m "First commit to upload"
git push origin main
```

**PS:**if branch main is not created you may upload to `main` branch from default `master` branch with 
```
rem git push origin HEAD:main
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
Issue Tracker: <https://github.com/osolgithub/osoljspreloader/issues>

## License / Copyright Info
You can use, redistribute this file and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation.

## Citation
1. How this software can be cited
2. DOI(Digital Object Identifier) link/image

## Contact
osolgithub@gmail.com

