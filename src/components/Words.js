var languages = [
	"english",
	"hindi",
	"arabic",
	"french",
	"russian",
	"malayalam",
	"german",
	"tamil",
	"odia"
]

function randomWord() {
  return languages[Math.floor(Math.random() * languages.length)]
}

export { randomWord }