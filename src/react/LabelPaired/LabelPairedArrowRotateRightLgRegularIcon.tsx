import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightLgRegularIcon = (
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
      <path d='M18.125 13h-5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.36A7.5 7.5 0 0 0 10 8c-4.14 0-7.5 3.36-7.5 7.5S5.86 23 10 23a7.55 7.55 0 0 0 6.29-3.398c.116-.196.35-.352.585-.352.469 0 .781.508.508.938-1.524 2.46-4.297 4.062-7.383 4.062a8.736 8.736 0 0 1-8.75-8.75c0-4.805 3.906-8.75 8.75-8.75 3.164 0 5.938 1.719 7.5 4.258V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625v5a.64.64 0 0 1-.625.625' />
    </g>
    <defs>
      <clipPath id='09b718a73227b5c0187fe5e1717f2886__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightLgRegularIcon);
export default ForwardRef;
