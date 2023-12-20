import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.7 3.86c.2-.146.4-.146.6 0l7.438 6.562c.183.2.192.41.028.629-.2.182-.41.191-.63.027l-1.011-.902v5.387c-.018.62-.228 1.139-.629 1.558-.42.401-.939.61-1.559.629H4.064c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558v-5.387l-1.012.902c-.218.164-.428.155-.629-.027-.164-.219-.155-.429.028-.63zM2.75 9.41v6.153c.018.364.146.674.383.93.255.236.565.364.93.382h7.875c.364-.018.674-.146.93-.383.236-.255.364-.565.382-.93V9.41L8 4.762z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmRegularIcon);
export default ForwardRef;
