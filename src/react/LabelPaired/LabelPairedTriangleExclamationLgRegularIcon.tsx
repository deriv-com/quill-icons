import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTriangleExclamationLgRegularIcon = (
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
        d='M1.367 21.906a.754.754 0 0 0-.117.39c.052.444.286.678.703.704h16.094c.416-.026.65-.26.703-.703 0-.13-.026-.26-.078-.39L10.82 8.468C10.612 8.156 10.338 8 10 8c-.339 0-.599.156-.781.469zm-1.094-.625L8.125 7.844C8.568 7.14 9.193 6.776 10 6.75c.807.026 1.432.39 1.875 1.094l7.852 13.437c.182.313.273.651.273 1.016-.026.547-.221 1.002-.586 1.367s-.82.56-1.367.586H1.953c-.547-.026-1.002-.221-1.367-.586s-.56-.82-.586-1.367c0-.365.091-.703.273-1.016M10 11.75c.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625m-.937 8.75c.052-.573.364-.885.937-.937.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationLgRegularIcon);
export default ForwardRef;
