import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBackwardStepRegularIcon = (
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
      d='M12.25 9.625v5.313l6.992-5.704A.985.985 0 0 1 19.906 9c.313 0 .573.104.782.313.208.208.312.468.312.78v12.813c0 .313-.104.573-.312.782a1.06 1.06 0 0 1-.782.312.985.985 0 0 1-.664-.234l-6.992-5.703v5.312c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V9.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625m7.5.82L12.29 16.5l7.46 6.055z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardStepRegularIcon);
export default ForwardRef;
