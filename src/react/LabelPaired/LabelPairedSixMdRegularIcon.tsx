import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 14c0-2.187-1.812-4-4-4s-3.969 1.75-4 3.906V14c0 2.219 1.781 4 4 4 2.188 0 4-1.781 4-4M3.938 9.125C4.28 9.063 4.625 9 5 9c2.75 0 5 2.25 5 5 0 2.781-2.25 5-5 5-2.781 0-5-2.219-5-5v-.156a5.08 5.08 0 0 1 1.281-3.219l4.844-5.437c.156-.22.5-.22.688-.032.218.157.218.5.03.688z' />
    </g>
    <defs>
      <clipPath id='14e5adbc25d50f501bcc1932dc73009f__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixMdRegularIcon);
export default ForwardRef;
