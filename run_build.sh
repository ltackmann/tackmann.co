pub build 
pushd build/web
echo "tackmann.co" > CNAME
echo "gitdir: ../../.git/modules/build/web" > .git
popd
