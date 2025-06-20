import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopLgBoldIcon = (
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
      <path d='M20 8.625H5a.64.64 0 0 0-.625.625V18H2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5V18h-1.875V9.25c0-.312-.312-.625-.625-.625M3.75 22.375h17.5c.781 0 1.484-.508 1.758-1.25H1.953c.274.742.977 1.25 1.797 1.25M0 20.5c0-.664.547-1.25 1.25-1.25h22.5c.664 0 1.25.586 1.25 1.25 0 2.07-1.68 3.75-3.75 3.75H3.75C1.68 24.25 0 22.57 0 20.5' />
    </g>
    <defs>
      <clipPath id='e365dfd4f1765f6ca90aaa4088ee7fb1__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopLgBoldIcon);
export default ForwardRef;
