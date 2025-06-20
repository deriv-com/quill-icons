import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillLgRegularIcon = (
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
      <path d='M19 9.25c0 1.406 1.094 2.5 2.5 2.5V10.5c0-.664-.586-1.25-1.25-1.25zm-1.25 0H5.25C5.25 11.32 3.57 13 1.5 13v5c2.07 0 3.75 1.68 3.75 3.75h12.5c0-2.07 1.68-3.75 3.75-3.75v-5c-2.07 0-3.75-1.68-3.75-3.75M1.5 20.5c0 .703.547 1.25 1.25 1.25H4c0-1.367-1.133-2.5-2.5-2.5zm20-1.25a2.49 2.49 0 0 0-2.5 2.5h1.25c.664 0 1.25-.547 1.25-1.25zm-18.75-10c-.703 0-1.25.586-1.25 1.25v1.25c1.367 0 2.5-1.094 2.5-2.5zM.25 10.5C.25 9.133 1.344 8 2.75 8h17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5zm13.75 5c0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0C9.469 13.82 9 14.64 9 15.5a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188m-6.25 0c0-1.328.703-2.54 1.875-3.242 1.133-.664 2.578-.664 3.75 0 1.133.703 1.875 1.914 1.875 3.242 0 1.367-.742 2.578-1.875 3.281-1.172.664-2.617.664-3.75 0-1.172-.703-1.875-1.914-1.875-3.281' />
    </g>
    <defs>
      <clipPath id='f9f0b44e9ea6f27e07c04969d37e9e9c__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillLgRegularIcon);
export default ForwardRef;
