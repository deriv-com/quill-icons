import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 8v2h7.5c1.375 0 2.5 1.125 2.5 2.5v5c0 1.406-1.125 2.5-2.5 2.5h-9A2.47 2.47 0 0 1 0 17.5v-5C0 11.125 1.094 10 2.5 10H3V8c0-2.187 1.781-4 4-4a3.965 3.965 0 0 1 3.813 2.875c.093.25-.063.531-.344.625-.25.063-.531-.062-.594-.344C9.5 5.906 8.344 5 7 5a3 3 0 0 0-3 3m-3 4.5v5c0 .844.656 1.5 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-5c0-.812-.687-1.5-1.5-1.5h-9A1.5 1.5 0 0 0 1 12.5' />
    </g>
    <defs>
      <clipPath id='b15b989dd380907617373cad04ecf69d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockMdRegularIcon);
export default ForwardRef;
