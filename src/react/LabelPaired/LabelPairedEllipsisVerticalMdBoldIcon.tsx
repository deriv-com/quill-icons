import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={24}
    viewBox='0 0 4 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 15.5q.844.03 1.313.75.375.75 0 1.5-.469.72-1.313.75-.843-.03-1.312-.75-.375-.75 0-1.5.468-.72 1.312-.75m0-5q.844.03 1.313.75.375.75 0 1.5-.469.72-1.313.75-.843-.03-1.312-.75-.375-.75 0-1.5.468-.72 1.312-.75M3.5 7q-.03.844-.75 1.313-.75.375-1.5 0Q.53 7.844.5 7q.03-.843.75-1.312.75-.375 1.5 0 .72.468.75 1.312' />
    </g>
    <defs>
      <clipPath id='ee9032837d0cad01317bf374117568ea__a'>
        <path d='M0 0h4v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalMdBoldIcon);
export default ForwardRef;
