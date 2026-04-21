import { QuartzTransformerPlugin } from "../types"

export const ListCallouts: QuartzTransformerPlugin = () => {
  return {
    name: "ListCallouts",
    textTransform(_ctx, src) {
      /* This Regex ONLY matches lines starting with:
      - A list marker: -, *, +, or 1. 2. etc.
      - Followed by a space and then [!tag] OR symbols like !, @, ?, etc.
      It will NOT match lines starting with ">" (standard callouts).
      */
      const listCalloutRegex = /^(\s*)((?:[-*+]|\d+\.))\s+(?:\[!\w+\]|[!@?i+*-])\s+/gm

      return src.toString().replace(listCalloutRegex, (match, indent, marker) => {
        // We only return the indentation and the marker (- or 1.)
        // This effectively "deletes" the callout part from the list item.
        return `${indent}${marker} `
      })
    },
  }
}