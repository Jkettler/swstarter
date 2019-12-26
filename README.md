##Notes/Issues

###project setup:
- create-react-app != create-react-native-app
- previous experience: expo, this time: React-Native CLI
- emulator failure to launch: stack trace ~"port in use", ` lsof -nP | grep LISTEN` => docker culprit, `docker stop [container-name]`

 
