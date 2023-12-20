import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m.512 10.45 4.812-4.813c.2-.183.401-.183.602 0 .182.2.182.4 0 .601l-4.047 4.074h10.308c.274.019.42.165.438.438-.018.273-.164.42-.437.438H1.877l4.048 4.074c.182.2.182.4 0 .601-.2.183-.401.183-.602 0L.512 11.051c-.183-.2-.183-.401 0-.602'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmRegularIcon);
export default ForwardRef;
