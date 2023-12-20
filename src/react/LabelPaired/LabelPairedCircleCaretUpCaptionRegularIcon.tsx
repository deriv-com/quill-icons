import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleCaretUpCaptionRegularIcon = (
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
        d='M6 4.25a5.403 5.403 0 0 0-2.625.703 5.393 5.393 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.394 5.394 0 0 0 1.922 1.922A5.403 5.403 0 0 0 6 14.75a5.403 5.403 0 0 0 2.625-.703 5.394 5.394 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.394 5.394 0 0 0-1.922-1.922A5.403 5.403 0 0 0 6 4.25M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797m0-8.25c.234 0 .43.086.586.258l2.25 2.414c.11.125.164.273.164.445s-.062.32-.187.445a.608.608 0 0 1-.446.188h-4.71a.636.636 0 0 1-.47-.187.608.608 0 0 1-.187-.446c0-.172.055-.32.164-.445l2.25-2.414A.759.759 0 0 1 6 7.25m-.047.773L3.891 10.25h4.218L6.047 8.023C6.03 8.008 6.016 8 6 8s-.031.008-.047.023'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretUpCaptionRegularIcon);
export default ForwardRef;
