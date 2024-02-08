import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.656 24.133q-1.171.312-2.148-.235t-1.328-1.68l-.235-.78a3.7 3.7 0 0 0-.742-1.368l-2.031-2.226q-.508-.665.078-1.29.703-.546 1.328.04L9.57 18.82a5.26 5.26 0 0 1 1.172 2.11l.235.78q.312.782 1.171.626.782-.312.625-1.172l-.234-.781a6.5 6.5 0 0 0-1.016-2.149.94.94 0 0 1-.078-.976.98.98 0 0 1 .82-.508H17.5q.585-.039.625-.625-.039-.43-.39-.586a.94.94 0 0 1-.587-.664.85.85 0 0 1 .196-.82.67.67 0 0 0 .156-.43q-.039-.508-.508-.625a.95.95 0 0 1-.703-.586q-.156-.507.156-.898a.63.63 0 0 0 .117-.391q-.039-.43-.39-.586-.742-.351-.586-1.133a.35.35 0 0 0 .039-.156q-.039-.585-.625-.625h-3.79q-.78 0-1.405.43l-2.422 1.601q-.743.39-1.29-.273-.43-.742.274-1.29l2.383-1.6a4.4 4.4 0 0 1 2.46-.743H15q1.055 0 1.758.703.703.664.742 1.719.899.704.938 1.953 0 .273-.04.508.938.703.977 1.992 0 .39-.117.742.703.703.742 1.758-.039 1.055-.742 1.758-.704.703-1.758.742h-3.594q.274.625.469 1.25l.195.781q.313 1.173-.234 2.149-.548.975-1.68 1.328M1.25 20.5q-.547 0-.898-.352Q0 19.798 0 19.25V10.5q0-.547.352-.898.35-.352.898-.352h2.5q.547 0 .898.352.352.35.352.898v8.75q0 .547-.352.898-.35.352-.898.352z' />
    </g>
    <defs>
      <clipPath id='0ca33ccb22aee4e3d89e5f43cce519c2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownLgBoldIcon);
export default ForwardRef;
