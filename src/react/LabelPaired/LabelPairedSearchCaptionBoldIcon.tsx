import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.625 8.375c0-.672-.164-1.297-.492-1.875A3.908 3.908 0 0 0 6.75 5.117a3.821 3.821 0 0 0-3.75 0A3.908 3.908 0 0 0 1.617 6.5a3.735 3.735 0 0 0-.492 1.875c0 .672.164 1.297.492 1.875.344.578.805 1.04 1.383 1.383a3.821 3.821 0 0 0 3.75 0 3.908 3.908 0 0 0 1.383-1.383 3.735 3.735 0 0 0 .492-1.875m-.727 3.82c-.843.688-1.851 1.04-3.023 1.055-1.375-.031-2.523-.508-3.445-1.43C.508 10.898.03 9.75 0 8.375.031 7 .508 5.852 1.43 4.93 2.352 4.008 3.5 3.53 4.875 3.5c1.375.031 2.523.508 3.445 1.43.922.922 1.399 2.07 1.43 3.445-.016 1.172-.367 2.18-1.055 3.023l3.14 3.141c.22.266.22.531 0 .797-.265.219-.53.219-.796 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchCaptionBoldIcon);
export default ForwardRef;
