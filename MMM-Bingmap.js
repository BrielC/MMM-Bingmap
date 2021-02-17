 'use strict';
 Module.register("MMM-Bingmap", {
        defaults: {
              	latitude: '-26.0460', 	// Centre of Map. Use Google 
              	longitude: '28.0131', 
              	mapzoom: '13', 		// 1 - 21
		map_width: '1300',
              	map_hight: '420', 	
		lat_a: '-26.0669',	// PushPin A
		lon_a: '27.9590',
		style_a: '51',		// 0 - 112
		text_a: 'H',		// Text in PushPin
		lat_b: '-26.0245',	// PushPin B
		lon_b: '28.0135',
		style_b: '51',
		text_b: 'W',
 		appid:	'',		// Your Bing maps api key
                updateInterval: 5 * 60 * 1000 	// 5 min refresh
       		},

        getDom: function() {
               	var wrapper = '';
                wrapper = document.createElement("img");
                
	    wrapper.src = 'http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/' + this.config.latitude + ',' + this.config.longitude + '/' + this.config.mapzoom + '?mapSize=' + this.config.map_width + ',' + this.config.map_hight + '&pp=' + this.config.lat_a + ',' + this.config.lon_a + ';' + this.config.style_a + ';' + this.config.text_a + '&pp=' + this.config.lat_b + ',' + this.config.lon_b + ';' + this.config.style_b + ';' + this.config.text_b + '&pp=' + Math.random() + ',' + Math.random() + '&ml=TrafficFlow&key=' + this.config.appid + '';

             return wrapper;
        },
        start: function() {
                var self = this;
                setInterval(function() {
                        self.updateDom();
                }, this.config.updateInterval);
        },
 });
