import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineUpDownMdBoldIcon = (
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
        d='M.75 5c.458.042.708.292.75.75v11c.042.458.292.708.75.75h13c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-13c-.646-.02-1.177-.24-1.594-.656C.24 17.927.021 17.396 0 16.75v-11c.042-.458.292-.708.75-.75Zm11 2.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h2.5c.208 0 .385.073.531.219A.723.723 0 0 1 15 6.75v2.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-.688l-3.969 3.97c-.354.29-.708.29-1.062 0L6.5 10.561l-1.969 1.97c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063l2.5-2.5c.354-.292.708-.292 1.062 0L9 10.938 12.438 7.5h-.688Zm0 8.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.688l-1.47-1.469 1.063-1.062 1.469 1.469v-.688c.042-.458.292-.708.75-.75.458.042.708.292.75.75v2.5a.723.723 0 0 1-.219.531.723.723 0 0 1-.531.219h-2.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownMdBoldIcon);
export default ForwardRef;
