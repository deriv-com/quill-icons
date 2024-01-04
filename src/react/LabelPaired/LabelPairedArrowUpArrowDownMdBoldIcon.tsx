import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpArrowDownMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m16.531 15.781-3 3c-.354.292-.708.292-1.062 0l-3-3c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0l1.719 1.719V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v10.688l1.719-1.72c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063Zm-11-10.562 3 3c.292.354.292.708 0 1.062-.354.292-.708.292-1.062 0L5.75 7.562V18.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V7.562l-1.719 1.72c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063l3-3c.354-.292.708-.292 1.062 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownMdBoldIcon);
export default ForwardRef;
