// lib/notion.js
import "server-only";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function getBlogPosts() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true }
    },
    sorts: [{ property: "Date", direction: "descending" }]
  });

//  console.log("NOTION RESULTS", results);

  return results.map((page) => {
    const p = page.properties;

    return {
      id: page.id,
      title: p.Name?.title[0]?.plain_text || "No title",
      slug: p.Slug?.rich_text[0]?.plain_text,
      date: p.Date?.date.start,
      files: (p['Files']?.files || []).map(file => ({
        name: file.name,
        url: file.file?.url || file.external?.url
      })),
      tags: (p.Tags?.multi_select || []).map(t => t.name),
      author: (p.Author?.people || []).map(u => u.name).join(", "),
      content: page.properties.Content.rich_text?.[0]?.plain_text ?? ''
    };
  });
}

export async function getPostBySlug(slug) {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: { equals: slug }
    }
  });
  return results[0] || null;
}
