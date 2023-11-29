import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowsRotateBoldIcon = (
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
      d='M25.375 14.313c-.052.572-.365.885-.938.937h-5.625c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h3.359l-2.031-2.031C18.995 10.224 17.615 9.65 16 9.625c-1.432.026-2.708.417-3.828 1.172a6.879 6.879 0 0 0-2.5 3.008c-.26.52-.664.69-1.211.508-.52-.287-.69-.704-.508-1.25a8.571 8.571 0 0 1 3.164-3.829C12.55 8.271 14.177 7.776 16 7.75c2.11.026 3.932.781 5.469 2.266l2.031 2.03V8.689c.052-.573.365-.886.938-.938.572.052.885.365.937.938v5.624ZM7.562 17.75h4.375c.573.052.886.365.938.938-.052.572-.365.885-.938.937H9.829l2.031 2.031c1.146 1.12 2.526 1.693 4.141 1.719 1.432-.026 2.708-.417 3.828-1.172a6.879 6.879 0 0 0 2.5-3.008c.26-.494.664-.65 1.211-.468.52.26.69.664.508 1.21-.703 1.589-1.758 2.865-3.164 3.829-1.432.963-3.06 1.458-4.883 1.484-2.11-.026-3.932-.781-5.469-2.266L8.5 20.954v2.108c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938v-4.375c.052-.572.365-.885.938-.937Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowsRotateBoldIcon);
export default ForwardRef;