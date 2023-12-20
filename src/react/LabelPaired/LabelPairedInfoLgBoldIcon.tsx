import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.438 8.313c.026-.6.286-1.055.78-1.368a1.66 1.66 0 0 1 1.563 0c.495.313.755.769.782 1.367-.027.6-.287 1.055-.782 1.368a1.66 1.66 0 0 1-1.562 0c-.495-.313-.755-.769-.781-1.367m-1.563 5c.052-.573.365-.886.938-.938H4c.573.052.885.365.938.938v10.312h1.875c.572.052.885.365.937.938-.052.572-.365.885-.937.937H1.188c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h1.875V14.25h-1.25c-.573-.052-.886-.365-.938-.937'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoLgBoldIcon);
export default ForwardRef;
