import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSixRegularIcon = (
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
    <path d='M21 19q-.04-2.109-1.445-3.555Q18.109 14.04 16 14q-2.109.04-3.477 1.445-1.406 1.368-1.523 3.438V19q.04 2.109 1.445 3.555Q13.891 23.96 16 24q2.109-.04 3.555-1.445Q20.96 21.109 21 19m-6.29-6.094A5.3 5.3 0 0 1 16 12.75q2.656.078 4.414 1.836T22.25 19q-.078 2.656-1.836 4.414T16 25.25q-2.655-.078-4.414-1.836T9.75 19v-.234a6.45 6.45 0 0 1 1.602-3.985l6.054-6.836q.43-.39.899-.039.39.43.039.899z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSixRegularIcon);
export default ForwardRef;
