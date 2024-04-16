import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeSmBoldIcon = (
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
      <path d='M7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m-.219-7L3.5 8.945a.87.87 0 0 1 .875-.82h5.25c.438 0 .82.355.848.82L7.19 10.75a.5.5 0 0 1-.191.055.5.5 0 0 1-.219-.055m.82.766L10.5 9.93v2.57c0 .492-.41.875-.875.875h-5.25A.864.864 0 0 1 3.5 12.5V9.93l2.871 1.586c.191.109.41.164.629.164.191 0 .41-.055.602-.164' />
    </g>
    <defs>
      <clipPath id='ab843a6b2399414065d2a8ea9629f974__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeSmBoldIcon);
export default ForwardRef;
