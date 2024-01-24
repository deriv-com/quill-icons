import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleBookmarkRegularIcon = (
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
    <path d='M16 7.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.25 14.195 7.25 16.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q13.617 25.211 16 25.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.383 7.789 16 7.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m-2.5-13.125v6.21l2.11-1.679q.39-.312.78 0l2.11 1.68v-6.211q-.039-.585-.625-.625h-3.75q-.585.039-.625.625m.625-1.875h3.75q.78.039 1.328.547.508.546.547 1.328v7.5q0 .39-.352.547a.67.67 0 0 1-.664-.04L16 19.196l-2.734 2.188a.67.67 0 0 1-.664.039.55.55 0 0 1-.352-.547v-7.5q.039-.78.547-1.328.546-.508 1.328-.547' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleBookmarkRegularIcon);
export default ForwardRef;
