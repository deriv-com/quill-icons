import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowRightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m13.172 6.047 5.25-5.25c.422-.422.422-1.125 0-1.594L13.172 12c-.469-.469-1.172-.469-1.594 0a1.027 1.027 0 0 0 0 1.547l3.328 3.328H6.375A1.11 1.11 0 0 0 5.25 18c0 .656.469 1.125 1.125 1.125l8.531.047-3.328 3.328a1.027 1.027 0 0 0 0 1.547c.422.469 1.125.469 1.594 0' />
    </g>
    <defs>
      <clipPath id='f543539a53aa4c99d90cf7669d124aee__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowRightXlFillIcon);
export default ForwardRef;
