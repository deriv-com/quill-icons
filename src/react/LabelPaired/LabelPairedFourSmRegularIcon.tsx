import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourSmRegularIcon = (
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
      <path d='M5.008 5.254 1.398 12.5h6.727V7.688q.027-.411.438-.438.41.027.437.438V12.5h1.313q.41.027.437.438-.027.41-.437.437H9v3.063q-.027.41-.437.437-.411-.027-.438-.437v-3.063H.688a.44.44 0 0 1-.383-.191.47.47 0 0 1 0-.438l3.937-7.875q.192-.355.574-.191.356.219.192.574' />
    </g>
    <defs>
      <clipPath id='f206d27efe61ced8b99afb28e29f8847__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourSmRegularIcon);
export default ForwardRef;
