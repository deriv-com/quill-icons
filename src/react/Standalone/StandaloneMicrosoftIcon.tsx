import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneMicrosoftIcon = (
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
      d='M7.25 7.75h8.398v8.398H7.25V7.75Zm9.102 0h8.398v8.398h-8.398V7.75ZM7.25 16.852h8.398v8.398H7.25v-8.398Zm9.102 0h8.398v8.398h-8.398v-8.398Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMicrosoftIcon);
export default ForwardRef;
