import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.434 11.215 7.62 15.809q-.492.383-.93 0-.383-.492 0-.93l3.637-3.473H1.031q-.601-.054-.656-.656.054-.602.656-.656h9.297L6.718 6.62q-.41-.437-.027-.93.438-.383.93 0l4.813 4.594a.63.63 0 0 1 .191.465.63.63 0 0 1-.191.465' />
    </g>
    <defs>
      <clipPath id='c64fe44719894c9f5cc1c6709db5178c__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmBoldIcon);
export default ForwardRef;
