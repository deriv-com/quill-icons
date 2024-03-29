import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeWebBrowserIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M27.387 7.333H4.627a2.8 2.8 0 0 0-2.8 2.8V23.64a2.8 2.8 0 0 0 2.8 2.8h10.706v2.227H12.44a.66.66 0 0 0-.667.666.66.66 0 0 0 .667.667h7.12a.66.66 0 0 0 .667-.667.66.66 0 0 0-.667-.666h-2.893V26.44h10.72a2.8 2.8 0 0 0 2.8-2.8V10.133a2.8 2.8 0 0 0-2.8-2.8M4.627 8.667h22.76c.813 0 1.466.653 1.466 1.466V11.6H3.16v-1.467c0-.813.653-1.466 1.467-1.466m22.76 16.44H4.627A1.46 1.46 0 0 1 3.16 23.64V12.933h25.693V23.64c0 .813-.653 1.467-1.466 1.467m-.72-3.467h-.52l1 1a.66.66 0 0 1 0 .947.67.67 0 0 1-.467.2.65.65 0 0 1-.467-.2l-1-1v.52a.66.66 0 0 1-.666.666.66.66 0 0 1-.667-.666v-2.134c0-.093.013-.173.053-.253.04-.107.12-.2.214-.267.026-.013.04-.026.066-.04a.7.7 0 0 1 .334-.106h2.133a.66.66 0 0 1 .667.666.66.66 0 0 1-.667.667zm-1.907-2.8v-.707a.66.66 0 0 1 .667-.666.66.66 0 0 1 .666.666v.707a.66.66 0 0 1-.666.667.66.66 0 0 1-.667-.667m-1 1.187a.67.67 0 0 1-.467.2.65.65 0 0 1-.466-.2l-.707-.707a.66.66 0 0 1 0-.947.66.66 0 0 1 .947 0l.706.707a.66.66 0 0 1 0 .947zm-.52 1.666a.66.66 0 0 1-.667.667h-.706a.66.66 0 0 1-.667-.667.66.66 0 0 1 .667-.666h.706a.66.66 0 0 1 .667.666M8 10.133c0-.293.24-.533.533-.533s.534.24.534.533-.24.534-.534.534A.535.535 0 0 1 8 10.133m-1.6 0c0-.293.24-.533.533-.533s.534.24.534.533-.24.534-.534.534a.535.535 0 0 1-.533-.534m-1.6 0c0-.293.24-.533.533-.533s.534.24.534.533-.24.534-.534.534a.535.535 0 0 1-.533-.534' />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeWebBrowserIcon);
export default ForwardRef;
