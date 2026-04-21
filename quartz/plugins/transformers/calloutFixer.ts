import { QuartzTransformerPlugin } from "../types"

export const CalloutFixer: QuartzTransformerPlugin = () => {
  return {
    name: "CalloutFixer",
    textTransform(_ctx, src) {
      const content = src.toString().replace(/\r\n/g, "\n")

      /* This Regex finds any line that starts with a callout tag (nested or not).
      It then appends an empty blockquote line immediately after it.
      
      Effect:
      > > [!note] 
      becomes:
      > > [!note]
      > > 
      
      This "spacer" forces the text that follows into the body.
      */
      return content.replace(/^((?:[ \t]*>[ \t]*)+)(\[!(\w+)\][+-]?.*)$/gm, "$1$2\n$1")
    },
  }
}