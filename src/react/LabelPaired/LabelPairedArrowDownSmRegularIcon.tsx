import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.2 16.738.386 11.926q-.274-.3 0-.602.3-.273.601 0l4.075 4.047V5.063q.027-.411.437-.438.41.027.438.438V15.37l4.074-4.047q.3-.273.601 0 .274.3 0 .602l-4.812 4.812q-.3.274-.602 0' />
    </g>
    <defs>
      <clipPath id='d063a0d3c6d62f1a0ceaf56f4ab0ab23__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownSmRegularIcon);
export default ForwardRef;
