import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsFilterLgBoldIcon = (
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
        d='M.25 8.938c.052-.573.365-.886.938-.938h15.625c.572.052.885.365.937.938-.052.572-.365.885-.937.937H1.188C.615 9.823.302 9.51.25 8.938m2.5 6.25c.052-.573.365-.886.938-.938h10.625c.572.052.885.365.937.938-.052.572-.365.885-.937.937H3.688c-.573-.052-.886-.365-.938-.937m8.75 6.25c-.052.572-.365.885-.937.937H7.437c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938h3.125c.572.052.885.365.937.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterLgBoldIcon);
export default ForwardRef;
