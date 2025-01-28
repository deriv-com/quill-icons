import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12c0-2.75 2.219-5 5-5h2.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H5c-1.937 0-3.5 1.594-3.5 3.5 0 1.938 1.563 3.5 3.5 3.5h2.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H5c-2.781 0-5-2.219-5-5m18 0c0 2.781-2.25 5-5 5h-2.25a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75H13c1.906 0 3.5-1.562 3.5-3.5 0-1.906-1.594-3.5-3.5-3.5h-2.25a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75H13c2.75 0 5 2.25 5 5m-12.25-.75h6.5A.76.76 0 0 1 13 12a.74.74 0 0 1-.75.75h-6.5A.72.72 0 0 1 5 12a.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='b2c10a623b7088752c79df1b1a1a7839__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleMdBoldIcon);
export default ForwardRef;
