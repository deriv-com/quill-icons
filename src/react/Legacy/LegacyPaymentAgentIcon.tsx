import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyPaymentAgentIcon = (
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
      <path d='M4 4a2 2 0 0 1 2 2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-5 .5a.5.5 0 0 1 .5.5v.463A2 2 0 0 1 11 10.4a.5.5 0 0 1-1 0 1 1 0 0 0-1.96-.283l2.69 1.389A.5.5 0 0 1 11 12a2 2 0 0 1-1.5 1.937V14a.5.5 0 0 1-1 0v-.063A2 2 0 0 1 7 12a.5.5 0 0 1 1 0 1 1 0 0 0 1.971.24L7.28 10.85a.5.5 0 0 1-.207-.19.5.5 0 0 1-.073-.272 2 2 0 0 1 1.5-1.925V8a.5.5 0 0 1 .5-.5M4 5H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 2 2 0 0 1 2-2h1a1 1 0 0 0-1-1M3 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2' />
    </g>
    <defs>
      <clipPath id='3b282f911a1ffdc5e691cc20304dd4c2__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyPaymentAgentIcon);
export default ForwardRef;
