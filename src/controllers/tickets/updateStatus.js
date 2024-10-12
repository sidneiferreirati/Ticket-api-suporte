export function updateStatus({ request, response, database }) {
  const { id } = request.params;
  const { solution } = request.body;
  console.log(solution);
  database.update("tickets", id, {
    status: "closed",
    updated_at: new Date(),
    solution,
  });
  return response.end();
}
