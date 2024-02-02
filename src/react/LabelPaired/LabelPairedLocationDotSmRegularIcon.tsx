import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.875 9Q9.821 7.14 8.59 5.91T5.5 4.625q-1.86.054-3.09 1.285T1.125 9q0 .657.465 1.723.465 1.093 1.176 2.27a29 29 0 0 0 1.449 2.132A49 49 0 0 0 5.5 16.82a49 49 0 0 0 1.285-1.695 29 29 0 0 0 1.45-2.133q.738-1.175 1.203-2.27.437-1.065.437-1.722m.875 0q-.055 1.23-.875 2.844a27.5 27.5 0 0 1-1.914 3.117q-1.067 1.53-1.805 2.434-.273.328-.656.328t-.656-.328q-.738-.903-1.805-2.434a27.5 27.5 0 0 1-1.914-3.117Q.305 10.23.25 9q.054-2.242 1.531-3.719T5.5 3.75q2.242.054 3.719 1.531T10.75 9M4.188 9q.026.738.656 1.148.656.33 1.312 0 .63-.41.657-1.148-.028-.738-.657-1.148a1.4 1.4 0 0 0-1.312 0q-.63.41-.657 1.148M5.5 11.188q-1.23-.028-1.887-1.094-.6-1.095 0-2.188Q4.27 6.841 5.5 6.813q1.23.027 1.887 1.093.6 1.095 0 2.188-.657 1.065-1.887 1.094' />
    </g>
    <defs>
      <clipPath id='0c8917fe4a3d3e25__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotSmRegularIcon);
export default ForwardRef;
