import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.336 21.398v-8.437h2.812V9.68h-9.18v3.28h2.813v8.438zM12.46 9.68h5.586a4.1 4.1 0 0 1 1.562.312c.47.195.86.469 1.211.82.352.352.586.782.782 1.29.156.468.234 1.015.234 1.562a5 5 0 0 1-.234 1.563c-.196.507-.43.898-.782 1.289a3.7 3.7 0 0 1-1.21.82c-.47.195-1.016.273-1.563.273h-2.031v3.79H12.46zM18.125 13c-.04-.04-.117-.078-.352-.078h-1.757v1.484h1.757c.235 0 .352-.078.391-.117s.078-.078.078-.312v-.665c0-.195-.039-.273-.078-.273z' />
    </g>
    <defs>
      <clipPath id='eaccc0a783ee6106b0298c83b5cdc721__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitLgFillIcon);
export default ForwardRef;
