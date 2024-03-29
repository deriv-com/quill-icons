import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneRightFromBracketRegularIcon = (
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
    <path d='m24.71 16.46-5.155-4.882a.3.3 0 0 0-.196-.078c-.117 0-.234.117-.234.273V14a.64.64 0 0 1-.625.625h-4.687a.31.31 0 0 0-.313.313v3.124c0 .196.117.313.313.313H18.5c.313 0 .625.313.625.625v2.266c0 .117.117.234.234.234.078 0 .157 0 .196-.04l5.156-4.882s.039-.039.039-.078zm1.29.04c0 .39-.156.742-.43 1.016l-5.156 4.843c-.273.274-.664.391-1.055.391-.82 0-1.484-.664-1.484-1.484v-1.641h-4.062c-.899 0-1.563-.664-1.563-1.562v-3.125c0-.86.664-1.563 1.563-1.563h4.062v-1.602c0-.82.664-1.523 1.484-1.523.391 0 .782.156 1.055.43l5.156 4.843c.274.274.43.625.43.977M12.875 9h-3.75C8.07 9 7.25 9.86 7.25 10.875v11.25C7.25 23.18 8.07 24 9.125 24h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75C7.367 25.25 6 23.883 6 22.125v-11.25A3.11 3.11 0 0 1 9.125 7.75h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRightFromBracketRegularIcon);
export default ForwardRef;
