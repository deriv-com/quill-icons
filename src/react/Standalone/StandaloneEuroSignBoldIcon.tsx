import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneEuroSignBoldIcon = (
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
    <path d='M11.664 15.875h-.976q-.86-.079-.938-.937.078-.86.938-.938h1.289q.858-2.773 3.125-4.492 2.265-1.719 5.273-1.758h.938q.858.078.937.938-.079.858-.937.937h-.938q-2.226.04-3.906 1.21a6.95 6.95 0 0 0-2.5 3.165h6.094q.858.078.937.938-.078.858-.937.937h-6.524a5 5 0 0 0 0 1.25h6.524q.858.078.937.938-.078.858-.937.937h-6.094a6.95 6.95 0 0 0 2.5 3.164q1.68 1.172 3.906 1.211h.938q.858.078.937.938-.079.858-.937.937h-.938q-3.008-.039-5.273-1.758T11.977 19h-1.29q-.858-.078-.937-.937.078-.86.938-.938h.976a5 5 0 0 1 0-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEuroSignBoldIcon);
export default ForwardRef;
