export const useAppView = () =>
  useState<"list" | "grid">("appView", () => "list");

export function handleToggleView() {
  const viewMode = useAppView();
  if (viewMode.value == "grid") viewMode.value = "list";
  else viewMode.value = "grid";
}
