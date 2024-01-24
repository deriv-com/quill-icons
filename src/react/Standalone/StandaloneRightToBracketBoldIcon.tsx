import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneRightToBracketBoldIcon = (
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
    <path d='m13.5 20.797 4.297-4.297-4.297-4.297v2.11q-.079.858-.937.937H7.875v2.5h4.688q.858.078.937.938zm6.25-4.297q0 .703-.508 1.21l-4.531 4.493q-.508.547-1.29.547-.74 0-1.25-.547a1.84 1.84 0 0 1-.546-1.25v-1.328h-3.75a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 6 17.75v-2.5q.039-.78.547-1.328.546-.508 1.328-.547h3.75v-1.328q.039-.743.547-1.25a1.64 1.64 0 0 1 1.25-.547q.742 0 1.289.547l4.531 4.492q.508.508.508 1.211m-.312 6.875h3.125q.663 0 1.093-.469.47-.429.469-1.093V11.188q0-.665-.469-1.094a1.42 1.42 0 0 0-1.093-.469h-3.125q-.86-.079-.938-.937.078-.86.938-.938h3.125q1.445.04 2.421 1.016.977.976 1.016 2.422v10.625q-.04 1.445-1.016 2.421-.975.977-2.422 1.016h-3.125q-.858-.079-.937-.937.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRightToBracketBoldIcon);
export default ForwardRef;
