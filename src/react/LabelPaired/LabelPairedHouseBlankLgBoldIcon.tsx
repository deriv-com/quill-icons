import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankLgBoldIcon = (
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
      <path d='m12.086 5.734 10.312 8.75c.391.352.43.938.118 1.329a.974.974 0 0 1-1.328.117l-.938-.82v7.265a3.11 3.11 0 0 1-3.125 3.125H5.875c-1.758 0-3.125-1.367-3.125-3.125v-7.266l-.977.82a.974.974 0 0 1-1.328-.117.974.974 0 0 1 .118-1.328l10.312-8.75a.996.996 0 0 1 1.21 0m6.289 7.774L11.5 7.688l-6.875 5.82v8.867c0 .703.547 1.25 1.25 1.25h11.25c.664 0 1.25-.547 1.25-1.25z' />
    </g>
    <defs>
      <clipPath id='e27eeeb35f384ccac9082ce5b1e80d2e__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankLgBoldIcon);
export default ForwardRef;
