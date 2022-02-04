sfdx-gzg-plugin
===============

plugin to simplify some tasks for salesforce projects

[![Version](https://img.shields.io/npm/v/sfdx-gzg-plugin.svg)](https://npmjs.org/package/sfdx-gzg-plugin)
[![CircleCI](https://circleci.com/gh/Perso/sfdx-gzg-plugin/tree/master.svg?style=shield)](https://circleci.com/gh/Perso/sfdx-gzg-plugin/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/Perso/sfdx-gzg-plugin?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-gzg-plugin/branch/master)
[![Greenkeeper](https://badges.greenkeeper.io/Perso/sfdx-gzg-plugin.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/Perso/sfdx-gzg-plugin/badge.svg)](https://snyk.io/test/github/Perso/sfdx-gzg-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-gzg-plugin.svg)](https://npmjs.org/package/sfdx-gzg-plugin)
[![License](https://img.shields.io/npm/l/sfdx-gzg-plugin.svg)](https://github.com/Perso/sfdx-gzg-plugin/blob/master/package.json)

<!-- toc -->
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-gzg-plugin
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
sfdx-gzg-plugin/0.0.2 win32-x64 node-v16.13.1
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx gzg:org:create -n <string> [-o] [-s <string>] [--help <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-gzgorgcreate--n-string--o--s-string---help-help---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx gzg:org:create -n <string> [-o] [-s <string>] [--help <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Create a scratch org and push automatically sources into it

```
USAGE
  $ sfdx gzg:org:create -n <string> [-o] [-s <string>] [--help <help>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -n, --name=name                                                                   (required) Scratch Org name

  -o, --open                                                                        Open scratch org after the sources
                                                                                    push

  -s, --permsetname=permsetname                                                     Add permission set to user

  --help                                                                            show CLI help

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
```

_See code: [src/commands/gzg/org/create.ts](https://github.com/zgajnarG/sfdx-gzg-plugin/blob/v0.0.2/src/commands/gzg/org/create.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
