let cacheData = 'appV1';

// caches data & sets data
this.addEventListener('install',(event)=>{
	event.waitUntil(
		caches.open(cacheData).then((cache) =>{
			cache.addAll([
				'/static/js/bundle.js',
				'/static/js/main.chunk.js',				
				'/static/js/0.chunk.js',
				'/index.html',
				'/',				
				'/users',				
				'/about'				
			])
		})
	)
})


// retrieves data from cache
this.addEventListener('fetch',(event)=>{
	event.respondWith(
		caches.match(event.request).then((result) => {
			if (result){
				return result
			}
		})
	)
})
