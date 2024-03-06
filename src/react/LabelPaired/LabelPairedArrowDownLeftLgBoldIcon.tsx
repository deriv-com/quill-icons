import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftLgBoldIcon = (
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
      <path d='M2.188 21.75q-.86-.079-.938-.937v-9.375q.078-.86.938-.938.859.078.937.938v7.109l9.023-9.024q.664-.546 1.329 0 .546.665 0 1.329l-9.024 9.023h7.11q.858.078.937.938-.079.858-.937.937z' />
    </g>
    <defs>
      <clipPath id='0bf7c65fd244239a5419f6f62a74c1f6__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftLgBoldIcon);
export default ForwardRef;
