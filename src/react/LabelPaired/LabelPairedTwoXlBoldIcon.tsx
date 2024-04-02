import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.89 9.75c-1.265 0-2.437.516-3.327 1.406l-1.641 1.64c-.469.47-1.172.47-1.594 0a1.027 1.027 0 0 1 0-1.546l1.64-1.687C3.282 8.25 5.064 7.5 6.892 7.5h.328c3.656 0 6.656 3 6.656 6.656 0 1.828-.797 3.563-2.11 4.828L3.938 26.25h9.938c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125c-.469 0-.89-.281-1.078-.703-.14-.422-.047-.89.281-1.219l9.89-9.234c.891-.844 1.407-2.016 1.407-3.188A4.4 4.4 0 0 0 7.219 9.75z' />
    </g>
    <defs>
      <clipPath id='c1e7eda8863b301c43266d88e979d468__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoXlBoldIcon);
export default ForwardRef;
