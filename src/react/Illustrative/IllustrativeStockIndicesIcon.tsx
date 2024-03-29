import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeStockIndicesIcon = (
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
      <path d='M24.665 14h-1.333c-1.107 0-2 .893-2 2v9.333c0 1.107.893 2 2 2h1.333c1.107 0 2-.893 2-2V16c0-1.107-.893-2-2-2m.667 11.333a.66.66 0 0 1-.667.667h-1.333a.66.66 0 0 1-.667-.667V16a.66.66 0 0 1 .667-.667h1.333a.66.66 0 0 1 .667.667zM16.665 18h-1.333c-1.107 0-2 .893-2 2v5.333c0 1.107.893 2 2 2h1.333c1.107 0 2-.893 2-2V20c0-1.107-.893-2-2-2m.667 7.333a.66.66 0 0 1-.667.667h-1.333a.66.66 0 0 1-.667-.667V20a.66.66 0 0 1 .667-.667h1.333a.66.66 0 0 1 .667.667zM8.665 20.667H7.332c-1.107 0-2 .893-2 2v2.666c0 1.107.893 2 2 2h1.333c1.107 0 2-.893 2-2v-2.666c0-1.107-.893-2-2-2m.667 4.666a.66.66 0 0 1-.667.667H7.332a.66.66 0 0 1-.667-.667v-2.666A.66.66 0 0 1 7.332 22h1.333a.66.66 0 0 1 .667.667zM27.959 5.133s0-.04-.014-.066c0-.027-.026-.04-.04-.067a.6.6 0 0 0-.106-.147.3.3 0 0 1-.067-.04.6.6 0 0 0-.147-.093.5.5 0 0 0-.146-.027c-.04 0-.067-.026-.107-.026h-4a.66.66 0 0 0-.667.666.66.66 0 0 0 .667.667h2.347a40 40 0 0 1-9.32 6.747 40.1 40.1 0 0 1-11.8 3.933.667.667 0 0 0-.547.773.67.67 0 0 0 .653.56h.107a41 41 0 0 0 12.2-4.066c3.573-1.854 6.813-4.227 9.693-7.027v2.427a.66.66 0 0 0 .667.666.66.66 0 0 0 .667-.666v-4a.4.4 0 0 0-.04-.187z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeStockIndicesIcon);
export default ForwardRef;
