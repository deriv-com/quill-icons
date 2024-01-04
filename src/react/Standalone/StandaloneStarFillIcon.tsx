import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneStarFillIcon = (
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
      d='m17.133 7.203 2.5 5.156 5.625.86c.495.078.833.351 1.015.82.13.495.026.925-.312 1.29l-4.063 4.023.938 5.703c.078.494-.091.898-.508 1.21-.416.287-.846.313-1.289.079L16 23.687l-5 2.657c-.469.234-.912.208-1.328-.078-.39-.313-.56-.716-.508-1.211l.977-5.703-4.063-4.024c-.364-.364-.469-.794-.312-1.289.156-.469.481-.742.976-.82l5.625-.86 2.5-5.156c.26-.443.638-.677 1.133-.703.52.026.898.26 1.133.703Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStarFillIcon);
export default ForwardRef;
