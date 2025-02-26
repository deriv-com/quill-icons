import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 5.5h17.5c1.367 0 2.5 1.133 2.5 2.5v11.25c0 1.406-1.133 2.5-2.5 2.5h-6.875l.39 1.25H16.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-10c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.695l.43-1.25H2.75a2.47 2.47 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5M20.25 8H2.75v8.75h17.5z' />
    </g>
    <defs>
      <clipPath id='426a27a4ddb2b67eaf340a75bcc737f7__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopLgFillIcon);
export default ForwardRef;
