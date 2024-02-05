import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 13.453V16.5h6.375q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H4.5v2.953q0 1.829-.89 3.422L3 26.25h10.875q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H1.125q-.609 0-.984-.562-.282-.516 0-1.079l1.5-2.812q.609-1.078.609-2.344V18.75H1.125Q.095 18.657 0 17.625q.095-1.03 1.125-1.125H2.25v-3.047q.047-2.531 1.734-4.219Q5.672 7.547 8.204 7.5q.983 0 1.921.328l3.75 1.219q.938.421.703 1.453-.421.938-1.453.703l-3.75-1.265a3.7 3.7 0 0 0-1.172-.188q-1.546.046-2.625 1.078-1.031 1.078-1.078 2.625' />
    </g>
    <defs>
      <clipPath id='74771339da4790d0cf533c235fbca9ba__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignXlBoldIcon);
export default ForwardRef;
