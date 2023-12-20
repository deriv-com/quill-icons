import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePersonChalkboardBoldIcon = (
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
      d='M11 10.25c-.703-.026-1.25-.339-1.64-.937-.313-.626-.313-1.25 0-1.876.39-.598.937-.911 1.64-.937.703.026 1.25.339 1.64.938.313.625.313 1.25 0 1.875-.39.598-.937.911-1.64.937m-.547 3.125h-.078v5h1.25v-5zm-.078 12.188c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V15.25l-1.68 2.969c-.338.468-.768.586-1.289.351-.468-.338-.586-.768-.351-1.289l2.304-4.023c.313-.547.73-.977 1.25-1.29a3.277 3.277 0 0 1 1.72-.468H16V8.375c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547h8.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v8.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-8.75a2.038 2.038 0 0 1-1.328-.547A2.038 2.038 0 0 1 16 17.125V15.25h1.875v1.875h8.75v-8.75h-8.75V11.5h.938c.572.052.885.365.937.938-.052.572-.365.885-.937.937H13.5v12.188c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V20.25h-1.25z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePersonChalkboardBoldIcon);
export default ForwardRef;
