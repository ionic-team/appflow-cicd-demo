
pipeline {
	agent {
	    docker {
	      image  'ghcr.io/ionic-team/ionic-cli:6.11.11'
              args '-v $PWD:/usr/src/app/ -u 0:0'
	    }
	}
    environment {
        IONIC_TOKEN = credentials('ionic-token')
    }
    stages {

       stage('Android Debug Build') {
          steps {
             sh 'ionic package build android debug'
         }
       }
    }
}
