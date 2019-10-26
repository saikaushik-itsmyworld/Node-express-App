pipeline {
//def workspace;
agent any 
// node {
 tools {
      nodejs "node 8.16.0"
   }
  stages {
     stage('Checkout Source')
      {
      //checkout([$class: 'GitSCM', branches: [[name: '*/master'], [name: '*/develop']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '075a5905-76ba-4902-95de-bbefeeb59788', url: 'https://github.com/saikaushik-itsmyworld/Node-express-App']]])
      //workspace =pwd() 
         steps {
            checkout scm
         }
      }
     stage('Install dependencies'){ 
         steps {
          //sh 'npm config ls'
          sh 'npm install'
            echo "Npm Packages has been installed"
         }
      }
      stage('Build'){
         steps {
            echo "Building the Docker Image"
            sh 'docker build -t myapp .'
            sh 'docker run -p -d 1337:1337 myapp'
         }
      }
      stage('unit Testing'){
         steps {
          echo"unit testing"
         // sh 'npm test'
         sh 'curl http://localhost:1337/'

         }
      }
      stage('Deploy'){
         steps {
            echo"deploying the code"
            //sh 'Stop the running container'
            //sh 'docker container ps -a'
         }
      }
   }
}
