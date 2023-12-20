import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUnlockRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4 8v2h7.5c.708.02 1.302.26 1.781.719.459.479.698 1.073.719 1.781v5c-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719h-9c-.708-.02-1.302-.26-1.781-.719C.26 18.802.02 18.208 0 17.5v-5c.02-.708.26-1.302.719-1.781.479-.459 1.073-.698 1.781-.719H3V8c.02-1.125.406-2.073 1.156-2.844C4.927 4.406 5.875 4.021 7 4c.917.02 1.719.292 2.406.813a4.056 4.056 0 0 1 1.438 2.062c.062.292-.052.49-.344.594-.312.062-.52-.042-.625-.313a2.937 2.937 0 0 0-1.062-1.562C8.292 5.219 7.687 5.02 7 5c-.854.02-1.562.313-2.125.875C4.313 6.438 4.021 7.145 4 8m-3 4.5v5c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h9a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 13 17.5v-5a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 11.5 11h-9a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 1 12.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockRegularIcon);
export default ForwardRef;
