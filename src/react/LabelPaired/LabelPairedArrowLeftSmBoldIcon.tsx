import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.566 11.215a.63.63 0 0 1-.191-.465q0-.273.191-.465L5.38 5.691q.492-.383.93 0 .383.493-.028.93l-3.61 3.473h9.298q.601.054.656.656-.055.602-.656.656H2.672l3.637 3.473q.383.437 0 .93-.438.383-.903 0L.594 11.215z' />
    </g>
    <defs>
      <clipPath id='d34a07b44bcce26369434cdcb20e0808__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmBoldIcon);
export default ForwardRef;
