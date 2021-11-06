# Skaffold

CLI to update code within a running pod; without Skaffold you need to

<https://skaffold.dev/>

- ensure the deployment is using the 'latest' tag in the pod spec

- make an update to the code

- build the image

- push the image to docker hub

- run the command `kubectl rollout restart deployment [depl name]`

## Note on Env

We will only be using this with dev

## Benefits

change clusters super easily, auto updates

## installing the Skaffold binarys

```bash
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-darwin-amd64 && \
sudo install skaffold /usr/local/bin/
```

or

`brew install skaffold`

### testing install

```bash
👾 $skaffold
A tool that facilitates continuous development for Kubernetes applications.

  Find more information at: https://skaffold.dev/docs/getting-started/

End-to-end Pipelines:
  run               Run a pipeline
  dev               Run a pipeline in development mode
  debug             Run a pipeline in debug mode

Pipeline Building Blocks:
  build             Build the artifacts
  test              Run tests against your built application images
  deploy            Deploy pre-built artifacts
  delete            Delete any resources deployed by Skaffold
  render            Perform all image builds, and output rendered Kubernetes manifests
  apply             Apply hydrated manifests to a cluster

Getting Started With a New Project:
  init              Generate configuration for deploying an application

Other Commands:
  completion        Output shell completion for the given shell (bash or zsh)
  config            Interact with the global Skaffold config file (defaults to `$HOME/.skaffold/config`)
  diagnose          Run a diagnostic on Skaffold
  fix               Update old configuration to a newer schema version
  schema            List JSON schemas used to validate skaffold.yaml configuration
  survey            Opens a web browser to fill out the Skaffold survey
  version           Print the version information

Usage:
  skaffold [flags] [options]

Use "skaffold <command> --help" for more information about a given command.
Use "skaffold options" for a list of global command-line options (applies to all commands).
```

## using Skaffold

create another yaml config file.

> touch skaffold.yaml

running the skaffold

> skaffold dev

### If you don't see a change after a hot save

```txt
If you did not see your server restart after changing the index.ts file, do the following:

Open the package.json file in the ‘auth’ directory

Find the ‘start’ script

Update the start script to the following:

ts-node-dev --poll src/index.ts
```
