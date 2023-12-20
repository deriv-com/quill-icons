import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.414 9.898A.542.542 0 0 1 .25 9.5c0-.156.055-.29.164-.398L4.54 5.164c.281-.219.547-.219.797 0 .219.281.21.547-.024.797L2.22 8.937h7.969c.343.032.53.22.562.563-.031.344-.219.531-.562.563h-7.97l3.118 2.976c.219.25.219.516 0 .797-.25.219-.508.219-.774 0L.439 9.898z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionBoldIcon);
export default ForwardRef;
