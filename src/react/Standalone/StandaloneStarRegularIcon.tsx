import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneStarRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M13.617 13.102a1.31 1.31 0 0 1-.976.703l-5.352.78 3.906 3.868c.287.287.404.651.352 1.094l-.938 5.43 4.805-2.54c.39-.208.781-.208 1.172 0l4.805 2.54-.938-5.43c-.052-.443.065-.807.352-1.094l3.906-3.867-5.39-.781c-.417-.078-.73-.313-.938-.703L16 8.14zm7.735 13.28L16 23.533l-5.352 2.85c-.338.183-.664.157-.976-.077-.313-.235-.443-.534-.39-.899l1.015-6.093-4.336-4.297c-.26-.26-.339-.573-.234-.938.13-.364.39-.573.78-.625l5.977-.898 2.657-5.508A.992.992 0 0 1 16 6.5c.39.026.677.208.86.547l2.656 5.508 5.976.86c.39.077.651.299.781.663.105.365.026.677-.234.938l-4.336 4.297 1.016 6.093c.052.365-.078.664-.39.899-.313.234-.639.26-.977.078'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStarRegularIcon);
export default ForwardRef;
