import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.488 6.512a.463.463 0 0 1 0 .629l-7.437 7.437a.463.463 0 0 1-.63 0L.485 10.641a.463.463 0 0 1 0-.63.463.463 0 0 1 .63 0l3.636 3.637 7.11-7.136a.463.463 0 0 1 .628 0' />
    </g>
    <defs>
      <clipPath id='bf38600a609d6c8d03a25983bb8978f6__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckSmRegularIcon);
export default ForwardRef;
