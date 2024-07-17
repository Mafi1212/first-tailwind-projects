Import { Resolve } From "Path";
Import { DefineConfig } From "start";

Export Default DefineConfig({
Build: {
RollupOptions: {
Input: {
Main: Resolve(__dirname, "index.html"),
blog: Resolve(__dirname, "blog.html"),
},
    },
  },
});