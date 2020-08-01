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
				'/about',				
				'/pwa-blog-react/',
				'https://bharathjinka09.github.io/pwa-blog-react/'				
			])
		})
	)
})


// retrieves data from cache
this.addEventListener('fetch',(event)=>{
	if(!navigator.onLine)
	{
		event.respondWith(
			caches.match(event.request).then((resp) => {
				if (resp){
					return resp
				}
				let requestUrl = event.request.clone();
				return fetch(requestUrl)
			})
		)
	}
})
