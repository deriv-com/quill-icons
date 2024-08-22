import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.25 7.375H2.75A.64.64 0 0 0 2.125 8v7.5h18.75V8c0-.312-.312-.625-.625-.625m2.5 8.125v3.75c0 1.406-1.133 2.5-2.5 2.5h-5.781l.312 1.875h2.031a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H6.188c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938H8.18l.312-1.875H2.75a2.47 2.47 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5h17.5c1.367 0 2.5 1.133 2.5 2.5zM2.125 17.375v1.875c0 .352.273.625.625.625h17.5a.64.64 0 0 0 .625-.625v-1.875zm7.969 6.25h2.773l-.312-1.875h-2.149z' />
    </g>
    <defs>
      <clipPath id='82e51e867ef3ab28a39e174511d2dbc5__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopLgBoldIcon);
export default ForwardRef;
