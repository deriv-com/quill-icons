import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.336 21.164-7.5-7.5q-.547-.664 0-1.328.664-.548 1.328 0L10 19.172l6.836-6.836q.664-.548 1.328 0 .547.664 0 1.328l-7.5 7.5q-.664.547-1.328 0' />
    </g>
    <defs>
      <clipPath id='1e54ae500a8872d26e3e2898ea618269__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownLgBoldIcon);
export default ForwardRef;
