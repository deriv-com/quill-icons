import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.688 18.719a.964.964 0 0 1-1.407 0l-6-6a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L8 16.593l5.281-5.28a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406zm6-12-6 6a.964.964 0 0 1-1.407 0l-6-6a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0L8 10.595l5.281-5.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406' />
    </g>
    <defs>
      <clipPath id='58c63178070293c8dcfc4e6e5ab5dd38__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownMdFillIcon);
export default ForwardRef;
