import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.164 14.875h-.977c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938h1.289c.572-1.849 1.614-3.346 3.125-4.492 1.51-1.146 3.268-1.732 5.273-1.758h.938c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-.938c-1.484.026-2.786.43-3.906 1.21A6.949 6.949 0 0 0 4.469 13h6.094c.572.052.885.365.937.938-.052.572-.365.885-.937.937H4.039a5.034 5.034 0 0 0 0 1.25h6.524c.572.052.885.365.937.938-.052.572-.365.885-.937.937H4.469a6.95 6.95 0 0 0 2.5 3.164c1.12.781 2.422 1.185 3.906 1.211h.938c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-.938c-2.005-.026-3.763-.612-5.273-1.758C4.092 21.346 3.049 19.85 2.477 18h-1.29c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938h.976a5.034 5.034 0 0 1 0-1.25'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignLgBoldIcon);
export default ForwardRef;
