import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneAndroidIcon = (
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
      d='M21.195 18.297c.547-.052.86-.365.938-.938-.078-.573-.39-.885-.938-.937-.573.052-.885.364-.937.937.052.573.364.886.937.938Zm-10.39 0c.573-.052.885-.365.937-.938-.052-.573-.364-.885-.937-.937-.547.052-.86.364-.938.937.078.573.39.886.938.938Zm10.703-5.664c1.64.911 2.956 2.135 3.945 3.672 1.016 1.51 1.615 3.242 1.797 5.195H4.75c.182-1.953.781-3.685 1.797-5.195.99-1.537 2.305-2.76 3.945-3.672L8.617 9.39A.42.42 0 0 1 8.578 9a.384.384 0 0 1 .352-.195c.156 0 .273.065.351.195l1.914 3.32A11.42 11.42 0 0 1 16 11.266c1.667 0 3.268.351 4.805 1.054L22.719 9a.384.384 0 0 1 .351-.195c.157 0 .274.065.352.195a.42.42 0 0 1-.04.39l-1.874 3.243Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAndroidIcon);
export default ForwardRef;
