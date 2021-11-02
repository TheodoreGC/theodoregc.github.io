---
title: 'Git survival kit'
description: "A survival kit for git to use on a daily basis."
publishDate: '05/11/2021'
author: 'TheodoreGC'
heroImage: '/code.jpeg'
alt: 'Git'
layout: '../../layouts/BlogPost.astro'
---

*The following format `[UPPERCASED_STRING]` represents the string to be replaced in the command.*

## Initial Config

Change default branch name:

```sh
git config --global init.defaultBranch [DEFAULT_NAME]
```

Change default editor:

```sh
git config --global core.editor [EDITOR_NAME]
```

Change user name:

```sh
git config --global user.name "[FIRST_NAME] [LAST_NAME]"
```

Change user email:

```sh
git config --global user.email "[EMAIL_ADRESS]"
```

Aliases:

```sh
git config --global alias.co checkout
git config --global alias.br 'branch -av'
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.a add
git config --global alias.amend 'commit --amend'
git config --global alias.ci commit
git config --global alias.cm 'commit -m'
git config --global alias.last 'log -l HEAD'
git config --global alias.visual '!gitk'
```

## Repository

Create a new repository:

```sh
git init
```

Cloning a repository (deep clone):

```sh
git clone [URL]
```

Cloning a repository (shallow clone):

```sh
git clone --depth [NUMBER_OF_COMMIT_FROM_THE_HEAD] [URL]
```

Show all remote:

```sh
git remote -v
```

Add a new remote:

```sh
git remote add [LOCAL_ID] [URL]
```

Update a remote:

```sh
git remote set-url [LOCAL_ID] [URL]
```

## Branch

List all existing branches with the latest commit comment:

```sh
git branch -av
```

Create a branch:

```sh
git branch [NEW_BRANCH]
```

Delete a local branch:

```sh
git branch -d [BRANCH]
```

Force the deletion of a local branch:

```sh
git branch -D [BRANCH]
```

Switch HEAD to branch (checkout version):

```sh
git checkout [BRANCH]
```

Switch HEAD to previous branch (checkout version):

```sh
git checkout -
```

Create a branch (checkout version):

```sh
git checkout -b [BRANCH]
```

Create a new tracking branch based on a remote branch (checkout version):

```sh
git checkout --track [REMOTE]/[BRANCH]
```

## Commit

List the current changes on a branch:

```sh
git status
```

Check the differences between the updated state and the initial state of a file:

```sh
git diff [FILE]
```

Stage a file:

```sh
git add [FILE]
```

Unstage a file:

```sh
git reset HEAD -- [FILE]
```

Remove a file:

```sh
git rm [FILE]
```

Add only some chunks from changes of a file (patch):

```sh
git add -p [FILE]
```

Commit all staged changes:

```sh
git commit .
```

Commit all staged changes with an inline commit message:

```sh
git commit -m "[COMMIT_MESSAGE]"
```

Append all staged changes to the previous commit:

```sh
git commit --amend
```

Squashing multiple commits into one:

```sh
git rebase -i HEAD~[NUMBER_OF_COMMITS_FROM_THE_HEAD]
```

## History

Show all commits starting from the latest:

```sh
git log
```

Show authors, changed date and commit ID for each line in a file:

```sh
git blame -c [FILE]
```

## Publishing

Retrieve all changes from a remote without applying them:

```sh
git fetch [REMOTE]
```

Retrieve all changes from a remote and apply them:

```sh
git pull [REMOTE] [BRANCH]
```

Retrieve all changes from a remote and apply them following a rebase strategy:

```sh
git pull --rebase [REMOTE] [BRANCH]
```

Commit changes to a remote:

```sh
git push [REMOTE] [BRANCH]
```

Tag a commit:

```sh
git tag [TAG_NAME]
```

Publish tags to remote:

```sh
git push --tags
```

## Integration

Merge a branch into your current HEAD:

```sh
git merge [BRANCH]
```

Rebase your current branch:

```sh
git rebase [BRANCH]
```

Rebase you current branch in interactive mode:

```sh
git rebase -i [BRANCH]
```

Abort a rebase:

```sh
git rebase --abort
```

Continue a rebase after resolving conflicts:

```sh
git rebase --continue
```

## Reset

Discard all local changes and start working on the current branch from the last commit:

```sh
git reset --hard HEAD
```

Reset current branch to a previous commit and discard all changes since then:

```sh
git reset --hard [COMMIT_HASH]
```

Reset current branch to a previous commit and preserve all changes as unstaged changes:

```sh
git reset [COMMIT_HASH]
```

Reset current branch to a previous commit and preserve staged local changes:

```sh
git reset --keep [COMMIT_HASH]
```

Discard local changes to a specific file:

```sh
git checkout HEAD [FILE]
```

Revert a commit by making a new commit which reverses the given commit:

```sh
git revert [COMMIT_HASH]
```
