import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenSmFillIcon = (
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
      <path d='M9.898 4.297a1.766 1.766 0 0 1 2.489 0l1.066 1.066a1.766 1.766 0 0 1 0 2.489l-1.312 1.312L8.586 5.61zM7.957 6.238l3.555 3.555-6.371 6.371a2.4 2.4 0 0 1-1.012.602L.82 17.75a.62.62 0 0 1-.629-.191.56.56 0 0 1-.164-.63l.957-3.308c.11-.383.329-.738.602-1.012z' />
    </g>
    <defs>
      <clipPath id='85dd9c21e19acf8b2808a5048d2808de__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenSmFillIcon);
export default ForwardRef;
