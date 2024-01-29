import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 6H4a.97.97 0 0 0-.719.281A.97.97 0 0 0 3 7v8H2V7q.03-.843.594-1.406Q3.157 5.032 4 5h12q.844.03 1.406.594Q17.97 6.156 18 7v8h-1V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 16 6M2.406 18h15.188q1.03-.063 1.343-1H1.064q.312.937 1.343 1M0 16.594q.063-.531.594-.594h18.812q.531.063.594.594-.03 1.03-.687 1.718-.688.657-1.72.688H2.407q-1.031-.03-1.687-.687-.688-.688-.719-1.72' />
    </g>
    <defs>
      <clipPath id='85a13a0b449eb9585dd895651103c82d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMdRegularIcon);
export default ForwardRef;
