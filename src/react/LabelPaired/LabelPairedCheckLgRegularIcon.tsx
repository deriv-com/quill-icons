import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.555 9.445a.66.66 0 0 1 0 .899L6.93 20.969a.66.66 0 0 1-.899 0L.406 15.344a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L6.5 19.641 16.656 9.445a.66.66 0 0 1 .899 0' />
    </g>
    <defs>
      <clipPath id='c9a050b11ef38afa5794d9b2cb46b582__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckLgRegularIcon);
export default ForwardRef;
