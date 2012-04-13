function getOffset(a,b){	// Gets offset of two nums
 	return a > b ? a - b : b - a;
};
function getRound(n){	// Rounds to 6 digs after decimal point
 	return Math.round(n * Math.pow(10,6)) / Math.pow(10,6);
};
function getMouse(e){ 	// Get Mouse Position
 	alert([e.pageX,e.pageY]);
};
function getGP(e){	// Get Geographic Position
  alert 
  ([
  		'N ' + getRound(BEG.lat - DPX.lat * e.pageY),
		'E ' + getRound(BEG.lon + DPX.lon * e.pageX)
  ]);
};
function getPX(lat,lon){	// Get position on the map
  /*alert
  ([
       /*lat = BEG.lat - DPX.lat * e.pageY
       - lat + BEG.lat = DPX.lat * e.pageY
       e.pageY = (BEG.lat - lat) / DPX.lat
       ;
       lon = BEG.lon + DPX.lon * e.pageX
       e.pageX = (lon - BEG.lon) / DPX.lon*\/
        
    	'Y: ' + getRound((lat - BEG.lat) / DPX.lat),
        'X: ' + getRound((lon - BEG.lon) / DPX.lon)
  ]);*/
  showUp(Math.round((BEG.lat - lat) / DPX.lat),
	 Math.round((lon - BEG.lon) / DPX.lon));
};
function showUp(y,x){
  msg = document.createElement('div');
  msg.style.position = 'absolute';
  msg.style.top = y;
  msg.style.left = x;
  msg.innerHTML = '<font color="#00ff00" size="8pt">`</font>';
  mommy = document.getElementById('grid');
  mommy.appendChild(msg);
};
