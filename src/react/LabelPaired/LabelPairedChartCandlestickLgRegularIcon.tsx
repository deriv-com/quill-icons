import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickLgRegularIcon = (
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
      <path d='M1.25 7.375v13.75q.039.78.547 1.328.546.508 1.328.547h16.25q.585.039.625.625-.039.585-.625.625H3.125q-1.328-.04-2.227-.898-.858-.9-.898-2.227V7.375q.039-.585.625-.625.586.039.625.625m11.25 0V9.29q.547.116.898.546.352.39.352.976v3.126q-.078 1.21-1.25 1.523v1.914q-.039.585-.625.625-.585-.039-.625-.625V15.46a1.55 1.55 0 0 1-.898-.546q-.352-.39-.352-.976v-3.126q.078-1.21 1.25-1.523V7.375q.039-.585.625-.625.585.039.625.625M6.875 8q.585.039.625.625v1.915q.547.116.898.546.352.39.352.976v4.376q-.078 1.21-1.25 1.523v1.914q-.039.585-.625.625-.585-.039-.625-.625V17.96a1.55 1.55 0 0 1-.898-.546Q5 17.024 5 16.437v-4.375q.078-1.21 1.25-1.523V8.625q.039-.585.625-.625m5.625 2.813q-.039-.274-.312-.313h-.626q-.273.039-.312.313v3.124q.039.274.313.313h.624q.274-.039.313-.312zm4.063 3.437q-.274.039-.313.313v1.874q.039.274.313.313h.625q.273-.039.312-.312v-1.875q-.039-.274-.312-.313zM16.25 13v-1.875q.039-.585.625-.625.585.039.625.625v1.915q.547.116.898.546.352.39.352.976v1.876q-.078 1.21-1.25 1.523v1.914q-.039.585-.625.625-.585-.039-.625-.625V17.96a1.55 1.55 0 0 1-.898-.546q-.352-.39-.352-.977v-1.875q.078-1.21 1.25-1.523zm-9.062-1.25h-.625q-.274.039-.313.313v4.374q.039.274.313.313h.625q.273-.039.312-.312v-4.375q-.039-.274-.312-.313' />
    </g>
    <defs>
      <clipPath id='3b0d41749dc2e7e8643e57af82e44ca6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickLgRegularIcon);
export default ForwardRef;
