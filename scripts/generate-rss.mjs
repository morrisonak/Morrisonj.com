// import { writeFileSync } from 'fs';
// import RSS from 'rss';
// import { allBlogs } from '.contentlayer/data';

// async function generate() {
//   const feed = new RSS({
//     title: 'Justin Morrison',
//     site_url: 'https://morrisonj.com',
//     feed_url: 'https://morrisonj.com/feed.xml'
//   });

//   allBlogs.map((post) => {
//     feed.item({
//       title: post.title,
//       url: `https://morrisonj.com/blog/${post.slug}`,
//       date: post.publishedAt,
//       description: post.summary
//     });
//   });

//   writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
// }

// generate();
