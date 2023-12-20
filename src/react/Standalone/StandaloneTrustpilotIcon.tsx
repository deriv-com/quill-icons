import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTrustpilotIcon = (
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
      d='M20.57 20.602 16 21.812l6.484 4.688zm5.938-6.446L16 21.812 9.477 26.5l2.5-7.617-6.524-4.727H13.5L16 6.5l2.46 7.656z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTrustpilotIcon);
export default ForwardRef;
