import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfSmFillIcon = (
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
      <path d='M0 5.5c0-.957.766-1.75 1.75-1.75h4.375v3.5c0 .492.383.875.875.875h3.5v3.938H4.813c-.985 0-1.75.792-1.75 1.75v3.937H1.75C.766 17.75 0 16.984 0 16zm10.5 1.75H7v-3.5zm-5.687 6.125h.875c.82 0 1.53.71 1.53 1.531 0 .848-.71 1.531-1.53 1.531H5.25v.875a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438m.875 2.188a.65.65 0 0 0 .656-.657c0-.355-.301-.656-.657-.656H5.25v1.313zm2.625-2.188h.874c.711 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.312 1.312h-.876a.43.43 0 0 1-.437-.437v-3.5a.45.45 0 0 1 .438-.438m.874 3.5a.45.45 0 0 0 .438-.437v-1.75a.47.47 0 0 0-.437-.438H8.75v2.625zm2.188-3.062a.45.45 0 0 1 .438-.438h1.312a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-.875v.875h.875a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.5' />
    </g>
    <defs>
      <clipPath id='38b84e0334bfb3416493ccbd347ad9cc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfSmFillIcon);
export default ForwardRef;
