# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|

  config.vm.box = "generic/ubuntu2204"
  config.vm.synced_folder '.', '/vagrant', disabled: true
  config.vm.synced_folder "ansible", "/ansible"
  config.vm.provider "hyperv" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
    vb.linked_clone = true
  end
  
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "/ansible/playbook.yml"
  end

# ------ VM's
  config.vm.define "lb" do |lb|
    lb.vm.network "private_network", ip: "10.0.0.2"
    lb.vm.synced_folder "nginx_common", "/nginx_common"
    lb.vm.synced_folder "lb", "/nginx"
  end

  config.vm.define "web1" do |web1|
    web1.vm.network "private_network", ip: "10.0.0.10"
    web1.vm.synced_folder "nginx_common", "/nginx_common"
    web1.vm.synced_folder "web1", "/nginx"
  end

  config.vm.define "web2" do |web2|
    web2.vm.network "private_network", ip: "10.0.0.11"
    web2.vm.synced_folder "nginx_common", "/nginx_common"
    web2.vm.synced_folder "web2", "/nginx"
  end

  config.vm.define "grafana" do |grafana|
    grafana.vm.network "private_network", ip: "10.0.0.4"
    grafana.vm.synced_folder "grafana", "/grafana"
  end

  config.vm.define "prometheus" do |prometheus|
    prometheus.vm.network "private_network", ip: "10.0.0.5"
    prometheus.vm.synced_folder "prometheus", "/prometheus"
  end
end
