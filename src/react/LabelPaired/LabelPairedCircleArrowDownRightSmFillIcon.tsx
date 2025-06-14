import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownRightSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75M5.25 13.813h4.129a.63.63 0 0 0 .656-.657V8.781a.65.65 0 0 0-.656-.656c-.356 0-.656.3-.656.656v2.817L5.03 7.906a.6.6 0 0 0-.902 0 .6.6 0 0 0 0 .903L7.82 12.5H5.25c-.383 0-.656.3-.656.656 0 .383.273.656.656.656' />
    </g>
    <defs>
      <clipPath id='ffcc3532af1254fbb4d1b5a8418326b5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightSmFillIcon);
export default ForwardRef;
