import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.695 13.742a.66.66 0 0 1-.625.508c-.39 0-.703-.312-.625-.703C2.344 9.68 5.82 6.75 10 6.75c3.164 0 5.938 1.719 7.5 4.258V8.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.11a7.503 7.503 0 0 0-13.79 1.992m14.57 3.555c.079-.313.352-.547.665-.547.351 0 .664.352.586.742C17.617 21.36 14.14 24.25 10 24.25a8.7 8.7 0 0 1-7.5-4.219v2.344a.617.617 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625h3.75c.352 0 .625.313.625.625a.617.617 0 0 1-.625.625H3.477C4.766 21.516 7.187 23 10 23c3.516 0 6.484-2.422 7.266-5.703' />
    </g>
    <defs>
      <clipPath id='280eb6be3daf765e6b6058ae4ec4b6f4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateLgRegularIcon);
export default ForwardRef;
