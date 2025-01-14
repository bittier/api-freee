const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.blue(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.Light blue(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
