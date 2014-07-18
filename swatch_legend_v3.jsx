var doc = activeDocument,
	swatches = doc.swatches,
	index = 0;

activeDocument.layers[0].locked = false;
var pointTextRef = doc.textFrames.add();

for(var i=2, len=swatches.length; i<len; i++){
	//adds all the swatch names to the text frame.
	pointTextRef.contents += swatches[i].name + "  ";
}

for(var x=2, len2=swatches.length; x<len2; x++){
	//loops through the swatches again to change the text color
	for(var c=0, len3=swatches[x].name.length; c<len3; c++){
		//annoyingly changes the text color one character at a time
		pointTextRef.textRange.characters[index].fillColor = swatches[x].color;
		index ++;
	}
	//for the two spaces between each swatch name
	index += 2;
}