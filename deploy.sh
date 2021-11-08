cd ..
# 终止一个错误
set -e
cd docs
# 生成静态资源
vuepress build
# 进入生成的构建文件夹
cd vuepress
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/ayanamirei629/ayanamirei629.github.io.git master

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:ayanamirei629/dairy.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:ayanamirei629/Blog.git master:gh-pages

cd -
