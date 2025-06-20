import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.75 6h5.813c.562 0 1.171.281 1.593.703l3.14 3.14c.423.423.704 1.032.704 1.595V21.75A2.25 2.25 0 0 1 18.75 24h-9a2.22 2.22 0 0 1-2.25-2.25V8.25A2.25 2.25 0 0 1 9.75 6m-7.5 6H6v3H3v12h9v-1.5h3v2.25A2.25 2.25 0 0 1 12.75 30H2.25A2.22 2.22 0 0 1 0 27.75v-13.5A2.25 2.25 0 0 1 2.25 12' />
    </g>
    <defs>
      <clipPath id='19e2a2cbed03f14a4abdea6e97e42ad1__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyXlFillIcon);
export default ForwardRef;
