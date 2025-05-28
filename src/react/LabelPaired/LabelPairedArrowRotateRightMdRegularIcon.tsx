import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightMdRegularIcon = (
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
      <path d='M14.5 10h-4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h2.688A6 6 0 0 0 8 6c-3.312 0-6 2.688-6 6 0 3.313 2.688 6 6 6a6.04 6.04 0 0 0 5.031-2.719A.58.58 0 0 1 13.5 15c.375 0 .625.406.406.75C12.687 17.719 10.47 19 8 19c-3.875 0-7-3.125-7-7 0-3.844 3.125-7 7-7 2.531 0 4.75 1.375 6 3.406V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5' />
    </g>
    <defs>
      <clipPath id='d4544e2f1f58dd5a182f948fd922e52c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightMdRegularIcon);
export default ForwardRef;
