// @ts-ignore
import { mdxAnnotations } from "mdx-annotations";
import remarkGfm from "remark-gfm";
// @ts-ignore
import remarkUnwrapImages from "remark-unwrap-images";

export const remarkPlugins = [
  mdxAnnotations.remark,
  remarkGfm,
  remarkUnwrapImages,
];
