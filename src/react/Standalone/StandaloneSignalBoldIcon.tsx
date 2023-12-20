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
      d='M26 6.5c.573.052.885.365.938.938v18.125c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.937-.937V7.438c.052-.573.364-.886.937-.938m-5 3.75c.573.052.885.365.938.938v14.375c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.937-.937V11.188c.052-.573.364-.886.937-.938M16 14c.573.052.885.365.938.938v10.625c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.937-.937V14.938c.052-.573.364-.886.937-.938m-5 3.75c.573.052.885.365.938.938v6.875c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.937-.937v-6.875c.052-.573.364-.886.937-.938M6 21.5c.573.052.885.365.938.938v3.125c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.937-.937v-3.125c.052-.573.364-.886.937-.938'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSignalBoldIcon);
export default ForwardRef;
