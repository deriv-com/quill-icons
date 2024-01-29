import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftSmRegularIcon = (
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
      <path d='m.512 10.45 4.812-4.813q.3-.274.602 0 .273.3 0 .601l-4.047 4.074h10.308q.411.028.438.438-.027.41-.437.438H1.877l4.048 4.074q.273.3 0 .601-.3.275-.602 0L.512 11.051q-.274-.3 0-.602' />
    </g>
    <defs>
      <clipPath id='e083bc8680788780ea87219aa1578708__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmRegularIcon);
export default ForwardRef;
