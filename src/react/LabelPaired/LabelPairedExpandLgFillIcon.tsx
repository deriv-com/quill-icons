import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandLgFillIcon = (
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
      <path d='M1.5 6.75h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V8c0-.664.547-1.25 1.25-1.25m1.25 12.5v2.5h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H1.5C.797 24.25.25 23.703.25 23v-3.75C.25 18.586.797 18 1.5 18c.664 0 1.25.586 1.25 1.25m10-12.5h3.75c.664 0 1.25.586 1.25 1.25v3.75c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5h-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25m5 12.5V23c0 .703-.586 1.25-1.25 1.25h-3.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.5v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='71883ad7ca5876ba92ef08a79b5f4f2b__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgFillIcon);
export default ForwardRef;
