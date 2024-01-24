import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSortUpBoldIcon = (
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
    <path d='m16 9.898-3.477 3.477h6.954zm-.898-1.796q.39-.352.898-.352t.898.352l5 5q.547.624.274 1.367-.352.742-1.172.781H11q-.82-.04-1.172-.781-.273-.742.274-1.367z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortUpBoldIcon);
export default ForwardRef;
