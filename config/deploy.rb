ssh_options[:forward_agent] = true
default_run_options[:pty] = true

set :application, "express_perf"
set :repository,  "git://github.com/jsclayton/express_perf.git"

set :user, "azureuser"

set :deploy_via, :remote_cache
set :branch, "master"

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

#role :app, "app01.do-ny.codemonkeylabs.com"
role :app, "channeltwit-app01.cloudapp.net"

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end