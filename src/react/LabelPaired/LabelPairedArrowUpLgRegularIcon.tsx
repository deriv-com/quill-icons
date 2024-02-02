import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLgRegularIcon = (
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
      <path d='m7.93 6.945 6.875 6.875q.39.43 0 .86-.43.39-.86 0l-5.82-5.782v14.727q-.039.585-.625.625-.585-.039-.625-.625V8.898l-5.82 5.782q-.43.39-.86 0-.39-.43 0-.86L7.07 6.945q.43-.39.86 0' />
    </g>
    <defs>
      <clipPath id='b4463e860aaff300__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLgRegularIcon);
export default ForwardRef;
