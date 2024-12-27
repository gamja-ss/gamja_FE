export const formatDate = (dateString: Date) => {
  return new Date(dateString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};
