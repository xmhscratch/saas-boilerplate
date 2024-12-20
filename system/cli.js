import inquirer from 'inquirer'
import { spawn } from 'child_process'

inquirer
  .prompt([
    {
      name: 'action',
      message: 'DevServer action',
      type: 'list',
      choices: [
        { name: 'Initialize microservice', value: 'init' },
        { name: 'Start dev server', value: 'start:server' },
        { name: 'Build production', value: 'build:server' },
        { name: 'Build docker', value: 'build:docker' },
      ]
    },
  ])
  .then(async ({ action }) => {
    switch (action) {
      case 'init': case 'start:server': case 'build:server': {
        inquirer
          .prompt([
            {
              name: 'target',
              message: 'Target microservice',
              type: 'list',
              choices: [
                { name: 'CMS', value: 'cms' },
                { name: 'Auth', value: 'auth' },
                { name: 'Services -> Dashboard', value: 'ms-dashboard' },
              ]
            }
          ])
          .then(async ({ target }) => {
            const cmdString = `./node_modules/.bin/dotenvx run -- npm run --workspace=${target}`
            switch (action) {
              case 'init': {
                await spawn('sh', ['-c', `npm install`], { stdio: 'inherit' }, Promise.resolve)
                await spawn('sh', ['-c', `${cmdString} postinstall`], { stdio: 'inherit' }, Promise.resolve)
                break
              }
              case 'server:dev': {
                await spawn('sh', ['-c', `${cmdString} dev`], { stdio: 'inherit' }, Promise.resolve)
                break
              }
              case 'server:build': {
                await spawn('sh', ['-c', `${cmdString} build`], { stdio: 'inherit' }, Promise.resolve)
                await spawn('sh', ['-c', `${cmdString} generate`], { stdio: 'inherit' }, Promise.resolve)
                await spawn('sh', ['-c', `${cmdString} preview`], { stdio: 'inherit' }, Promise.resolve)
                break
              }
              default: break
            }
          })
        break
      }
      case 'build:docker': {
        inquirer
          .prompt([
            {
              name: 'target',
              message: 'Docker images to build',
              type: 'list',
              choices: [
                { name: 'GoNode', value: 'dp-gonode' },
                { name: 'System Environment', value: 'dp-sysenv' },
                { name: 'Microservice', value: 'dp-microservice' },
                { name: 'RabbitMQ', value: 'dp-rabbitmq' },
              ]
            }
          ])
          .then(async ({ target }) => {
            const cmdString = `./node_modules/.bin/dotenvx run -- npm run --workspace=${target}`
            await spawn('sh', ['-c', `${cmdString} build`], { stdio: 'inherit' }, Promise.resolve)
          })
        break
      }
      default: break
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
