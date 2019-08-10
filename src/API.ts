/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateNameTagInput = {
  id?: string | null,
  name: string,
};

export type UpdateNameTagInput = {
  id: string,
  name?: string | null,
};

export type DeleteNameTagInput = {
  id?: string | null,
};

export type ModelNameTagFilterInput = {
  id?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelNameTagFilterInput | null > | null,
  or?: Array< ModelNameTagFilterInput | null > | null,
  not?: ModelNameTagFilterInput | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateNameTagMutationVariables = {
  input: CreateNameTagInput,
};

export type CreateNameTagMutation = {
  createNameTag:  {
    __typename: "NameTag",
    id: string,
    name: string,
  } | null,
};

export type UpdateNameTagMutationVariables = {
  input: UpdateNameTagInput,
};

export type UpdateNameTagMutation = {
  updateNameTag:  {
    __typename: "NameTag",
    id: string,
    name: string,
  } | null,
};

export type DeleteNameTagMutationVariables = {
  input: DeleteNameTagInput,
};

export type DeleteNameTagMutation = {
  deleteNameTag:  {
    __typename: "NameTag",
    id: string,
    name: string,
  } | null,
};

export type GetNameTagQueryVariables = {
  id: string,
};

export type GetNameTagQuery = {
  getNameTag:  {
    __typename: "NameTag",
    id: string,
    name: string,
  } | null,
};

export type ListNameTagsQueryVariables = {
  filter?: ModelNameTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNameTagsQuery = {
  listNameTags:  {
    __typename: "ModelNameTagConnection",
    items:  Array< {
      __typename: "NameTag",
      id: string,
      name: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateNameTagSubscription = {
  onCreateNameTag:  {
    __typename: "NameTag",
    id: string,
    name: string,
  } | null,
};

export type OnUpdateNameTagSubscription = {
  onUpdateNameTag:  {
    __typename: "NameTag",
    id: string,
    name: string,
  } | null,
};

export type OnDeleteNameTagSubscription = {
  onDeleteNameTag:  {
    __typename: "NameTag",
    id: string,
    name: string,
  } | null,
};
