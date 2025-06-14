import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandSmRegularIcon = (
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
      <path d='M4.313 4.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H1.25v3.063A.45.45 0 0 1 .813 9a.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438zM.374 12.938a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V16h3.063a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437zm11.813-8.313a.47.47 0 0 1 .437.438v3.5a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.5H8.688a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438zm-.438 8.313a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v3.5a.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h3.062z' />
    </g>
    <defs>
      <clipPath id='9b7b715a05ba9b2e32903d5074b84a21__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandSmRegularIcon);
export default ForwardRef;
