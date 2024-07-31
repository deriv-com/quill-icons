import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.25 8v13.75h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-7.5C.547 24.25 0 23.703 0 23c0-.664.547-1.25 1.25-1.25h2.5V10.344l-1.836 1.21c-.547.391-1.328.235-1.719-.35-.39-.587-.234-1.329.352-1.72l3.75-2.5c.39-.273.86-.273 1.289-.078.39.235.664.664.664 1.094' />
    </g>
    <defs>
      <clipPath id='e40a3a5de19c6de8feb54d4493d1ebaa__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneLgFillIcon);
export default ForwardRef;
