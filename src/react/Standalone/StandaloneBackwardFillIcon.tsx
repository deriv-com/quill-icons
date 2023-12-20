import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBackwardFillIcon = (
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
      d='M23.969 23.727 17.25 18.14V14.86l6.719-5.587c.39-.312.833-.364 1.328-.156.443.235.677.612.703 1.133v12.5c-.026.52-.26.898-.703 1.133-.495.208-.938.156-1.328-.156M16 20.25v2.5c-.026.52-.26.898-.703 1.133-.495.208-.938.156-1.328-.156l-7.5-6.25A1.22 1.22 0 0 1 6 16.5c0-.39.156-.716.469-.977l7.5-6.25c.39-.312.833-.364 1.328-.156.443.235.677.612.703 1.133v6.25z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardFillIcon);
export default ForwardRef;
