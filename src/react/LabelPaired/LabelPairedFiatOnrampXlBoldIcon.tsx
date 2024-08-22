import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.766 8.25c-1.407.047-2.72.797-3.422 2.016a3.94 3.94 0 0 0 0 3.937 3.96 3.96 0 0 0 3.422 1.969c1.406 0 2.718-.75 3.422-1.969a3.94 3.94 0 0 0 0-3.937c-.704-1.22-2.016-2.016-3.422-2.016m3.984 8.766a6.25 6.25 0 0 1-3.984 1.406 6.15 6.15 0 0 1-4.97-2.531l-2.952 2.953a6.15 6.15 0 0 1 2.531 4.968c0 1.5-.516 2.907-1.406 3.938h9c.984 0 1.781-.797 1.781-1.734zM9.188 27.75a3.93 3.93 0 0 0 3.937-3.937c0-1.641-1.031-3.094-2.484-3.657h-.047a3.4 3.4 0 0 0-1.406-.281 3.93 3.93 0 0 0-3.938 3.938 3.9 3.9 0 0 0 3.938 3.937m1.5-9.937 4.078-4.079c-.141-.468-.188-.984-.188-1.5C14.578 8.813 17.344 6 20.766 6S27 8.813 27 12.234v13.782C27 28.219 25.172 30 22.969 30H9.187A6.18 6.18 0 0 1 3 23.813a6.18 6.18 0 0 1 6.188-6.188c.515 0 1.03.047 1.5.188m-3.422-6.329c0-.609.515-1.125 1.125-1.125h4.406c.469 0 .89.282 1.031.704.188.421.094.89-.234 1.218l-4.36 4.36c-.421.422-1.125.422-1.593 0-.422-.422-.422-1.172 0-1.594l2.437-2.438H8.391a1.11 1.11 0 0 1-1.125-1.125m12.843-2.39v.89H21v-.89h.89v.89c.329 0 .657.094.891.329.563.515.61 1.359.094 1.921.234.235.375.563.375.891 0 .75-.61 1.36-1.36 1.36v.89H21v-.89h-.89v.89h-.891v-.89h-.89v-.891h.89v-2.719h-.89v-.89h.89v-.891zm1.782 3.562h-1.782v.938h1.782a.504.504 0 0 0 .468-.469.504.504 0 0 0-.468-.469m0-1.781h-1.782v.89h1.782c.234 0 .468-.187.468-.421a.47.47 0 0 0-.468-.469M9.75 20.438v.468c.703.282 1.219.938 1.219 1.688v.14H9.844v-.14a.64.64 0 0 0-.656-.657.64.64 0 0 0-.657.657.64.64 0 0 0 .656.656 1.78 1.78 0 0 1 1.782 1.781c0 .75-.516 1.407-1.219 1.688v.468H8.625v-.515a1.72 1.72 0 0 1-1.172-1.64v-.188h1.078v.187a.67.67 0 0 0 .656.657.67.67 0 0 0 .657-.657.64.64 0 0 0-.656-.656c-.985 0-1.735-.797-1.735-1.781 0-.75.469-1.453 1.172-1.688v-.468z' />
    </g>
    <defs>
      <clipPath id='d0519a62f817a3d8631b30c94ae6d560__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampXlBoldIcon);
export default ForwardRef;
