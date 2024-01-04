import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 5.75v11c.042.458.292.708.75.75h13c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-13c-.646-.02-1.177-.24-1.594-.656C.24 17.927.021 17.396 0 16.75v-11c.042-.458.292-.708.75-.75.458.042.708.292.75.75Zm13.281 3.531-4.25 4.25c-.354.292-.708.292-1.062 0L7 11.062l-2.469 2.47c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063l3-3A.723.723 0 0 1 7 9.25c.208 0 .385.073.531.219L10 11.938l3.719-3.72c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineMdBoldIcon);
export default ForwardRef;
