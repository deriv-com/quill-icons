import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleUserSlashRegularIcon = (
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
    <path d='M3.617 6.773c.196-.273.625-.351.86-.117l23.75 18.75a.585.585 0 0 1 .117.86c-.196.273-.586.312-.86.117L3.734 7.633c-.273-.195-.312-.625-.117-.86m3.203 5.704 1.016.82c-.39.976-.586 2.07-.586 3.203a8.89 8.89 0 0 0 2.617 6.29c.547-2.15 2.54-3.79 4.883-3.79h.352l1.601 1.25H14.75A3.754 3.754 0 0 0 11 23.727c1.406.976 3.125 1.523 5 1.523 1.836 0 3.555-.547 4.96-1.562v.039-.079l1.056.82C20.336 25.798 18.188 26.5 16 26.5c-3.594 0-6.875-1.875-8.672-5a10.08 10.08 0 0 1-.508-9.023M9.945 8.57C11.625 7.242 13.773 6.5 16 6.5c3.555 0 6.875 1.914 8.633 5 1.601 2.813 1.797 6.172.508 9.063l-1.016-.82c.39-.977.625-2.071.625-3.243 0-4.805-3.945-8.75-8.75-8.75-1.875 0-3.633.625-5.04 1.602zm4.375 3.438c.04-.04.078-.04.117-.078.938-.547 2.149-.547 3.126 0 .937.547 1.562 1.601 1.562 2.695 0 .352-.078.703-.195 1.055l-1.094-.86c.039-.39-.04-.78-.234-1.133A1.89 1.89 0 0 0 16 12.75c-.234 0-.43.04-.625.117z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleUserSlashRegularIcon);
export default ForwardRef;
