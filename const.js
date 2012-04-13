function const_init() {
	if (!gp1 || !gp2)
		alert('map not calibrayed')
	Offset = 	// Diffs between GP1 and GP2
	{
			lon:	getOffset(gp1.lon,gp2.lon),
			lat:	getOffset(gp1.lat,gp2.lat),
			top:	getOffset(gp1.top,gp2.top),
			left:	getOffset(gp1.left,gp2.left)
	};
	DPX = 	// Degree Per Pixel
	{	
			lat: 	Offset.lat / Offset.top,
			lon: 	Offset.lon / Offset.left
	};
	BEG = 	// Upper left corner coords
	{
			lon: 	gp1.lon - DPX.lon * gp1.left,
			lat: 	gp1.lat + DPX.lat * gp1.top
	};
}
