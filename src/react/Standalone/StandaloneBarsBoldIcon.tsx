import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBarsBoldIcon = (
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
      d='M7.25 9.938c.052-.573.365-.886.938-.938h15.624c.573.052.886.365.938.938-.052.572-.365.885-.938.937H8.188c-.572-.052-.885-.365-.937-.938Zm0 6.25c.052-.573.365-.886.938-.938h15.624c.573.052.886.365.938.938-.052.572-.365.885-.938.937H8.188c-.572-.052-.885-.365-.937-.938Zm17.5 6.25c-.052.572-.365.885-.938.937H8.188c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h15.624c.573.052.886.365.938.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarsBoldIcon);
export default ForwardRef;
