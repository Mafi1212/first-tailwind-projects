Import { Resolve } From "Path";
Import { DefineConfig } From "start";

Export Default DefineConfig({
Build: {
RollupOptions: {
Input: {
Main: Resolve(__dirname, "index.html"),
News: Resolve(__dirname, "extra_pages/blog.html"),
},
    },
  },
});