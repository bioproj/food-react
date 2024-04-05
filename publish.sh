pnpm run  build


cd dist

git clone -b main --single-branch git@github.com:bioproj/food-react.git
cd food-react
git reset d737c5f5cddcc06939ff5b6e2d53366790a8ba79 --hard


mv ../*  .

git add .
git commit -m 'update'
# git branch   main
# git checkout main\
# git remote add origin  git@github.com:bioproj/food-react.git
git push -u origin main -f 