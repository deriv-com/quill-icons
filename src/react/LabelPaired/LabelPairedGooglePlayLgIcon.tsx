import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlayLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.695 14.64 2.344-2.343-10.937-6.29zM1.835 5.5l10.04 10-10.04 10q-.819-.43-.858-1.367V6.867q.039-.937.859-1.367m16.603 8.828q.585.43.585 1.172t-.546 1.172l-2.344 1.367-2.54-2.539 2.54-2.5zM4.102 24.992l8.593-8.633 2.344 2.344z' />
    </g>
    <defs>
      <clipPath id='98a627cbc410848da1cb58f39b381c09__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayLgIcon);
export default ForwardRef;
