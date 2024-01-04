import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSevenRegularIcon = (
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
      d='M9.75 8.375c.026-.39.234-.599.625-.625h11.25c.234 0 .417.104.547.313a.664.664 0 0 1 0 .624l-10 16.25c-.235.313-.521.391-.86.235-.312-.235-.377-.521-.195-.86L20.492 9H10.375c-.39-.026-.599-.234-.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSevenRegularIcon);
export default ForwardRef;
