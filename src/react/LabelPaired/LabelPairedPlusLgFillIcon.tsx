import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusLgFillIcon = (
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
      <path d='M10.25 8.625v5.625h5.625c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H10.25v5.625c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V16.75H2.125c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25H7.75V8.625c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='de47d53366843dfa7fabe8f386225512__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgFillIcon);
export default ForwardRef;
