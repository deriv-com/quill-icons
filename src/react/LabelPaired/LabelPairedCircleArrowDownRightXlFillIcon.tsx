import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownRightXlFillIcon = (
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
      <path d='M12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6M9 23.25h7.078c.656 0 1.125-.469 1.125-1.125v-7.5a1.11 1.11 0 0 0-1.125-1.125 1.14 1.14 0 0 0-1.125 1.125v4.828l-6.328-6.328a1.026 1.026 0 0 0-1.547 0 1.027 1.027 0 0 0 0 1.547L13.406 21H9a1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='9170078d58dfdecdf77e3cee18337f18__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightXlFillIcon);
export default ForwardRef;
