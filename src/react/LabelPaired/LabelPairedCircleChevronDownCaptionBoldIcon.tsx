import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleChevronDownCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5M3.164 9.148a.513.513 0 0 1 0-.773c.211-.234.563-.234.797 0L6 10.415l2.04-2.04c.21-.234.562-.234.796 0 .21.21.21.563 0 .773l-2.461 2.438a.513.513 0 0 1-.773 0z' />
    </g>
    <defs>
      <clipPath id='50b740c40948f8c7e193b5e06642610b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronDownCaptionBoldIcon);
export default ForwardRef;
