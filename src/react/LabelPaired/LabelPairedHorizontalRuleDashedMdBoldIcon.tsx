import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12a.74.74 0 0 1 .75-.75h2a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2A.72.72 0 0 1 0 12m5.5 0a.74.74 0 0 1 .75-.75h2A.76.76 0 0 1 9 12a.74.74 0 0 1-.75.75h-2A.72.72 0 0 1 5.5 12m5.5 0a.74.74 0 0 1 .75-.75h2a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2A.72.72 0 0 1 11 12m5.5 0a.74.74 0 0 1 .75-.75h2A.76.76 0 0 1 20 12a.74.74 0 0 1-.75.75h-2a.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='85a3202027e8110c48188459dc8a43ec__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedMdBoldIcon);
export default ForwardRef;
