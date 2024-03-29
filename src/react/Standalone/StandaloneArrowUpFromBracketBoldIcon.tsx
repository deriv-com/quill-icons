import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpFromBracketBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m16.664 6.773 4.961 5c.39.391.39.977 0 1.329-.352.39-.937.39-1.328 0l-3.399-3.399v9.61c0 .546-.39.937-.937.937a.925.925 0 0 1-.938-.937v-9.61l-3.398 3.399a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l5-5c.352-.351.938-.351 1.33 0M9.125 19.938v3.125c0 .898.664 1.562 1.563 1.562h10.625c.859 0 1.562-.664 1.562-1.562v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v3.125a3.443 3.443 0 0 1-3.437 3.437H10.688a3.42 3.42 0 0 1-3.438-3.437v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpFromBracketBoldIcon);
export default ForwardRef;
