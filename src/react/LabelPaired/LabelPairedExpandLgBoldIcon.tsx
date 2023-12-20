import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandLgBoldIcon = (
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
        d='M5.563 6.75c.572.052.885.365.937.938-.052.572-.365.885-.937.937H2.125v3.438c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V7.687c.052-.572.365-.885.938-.937zM.25 18.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v3.437h3.438c.572.052.885.365.937.938-.052.572-.365.885-.937.937H1.188c-.573-.052-.886-.365-.938-.937zM16.813 6.75c.572.052.885.365.937.938v4.375c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V8.625h-3.437c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938zm-.938 12.188c.052-.573.365-.886.938-.938.572.052.885.365.937.938v4.375c-.052.572-.365.885-.937.937h-4.375c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h3.437z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgBoldIcon);
export default ForwardRef;
