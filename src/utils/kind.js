const urlObjects = [{
		url: 'multi', 
		title: 'Home'
	}, 
	{
		url: 'movies', 
		title: 'Movies',
		kind: 'movie'
	}, 
	{
		url: 'tv', 
		title: 'TV',
		kind: 'tv'
	}, 
	{
		url: 'people', 
		title: 'People',
		kind: 'person'
	}, 
	{
		url: 'featured', 
		title: 'featured'
	}]

export const getTitleFromURL = url => {
	const title = findUrlObject(url)?.title || 'Error'
	return title
}

export const getKindFromURL = url => {
	const kind = findUrlObject(url)?.kind || 'multi'
	return kind
}

function findUrlObject(url) {
	return urlObjects.find(item => item.url === url)
}