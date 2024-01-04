import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSignalBoldIcon = (
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
      d='M26 6.5c.573.052.885.365.938.938v18.125c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938V7.438c.053-.572.365-.885.938-.937Zm-5 3.75c.573.052.885.365.938.938v14.374c-.053.573-.365.886-.938.938-.573-.052-.885-.365-.938-.938V11.188c.053-.572.365-.885.938-.937ZM16 14c.573.052.885.365.938.938v10.624c-.053.573-.365.886-.938.938-.573-.052-.885-.365-.938-.938V14.938c.053-.572.365-.885.938-.937Zm-5 3.75c.573.052.885.365.938.938v6.875c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-6.875c.053-.572.365-.885.938-.937ZM6 21.5c.573.052.885.365.938.938v3.125c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-3.125c.053-.572.365-.885.938-.937Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSignalBoldIcon);
export default ForwardRef;
