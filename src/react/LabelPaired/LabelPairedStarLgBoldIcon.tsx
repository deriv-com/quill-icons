import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.5 5.5c.39.026.677.208.86.547l2.656 5.508 5.976.86c.39.077.651.299.781.663.105.365.026.677-.234.938l-4.336 4.297 1.016 6.093c.052.365-.078.677-.39.938-.313.208-.639.221-.977.039L11.5 22.53l-5.352 2.852c-.338.182-.664.156-.976-.078-.313-.235-.443-.534-.39-.899l1.015-6.093-4.336-4.297c-.26-.26-.339-.573-.234-.938.13-.364.39-.586.78-.664l5.977-.86 2.657-5.507A.992.992 0 0 1 11.5 5.5m0 3.086-2.07 4.219c-.13.286-.365.468-.703.547l-4.61.664 3.36 3.32c.208.234.299.508.273.82l-.82 4.688 4.14-2.188a.847.847 0 0 1 .86 0l4.101 2.188-.781-4.688a.896.896 0 0 1 .273-.82l3.36-3.32-4.61-.664c-.338-.079-.572-.26-.703-.547z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarLgBoldIcon);
export default ForwardRef;
