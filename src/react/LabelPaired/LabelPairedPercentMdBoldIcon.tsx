import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPercentMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m11.531 7.531-10 10c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l10-10c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062ZM3.5 8c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C.77 9 .52 8.563.5 8c.02-.563.27-1 .75-1.313.5-.25 1-.25 1.5 0 .48.313.73.75.75 1.313Zm8 8c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0-.48-.313-.73-.75-.75-1.313.02-.563.27-1 .75-1.313.5-.25 1-.25 1.5 0 .48.313.73.75.75 1.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentMdBoldIcon);
export default ForwardRef;
