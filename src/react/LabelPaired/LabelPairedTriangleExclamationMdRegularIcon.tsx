import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.094 17.125a.6.6 0 0 0-.094.313q.063.53.563.562h12.875q.5-.03.562-.562a.8.8 0 0 0-.062-.313L8.656 6.375Q8.406 6 8 6t-.625.375zm-.875-.5L6.5 5.875Q7.031 5.032 8 5q.969.031 1.5.875l6.281 10.75q.219.374.219.813-.03.656-.469 1.093a1.6 1.6 0 0 1-1.094.469H1.563a1.6 1.6 0 0 1-1.094-.469A1.6 1.6 0 0 1 0 17.438q0-.438.219-.813M8 9q.47.031.5.5v4q-.03.47-.5.5-.469-.03-.5-.5v-4q.031-.469.5-.5m-.75 7q.063-.687.75-.75.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75' />
    </g>
    <defs>
      <clipPath id='2305a5959097287f4f8887f0a9a131ad__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationMdRegularIcon);
export default ForwardRef;
