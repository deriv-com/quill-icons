import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeLgRegularIcon = (
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
      <path d='M0 7.375q.039-.585.625-.625.586.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625zm2.5 0q.039-.585.625-.625.586.039.625.625v16.25q-.039.585-.625.625-.586-.039-.625-.625zm3.125-.625q.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625V7.375q.039-.585.625-.625m3.125.625q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625zm3.125-.625q.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625V7.375q.039-.585.625-.625M15 7.375q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625zm4.375-.625q.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625V7.375q.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='7e2e9810498d9079__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgRegularIcon);
export default ForwardRef;
