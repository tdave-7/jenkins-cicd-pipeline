
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting the source code from GitHub'
                checkout scm
            }
        }

        stage('Check Node.js') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install --package-lock-only'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'CI pipeline completed successfully!'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All pipeline stages passed.'
        }

        failure {
            echo 'FAILED: Check the Jenkins console output.'
        }
    }
}
