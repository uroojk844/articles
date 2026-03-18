// parsing date 2025-01-17T00:00:00Z in format of 20 Oct, 2025
export function parseDate(dateString: string): string {
  let date = new Date(dateString);

  return Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}
