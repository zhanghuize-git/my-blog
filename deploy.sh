set -e

pnpm build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@101.201.181.219:/home/web-site/my-blog.git master

cd -