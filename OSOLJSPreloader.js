// @ts-check
/**
* @file OSOLJSPreloader.js
*
* @version 1.0.0
* @package: OSOLJSPreloader 
* ===================================================
* @author

Name: Sreekanth Dayanand, www.outsource-online.net
Email: info@osolsolutions.in
Url: http://www.outsource-online.net

* ===================================================
* @copyright (C) 2022 Sreekanth Dayanand, Outsource Online (www.outsource-online.net). All rights reserved.
* @license see http://www.gnu.org/licenses/gpl-3.0.html  GNU/GPLv3.
* You can use, redistribute this file and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation.
@brief JS preloader with vanilla js. This doesnt show in jsdoc documentation
@description 
Class file of OSLOJSPreloader. Usage details are mentioned in readme and this file.
*/
/*
Usage

1. load js file <script src="OSOLJSPreloader.js"></script>
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

*/
/**
 * Class to construct a preloader
 */
class OSOLJSPreloader{
	
	constructor()
	{
		/**
         * @property {HTMLDIV} preloader 
		 * "HTML DIV" element dynamically created in this.init().<br />
		 * Shows loading display in the centre of screen
         */
		this.preloader = null;
		/**
         * @property {HTMLDIV} loaderContainer 
		 * "HTML DIV" element dynamically created in this.init(), <br />
		 * Covers the whole screen so no other controls could be clicked while preloader is on
         */
		this.loaderContainer = null;
	}
	/**
	* Called immediately after instantiation
	* Sets all required config values.
	* @author Sreekanth Dayanand
	* @date 23rd June 2022
	* @returns {void} 
	*/
	// @async tag could be used if the method is async
	// if it throws error, use @ tries tag , eg: @throws {NotFoundError} When the user is not found.

	init()
	{
		if(typeof this.initCalled == 'undefined')
		{
			this.initCalled = true;
			this.create();
			this.preloader = document.querySelector("#preloader");
			this.loaderContainer = document.querySelector(".loaderContainer");
			this.locationContainerHeight = this.loaderContainer.offsetHeight;
			this.locationContainerWidth = this.loaderContainer.offsetWidth;
			
			
			this.adjustOnWindowResize();
			this.hide();
		}
		
	}
	/**
     *  Called in window.onresize.<br /> 
	 *  eg: window.onresize = function(){preloaderInst.adjustOnWindowResize()};<br />
	 *  Resizes the preloader background and middle content based on the resized browser window     *
     *  @return {void}
     *  @author Sreekanth Dayanand
     *  @date 23rd June 2022
	 */
	adjustOnWindowResize() {
		  //preloader = document.querySelector("#preloader");
		  let viewPortHeight = window.innerHeight;
		  let viewPortWidth = window.innerWidth;
		  this.preloader.style.height = viewPortHeight + "px";
		  
		  this.loaderContainer.style.top = ((viewPortHeight-this.locationContainerHeight)/2) + "px";
		  this.loaderContainer.style.left = ((viewPortWidth-this.locationContainerWidth)/2) + "px";
		  //console.log("loaderContainer.style.top is " + loaderContainer.style.top)
		  //console.log("loaderContainer.style.left is " + loaderContainer.style.left)
	}
	/**
     *  Called in this.init()<br />
	 *  Adds required CSS and programatically creates required divs
     *  @return {void}
     *  @author Sreekanth Dayanand
     *  @date 23rd June 2022
	 */
	create()
	{
		this.addCSS();
		/*		
			Create the following 
			<!-- <div id="preloader"></div>
			<div class="loaderContainer">
			 <div class="loader"></div> 
			 Please wait while the form is being processed...
			</div> -->
		*/
		var preloaderDiv = document.createElement('div');
		preloaderDiv.id= "preloader"
		document.body.appendChild(preloaderDiv);
		
		var loaderConainerdiv = document.createElement('div');
		loaderConainerdiv.className  = "loaderContainer"
		document.body.appendChild(loaderConainerdiv);
		
		var loaderDiv = document.createElement('div');
		loaderDiv.className = "loader"
		loaderConainerdiv.appendChild(loaderDiv);
		
		const text = document.createTextNode('Please wait while the form is being processed...');
		loaderConainerdiv.appendChild(text);
	}
	/**
     *  <pre>
	 *  Called in this.create().
	 *  Creates style tag and inserts required CSS programatically
	 *  </pre>
     *  @return {void}
     *  @author Sreekanth Dayanand
     *  @date 23rd June 2022
    */
	addCSS()
	{
		var sheet = document.createElement('style')
		sheet.innerHTML = `
							#preloader {
							  width: 100%;
							  height: 100%;
							  position: fixed;
							  top: 0;
							  left: 0;
							  z-index: 10;
							  background: #000;
							  opacity: 0.5;  /* Opacity for Modern Browsers */
								filter: alpha(opacity=50);  /* Opacity for IE8 and lower */
								zoom: 1;  /* Fix for IE7 */
							  
							}
							.loaderContainer{
							  position: fixed;
							  width: 120px;
							  height: 150px;
							  color:#ccc;
							  
							}
							.loader {
							  border: 16px solid #f3f3f3; /* Light grey */
							  border-top: 16px solid #3498db; /* Blue */
							  border-radius: 50%;
							  width: 120px;
							  height: 120px;
							  animation: spin 2s linear infinite;
							}

							@keyframes spin {
							  0% { transform: rotate(0deg); }
							  100% { transform: rotate(360deg); }
							}
							`;
		document.body.appendChild(sheet);
	}
	/**
     *  Displays the preloader. Stays till hide() is called
     *  @return {void}
     *  @author Sreekanth Dayanand
     *  @date 23rd June 2022		
     */
	show()
	{
		this.preloader.style.display = "block";
		this.loaderContainer.style.display = "block";
	}
	/**
     *  Hides the preloader. 
     *  @return {void}
     *  @author Sreekanth Dayanand
     *  @date 23rd June 2022
     */
	hide()
	{
		this.preloader.style.display = "none";
		this.loaderContainer.style.display = "none";
	}
}