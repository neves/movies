
export const getRating = (release_dates = {}) => (
	release_dates?.results?.find(x => x.iso_3166_1 === 'US')?.release_dates[0]?.certification || null
)

export const getFirst = ({release_date, first_air_date, birthday}) => {
	return (first_air_date || birthday || release_date)?.split('-')[0]
}

export const getSecond = ({runtime, last_air_date, in_production}) => {
	if(runtime) return `${runtime} min`
	if(in_production) return 'Present'
	if(last_air_date) return last_air_date.split('-')[0]
	return null
}

export const getHighlight = ({release_dates, number_of_seasons}) => {
	if(release_dates) return getRating(release_dates)
	if(number_of_seasons) return `${number_of_seasons} season${number_of_seasons > 1 ? 's' : ''}`
	return null
}