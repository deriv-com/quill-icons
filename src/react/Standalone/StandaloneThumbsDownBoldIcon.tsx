import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneThumbsDownBoldIcon = (
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
    <path d='M18.656 25.133q-1.172.312-2.148-.235t-1.328-1.68l-.235-.78a3.7 3.7 0 0 0-.742-1.368l-2.031-2.226q-.509-.665.078-1.29.704-.546 1.328.04l1.992 2.226a5.26 5.26 0 0 1 1.172 2.11l.235.78q.312.782 1.171.626.782-.312.625-1.172l-.234-.781a6.5 6.5 0 0 0-1.016-2.149.94.94 0 0 1-.078-.976.98.98 0 0 1 .82-.508H23.5q.585-.039.625-.625-.039-.43-.39-.586a.94.94 0 0 1-.587-.664.85.85 0 0 1 .196-.82.67.67 0 0 0 .156-.43q-.039-.508-.508-.625a.95.95 0 0 1-.703-.586q-.156-.507.156-.898a.63.63 0 0 0 .117-.391q-.039-.43-.39-.586-.742-.351-.586-1.133a.35.35 0 0 0 .039-.156q-.039-.585-.625-.625h-3.79q-.78 0-1.405.43l-2.422 1.601q-.742.39-1.29-.273-.43-.742.274-1.29l2.383-1.6a4.4 4.4 0 0 1 2.46-.743H21q1.055 0 1.758.703.703.664.742 1.719.899.704.938 1.953 0 .273-.04.508.938.703.977 1.992 0 .39-.117.742.703.704.742 1.758-.039 1.055-.742 1.758-.704.703-1.758.742h-3.594q.274.625.469 1.25l.195.781q.313 1.173-.234 2.149-.547.975-1.68 1.328M7.25 21.5q-.547 0-.898-.352Q6 20.798 6 20.25V11.5q0-.547.352-.898.35-.352.898-.352h2.5q.547 0 .898.352.352.35.352.898v8.75q0 .547-.352.898-.35.352-.898.352z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneThumbsDownBoldIcon);
export default ForwardRef;
