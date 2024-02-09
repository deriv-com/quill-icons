import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 21.75h-8.75q-.586-.039-.625-.625.039-.585.625-.625h7.227L1.445 10.305q-.39-.43 0-.86.43-.39.86 0L12.5 19.602v-7.227q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625' />
    </g>
    <defs>
      <clipPath id='e31bba54040c1730c9a42765750bfc54__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightLgRegularIcon);
export default ForwardRef;
