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
      <path d='M4.75 5.063v3.5A.45.45 0 0 1 4.313 9h-3.5a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h3.062V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438M.813 12.5h3.5a.47.47 0 0 1 .437.438v3.5a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.063H.813a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438m8.312-7.437v3.062h3.063a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438M8.688 12.5h3.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H9.125v3.063a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='8226935c6a6abaf0a14c9ac85323e914__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmRegularIcon);
export default ForwardRef;
