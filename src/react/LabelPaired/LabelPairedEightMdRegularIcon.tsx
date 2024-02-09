import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.5 8.75q0 .97-.437 1.781-.47.813-1.22 1.313a3.83 3.83 0 0 1 1.563 1.375q.594.906.594 2.031-.03 1.594-1.094 2.656Q7.844 18.97 6.25 19h-2.5q-1.593-.03-2.656-1.094Q.03 16.844 0 15.25q0-1.125.594-2.031a3.83 3.83 0 0 1 1.562-1.375q-.75-.5-1.219-1.313A3.7 3.7 0 0 1 .5 8.75q.03-1.594 1.094-2.656Q2.657 5.03 4.25 5h1.5q1.594.03 2.656 1.094Q9.47 7.156 9.5 8.75M5.75 12.5h-2q-1.156.03-1.937.813-.782.78-.813 1.937.03 1.156.813 1.938.78.78 1.937.812h2.5q1.156-.031 1.938-.812.78-.782.812-1.938-.031-1.156-.812-1.937T6.25 12.5zm0-1q1.156-.031 1.938-.812.78-.781.812-1.938-.031-1.156-.812-1.937T5.75 6h-1.5q-1.156.03-1.937.813-.782.78-.813 1.937.03 1.156.813 1.938.78.78 1.937.812z' />
    </g>
    <defs>
      <clipPath id='f2d626acb9a21cadb47437d3211cc746__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightMdRegularIcon);
export default ForwardRef;
