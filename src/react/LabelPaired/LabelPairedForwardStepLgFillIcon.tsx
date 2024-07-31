import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.281 22.727c-.351.312-.898.39-1.328.156-.43-.195-.703-.625-.703-1.133V9.25c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l7.5 6.25.469.352V9.25c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v12.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-5.664l-.469.39z' />
    </g>
    <defs>
      <clipPath id='72ffe2481c1014b448eb7da33c049a86__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgFillIcon);
export default ForwardRef;
