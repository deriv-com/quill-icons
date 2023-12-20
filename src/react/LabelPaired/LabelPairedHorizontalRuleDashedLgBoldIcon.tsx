import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHorizontalRuleDashedLgBoldIcon = (
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
        d='M0 15.5c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5C.39 16.438 0 16.047 0 15.5m6.875 0c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938m6.875 0c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938m6.875 0c0-.508.39-.937.938-.937h2.5A.95.95 0 0 1 25 15.5c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedLgBoldIcon);
export default ForwardRef;
