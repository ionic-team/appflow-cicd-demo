pipeline {
  environment {
      IONIC_TOKEN = credentials('ionic-token')
  }
  stages {
    stage('Android Build') {
      agent {
        docker {
          image  'ghcr.io/ionic-team/ionic-cli:6.11.11'
          args '-v $PWD:/usr/src/app/ -u 0:0'
        }
      }
      steps {
          sh 'ionic package build android debug --environment"Jenkins" --native-config"Jenkins"'
          sh 'echo $BUILD_NUMBER'
      }
    }

    stage('iOS Build') {
      agent {
        docker {
          image  'ghcr.io/ionic-team/ionic-cli:6.11.11'
          args '-v $PWD:/usr/src/app/ -u 0:0'
        }
      }
      steps {
          sh 'ionic package build ios ad-hoc --environment"Jenkins" --native-config"Jenkins" --security-profile="Jenkins" --target-platform="macOS - 2020.09"'
      }
    }
  }
}
