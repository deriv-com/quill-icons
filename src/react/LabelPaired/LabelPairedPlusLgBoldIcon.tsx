import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.938 8.313v6.25h6.25c.572.052.885.364.937.937-.052.573-.365.885-.937.938h-6.25v6.25c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.937-.937v-6.25h-6.25c-.573-.053-.886-.365-.938-.938.052-.573.365-.885.938-.937h6.25v-6.25c.052-.573.364-.886.937-.938.573.052.885.365.938.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgBoldIcon);
export default ForwardRef;