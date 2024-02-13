import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 13q.04 2.109 1.445 3.555Q4.391 17.96 6.5 18q2.109-.04 3.516-1.406 1.367-1.407 1.484-3.477V13q-.04-2.109-1.445-3.555Q8.609 8.04 6.5 8q-2.109.04-3.555 1.445Q1.54 10.891 1.5 13m6.29 6.133a7 7 0 0 1-1.29.117q-2.655-.078-4.414-1.836T.25 13q.078-2.656 1.836-4.414T6.5 6.75q2.656.078 4.414 1.836T12.75 13v.234q-.117 2.266-1.602 4.024l-6.054 6.797q-.43.39-.899.039-.39-.43-.039-.899z' />
    </g>
    <defs>
      <clipPath id='3a4e84d22c0319f541f3c9845263fbcb__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineLgRegularIcon);
export default ForwardRef;
