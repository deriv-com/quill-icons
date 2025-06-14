import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.406 18.188v-2.47c0-.468.125-.905.406-1.312.25-.406.563-.719 1-.937a11 11 0 0 1 2.22-.813c.75-.156 1.5-.25 2.28-.25h.72l.75.094a3.93 3.93 0 0 0 .374 2.063c.344.624.813 1.156 1.406 1.53v2.095zm11.625 1.593-1.125-1.093V15.28a2.57 2.57 0 0 1-1.312-.906 2.52 2.52 0 0 1-.5-1.562c0-.72.25-1.313.75-1.813s1.094-.75 1.812-.75c.719 0 1.313.25 1.813.75s.75 1.125.75 1.813a2.6 2.6 0 0 1-.438 1.468c-.312.406-.687.719-1.187.906l.906.938-1.125 1.094 1.125 1.093zM9.312 11.72a3.14 3.14 0 0 1-2.28-.938A3.14 3.14 0 0 1 6.093 8.5c0-.906.312-1.656.937-2.281a3.14 3.14 0 0 1 2.282-.938c.906 0 1.656.313 2.28.938.657.625.97 1.406.97 2.281s-.313 1.656-.97 2.281c-.624.625-1.374.938-2.28.938m5.344 1.469a.83.83 0 0 0 .688-.344.86.86 0 0 0 0-.781c-.156-.22-.406-.376-.688-.344-.281-.031-.531.125-.687.344a.86.86 0 0 0 0 .78.83.83 0 0 0 .687.345' />
    </g>
    <defs>
      <clipPath id='4552454901d599f3c36330d6979ba8f6__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyMdFillIcon);
export default ForwardRef;
