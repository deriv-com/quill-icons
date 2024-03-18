import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpBoldIcon = (
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
    <path d='m16.664 8.063 6.563 6.874c.351.391.351.977-.04 1.329-.39.351-.976.351-1.328-.04l-4.922-5.195v13.282c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937V11.03l-4.961 5.196c-.352.39-.938.39-1.329.039a.93.93 0 0 1-.039-1.328l6.563-6.876c.195-.195.43-.312.703-.312.234 0 .469.117.664.313' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpBoldIcon);
export default ForwardRef;
