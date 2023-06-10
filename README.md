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

```bash
vagrant ssh k6
sudo docker run -it -v="/k6:/k6" grafana/k6 run /k6/script.js
```

To run prometheus alertmanager executor:
first build
``` bash
cd prometheus-am-executor/prometheus-am-executor
go build
```
then run
``` bash
./prometheus-am-executor/prometheus-am-executor/prometheus-am-executor -f prometheus-am-executor/executor.yml
```
