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
      d='M13.5 8.688v4.374c-.052.573-.365.886-.938.938H8.189c-.573-.052-.886-.365-.938-.938.052-.572.365-.885.938-.937h3.437V8.687c.052-.572.365-.885.938-.937.572.052.885.365.937.938ZM8.187 19h4.376c.572.052.885.365.937.938v4.375c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-3.437H8.187c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937ZM20.376 8.687v3.438h3.438c.572.052.885.365.937.938-.052.572-.365.885-.938.937h-4.375c-.572-.052-.885-.365-.937-.938V8.689c.052-.573.365-.886.938-.938.572.052.885.365.937.938ZM19.437 19h4.375c.573.052.886.365.938.938-.052.572-.365.885-.938.937h-3.437v3.438c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-4.375c.052-.572.365-.885.938-.937Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCompressBoldIcon);
export default ForwardRef;
