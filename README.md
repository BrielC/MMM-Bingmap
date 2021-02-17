# MMM-Bingmap
Traffic map based on Bing Map

Requirements
`
Bing API
`
Create an account to accuire an api
```
https://www.bingmapsportal.com/
```

Use static map maker to establish the size and location
```
https://staticmapmaker.com/bing/
```

Config
```
{
            module: 'MMM-Bingmap',
            position: 'bottom_bar',
            config: {
		    latitude: '-26.0460', 	    // Centre of Map. Use Google 
		    longitude: '28.0131', 
		    mapzoom: '13', 		        // 1 - 21
			map_width: '1300',
		    map_hight: '420', 	
		    appid: '',                  // Your Bing maps api key - 64 caracters
	//		**** PushPin A ****
			lat_a: '-26.0669',
			lon_a: '27.9590',
			style_a: '51',		        // 0 - 112
			text_a: 'H',		        // Text in PushPin
	//		**** PushPin B ****
			lat_b: '-26.0245',	
			lon_b: '28.0135',
			style_b: '51',
			text_b: 'W'
				}
},

