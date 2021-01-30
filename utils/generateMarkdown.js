// function to generate markdown for README
function generateMarkdown(data) { 

  return `

  # ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  This project has a ${data.license} license. 
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions 
  
  Github username: ${data.github}
  
  Github repository page: ${data.link}

  If you have additonal questions or comments you can reach me at my email: ${data.email}`;
}





module.exports = generateMarkdown;
