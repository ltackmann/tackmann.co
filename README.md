# tackmann.co 

 0 pushd build/web
 1. find . -path ./.git -prune -o -exec rm -rf {} \; 2> /dev/null
 2. popd
 3. mv build/web build/web_old
 4. pub build 
 5. mv build/web_old/.git build/web
 6. rm -rf build/web_old
 
## TODO 
1. Make build script
2. Describe git workflow