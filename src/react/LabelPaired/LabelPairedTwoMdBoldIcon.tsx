import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.594 6.5c-.844 0-1.625.344-2.219.938L1.281 8.53c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031l1.094-1.125A4.67 4.67 0 0 1 4.592 5h.22C7.25 5 9.25 7 9.25 9.438c0 1.218-.531 2.374-1.406 3.218L2.625 17.5H9.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.79.79 0 0 1-.719-.469.79.79 0 0 1 .188-.812l6.594-6.157c.593-.562.937-1.343.937-2.124A2.934 2.934 0 0 0 4.813 6.5z' />
    </g>
    <defs>
      <clipPath id='03fb6ef3bf254a1574b10f43e4f3cda4__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoMdBoldIcon);
export default ForwardRef;
