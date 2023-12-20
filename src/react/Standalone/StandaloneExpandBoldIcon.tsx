import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneExpandBoldIcon = (
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
      d='M12.563 7.75c.572.052.885.365.937.938-.052.572-.365.885-.937.937H9.125v3.438c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V8.686c.052-.572.365-.885.938-.937zM7.25 19.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v3.437h3.438c.572.052.885.365.937.938-.052.572-.365.885-.937.937H8.186c-.572-.052-.885-.365-.937-.937zM23.813 7.75c.572.052.885.365.937.938v4.374c-.052.573-.365.886-.937.938-.573-.052-.886-.365-.938-.937V9.625h-3.437c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938zm-.938 12.188c.052-.573.365-.886.938-.938.572.052.885.365.937.938v4.375c-.052.572-.365.885-.937.937h-4.375c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h3.437z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExpandBoldIcon);
export default ForwardRef;
