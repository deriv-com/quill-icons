import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 10.5c0-1.781-.969-3.406-2.5-4.312a4.94 4.94 0 0 0-5 0A4.96 4.96 0 0 0 1.5 10.5c0 1.813.938 3.438 2.5 4.344a4.94 4.94 0 0 0 5 0c1.531-.906 2.5-2.531 2.5-4.344m-.969 5.125A6.55 6.55 0 0 1 6.5 17 6.495 6.495 0 0 1 0 10.5C0 6.938 2.906 4 6.5 4c3.563 0 6.5 2.938 6.5 6.5a6.6 6.6 0 0 1-1.406 4.063l4.187 4.156c.281.312.281.781 0 1.062-.312.313-.781.313-1.062 0z' />
    </g>
    <defs>
      <clipPath id='cf23913bfca2db0fa35ced147d5efe98__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchMdBoldIcon);
export default ForwardRef;
