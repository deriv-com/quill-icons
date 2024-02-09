import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardLgFillIcon = (
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
      <path d='M2.07 22.727q-.624.468-1.367.156Q.04 22.53 0 21.75V9.25q.039-.78.703-1.133.742-.312 1.367.156l6.68 5.586v3.281zM10 19.25v-10q.039-.78.703-1.133.742-.312 1.367.156l7.5 6.25q.43.39.43.977 0 .585-.43.977l-7.5 6.25q-.624.468-1.367.156-.664-.352-.703-1.133z' />
    </g>
    <defs>
      <clipPath id='a561062b7ad7105ca96009f2194e3135__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgFillIcon);
export default ForwardRef;
