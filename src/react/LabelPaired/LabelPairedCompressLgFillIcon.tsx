import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressLgFillIcon = (
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
      <path d='M6.5 8v3.75c0 .703-.586 1.25-1.25 1.25H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25H4V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-5 10h3.75c.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25C4.547 24.25 4 23.703 4 23v-2.5H1.5c-.703 0-1.25-.547-1.25-1.25C.25 18.586.797 18 1.5 18M14 8v2.5h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-3.75c-.703 0-1.25-.547-1.25-1.25V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-1.25 10h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H14V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-3.75c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='d6ef09233ef9867a440e8403cebff1ee__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressLgFillIcon);
export default ForwardRef;
