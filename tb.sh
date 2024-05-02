#!/bin/bash
echo -e "Masukan Nama Projek: "
read project_name

mkdir $project_name
cat template.js > $project_name/index.js
cd $project_name
npm init
git init

echo -e "Masukan dependecy yang ingin di install: \n
      example: uuid dotenv axios"
read dependecy_install

npm install $dependecy_install

touch .gitignore 
touch README.md 
echo "#This is Readme for $project_name" >> README.md
echo "node_modules" >> .gitignore


echo "Masukan git remote : \n"
read git_remote

eval $git_remote

echo "Masukan username github: "
read git_username

echo "Masukan username: "
read user_name

echo "Masukan email: "
read email

git config user.name "$user_name"
git config user.email "$email"
git config credential.username "$git_username"

git branch -M main
git add .

echo "Masukan Comment Commit :"
read comment_commit

git commit -m "$comment_commit"

git push -u origin main

npm login

npm link

npm publish
