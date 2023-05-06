# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|

  config.vm.box = "generic/ubuntu2204"
  config.vm.synced_folder '.', '/vagrant', disable: true
# config.vm.synced_folder "ansible", "/ansible"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
    vb.linked_clone = true
  end
  
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/playbook.yml"
  end

# ------ VM's
  config.vm.define "lb" do |lb|
    lb.vm.network "private_network", ip: "192.168.56.2"
    lb.vm.synced_folder "nginx_stub_status", "/nginx_stub_status"
    lb.vm.synced_folder "lb", "/nginx"
  end

  config.vm.define "web1" do |web1|
    web1.vm.network "private_network", ip: "192.168.56.10"
    web1.vm.synced_folder "nginx_stub_status", "/nginx_stub_status"
    web1.vm.synced_folder "web1", "/nginx"
  end

  config.vm.define "web2" do |web2|
    web2.vm.network "private_network", ip: "192.168.56.11"
    web2.vm.synced_folder "nginx_stub_status", "/nginx_stub_status"
    web2.vm.synced_folder "web2", "/nginx"
  end

  config.vm.define "grafana" do |grafana|
    grafana.vm.network "private_network", ip: "192.168.56.4"
    grafana.vm.synced_folder "grafana", "/grafana", owner: '472'
  end

  config.vm.define "prometheus" do |prometheus|
    prometheus.vm.network "private_network", ip: "192.168.56.5"
    prometheus.vm.synced_folder "prometheus", "/prometheus", owner: '65534', group: '65534'
  end

  config.vm.define "k6" do |k6|
    k6.vm.network "private_network", ip: "192.168.56.6"
    k6.vm.synced_folder "k6", "/k6"
  end
end
