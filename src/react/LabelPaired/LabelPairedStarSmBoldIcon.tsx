import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.973 3.75c.273 0 .492.164.601.383l1.887 3.855 4.184.63a.61.61 0 0 1 .52.437.64.64 0 0 1-.165.683l-3.035 3.008.71 4.238a.66.66 0 0 1-.245.657.74.74 0 0 1-.711.054l-3.746-2.023-3.72 2.023a.73.73 0 0 1-.71-.054c-.191-.164-.3-.41-.246-.657l.71-4.238L.974 9.738a.64.64 0 0 1-.164-.683c.082-.22.273-.41.52-.438l4.183-.629 1.886-3.855c.11-.219.329-.383.575-.383m0 2.16L6.55 8.89c-.11.192-.274.329-.492.356l-3.227.465 2.324 2.324c.164.164.246.383.192.574L4.8 15.891l2.87-1.532a.64.64 0 0 1 .63 0l2.87 1.532-.546-3.254a.57.57 0 0 1 .191-.575l2.325-2.351-3.227-.465c-.219-.027-.383-.164-.492-.355z' />
    </g>
    <defs>
      <clipPath id='54f1a90e05f81a1227f2ea4c9888c270__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmBoldIcon);
export default ForwardRef;
