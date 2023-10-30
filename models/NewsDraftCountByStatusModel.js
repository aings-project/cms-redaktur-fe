function NewsDraftCountByStatusModel(response) {
  return {
    new: response.draft_count.new,
    reviewing: response.draft_count.reviewing,
    reviewed: response.draft_count.reviewed,
    rejected: response.draft_count.rejected,
    approved: response.draft_count.approved,
    published: response.draft_count.published,
  };
}

function PlaceholderNewsDraftCountByStatusModel() {
  return {
    new: 0,
    reviewing: 0,
    reviewed: 0,
    rejected: 0,
    approved: 0,
    published: 0,
  };
}

export { NewsDraftCountByStatusModel, PlaceholderNewsDraftCountByStatusModel };
