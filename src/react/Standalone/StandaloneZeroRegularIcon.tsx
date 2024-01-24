import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneZeroRegularIcon = (
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
    <path d='M9.75 14q.078-2.655 1.836-4.414T16 7.75q2.656.078 4.414 1.836T22.25 14v5q-.078 2.656-1.836 4.414T16 25.25q-2.655-.078-4.414-1.836T9.75 19zM16 9q-2.109.04-3.555 1.445Q11.04 11.891 11 14v5q.04 2.109 1.445 3.555Q13.891 23.96 16 24q2.109-.04 3.555-1.445Q20.96 21.109 21 19v-5q-.04-2.109-1.445-3.555Q18.109 9.04 16 9' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneZeroRegularIcon);
export default ForwardRef;
