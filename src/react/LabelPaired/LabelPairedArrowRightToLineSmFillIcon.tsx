import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineSmFillIcon = (
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
      <path d='M12.625 6.375v8.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-8.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m-3.773 5.004-3.5 3.5a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l1.995-2.024H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h4.867L4.121 7.879a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l3.5 3.5a.843.843 0 0 1 0 1.23' />
    </g>
    <defs>
      <clipPath id='4afdca126932f04bf9ec5cec10b2bfcf__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineSmFillIcon);
export default ForwardRef;
