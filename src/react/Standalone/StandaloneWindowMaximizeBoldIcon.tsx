import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWindowMaximizeBoldIcon = (
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
    <path d='M6 10.016c.04-.352.117-.664.273-.938.235-.39.547-.742.977-.976.273-.157.625-.274.977-.313.078 0 .156-.039.273-.039h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5V10.016m1.875 5.234v7.5c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-7.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMaximizeBoldIcon);
export default ForwardRef;
