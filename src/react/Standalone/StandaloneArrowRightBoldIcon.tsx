import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowRightBoldIcon = (
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
      d='m24.477 17.164-6.875 6.563c-.47.364-.912.364-1.329 0-.364-.47-.364-.912 0-1.329l5.196-4.96H8.187c-.572-.053-.885-.365-.937-.938.052-.573.365-.885.938-.937h13.28l-5.155-4.961c-.391-.417-.404-.86-.04-1.329.417-.364.86-.364 1.329 0l6.875 6.563a.904.904 0 0 1 .273.664c0 .26-.091.482-.273.664'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightBoldIcon);
export default ForwardRef;
