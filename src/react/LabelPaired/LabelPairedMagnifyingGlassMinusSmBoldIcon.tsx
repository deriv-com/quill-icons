import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusSmBoldIcon = (
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
      <path d='M5.688 5.063A4.41 4.41 0 0 0 1.886 7.25a4.32 4.32 0 0 0 0 4.375 4.35 4.35 0 0 0 3.8 2.188c1.56 0 2.981-.82 3.774-2.188a4.32 4.32 0 0 0 0-4.375c-.793-1.34-2.215-2.187-3.774-2.187m0 10.062A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688 0 1.34-.465 2.57-1.23 3.554l3.636 3.664a.6.6 0 0 1 0 .903.6.6 0 0 1-.902 0l-3.664-3.637a5.73 5.73 0 0 1-3.527 1.203m-1.97-6.344h3.938c.356 0 .657.301.657.656 0 .383-.301.657-.657.657H3.72a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' />
    </g>
    <defs>
      <clipPath id='8dc21b41470542b86edfdc57df914fca__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusSmBoldIcon);
export default ForwardRef;
