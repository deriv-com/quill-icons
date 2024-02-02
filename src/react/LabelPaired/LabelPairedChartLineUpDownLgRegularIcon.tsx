import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownLgRegularIcon = (
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
      <path d='M1.25 7.375v13.75q.039.78.547 1.328.546.508 1.328.547h16.25q.585.039.625.625-.039.585-.625.625H3.125q-1.328-.04-2.227-.898-.858-.9-.898-2.227V7.375q.039-.585.625-.625.586.039.625.625M14.375 9.25q-.585-.039-.625-.625.039-.585.625-.625h3.75q.585.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-2.227l-5.82 5.782q-.43.39-.86 0l-2.695-2.657-3.32 3.282q-.43.39-.86 0-.39-.43 0-.86l3.75-3.75a.52.52 0 0 1 .43-.195.52.52 0 0 1 .43.195l2.695 2.657 5.352-5.352zm0 11.25q-.585-.039-.625-.625.039-.585.625-.625h2.227l-2.657-2.695.86-.86 2.695 2.657v-2.227q.039-.585.625-.625.585.039.625.625v3.75q-.039.585-.625.625z' />
    </g>
    <defs>
      <clipPath id='43939661e0df63c2d71572dbb9a4fdd6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownLgRegularIcon);
export default ForwardRef;
