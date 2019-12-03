pipeline {
//def workspace;
agent any 
// node {
 tools {
      nodejs "node 8.16.0"
      sonarqube "Sonar"
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
            sh 'sudo docker build -t myapp .'
          sh 'sudo docker tag myapp kausdeep/myapp'
                     
         }
      }
      stage('Docker Image Testing'){
         steps {
          echo"unit testing"
         // sh 'npm test'
          sh'docker image inspect kausdeep/myapp'
          sh 'docker run -p 1337:1337 --detach kausdeep/myapp'
          sleep(time:10,unit:"SECONDS")
          sh 'curl http://localhost:1337/'
          sh 'docker stop $(docker ps -a -q)'

         }
      }
   stage('SonarQube Analysis'){
      echo"Analyzing the Code"
      environment {
        scannerHome = tool 'sonar'
        }
      steps {
       withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
         }
       }
     }
      stage('Publish'){
         steps {
            echo"Pushing the Image to Docker registry"
          sh 'docker push kausdeep/myapp'
            //sh 'Stop the running container'
            //sh 'docker container ps -a'
         }
      }
   }
   post {
      failure {
         mail to: 'kausdeep@gmail.com',
         subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
         body: "something is wrong with ${env.BUILD_URL}"
      }
      success {
         mail to: 'kausdeep@gmail.com',
         subject: "Sucess Build Pipeline: ${currentBuild.fullDisplayName}",
         body: "Build succeded with no Errors ${env.BUILD_URL}"
      }
      always { 
            cleanWs()
        }
   }
    
}
