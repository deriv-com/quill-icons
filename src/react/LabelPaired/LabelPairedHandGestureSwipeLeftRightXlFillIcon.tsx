import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 10.828A1.16 1.16 0 0 1 16.172 12v4.36c.234-.235.562-.376.937-.376.75 0 1.36.563 1.407 1.313.234-.235.562-.375.937-.375.75 0 1.36.562 1.406 1.312.235-.234.563-.375.938-.375.75 0 1.406.657 1.406 1.407v2.812a3.76 3.76 0 0 1-3.75 3.75h-3.469a4.7 4.7 0 0 1-3-1.078l-.14-.14c-.89-.704-1.36-1.782-1.36-2.907v-1.078c0-.562.235-1.078.704-1.453l.562-.469c.047-.047.094-.094.188-.094v1.594c0 .281.187.469.468.469a.47.47 0 0 0 .469-.469V12c0-.656.469-1.172 1.172-1.172zm7.781 4.64 2.532-2.53c.28-.282.28-.704 0-.938L22.64 9.281a.78.78 0 0 0-.985 0 .78.78 0 0 0 0 .985l1.547 1.5h-4.547c-.375 0-.656.328-.656.703a.64.64 0 0 0 .656.656h4.547l-1.36 1.36a.68.68 0 0 0 0 .984c.282.234.704.234.938 0m-15.61 0-2.484-2.53c-.28-.282-.28-.704 0-.938L7.36 9.281c.282-.234.704-.234.938 0a.68.68 0 0 1 0 .985l-1.5 1.5h4.547c.375 0 .656.328.656.703a.64.64 0 0 1-.656.656H6.797l1.36 1.36a.78.78 0 0 1 0 .984.78.78 0 0 1-.985 0' />
    </g>
    <defs>
      <clipPath id='856967b0d7708548fbd97c912a245669__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightXlFillIcon);
export default ForwardRef;
