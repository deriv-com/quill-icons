import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingLgBoldIcon = (
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
      <path d='M9.742 5.617c.43.235.625.82.39 1.29L6.93 13h9.101l-3.203-6.094c-.234-.468-.039-1.054.39-1.289.47-.234 1.055-.039 1.29.39L18.14 13h3.672a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.782l-2.187 8.75c-.274 1.094-1.29 1.875-2.422 1.875H6.578c-1.172 0-2.148-.781-2.46-1.875l-2.15-8.75h-.78c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938H4.82l3.633-6.992c.235-.43.82-.625 1.29-.39m-5.86 9.258 2.071 8.281a.63.63 0 0 0 .625.469h9.844a.62.62 0 0 0 .586-.469l2.07-8.281zM9 17.688v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m2.5-.938a.95.95 0 0 1 .938.938v3.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.125c0-.508.39-.938.937-.938m4.375.938v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' />
    </g>
    <defs>
      <clipPath id='a51272d292ff130b6e075b1705ca733c__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingLgBoldIcon);
export default ForwardRef;
