import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchMdBoldIcon = (
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
      <path d='M4.5 4.75A.74.74 0 0 1 5.25 4h3.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1v1.563a6.33 6.33 0 0 1 3.531 1.593l.938-.937a.736.736 0 0 1 1.031 0c.313.312.313.781 0 1.062l-.969.969c.75 1.063 1.219 2.375 1.219 3.75 0 3.594-2.937 6.5-6.5 6.5a6.495 6.495 0 0 1-6.5-6.5c0-3.312 2.5-6.062 5.75-6.437V5.5h-1a.72.72 0 0 1-.75-.75M7 18.5a4.96 4.96 0 0 0 4.313-2.5 4.94 4.94 0 0 0 0-5C10.406 9.469 8.78 8.5 7 8.5c-1.812 0-3.437.969-4.344 2.5a4.94 4.94 0 0 0 0 5A4.97 4.97 0 0 0 7 18.5m.75-7.75V14a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3.25A.74.74 0 0 1 7 10a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='df237c9980d5fb1b08f6e9d72db47f27__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchMdBoldIcon);
export default ForwardRef;
