sfdx-gzg-plugin
===============

plugin to simplify some tasks for salesforce projects

[![Version](https://img.shields.io/npm/v/sfdx-gzg-plugin.svg)](https://npmjs.org/package/sfdx-gzg-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-gzg-plugin.svg)](https://npmjs.org/package/sfdx-gzg-plugin)
[![License](https://img.shields.io/npm/l/sfdx-gzg-plugin.svg)](https://github.com/Perso/sfdx-gzg-plugin/blob/master/package.json)

<!-- toc -->

<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-gzg-plugin
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
sfdx-gzg-plugin/0.0.6 win32-x64 node-v16.13.1
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx gzg:org:create -n <string> [-o] [-s <string>] [--help <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-gzgorgcreate--n-string--o--s-string---help-help---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx gzg:translate:create -p <string> -s <string> [-c <string>] [--help <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-gzgtranslatecreate--p-string--s-string--c-string---help-help---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

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

EXAMPLES
  $ sfdx gzg:org:create -n OrgTest -s PermsetName
        Create a scratch with Orgtest alias and push automatically sources into it. Also add a permission set 
  'PermsetName' to the user.

    
  $ sfdx gzg:org:create -n OrgTest -o
        Create a scratch with Orgtest alias and push automatically sources into it. Open the scratch org when it's over 
  .
```

_See code: [src/commands/gzg/org/create.ts](https://github.com/zgajnarG/sfdx-gzg-plugin/blob/v0.0.6/src/commands/gzg/org/create.ts)_

## `sfdx gzg:translate:create -p <string> -s <string> [-c <string>] [--help <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Create traductions in files

```
USAGE
  $ sfdx gzg:translate:create -p <string> -s <string> [-c <string>] [--help <help>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -c, --category=category                                                           Category of the custom label

  -p, --principal=principal                                                         (required) traduction in custom
                                                                                    label

  -s, --secondaries=secondaries                                                     (required) Secondary traductions

  --help                                                                            show CLI help

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx gzg:translate:create  -p "en_US:Hello" -s "fr:Salut" -c "NewWithPlugin"
        Create a custom label named Hello in english and add traduction in french. Add a category named NewWithPlugin to
   the custom label.
```

_See code: [src/commands/gzg/translate/create.ts](https://github.com/zgajnarG/sfdx-gzg-plugin/blob/v0.0.6/src/commands/gzg/translate/create.ts)_
<!-- commandsstop -->
* [`sfdx gzg:org:create -n <string> [-o] [-s <string>] [--help <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-gzgorgcreate--n-string--o--s-string---help-help---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
