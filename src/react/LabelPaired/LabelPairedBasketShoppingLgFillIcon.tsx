import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingLgFillIcon = (
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
      <path d='M10.133 6.906 6.93 13h9.101l-3.203-6.094c-.234-.468-.039-1.054.39-1.289.47-.234 1.055-.039 1.29.39L18.14 13H21.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25l-2.031 8.125c-.274 1.094-1.29 1.875-2.422 1.875H5.953c-1.172 0-2.148-.781-2.46-1.875L1.5 15.5c-.703 0-1.25-.547-1.25-1.25C.25 13.586.797 13 1.5 13h3.32l3.633-6.992c.235-.43.82-.625 1.29-.39.429.234.624.82.39 1.288M7.75 17.375c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625zm3.75-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m5 .625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625z' />
    </g>
    <defs>
      <clipPath id='64f2f9751b5c6a4944e757e8b3608c72__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingLgFillIcon);
export default ForwardRef;
