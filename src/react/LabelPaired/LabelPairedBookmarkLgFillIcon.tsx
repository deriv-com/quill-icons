import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7.375C0 6.359.82 5.5 1.875 5.5h11.25C14.141 5.5 15 6.36 15 7.375v17.188c0 .546-.43.937-.977.937a.9.9 0 0 1-.546-.156L7.5 21.125l-6.016 4.219a.9.9 0 0 1-.546.156C.39 25.5 0 25.11 0 24.563z' />
    </g>
    <defs>
      <clipPath id='50ef1195103bd57cb4588b5d15d64a57__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkLgFillIcon);
export default ForwardRef;
