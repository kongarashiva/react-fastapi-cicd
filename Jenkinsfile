pipeline {
agent any
stages {
stage('Checkout') {
steps {
checkout scm
}
}
stage('Build React') {
steps {
dir('frontend') {
sh 'npm install'
sh 'npm run build'
}
}
}
stage('Deploy React') {
steps {
sh 'sudo rm -rf /usr/share/nginx/html/*'
sh 'sudo cp -r frontend/build/* /usr/share/nginx/html/'
sh 'sudo systemctl restart nginx'
}
}
stage('Install Backend') {
steps {
dir('backend') {
sh 'pip3 install -r requirements.txt'
}
}
}
stage('Restart FastAPI') {
steps {
sh 'pkill -f uvicorn || true'
sh 'nohup uvicorn backend.main:app --host 0.0.0.0 --port 8000 > fastapi.log 2>&1 &'
}
}
}
}
