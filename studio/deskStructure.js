// ./studio/deskStructure.js

import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "./resolveProductionUrl";

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title("Preview"),
  ]);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("homepage"),
      S.documentTypeListItem("page"),
      S.documentTypeListItem("post"),
      S.divider(),
      S.documentTypeListItem("author"),
      S.documentTypeListItem("category"),
      S.documentTypeListItem("project"),
    ]);
