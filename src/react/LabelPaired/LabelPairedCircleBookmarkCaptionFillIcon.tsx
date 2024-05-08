import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleBookmarkCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M3.75 7.625v4.5q0 .246.21.352c.118.07.282.046.4-.047L6 11.117l1.64 1.313c.094.093.258.093.376.047.14-.07.234-.188.234-.352v-4.5A1.14 1.14 0 0 0 7.125 6.5h-2.25c-.633 0-1.125.516-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='493348ed9f7672fdb0a4eec33e616a82__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkCaptionFillIcon);
export default ForwardRef;
