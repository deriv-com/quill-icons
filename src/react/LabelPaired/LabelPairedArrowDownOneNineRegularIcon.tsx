import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownOneNineRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14 5.5V10h1c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-3c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h1V6.188l-.844.28c-.291.084-.5-.02-.625-.312-.062-.291.042-.5.313-.625l1.5-.5a.526.526 0 0 1 .437.063c.146.104.219.24.219.406M5.344 18.844c-.23.208-.459.208-.688 0l-3-3c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L4.5 17.281V5.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v11.781l2.156-2.125c.23-.208.459-.208.688 0 .208.23.208.459 0 .688zM13.375 13c-.604.02-1.073.292-1.406.813-.292.541-.292 1.083 0 1.624.333.521.802.792 1.406.813.604-.02 1.073-.292 1.406-.812.292-.542.292-1.084 0-1.626-.333-.52-.802-.791-1.406-.812m-2.625 1.625c.02-.75.281-1.365.781-1.844.48-.5 1.094-.76 1.844-.781.75.02 1.365.281 1.844.781.5.48.76 1.094.781 1.844v.125c0 .688-.219 1.292-.656 1.813l-1.969 2.25c-.23.229-.458.25-.687.062-.23-.23-.25-.458-.063-.687l.781-.938h-.031c-.75-.02-1.365-.281-1.844-.781-.5-.48-.76-1.094-.781-1.844'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineRegularIcon);
export default ForwardRef;
