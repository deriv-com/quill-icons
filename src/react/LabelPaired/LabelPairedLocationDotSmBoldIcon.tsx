import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotSmBoldIcon = (
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
      <path d='M9.438 9c0-2.16-1.778-3.937-3.938-3.937A3.94 3.94 0 0 0 1.563 9c0 .355.109.875.41 1.586.273.656.683 1.422 1.148 2.187.793 1.258 1.695 2.461 2.379 3.336.656-.875 1.559-2.078 2.352-3.336.464-.765.875-1.53 1.148-2.187.3-.711.438-1.23.438-1.586m1.312 0c0 2.406-3.2 6.645-4.621 8.422a.825.825 0 0 1-1.285 0C3.449 15.645.25 11.406.25 9A5.25 5.25 0 0 1 5.5 3.75 5.25 5.25 0 0 1 10.75 9M6.375 9a.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875c0 .492.383.875.875.875A.88.88 0 0 0 6.375 9M3.313 9c0-.766.41-1.477 1.093-1.887.657-.383 1.504-.383 2.188 0C7.25 7.523 7.687 8.234 7.687 9c0 .793-.437 1.504-1.093 1.914-.684.383-1.532.383-2.188 0A2.22 2.22 0 0 1 3.313 9' />
    </g>
    <defs>
      <clipPath id='c55cfde0555bc2d4ba2d67ce07a5b404__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotSmBoldIcon);
export default ForwardRef;
