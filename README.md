sfdx-gzg-plugin
===============

plugin to simplify some tasks for salesforce projects

[![Version](https://img.shields.io/npm/v/sfdx-gzg-plugin.svg)](https://npmjs.org/package/sfdx-gzg-plugin)
[![Known Vulnerabilities](https://snyk.io/test/github/Perso/sfdx-gzg-plugin/badge.svg)](https://snyk.io/test/github/Perso/sfdx-gzg-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-gzg-plugin.svg)](https://npmjs.org/package/sfdx-gzg-plugin)
[![License](https://img.shields.io/npm/l/sfdx-gzg-plugin.svg)](https://github.com/Perso/sfdx-gzg-plugin/blob/master/package.json)

<!-- toc -->

<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ sfdx plugins:install sfdx-gzg-plugin
sfdx-gzg-plugin/0.0.3 win32-x64 node-v16.13.1
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
  $ sfdx gzg:org:create -n <scratch name> -s <permission set name> -o
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

_See code: [src/commands/gzg/org/create.ts](https://github.com/zgajnarG/sfdx-gzg-plugin/blob/v0.0.3/src/commands/gzg/org/create.ts)_


