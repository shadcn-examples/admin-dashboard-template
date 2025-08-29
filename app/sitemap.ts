import { MetadataRoute } from "next";

const menu = [
  {
    url: "/ecommerce"
  },
  {
    url: "/chats"
  },
  {
    url: "/kanban-board"
  },
  {
    url: "/projects-list"
  },
  {
    url: "/user-profile-page"
  },
  {
    url: "/orders"
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageRoutesLinks: MetadataRoute.Sitemap = [];

  menu.map((item) => {
    pageRoutesLinks.push({
      url: `${process.env.BASE_URL}${item.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    });
  });

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    ...pageRoutesLinks
  ];
}
