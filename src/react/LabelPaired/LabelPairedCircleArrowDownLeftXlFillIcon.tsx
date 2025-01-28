import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownLeftXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m3-6.75a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 15 21h-4.453l6.375-6.328a1.103 1.103 0 0 0 0-1.547c-.469-.469-1.172-.469-1.594 0L9 19.453v-4.828A1.14 1.14 0 0 0 7.875 13.5a1.11 1.11 0 0 0-1.125 1.125v7.5c0 .656.469 1.125 1.125 1.125z' />
    </g>
    <defs>
      <clipPath id='b8e6da0aa95c9e9b96b02780f1d317e4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownLeftXlFillIcon);
export default ForwardRef;
