## Hello mọi người , Hôm nay mình sẽ hướng dẫn các bạn deloy project ReactJS to github nha

1- First create a repository named **my-app** using `create-react-app`.

```npm init react-app my-app```

2- We need to install [GitHub Pages](https://www.npmjs.com/package/gh-pages) package as a dev-dependency.

```
cd my-app
npm install gh-pages --save-dev
```
3- Add properties to `package.json` file.

các bạn cứ vào homepage sửa lại homepage như này
`"http://{username}.github.io/{repo-name}"`
ở đây username là tên github của các bạn.
repo-name là tên repo bạn deloy

4- Thêm vào 2 lệnh ở đoạn scripts file package.json
`
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
`
5- Các bạn up source lên như bth thôi
`
    git add . 
    git commit -m "deloy pages"
    git push origin master
`
Ok sau khi deloy bạn chạy thêm lệnh deloy pages
`
    npm run deploy
`
6- Các bạn thử truy cập vào homepage mà bảo đã khởi tạo trước đó ^^

Thanks you so muchh viewed