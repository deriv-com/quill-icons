import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightLgBoldIcon = (
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
      <path d='M12.813 9.25q.858.078.937.938v9.375q-.079.858-.937.937-.86-.078-.938-.937v-7.11l-9.023 9.024q-.665.546-1.329 0-.546-.665 0-1.329l9.024-9.023h-7.11q-.859-.079-.937-.937.078-.86.938-.938z' />
    </g>
    <defs>
      <clipPath id='4ffa8bd731228e04__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgBoldIcon);
export default ForwardRef;
