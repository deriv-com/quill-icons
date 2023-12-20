import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBullhornBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m13.5 6.313-.344.343a10.167 10.167 0 0 1-3.062 2.063A9.919 9.919 0 0 1 6.5 9.5v4a9.92 9.92 0 0 1 3.594.781c1.146.5 2.166 1.188 3.062 2.063l.344.343zM5 8h1.281a8.164 8.164 0 0 0 5.813-2.406l1.187-1.188c.354-.312.719-.385 1.094-.218.375.145.583.447.625.906v4.531c.292.146.531.385.719.719.187.333.281.719.281 1.156 0 .438-.094.823-.281 1.156-.188.334-.427.573-.719.719v4.531c-.042.459-.25.76-.625.907-.375.166-.74.093-1.094-.22l-1.187-1.187a8.246 8.246 0 0 0-2.563-1.75A8.779 8.779 0 0 0 6.5 15v3.25c-.02.5-.187.917-.5 1.25-.333.313-.75.48-1.25.5h-1c-.5-.02-.917-.187-1.25-.5-.312-.333-.48-.75-.5-1.25V15c-.562-.02-1.031-.219-1.406-.594S.02 13.562 0 13v-3c.02-.562.219-1.031.594-1.406S1.438 8.02 2 8zm-1.5 7v3.25c.02.146.104.23.25.25h1c.146-.02.23-.104.25-.25V15zM2 9.5c-.312.02-.48.188-.5.5v3c.02.313.188.48.5.5h3v-4z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornBoldIcon);
export default ForwardRef;
