pipeline {
  agent {
    docker {
      image 'node:20-alpine'
    }
  }

  options { timestamps() }

  stages {
    stage('Install') {
      steps { sh 'npm ci || npm install' }
    }

    stage('Test') {
      steps { sh 'npm test' }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }
  }
}