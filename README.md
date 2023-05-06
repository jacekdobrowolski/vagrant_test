# Vagrant_test

Prerequisites:
- vagrant
- virtualbox
- ansible

> **Note**
> On windows host change provisioner to ansible_local and add mount with the playbook

Usage:
``` bash
vagrant up --provision
```
Or use './vagrant_up_parallel' convinience script to provision machinees in parallel, recommended after vm base image is created during first serial execution.
