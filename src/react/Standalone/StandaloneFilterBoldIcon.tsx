import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFilterBoldIcon = (
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
    <path d='M6 9.39c0-.898.703-1.64 1.602-1.64h16.757c.899 0 1.641.742 1.641 1.64 0 .391-.156.743-.39 1.016l-6.485 8.008V24c0 .703-.586 1.25-1.29 1.25-.273 0-.546-.078-.78-.273l-3.594-2.852a1.52 1.52 0 0 1-.586-1.21v-2.5l-6.523-8.009C6.117 10.133 6 9.781 6 9.391m2.148.235 6.368 7.852q.234.293.234.585v2.696l2.5 1.992v-4.687c0-.196.04-.391.195-.586l6.407-7.852z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFilterBoldIcon);
export default ForwardRef;
