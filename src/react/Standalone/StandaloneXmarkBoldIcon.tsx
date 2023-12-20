import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneXmarkBoldIcon = (
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
      d='M21.977 11.852 17.328 16.5l4.649 4.648c.364.443.364.886 0 1.329-.443.364-.886.364-1.329 0L16 17.828l-4.648 4.649c-.443.364-.886.364-1.329 0-.364-.443-.364-.886 0-1.329l4.649-4.648-4.649-4.648c-.364-.443-.364-.886 0-1.329.443-.364.886-.364 1.329 0L16 15.172l4.648-4.649c.443-.364.886-.364 1.329 0 .364.443.364.886 0 1.329'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXmarkBoldIcon);
export default ForwardRef;
