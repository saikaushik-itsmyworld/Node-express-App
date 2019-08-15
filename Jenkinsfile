def workspace;
 node {
tools {nodejs "node"}
 stage('Checkout Source')
   {
      //checkout([$class: 'GitSCM', branches: [[name: '*/master'], [name: '*/develop']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '075a5905-76ba-4902-95de-bbefeeb59788', url: 'https://github.com/saikaushik-itsmyworld/Node-express-App']]])
      //workspace =pwd() 
      checkout scm
   }
stage('Install dependencies'){
   step{
   sh 'npm config ls'
   }
    step{
   sh 'npm install'
    }
    step{
    echo "Npm Packages has been installed"
   }
}
stage('Build'){
    echo "Build the Code"
}
stage('unit Testing'){
    echo"unit testing"
}
stage('Deploy'){
    echo"deploying the code"
}
}
