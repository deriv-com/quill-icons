import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankLgRegularIcon = (
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
      <path d='m10.313 5.578 9.062 5.156q.585.352.625 1.055 0 .508-.352.86-.35.351-.859.351H1.21q-.507 0-.858-.352A1.17 1.17 0 0 1 0 11.79q.039-.703.625-1.055l9.063-5.156a.66.66 0 0 1 .624 0m1.68 6.172h6.679L10 6.828 1.328 11.75h6.68a2.2 2.2 0 0 1-.195-.937q.039-.938.625-1.563.624-.585 1.562-.625.938.039 1.563.625.585.625.624 1.563 0 .507-.195.937M10 9.875q-.86.078-.937.938.078.858.937.937.859-.079.938-.937-.079-.86-.938-.938M2.5 19.25v-5h1.25v5h3.125v-5h1.25v5h3.75v-5h1.25v5h3.125v-5h1.25v5q.585.039.625.625-.039.585-.625.625h-15q-.585-.039-.625-.625.039-.585.625-.625m-.937 2.5h16.875q.585.039.625.625-.04.585-.625.625H1.563q-.587-.039-.625-.625.039-.585.625-.625m-.938 2.5h18.75q.585.039.625.625-.039.585-.625.625H.625Q.04 25.461 0 24.875q.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='1cd46754d1f5513a078e845f2361243d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankLgRegularIcon);
export default ForwardRef;
