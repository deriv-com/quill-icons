import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftLgRegularIcon = (
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
      <path d='M1.875 21.75q-.585-.039-.625-.625v-8.75q.039-.585.625-.625.586.039.625.625v7.227L12.695 9.445q.43-.39.86 0 .39.43 0 .86L3.398 20.5h7.227q.585.039.625.625-.039.585-.625.625z' />
    </g>
    <defs>
      <clipPath id='22acf811f7fdf3970467664c0bd4f5b4__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftLgRegularIcon);
export default ForwardRef;
