import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBellMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7 4c.292 0 .531.094.719.281A.973.973 0 0 1 8 5v.563c1.167.208 2.115.74 2.844 1.593.75.854 1.135 1.886 1.156 3.094v1.031c.02 1.459.48 2.76 1.375 3.906l.469.594c.166.25.198.51.094.781a.793.793 0 0 1-.688.438H.75a.793.793 0 0 1-.688-.438c-.124-.27-.093-.53.094-.78l.469-.595A6.327 6.327 0 0 0 2 11.281V10.25c.02-1.208.406-2.24 1.156-3.094.73-.854 1.677-1.385 2.844-1.593V5c0-.292.094-.531.281-.719A.973.973 0 0 1 7 4Zm0 3h-.25c-.917.02-1.688.333-2.313.938-.604.625-.916 1.395-.937 2.312v1.031c-.02 1.542-.438 2.948-1.25 4.219h9.5a7.532 7.532 0 0 1-1.25-4.219V10.25c-.02-.917-.333-1.688-.938-2.313C8.938 7.333 8.168 7.021 7.25 7H7Zm2 11c0 .542-.198 1.01-.594 1.406A1.922 1.922 0 0 1 7 20c-.542 0-1.01-.198-1.406-.594A1.922 1.922 0 0 1 5 18h4Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellMdBoldIcon);
export default ForwardRef;
