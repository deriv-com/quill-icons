import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightToLineBoldIcon = (
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
    <path d='M24.75 9.938v13.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V9.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m-5.312 7.265-5.313 5a.97.97 0 0 1-1.328-.039c-.352-.39-.352-.977.039-1.328l3.594-3.398H8.188c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937h8.242l-3.594-3.36c-.39-.351-.39-.937-.04-1.328.352-.39.938-.39 1.329-.04l5.313 5c.195.196.312.43.312.665 0 .273-.117.508-.312.703' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightToLineBoldIcon);
export default ForwardRef;
