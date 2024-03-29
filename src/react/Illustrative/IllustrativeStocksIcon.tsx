import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeStocksIcon = (
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
    <g>
      <path d='M9.333 10h-.666V8.053A.66.66 0 0 0 8 7.387a.66.66 0 0 0-.667.666V10h-.666c-1.107 0-2 .893-2 2v8c0 1.107.893 2 2 2h.666v2a.66.66 0 0 0 .667.667.66.66 0 0 0 .667-.667v-2h.666c1.107 0 2-.893 2-2v-8c0-1.107-.893-2-2-2M10 20a.66.66 0 0 1-.667.667H6.667A.66.66 0 0 1 6 20v-8a.66.66 0 0 1 .667-.667h2.666A.66.66 0 0 1 10 12zM17.333 6h-.666V4A.66.66 0 0 0 16 3.333a.66.66 0 0 0-.667.667v2h-.666c-1.107 0-2 .893-2 2v16c0 1.107.893 2 2 2h.666v2a.66.66 0 0 0 .667.667.66.66 0 0 0 .667-.667v-2h.666c1.107 0 2-.893 2-2V8c0-1.107-.893-2-2-2M18 24a.66.66 0 0 1-.667.667h-2.666A.66.66 0 0 1 14 24V8a.66.66 0 0 1 .667-.667h2.666A.66.66 0 0 1 18 8zM25.333 11.333h-.666V8A.66.66 0 0 0 24 7.333a.66.66 0 0 0-.667.667v3.333h-.666c-1.107 0-2 .894-2 2v8c0 1.107.893 2 2 2h.666v2A.66.66 0 0 0 24 26a.66.66 0 0 0 .667-.667v-2h.666c1.107 0 2-.893 2-2v-8c0-1.106-.893-2-2-2m.667 10a.66.66 0 0 1-.667.667h-2.666a.66.66 0 0 1-.667-.667v-8a.66.66 0 0 1 .667-.666h2.666a.66.66 0 0 1 .667.666z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeStocksIcon);
export default ForwardRef;
