import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleBookmarkSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 4.625a6.11 6.11 0 0 0-5.305 3.063c-1.12 1.914-1.12 4.238 0 6.125C2.79 15.727 4.785 16.875 7 16.875a6.04 6.04 0 0 0 5.277-3.062c1.121-1.887 1.121-4.211 0-6.126A6.1 6.1 0 0 0 7 4.626M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.25 8.563v4.347l1.477-1.176c.136-.136.382-.136.546 0L8.75 12.91V8.563a.47.47 0 0 0-.437-.438H5.687a.45.45 0 0 0-.437.438m.438-1.313h2.625c.71 0 1.312.602 1.312 1.313v5.25c0 .19-.11.328-.273.41a.37.37 0 0 1-.438-.055L7 12.637l-1.914 1.531a.48.48 0 0 1-.465.055.42.42 0 0 1-.246-.41v-5.25c0-.711.574-1.313 1.313-1.313' />
    </g>
    <defs>
      <clipPath id='0271222d168d6907feadbab073d30777__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkSmRegularIcon);
export default ForwardRef;
