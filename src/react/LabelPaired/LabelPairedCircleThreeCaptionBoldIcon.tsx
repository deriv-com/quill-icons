import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-1.687-9h3c.21 0 .421.164.515.375a.59.59 0 0 1-.14.61l-1.196 1.1a1.96 1.96 0 0 1 1.758 1.946A1.97 1.97 0 0 1 6.258 12.5h-.633c-.727 0-1.36-.352-1.734-.96l-.07-.095c-.165-.258-.071-.61.187-.773s.61-.07.773.187l.07.094a.88.88 0 0 0 .774.445h.633a.88.88 0 0 0 .867-.867c0-.469-.398-.844-.867-.844H5.063c-.235.024-.446-.117-.54-.351-.07-.211-.023-.469.141-.61L5.86 7.626H4.313a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='98adde38405f97ee20635d969af068f8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeCaptionBoldIcon);
export default ForwardRef;
