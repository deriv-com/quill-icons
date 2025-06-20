import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.992 6.688C1.984 7.625 1.305 8.75 1 9.5c.305.75.984 1.875 1.992 2.813C4 13.25 5.336 14 7 14c1.64 0 2.977-.75 3.984-1.687A9 9 0 0 0 13 9.5a9 9 0 0 0-2.016-2.812C9.977 5.75 8.641 5 7 5c-1.664 0-3 .75-4.008 1.688M7 4.25c1.875 0 3.398.867 4.5 1.898 1.102 1.008 1.828 2.227 2.18 3.07a.84.84 0 0 1 0 .587c-.352.82-1.078 2.039-2.18 3.07S8.875 14.75 7 14.75c-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586c.351-.844 1.078-2.063 2.18-3.07C3.578 5.116 5.102 4.25 7 4.25M4.75 9.5c0 .82.422 1.547 1.125 1.969.68.398 1.547.398 2.25 0 .68-.422 1.125-1.149 1.125-1.969 0-.797-.445-1.523-1.125-1.945a2.27 2.27 0 0 0-2.25 0C5.172 7.977 4.75 8.703 4.75 9.5m5.25 0a3.03 3.03 0 0 1-1.5 2.602 2.99 2.99 0 0 1-3 0A2.98 2.98 0 0 1 4 9.5c0-1.055.563-2.04 1.5-2.578a2.99 2.99 0 0 1 3 0C9.414 7.46 10 8.445 10 9.5' />
    </g>
    <defs>
      <clipPath id='d63d109ba4e218de68bb95449cf0f1f6__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeCaptionRegularIcon);
export default ForwardRef;
