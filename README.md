[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url] [![devDependency Status][daviddm-dev-image]][daviddm-dev-url]

# xrun CLI

CLI invoker for the [@xarc/run] enhanced npm run build tool.

# Install

```bash
npm install -g @xarc/run-cli
```

# Usage

```bash
$ xrun [options] <task> [task_options] <task> [task_options]
```

ie:

```bash
$ xrun build
```

# Auto Completion

Auto completion is available for [bash] and [zsh].

To setup, add the following line to your `~/.bashrc` or `~/.zshrc` accordingly:

```bash
# Bash, ~/.bashrc
eval "$(xrun --completion=bash)"
```

```zsh
# Zsh, ~/.zshrc
eval "$(xrun --completion=zsh)"
```

[@xarc/run]: https://www.npmjs.com/package/@xarc/run
[npm-image]: https://badge.fury.io/js/%40xarc%2Frun-cli.svg
[npm-url]: https://npmjs.org/package/@xarc/run-cli
[daviddm-image]: https://david-dm.org/electrode-io/@xarc/run-cli/status.svg
[daviddm-url]: https://david-dm.org/electrode-io/@xarc/run-cli
[daviddm-dev-image]: https://david-dm.org/electrode-io/@xarc/run-cli/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/electrode-io/@xarc/run-cli?type=dev
[bash]: https://www.gnu.org/software/bash/
[zsh]: http://www.zsh.org/
