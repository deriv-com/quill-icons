import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.219 6.375q.601.054.656.656v6.563q-.054.601-.656.656-.602-.055-.656-.656V8.617l-6.317 6.317q-.465.383-.93 0-.383-.465 0-.93l6.317-6.316H2.656Q2.055 7.632 2 7.03q.054-.601.656-.656z' />
    </g>
    <defs>
      <clipPath id='133e4f327bcb56c9fa8d3077b65407ab__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmBoldIcon);
export default ForwardRef;
