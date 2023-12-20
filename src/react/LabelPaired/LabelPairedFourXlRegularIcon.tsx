import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.156 8.578 1.97 21H13.5v-8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75V21h2.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75H15v5.25c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V22.5H.75a.76.76 0 0 1-.656-.328.797.797 0 0 1 0-.75l6.75-13.5c.218-.406.547-.516.984-.328.406.25.516.578.328.984'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlRegularIcon);
export default ForwardRef;
