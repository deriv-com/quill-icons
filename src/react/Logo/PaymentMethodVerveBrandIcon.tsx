import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodVerveBrandIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#EE312A'
      d='M45.837 40c0 11.553-9.366 20.918-20.919 20.918C13.366 60.918 4 51.553 4 40s9.366-20.918 20.918-20.918c11.553 0 20.919 9.365 20.919 20.918'
    />
    <path
      fill='#00425F'
      d='M80.483 34.509h6.014l4.706 13.858L95.91 34.51h6.014L93.818 55.95h-5.23z'
    />
    <path fill='#fff' d='M10.145 27.972h7.06l7.975 20.134 7.975-20.134h6.93L27.924 55.95h-5.49z' />
    <path
      fill='#00425F'
      fillRule='evenodd'
      d='M45.706 46.798h13.858c.523-4.183-.523-12.603-8.89-12.812-10.46-.262-10.72 9.152-10.72 12.812s3.006 9.675 9.674 9.675c5.334 0 8.324-.697 9.152-1.046l-.654-4.968c-3.922 1.002-11.897 1.673-12.42-3.66m0-4.183h8.629c-.175-1.482-1.255-4.446-4.184-4.446-3.66 0-4.445 3.661-4.445 4.446M110.03 46.798h13.858c.523-4.183-.523-12.603-8.89-12.812-10.459-.262-10.721 9.152-10.721 12.812s3.007 9.675 9.675 9.675c5.334 0 8.324-.697 9.152-1.046l-.654-4.968c-3.922 1.002-11.897 1.673-12.42-3.66m0-4.183h8.629c-.175-1.482-1.256-4.446-4.184-4.446-3.661 0-4.445 3.661-4.445 4.446'
      clipRule='evenodd'
    />
    <path
      fill='#00425F'
      d='M64.532 55.95h5.753V40.13c1.36-1.464 4.576-1.045 6.014-.653.523-3.007.784-4.968.784-4.968-6.903-1.465-11.243.784-12.55 2.092z'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodVerveBrandIcon);
export default ForwardRef;
