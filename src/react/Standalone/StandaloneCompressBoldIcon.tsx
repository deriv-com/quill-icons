import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
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
    <path
      fillOpacity={0.72}
      d='M13.5 8.688v4.374c-.052.573-.365.886-.937.938H8.186c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938h3.437V8.688c.052-.573.365-.886.938-.938.572.052.885.365.937.938M8.188 19h4.374c.573.052.886.365.938.938v4.375c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937v-3.438H8.188c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938M20.374 8.688v3.437h3.438c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-4.375c-.573-.052-.886-.365-.938-.937V8.686c.052-.572.365-.885.938-.937.572.052.885.365.937.938M19.438 19h4.375c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-3.438v3.438c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937v-4.375c.052-.573.365-.886.938-.938'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCompressBoldIcon);
export default ForwardRef;
