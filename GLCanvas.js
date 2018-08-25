function GLCanvas(canvasID){
	var canvas = document.getElementById(canvasID);
	var gl = canvas.getContext("webgl2");

	if(!gl){ console.error("WebGL context is not available."); return null; }

	//...................................................
	//Setup GL, Set all the default configurations we need.
	gl.clearColor(1.0,1.0,1.0,1.0);	//Set clear color

	//...................................................
	//Methods
	
	//Reset the canvas with our set background color.	
	gl.clearCanvas = function(){ this.clear(this.COLOR_BUFFER_BIT | this.DEPTH_BUFFER_BIT); return this; }

	//...................................................
	//Setters - Getters

	//Set the size of the canvas html element and the rendering view port
	gl.setSize = function(w,h){
		//set the size of the canvas, on chrome we need to set it 3 ways to make it work perfectly.
		this.canvas.style.width = w + "px";
		this.canvas.style.height = h + "px";
		this.canvas.width = w;
		this.canvas.height = h;

		//when updating the canvas size, must reset the viewport of the canvas 
		//else the resolution webgl renders at will not change
		this.viewport(0,0,w,h);
		return this;
	}

	//Set the size of the canvas to fill a % of the total screen.
	gl.fitScreen = function(wp,hp){ return this.setSize(window.innerWidth * (wp || 1),window.innerHeight * (hp || 1)); }

	return gl;
}