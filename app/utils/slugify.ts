export const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars (removes ? and ')
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .trim();
