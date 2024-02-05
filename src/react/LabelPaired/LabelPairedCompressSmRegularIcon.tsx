import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressSmRegularIcon = (
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
      <path d='M4.75 5.063v3.5q-.027.41-.437.437h-3.5q-.411-.027-.438-.437.027-.411.438-.438h3.062V5.063q.027-.411.438-.438.41.027.437.438M.813 12.5h3.5q.41.027.437.438v3.5q-.027.41-.437.437-.411-.027-.438-.437v-3.063H.813q-.411-.027-.438-.437.027-.411.438-.438m8.312-7.437v3.062h3.063q.41.027.437.438-.027.41-.437.437h-3.5q-.411-.027-.438-.437v-3.5q.027-.411.438-.438.41.027.437.438M8.688 12.5h3.5q.41.027.437.438-.027.41-.437.437H9.125v3.063q-.027.41-.437.437-.411-.027-.438-.437v-3.5q.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='abe0302176634d90fba1e393fe6b0fdb__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmRegularIcon);
export default ForwardRef;
