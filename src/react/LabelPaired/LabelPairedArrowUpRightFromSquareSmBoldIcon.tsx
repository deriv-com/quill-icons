import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareSmBoldIcon = (
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
      <path d='M8.313 4.406q.054-.601.656-.656h4.375q.601.054.656.656v4.375q-.055.602-.656.656-.602-.054-.656-.656V5.992L6.59 12.09q-.465.383-.93 0-.383-.465 0-.93l6.098-6.097h-2.79q-.6-.056-.655-.657m-6.344.219h3.5q.601.054.656.656-.054.601-.656.657h-3.5q-.602.054-.657.656v9.187q.055.602.657.656h9.187q.602-.054.656-.656v-3.5q.056-.601.657-.656.601.055.656.656v3.5q-.028.848-.574 1.395-.547.547-1.395.574H1.97q-.848-.027-1.395-.574Q.028 16.629 0 15.78V6.594q.028-.848.574-1.395.548-.546 1.395-.574' />
    </g>
    <defs>
      <clipPath id='461418eeccf1d34febf63526efec78c5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareSmBoldIcon);
export default ForwardRef;
