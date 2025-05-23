import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileXmlBoldIcon = (
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
    <path d='M8.5 24.625h1.875V26.5H8.5A2.47 2.47 0 0 1 6 24V9c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v5.82h-1.875V12.75H16c-.703 0-1.25-.547-1.25-1.25V8.375H8.5A.64.64 0 0 0 7.875 9v15c0 .352.273.625.625.625m5-3.75q0 .47.234.82l.391.586.352-.586c.156-.234.273-.508.273-.82s.273-.625.625-.625c.313 0 .625.313.625.625q0 .82-.469 1.523l-.664.977.664 1.016c.313.468.469.976.469 1.484a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.273-.117-.547-.273-.781l-.352-.586-.39.586a1.4 1.4 0 0 0-.235.781.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.508.156-1.055.43-1.484l.664-1.016-.664-.977a3 3 0 0 1-.43-1.523c0-.312.273-.625.625-.625.313 0 .625.313.625.625m10 5v-5c0-.312.273-.625.625-.625.313 0 .625.313.625.625v4.375h.625c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625m-5.82-5.586c.273-.078.586.04.703.273l1.367 2.227 1.328-2.227a.63.63 0 0 1 .703-.273.62.62 0 0 1 .469.586v5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-2.734l-.742 1.21a.61.61 0 0 1-.508.313.62.62 0 0 1-.547-.312L18.5 23.14v2.734a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5c0-.273.156-.508.43-.586' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileXmlBoldIcon);
export default ForwardRef;
