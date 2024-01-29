import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickLgBoldIcon = (
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
      <path d='M1.875 7.688v13.75q.078.858.938.937h16.25q.858.078.937.938-.078.858-.937.937H2.813Q1.6 24.21.82 23.43q-.78-.781-.82-1.992V7.688q.078-.86.938-.938.859.078.937.938M12.5 7.375V9.25q.547 0 .898.352.352.35.352.898v3.75q0 .547-.352.898-.35.352-.898.352v1.875q-.039.585-.625.625-.585-.039-.625-.625V15.5q-.547 0-.898-.352-.352-.35-.352-.898V10.5q0-.547.352-.898.35-.352.898-.352V7.375q.039-.585.625-.625.585.039.625.625M15 14.25q0-.547.352-.898.35-.352.898-.352v-1.875q.039-.585.625-.625.585.039.625.625V13q.547 0 .898.352.352.35.352.898v2.5q0 .547-.352.898-.35.352-.898.352v1.875q-.039.585-.625.625-.585-.039-.625-.625V18q-.547 0-.898-.352-.352-.35-.352-.898zM6.25 10.5V8.625q.039-.585.625-.625.585.039.625.625V10.5q.547 0 .898.352.352.35.352.898v5q0 .547-.352.898Q8.048 18 7.5 18v1.875q-.039.585-.625.625-.585-.039-.625-.625V18q-.547 0-.898-.352Q5 17.298 5 16.75v-5q0-.547.352-.898.35-.352.898-.352' />
    </g>
    <defs>
      <clipPath id='ef81987b82c7bdf63f8b82882d3db7dc__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickLgBoldIcon);
export default ForwardRef;
