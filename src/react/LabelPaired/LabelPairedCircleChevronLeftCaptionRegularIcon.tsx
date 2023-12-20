import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleChevronLeftCaptionRegularIcon = (
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
        d='M.75 9.5c.016.953.25 1.828.703 2.625a5.393 5.393 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.394 5.394 0 0 0 1.922-1.922A5.403 5.403 0 0 0 11.25 9.5a5.403 5.403 0 0 0-.703-2.625 5.394 5.394 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.393 5.393 0 0 0-1.922 1.922A5.403 5.403 0 0 0 .75 9.5M12 9.5a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3M6.492 6.617c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L4.664 9.5l2.344 2.367c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L3.867 9.758c-.156-.172-.156-.344 0-.516z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronLeftCaptionRegularIcon);
export default ForwardRef;
