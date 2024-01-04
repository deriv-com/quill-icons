import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTriangleExclamationRegularIcon = (
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
      d='M7.367 22.906a.754.754 0 0 0-.117.39c.052.444.286.678.703.704h16.094c.416-.026.65-.26.703-.703 0-.13-.026-.26-.078-.39L16.82 9.468C16.612 9.156 16.338 9 16 9c-.338 0-.599.156-.781.469L7.367 22.906Zm-1.094-.625 7.852-13.437C14.568 8.14 15.193 7.776 16 7.75c.807.026 1.432.39 1.875 1.094l7.852 13.437c.182.313.273.651.273 1.016-.026.547-.221 1.002-.586 1.367s-.82.56-1.367.586H7.953c-.547-.026-1.002-.221-1.367-.586s-.56-.82-.586-1.367c0-.365.091-.703.273-1.016ZM16 12.75c.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625Zm-.938 8.75c.053-.573.365-.885.938-.938.573.053.885.365.938.938-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTriangleExclamationRegularIcon);
export default ForwardRef;
