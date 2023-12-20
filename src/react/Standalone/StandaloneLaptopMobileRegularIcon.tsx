import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLaptopMobileRegularIcon = (
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
      d='M8.5 7.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v8.75h10V19H4.828c.26.781.82 1.198 1.68 1.25H17.25v1.25H6.508c-.86-.026-1.563-.312-2.11-.86-.572-.572-.872-1.288-.898-2.148.052-.443.3-.69.742-.742H6V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H21c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v1.25h-1.25V9c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352zm11.25 5.625v11.25c.026.39.234.599.625.625h6.25c.39-.026.599-.234.625-.625v-11.25c-.026-.39-.234-.599-.625-.625h-6.25c-.39.026-.599.234-.625.625m-1.25 0c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h6.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-6.25a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopMobileRegularIcon);
export default ForwardRef;
