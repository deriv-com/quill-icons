import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileShieldBoldIcon = (
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
    <path d='M7.25 24.625h9.61c.43.586.937 1.133 1.562 1.602-.352.195-.781.273-1.172.273h-10a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v2.03l-1.875.782V12.75H14.75c-.703 0-1.25-.547-1.25-1.25V8.375H7.25A.64.64 0 0 0 6.625 9v15c0 .352.273.625.625.625m14.023-9.297a.97.97 0 0 1 .665 0l4.687 1.875c.39.156.625.508.625.86 0 2.5-1.016 6.601-5.273 8.398a1.2 1.2 0 0 1-.743 0C16.977 24.664 16 20.563 16 18.063c0-.352.234-.704.586-.86zm4.063 3.36-3.711-1.485v7.344c2.656-1.29 3.555-3.867 3.71-5.86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileShieldBoldIcon);
export default ForwardRef;
