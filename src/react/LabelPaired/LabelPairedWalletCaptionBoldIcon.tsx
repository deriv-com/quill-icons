import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWalletCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.063 4.25h8.624c.344.031.532.219.563.563-.031.343-.219.53-.563.562H2.063a.851.851 0 0 0-.657.281.851.851 0 0 0-.281.657v6.375c0 .265.094.484.281.656.172.187.39.281.657.281h7.874a.852.852 0 0 0 .657-.281.852.852 0 0 0 .281-.656V8.561a.851.851 0 0 0-.281-.656.851.851 0 0 0-.656-.281H2.811c-.343-.031-.53-.219-.562-.563.031-.343.219-.53.563-.562h7.124c.579.016 1.063.219 1.454.61.39.39.593.874.609 1.452v4.126c-.016.578-.219 1.062-.61 1.453-.39.39-.874.593-1.453.609H2.064c-.579-.016-1.063-.219-1.454-.61-.39-.39-.593-.874-.609-1.453V6.314c.016-.579.219-1.063.61-1.454.39-.39.874-.593 1.453-.609ZM9 11.375a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCaptionBoldIcon);
export default ForwardRef;
