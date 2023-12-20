import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHorizontalRuleDashedRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 12c0-.25.219-.5.5-.5H3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5A.494.494 0 0 1 0 12m5.5 0c0-.25.219-.5.5-.5h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6a.494.494 0 0 1-.5-.5m5.5 0c0-.25.219-.5.5-.5H14c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-2.5a.494.494 0 0 1-.5-.5m5.5 0c0-.25.219-.5.5-.5h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H17a.494.494 0 0 1-.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedRegularIcon);
export default ForwardRef;
