import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightBoldIcon = (
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
    <path d='m24.438 17.203-6.875 6.563c-.391.351-.977.351-1.329-.04-.351-.39-.351-.976.04-1.328l5.195-4.96H8.187c-.546 0-.937-.391-.937-.938 0-.508.39-.937.938-.937h13.28l-5.195-4.922a.93.93 0 0 1-.039-1.328.93.93 0 0 1 1.328-.04l6.875 6.563c.196.195.313.43.313.664 0 .273-.117.508-.312.703' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightBoldIcon);
export default ForwardRef;
