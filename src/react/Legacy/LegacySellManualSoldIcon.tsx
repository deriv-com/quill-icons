import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySellManualSoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 3a1.5 1.5 0 0 1 1.5 1.5V8h.675a3 3 0 0 1 .95.154l1.191.397a2.49 2.49 0 0 1 1.576 3.151c-.024.07-.024.07-.05.137l-.91 2.275A3 3 0 0 1 10.145 16H8.5a3 3 0 0 1-2.4-1.2l-2.6-3.467V11a1.535 1.535 0 0 1 2.387-1.277l.613.409V4.5A1.5 1.5 0 0 1 8 3m0 1a.5.5 0 0 0-.5.5v5.697A.965.965 0 0 1 6 11l-.668-.445A.535.535 0 0 0 4.5 11l2.4 3.2a2 2 0 0 0 1.6.8h1.646a2 2 0 0 0 1.857-1.257l.91-2.275.03-.082A1.49 1.49 0 0 0 12 9.5l-1.192-.397A2 2 0 0 0 10.175 9H8.5V4.5A.5.5 0 0 0 8 4m4.5-4A1.5 1.5 0 0 1 14 1.5v4A1.5 1.5 0 0 1 12.5 7H11V6h1.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5H5v1H3.5A1.5 1.5 0 0 1 2 5.5v-4A1.5 1.5 0 0 1 3.5 0z' />
    </g>
    <defs>
      <clipPath id='86bf4eb31ede12fb608fa8eada3a2f18__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySellManualSoldIcon);
export default ForwardRef;
