import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCompressBoldIcon = (
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
    <path d='M13.5 8.688v4.374q-.079.86-.937.938H8.186q-.859-.079-.937-.937.078-.86.938-.938h3.437V8.688q.078-.86.938-.938.858.078.937.938M8.188 19h4.374q.86.078.938.938v4.375q-.079.858-.937.937-.86-.079-.938-.937v-3.438H8.188q-.86-.078-.938-.937.078-.86.938-.938M20.374 8.688v3.437h3.438q.858.078.937.938-.079.858-.937.937h-4.375q-.86-.079-.938-.937V8.686q.078-.858.938-.937.858.078.937.938M19.438 19h4.375q.858.078.937.938-.079.858-.937.937h-3.438v3.438q-.078.858-.937.937-.86-.079-.938-.937v-4.375q.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCompressBoldIcon);
export default ForwardRef;
