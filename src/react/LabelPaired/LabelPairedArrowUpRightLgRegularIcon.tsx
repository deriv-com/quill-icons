import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightLgRegularIcon = (
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
      <path d='M13.125 9.25q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-7.227L2.305 21.555q-.43.39-.86 0-.39-.43 0-.86L11.602 10.5H4.375q-.586-.039-.625-.625.039-.585.625-.625z' />
    </g>
    <defs>
      <clipPath id='d0219e9ba332f18704c86436d6cc967a__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgRegularIcon);
export default ForwardRef;
