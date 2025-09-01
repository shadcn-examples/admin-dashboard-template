import { MetadataRoute } from "next";

const menu = [
  "/ecommerce",
  "/chats",
  "/ai-chats",
  "/kanban-board",
  "/projects-list",
  "/user-profile-page",
  "/orders",
  "/products",
  "/empty-states"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageRoutesLinks: MetadataRoute.Sitemap = [];

  menu.map((url) => {
    pageRoutesLinks.push({
      url: `${process.env.BASE_URL}${url}`,
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
