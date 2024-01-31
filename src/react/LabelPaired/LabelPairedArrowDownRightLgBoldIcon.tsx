import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightLgBoldIcon = (
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
      <path d='M12.813 21.75H3.438q-.86-.079-.938-.937.078-.86.938-.938h7.109l-9.024-9.023q-.546-.664 0-1.329.665-.546 1.329 0l9.023 9.024v-7.11q.078-.858.938-.937.858.078.937.938v9.375q-.079.858-.937.937' />
    </g>
    <defs>
      <clipPath id='d875da95718b3847__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightLgBoldIcon);
export default ForwardRef;
