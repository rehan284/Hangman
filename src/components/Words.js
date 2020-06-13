var languages = [
	"English",
	"Hindi",
	"Arabic"
]

function randomWord() {
  return languages[Math.floor(Math.random() * languages.length)]
}

export { randomWord }