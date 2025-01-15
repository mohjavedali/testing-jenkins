pipeline {
    agent any

    stages {
        stage('Install Node.js and PM2') {
            steps {
                script {
                    // Install Node.js and PM2
                    sh '''
                        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                        sudo apt-get install -y nodejs
                        sudo npm install -g pm2
                    '''
                }
            }
        }

        stage('Install Packages') {
            steps {
                script {
                    // Install project dependencies using Yarn
                    sh 'yarn install'
                }
            }
        }

        stage('Run the App with PM2') {
            steps {
                script {
                    // Start the app using PM2
                    sh '''
                        pm2 stop all || true
                        pm2 start --name my-app yarn -- start
                        pm2 save
                        sleep 5
                    '''
                }
            }
        }

        stage('Visit /health route') {
            steps {
                script {
                    // Check the health route
                    sh 'curl http://localhost:3000/health'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Stop the app and cleanup PM2 processes
                    sh '''
                        pm2 stop my-app
                        pm2 delete my-app
                    '''
                }
            }
        }
    }
}
