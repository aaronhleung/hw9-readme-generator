function generateMarkdown(answers, user) {
  return `

# ${answers.title}

## Description
${answers.description}

## Table of Contents

*[Installation](#installation) \n

*[Usage](#usage) \n

*[License](#license) \n


*[Contributing](#contributing) \n

*[Tests](#tests) \n


---

## Installation
${answers.installation}

---
## Usage

${answers.usage}

---

## License
${answers.license}

---


## Contributing
${answers.contributing}

---
## Tests

${answers.test}

---
`;

}

module.exports = generateMarkdown