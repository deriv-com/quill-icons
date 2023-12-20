import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5 6.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v8.75h10V18H1.328c.26.781.82 1.198 1.68 1.25H13.75v1.25H3.008c-.86-.026-1.563-.312-2.11-.86-.572-.572-.872-1.288-.898-2.148.052-.443.3-.69.742-.742H2.5V8c.026-.703.273-1.29.742-1.758C3.711 5.773 4.297 5.526 5 5.5h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v1.25h-1.25V8c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352zm11.25 5.625v11.25c.026.39.234.599.625.625h6.25c.39-.026.599-.234.625-.625v-11.25c-.026-.39-.234-.599-.625-.625h-6.25c-.39.026-.599.234-.625.625m-1.25 0c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h6.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-6.25a2.038 2.038 0 0 1-1.328-.547A2.038 2.038 0 0 1 15 23.625z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileLgRegularIcon);
export default ForwardRef;
