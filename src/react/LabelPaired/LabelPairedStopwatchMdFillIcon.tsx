import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 4h3c.531 0 1 .469 1 1 0 .563-.469 1-1 1H8v1.094a6.5 6.5 0 0 1 3.094 1.375l.687-.656a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406l-.75.75C13.095 11 13.5 12.219 13.5 13.5c0 3.594-2.937 6.5-6.5 6.5a6.495 6.495 0 0 1-6.5-6.5A6.465 6.465 0 0 1 6 7.094V6h-.5c-.562 0-1-.437-1-1 0-.531.438-1 1-1m2.25 6A.76.76 0 0 0 7 9.25a.74.74 0 0 0-.75.75v4c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75z' />
    </g>
    <defs>
      <clipPath id='11a00ed24909c9595412885371df8b4a__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchMdFillIcon);
export default ForwardRef;
