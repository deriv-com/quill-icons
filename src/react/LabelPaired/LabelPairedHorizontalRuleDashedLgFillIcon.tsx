import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5C.547 16.75 0 16.203 0 15.5m6.64 0c0-.664.587-1.25 1.25-1.25h2.5c.704 0 1.25.586 1.25 1.25 0 .703-.546 1.25-1.25 1.25h-2.5c-.663 0-1.25-.547-1.25-1.25m6.68 0c0-.664.547-1.25 1.25-1.25h2.5c.703 0 1.25.586 1.25 1.25 0 .703-.547 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25m6.68 0c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='43bf2cbd8728e410c05b7e92dc337db4__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedLgFillIcon);
export default ForwardRef;
