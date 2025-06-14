import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 9.25a.64.64 0 0 0-.625.625v11.25c0 .352.273.625.625.625H4a.64.64 0 0 0 .625-.625V9.875c0-.312-.312-.625-.625-.625zM.25 9.875C.25 8.859 1.07 8 2.125 8H4c1.016 0 1.875.86 1.875 1.875v11.25C5.875 22.18 5.015 23 4 23H2.125A1.85 1.85 0 0 1 .25 21.125zM9 9.25a.64.64 0 0 0-.625.625v11.25c0 .352.273.625.625.625h1.875a.64.64 0 0 0 .625-.625V9.875c0-.312-.312-.625-.625-.625zm-1.875.625C7.125 8.859 7.945 8 9 8h1.875c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875H9a1.85 1.85 0 0 1-1.875-1.875z' />
    </g>
    <defs>
      <clipPath id='87092da744b619e2e52f186857cc570b__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgRegularIcon);
export default ForwardRef;
