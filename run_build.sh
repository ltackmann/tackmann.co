pub build 
pushd build/web
echo "www.tackmann.co" > CNAME
echo "gitdir: ../../.git/modules/build/web" > .git
popd
