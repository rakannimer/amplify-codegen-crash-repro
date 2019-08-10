// tslint:disable
// this is an auto generated file. This will be overwritten

export const getNameTag = `query GetNameTag($id: ID!) {
  getNameTag(id: $id) {
    id
    name
  }
}
`;
export const listNameTags = `query ListNameTags(
  $filter: ModelNameTagFilterInput
  $limit: Int
  $nextToken: String
) {
  listNameTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
