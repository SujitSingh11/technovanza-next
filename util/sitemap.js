// Change to your custom URL
const YOUR_URL = "https://technovanza.org/";
const getDate = new Date().toISOString();

async function generateSiteMap() {
  // Fetch posts from mock url
  const fetchPosts = async () =>
    await fetch(fetchUrl)
      .then((res) => res.json())
      .catch((err) => console.log(err));

  let posts = await fetchPosts();
  // map the posts to their id - we're using these ids to generate our page url
  posts.map((post) => post.id);

  // map these posts ids to generate your sitemap
  const postList = `
        ${posts
          .map((id) => {
            return `
              <url>
                <loc>${`${YOUR_URL}/post/${id}`}</loc>
                <lastmod>${getDate}</lastmod>
              </url>`;
          })
          .join("")}
      `;

  // Send a list of paths to globby for it to read
  // We add an ! before the files we want to be ignored
  // change the file path to match the files in your own project
  const pages = await globby([
    "src/pages/**/*.js",
    "!src/pages/_*.js",
    "!src/pages/**/[id].js",
    "!src/pages/api",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map((page) => {
              const regex = /(pages)|(src)|(.js)|(.md)|(index)/gi;
              const route = page.replace(regex, "");
              return `
                      <url>
                          <loc>${`${YOUR_URL}/${route}`}</loc>
                      </url>
                  `;
            })
            .join("")}
            // Add the postList
            {postList}
      </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSiteMap();
