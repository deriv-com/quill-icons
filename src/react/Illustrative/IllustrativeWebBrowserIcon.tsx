import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeWebBrowserIcon = (
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
      d='M27.387 7.333H4.627a2.8 2.8 0 0 0-2.8 2.8V23.64a2.8 2.8 0 0 0 2.8 2.8h10.706v2.227H12.44a.66.66 0 0 0-.667.666.66.66 0 0 0 .667.667h7.12a.66.66 0 0 0 .667-.667.66.66 0 0 0-.667-.666h-2.893V26.44h10.72a2.8 2.8 0 0 0 2.8-2.8V10.133a2.8 2.8 0 0 0-2.8-2.8ZM4.627 8.667h22.76c.813 0 1.466.653 1.466 1.466V11.6H3.16v-1.467c0-.813.653-1.466 1.467-1.466Zm22.76 16.44H4.627A1.462 1.462 0 0 1 3.16 23.64V12.933h25.693V23.64c0 .813-.653 1.467-1.466 1.467Zm-.72-3.467h-.52l1 1a.66.66 0 0 1 0 .947.67.67 0 0 1-.467.2.647.647 0 0 1-.467-.2l-1-1v.52a.66.66 0 0 1-.666.666.66.66 0 0 1-.667-.666v-2.134c0-.093.013-.173.053-.253.04-.107.12-.2.214-.267.026-.013.04-.026.066-.04a.705.705 0 0 1 .334-.106h2.133a.66.66 0 0 1 .667.666.66.66 0 0 1-.667.667h-.013Zm-1.907-2.8v-.707a.66.66 0 0 1 .667-.666.66.66 0 0 1 .666.666v.707a.66.66 0 0 1-.666.667.66.66 0 0 1-.667-.667Zm-1 1.187a.67.67 0 0 1-.467.2.646.646 0 0 1-.466-.2l-.707-.707a.66.66 0 0 1 0-.947.66.66 0 0 1 .947 0l.706.707a.66.66 0 0 1 0 .947h-.013Zm-.52 1.666a.66.66 0 0 1-.667.667h-.706a.66.66 0 0 1-.667-.667.66.66 0 0 1 .667-.666h.706a.66.66 0 0 1 .667.666ZM8 10.133c0-.293.24-.533.533-.533.294 0 .534.24.534.533a.535.535 0 0 1-1.067 0Zm-1.6 0c0-.293.24-.533.533-.533.294 0 .534.24.534.533a.535.535 0 0 1-1.067 0Zm-1.6 0c0-.293.24-.533.533-.533.294 0 .534.24.534.533a.535.535 0 0 1-1.067 0Z'
    />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeWebBrowserIcon);
export default ForwardRef;
