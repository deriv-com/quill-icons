import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.86 13.813a.584.584 0 0 1-.797.07l-3.75-3.14.867-.75 3.61 3.023a.584.584 0 0 1 .07.797M2.624 4.624c-.54 0-1.031.305-1.312.75a1.55 1.55 0 0 0 0 1.5c.28.469.773.75 1.312.75.516 0 1.008-.281 1.29-.75a1.55 1.55 0 0 0 0-1.5c-.282-.445-.774-.75-1.29-.75m0-1.125c1.43 0 2.625 1.195 2.625 2.625 0 .422-.117.82-.281 1.172l1.758 1.476 4.336-3.632a.584.584 0 0 1 .796.07.584.584 0 0 1-.07.797l-6.82 5.719c.164.351.281.75.281 1.148A2.636 2.636 0 0 1 2.625 15.5 2.62 2.62 0 0 1 0 12.875a2.636 2.636 0 0 1 2.625-2.625c.61 0 1.195.234 1.64.586L5.86 9.5 4.266 8.188a2.67 2.67 0 0 1-1.641.562A2.62 2.62 0 0 1 0 6.125 2.636 2.636 0 0 1 2.625 3.5m1.5 9.375c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313' />
    </g>
    <defs>
      <clipPath id='0af76a9c09136b175aa204b3f3a6c99d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsCaptionBoldIcon);
export default ForwardRef;
