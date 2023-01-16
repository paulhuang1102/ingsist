import fs from "fs";
import path from "path";
import { Html, Head, Main, NextScript } from 'next/document'

interface DocumentFiles {
  sharedFiles: readonly string[];
  pageFiles: readonly string[];
  allFiles: readonly string[];
}
class InlineStylesHead extends Head {
  getCssLinks({ allFiles }: DocumentFiles) {
    return allFiles
      .filter(file => file.endsWith(".css"))
      .map(file => (
        <style
          key={file}
          nonce={this.props.nonce}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join(".next", file), "utf-8"),
          }}
        />
      ));
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <InlineStylesHead />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
