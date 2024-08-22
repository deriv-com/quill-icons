import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfSmBoldIcon = (
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
      <path d='M1.75 16.438h1.313v1.312H1.75C.766 17.75 0 16.984 0 16V5.5c0-.957.766-1.75 1.75-1.75h4.512c.465 0 .902.191 1.23.52L9.98 6.758c.329.328.52.765.52 1.23v4.074H9.188V8.126H7a.864.864 0 0 1-.875-.875V5.063H1.75a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438m3.063-3.063h.875c.82 0 1.53.71 1.53 1.531 0 .848-.71 1.531-1.53 1.531H5.25v.875a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438m.875 2.188a.65.65 0 0 0 .656-.657c0-.355-.301-.656-.657-.656H5.25v1.313zm2.625-2.188h.874c.711 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.312 1.312h-.876a.43.43 0 0 1-.437-.437v-3.5a.45.45 0 0 1 .438-.438m.874 3.5a.45.45 0 0 0 .438-.437v-1.75a.47.47 0 0 0-.437-.438H8.75v2.625zm2.188-3.062a.45.45 0 0 1 .438-.438h1.312a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-.875v.875h.875a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.5' />
    </g>
    <defs>
      <clipPath id='637b17682a9a5b2d0d6d3c0a315c6c5e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfSmBoldIcon);
export default ForwardRef;
