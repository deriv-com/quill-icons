import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartCandlestickBoldIcon = (
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
    <path d='M7.875 8.688v13.75q.078.858.938.937h16.25q.858.078.937.938-.079.858-.937.937H8.813q-1.212-.04-1.993-.82-.78-.781-.82-1.992V8.688q.078-.86.938-.938.859.078.937.938M18.5 8.375v1.875q.547 0 .898.352.352.35.352.898v3.75q0 .547-.352.898-.35.352-.898.352v1.875q-.039.585-.625.625-.585-.039-.625-.625V16.5q-.547 0-.898-.352-.352-.35-.352-.898V11.5q0-.547.352-.898.35-.352.898-.352V8.375q.039-.585.625-.625.585.039.625.625M21 15.25q0-.547.352-.898.35-.352.898-.352v-1.875q.039-.585.625-.625.585.039.625.625V14q.547 0 .898.352.352.35.352.898v2.5q0 .547-.352.898-.35.352-.898.352v1.875q-.039.585-.625.625-.585-.039-.625-.625V19q-.547 0-.898-.352-.352-.35-.352-.898zm-8.75-3.75V9.625q.039-.585.625-.625.585.039.625.625V11.5q.547 0 .898.352.352.35.352.898v5q0 .547-.352.898-.35.352-.898.352v1.875q-.039.585-.625.625-.585-.039-.625-.625V19q-.547 0-.898-.352-.352-.35-.352-.898v-5q0-.547.352-.898.35-.352.898-.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartCandlestickBoldIcon);
export default ForwardRef;
