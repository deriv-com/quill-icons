import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineLgRegularIcon = (
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
      <path d='M1.25 7.375v13.75q.039.78.547 1.328.546.508 1.328.547h16.25q.585.039.625.625-.039.585-.625.625H3.125q-1.328-.04-2.227-.898-.858-.9-.898-2.227V7.375q.039-.585.625-.625.586.039.625.625m17.305 4.18L12.93 17.18q-.43.39-.86 0l-3.32-3.282-3.945 3.907q-.43.39-.86 0-.39-.43 0-.86L8.32 12.57q.43-.39.86 0l3.32 3.282 5.195-5.157q.43-.39.86 0 .39.43 0 .86' />
    </g>
    <defs>
      <clipPath id='e2e5e6dc85015412c360460d0d4be8ce__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgRegularIcon);
export default ForwardRef;
