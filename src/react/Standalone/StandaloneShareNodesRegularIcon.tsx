import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneShareNodesRegularIcon = (
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
    <path d='M24.75 10.875A3.11 3.11 0 0 1 21.625 14a3.13 3.13 0 0 1-2.305-.977l-5.898 2.97c.039.155.078.35.078.507 0 .195-.04.39-.078.547l5.898 2.93A3.28 3.28 0 0 1 21.625 19a3.134 3.134 0 0 1 3.125 3.125 3.11 3.11 0 0 1-3.125 3.125c-1.758 0-3.125-1.367-3.125-3.125 0-.352.04-.742.156-1.055l-5.664-2.851c-.586.86-1.523 1.406-2.617 1.406-1.758 0-3.125-1.367-3.125-3.125a3.11 3.11 0 0 1 3.125-3.125c1.094 0 2.031.586 2.617 1.445l5.664-2.851a3.4 3.4 0 0 1-.156-1.094 3.11 3.11 0 0 1 3.125-3.125 3.134 3.134 0 0 1 3.125 3.125m-14.375 7.5c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874a1.87 1.87 0 0 0 1.64.938m13.125-7.5c0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.875 0-.586.352-.938.938-.938 1.602 0 .703.352 1.29.938 1.64.546.352 1.289.352 1.875 0 .546-.35.937-.937.937-1.64M21.625 24c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.875a1.87 1.87 0 0 0 1.64.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneShareNodesRegularIcon);
export default ForwardRef;
