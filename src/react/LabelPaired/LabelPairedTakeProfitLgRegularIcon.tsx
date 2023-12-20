import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTakeProfitLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.75 11.79v8.944H7.031V11.79H3.906v-1.523h7.93v1.523zm4.766 8.944V10.266h4.492c.976 0 1.719.312 2.265.859.508.586.782 1.367.782 2.305 0 .976-.274 1.718-.782 2.304-.546.586-1.289.86-2.265.86h-2.813v4.14zm1.68-5.625h2.695c.43 0 .78-.117 1.015-.351.235-.235.352-.547.352-.977v-.703c0-.43-.117-.742-.352-.976-.234-.235-.586-.352-1.015-.352h-2.696z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitLgRegularIcon);
export default ForwardRef;
