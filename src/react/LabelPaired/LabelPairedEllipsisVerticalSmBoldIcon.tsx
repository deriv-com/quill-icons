import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={22}
    viewBox='0 0 4 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 13.813q.738.027 1.148.656.33.656 0 1.312-.41.63-1.148.656-.738-.026-1.148-.656a1.4 1.4 0 0 1 0-1.312q.41-.63 1.148-.656m0-4.376q.738.028 1.148.657.33.656 0 1.312-.41.63-1.148.656-.738-.027-1.148-.656a1.4 1.4 0 0 1 0-1.312q.41-.63 1.148-.656m1.313-3.062q-.028.738-.657 1.148a1.4 1.4 0 0 1-1.312 0q-.63-.41-.657-1.148.028-.738.657-1.148a1.4 1.4 0 0 1 1.312 0q.63.41.656 1.148' />
    </g>
    <defs>
      <clipPath id='5f239175dcd240f215ab5ae421414c56__a'>
        <path d='M0 0h4v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalSmBoldIcon);
export default ForwardRef;
