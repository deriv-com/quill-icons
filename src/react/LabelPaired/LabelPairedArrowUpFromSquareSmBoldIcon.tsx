import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareSmBoldIcon = (
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
      <path d='m7.465 3.941 3.062 3.063q.384.465 0 .93-.465.383-.93 0l-1.94-1.942v6.727q-.056.601-.657.656-.602-.055-.656-.656V5.992L4.402 7.934q-.465.383-.93 0-.382-.465 0-.93L6.536 3.94q.465-.382.93 0m-5.496.684h.218q.602.054.657.656-.055.601-.656.657h-.22q-.6.054-.655.656v9.187q.054.602.656.656H12.03q.602-.054.656-.656V6.594q-.054-.601-.656-.657h-.219q-.601-.054-.656-.656.055-.601.656-.656h.22q.847.027 1.394.574.547.548.574 1.395v9.187q-.028.848-.574 1.395-.547.547-1.395.574H1.97q-.848-.027-1.395-.574Q.028 16.629 0 15.78V6.594q.028-.848.574-1.395.548-.546 1.395-.574' />
    </g>
    <defs>
      <clipPath id='73b32a559b9a6e82ce54be18a38b62fc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareSmBoldIcon);
export default ForwardRef;
