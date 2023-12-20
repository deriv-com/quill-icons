import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
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
    <path
      fillOpacity={0.72}
      d='M11.664 15.875h-.976c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h1.289c.572-1.849 1.614-3.346 3.125-4.492 1.51-1.146 3.268-1.732 5.273-1.758h.938c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-.938c-1.484.026-2.786.43-3.906 1.21a6.949 6.949 0 0 0-2.5 3.165h6.094c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-6.524a5.023 5.023 0 0 0 0 1.25h6.524c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-6.094a6.949 6.949 0 0 0 2.5 3.164c1.12.781 2.422 1.185 3.906 1.211h.938c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-.938c-2.005-.026-3.763-.612-5.273-1.758-1.51-1.146-2.552-2.643-3.125-4.492h-1.29c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938h.976a5.023 5.023 0 0 1 0-1.25'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEuroSignBoldIcon);
export default ForwardRef;
