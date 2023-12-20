import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 5.5V6c-.02.313-.187.48-.5.5h-3c-.312-.02-.48-.187-.5-.5v-.5H3a.973.973 0 0 0-.719.281A.973.973 0 0 0 2 6.5v11c0 .292.094.531.281.719A.974.974 0 0 0 3 18.5h6a.974.974 0 0 0 .719-.281A.974.974 0 0 0 10 17.5v-11a.973.973 0 0 0-.281-.719A.973.973 0 0 0 9 5.5zm-7.5 1c.02-.708.26-1.302.719-1.781C1.698 4.26 2.292 4.02 3 4h6c.708.02 1.302.26 1.781.719.459.479.698 1.073.719 1.781v11c-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719H3c-.708-.02-1.302-.26-1.781-.719C.76 18.802.52 18.208.5 17.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchBoldIcon);
export default ForwardRef;
