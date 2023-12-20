import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedDealProtectionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.875 7.813h2.969c.531 0 1 .093 1.437.28.438.157.813.438 1.125.782.313.344.563.781.719 1.313A6.35 6.35 0 0 1 9.375 12c0 .719-.094 1.313-.25 1.844a3.322 3.322 0 0 1-.719 1.312 3.169 3.169 0 0 1-1.125.781 3.575 3.575 0 0 1-1.437.282H2.875zM5.844 15c.625 0 1.125-.187 1.5-.594.375-.375.593-.969.593-1.719v-1.343c0-.75-.218-1.344-.593-1.719-.375-.406-.875-.594-1.5-.594H4.219V15zm5.219 1.188V7.813h3.593c.781 0 1.375.25 1.813.687.406.469.625 1.094.625 1.844 0 .781-.219 1.375-.625 1.844-.438.468-1.032.687-1.813.687h-2.25v3.313zm1.343-4.5h2.188c.344 0 .594-.094.781-.282.188-.187.281-.437.281-.781v-.562c0-.344-.094-.594-.281-.782-.187-.187-.437-.281-.781-.281h-2.188z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionRegularIcon);
export default ForwardRef;
