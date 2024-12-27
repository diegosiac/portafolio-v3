import { useEffect, useState } from "react"

export const useMedia = (media: string) => {
	const [isMatch, setIsMatch] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(media)
		setIsMatch(mediaQuery.matches)

		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsMatch(e.matches)
		}

		mediaQuery.addEventListener("change", handleMediaQueryChange)

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange)
		}
	}, [])

	return isMatch
}
