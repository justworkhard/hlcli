#!/usr/bin/env node

let inquirer = require('inquirer')
let download = require('download-git-repo')
const promptList = [{
    type: 'input',
    message: '项目名',
    name: 'name',
}, {
    type: "list",
    message: "选择项目终端:",
    name: "client",
    choices: ['web', 'h5'],
}];


inquirer.prompt(promptList).then(answers => {
    let url = answers.client == 'web' ? 'github:justworkhard/HL_webManage' : 'github:justworkhard/react_cli_h5'
    download(url, answers.name, function (err) {
        console.log(err ? 'Error' : 'Success')
    })
});