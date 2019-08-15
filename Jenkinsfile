pipeline {
//def workspace;
agent any 
// node {
 tools {
      nodejs 'node'
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
           sh 'npm config ls'
        }
   //sh 'npm install'
         steps {
            echo "Npm Packages has been installed"
         }
      }
      stage('Build'){
         steps {
            echo "Build the Code"
         }
      }
      stage('unit Testing'){
         steps {
            echo"unit testing"
         }
      }
      stage('Deploy'){
         steps {
            echo"deploying the code"
         }
      }
   }
}
