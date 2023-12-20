import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightToBracketLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.5 19.797 4.297-4.297L7.5 11.203v2.11c-.052.572-.365.885-.937.937H1.875v2.5h4.688c.572.052.885.365.937.938zm6.25-4.297c0 .469-.17.872-.508 1.21l-4.531 4.493c-.339.365-.768.547-1.29.547-.494 0-.91-.182-1.25-.547a1.844 1.844 0 0 1-.546-1.25v-1.328h-3.75a2.038 2.038 0 0 1-1.328-.547A2.039 2.039 0 0 1 0 16.75v-2.5c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h3.75v-1.328c.026-.495.208-.912.547-1.25a1.639 1.639 0 0 1 1.25-.547c.495 0 .924.182 1.289.547l4.531 4.492c.339.339.508.742.508 1.211m-.312 6.875h3.124c.443 0 .808-.156 1.094-.469.313-.286.469-.65.469-1.093V10.188c0-.443-.156-.808-.469-1.094a1.418 1.418 0 0 0-1.093-.469h-3.125c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h3.124c.964.026 1.771.365 2.422 1.016.651.65.99 1.458 1.016 2.422v10.625c-.026.963-.365 1.77-1.016 2.421-.65.651-1.458.99-2.422 1.016h-3.125c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketLgBoldIcon);
export default ForwardRef;
