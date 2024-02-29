import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonSmBoldIcon = (
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
      <path d='M4.215 6.457A4.7 4.7 0 0 0 2.3 8.18q-.71 1.148-.739 2.57.055 2.05 1.395 3.39 1.367 1.368 3.39 1.422.547 0 1.067-.109a6.08 6.08 0 0 1-2.953-2.215q-1.12-1.53-1.149-3.582 0-1.777.903-3.199M5.91 4.652q.082 0 .192-.027h.492q.136 0 .273.027.329.055.41.328.055.329-.218.493a1.1 1.1 0 0 0-.274.164q-.165.11-.328.246H6.43l-.055.054A4.9 4.9 0 0 0 5.09 7.579a4.7 4.7 0 0 0-.465 2.078q.054 2.051 1.395 3.39 1.34 1.368 3.39 1.423h.11q.218 0 .41-.028.165-.027.3-.027.33-.054.465.219.137.273-.082.52a2 2 0 0 0-.218.19q-.165.164-.383.302l-.055.054a.3.3 0 0 1-.082.055q-1.53 1.094-3.5 1.121-1.722-.027-3.09-.848a5.73 5.73 0 0 1-2.187-2.187q-.82-1.368-.848-3.09.054-2.488 1.64-4.184 1.587-1.695 4.02-1.914' />
    </g>
    <defs>
      <clipPath id='114bafdc326ae3e7b5f5bbc4a91b3260__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonSmBoldIcon);
export default ForwardRef;
