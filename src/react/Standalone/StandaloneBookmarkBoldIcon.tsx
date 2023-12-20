import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBookmarkBoldIcon = (
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
      d='M8.5 8.375c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547v17.227l5.078-3.594c.365-.235.73-.235 1.094 0l5.078 3.594V8.375h-11.25V6.5h11.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v17.188c0 .364-.17.638-.508.82a1.002 1.002 0 0 1-.976-.04L16 22.048l-6.016 4.297a1.002 1.002 0 0 1-.976.039.977.977 0 0 1-.508-.82z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBookmarkBoldIcon);
export default ForwardRef;
