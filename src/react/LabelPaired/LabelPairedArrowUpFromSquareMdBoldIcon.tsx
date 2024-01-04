import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpFromSquareMdBoldIcon = (
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
        d='m8.531 4.219 3.5 3.5c.292.354.292.708 0 1.062-.354.292-.708.292-1.062 0L8.75 6.562v7.688c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V6.562l-2.219 2.22c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063l3.5-3.5c.354-.292.708-.292 1.062 0ZM2.25 5h.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-.25c-.458.042-.708.292-.75.75v10.5c.042.458.292.708.75.75h11.5c.458-.042.708-.292.75-.75V7.25c-.042-.458-.292-.708-.75-.75h-.25c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.25c.646.02 1.177.24 1.594.656.416.417.635.948.656 1.594v10.5c-.02.646-.24 1.177-.656 1.594-.417.416-.948.635-1.594.656H2.25c-.646-.02-1.177-.24-1.594-.656C.24 18.927.021 18.396 0 17.75V7.25c.02-.646.24-1.177.656-1.594.417-.416.948-.635 1.594-.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareMdBoldIcon);
export default ForwardRef;
