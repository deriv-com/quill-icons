import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBarsFilterBoldIcon = (
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
    <path d='M7.25 9.938c.052-.573.365-.886.938-.938h15.625c.572.052.885.365.937.938-.052.572-.365.885-.937.937H8.188c-.573-.052-.886-.365-.938-.937m2.5 6.25c.052-.573.365-.886.938-.938h10.625c.572.052.885.365.937.938-.052.572-.365.885-.937.937H10.688c-.573-.052-.886-.365-.938-.937m8.75 6.25c-.052.572-.365.885-.937.937h-3.125c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h3.124c.573.052.886.365.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarsFilterBoldIcon);
export default ForwardRef;
