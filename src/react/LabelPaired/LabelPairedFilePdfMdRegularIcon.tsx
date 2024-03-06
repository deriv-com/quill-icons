import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfMdRegularIcon = (
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
      <path d='M2 19h1v1H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h4.875q.624 0 1.063.438l3.625 3.625Q12 8.499 12 9.125V13h-1v-3H7.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 6 8.5V5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v12q0 .438.281.719A.97.97 0 0 0 2 19m9-10a.8.8 0 0 0-.156-.219L7.219 5.156A.46.46 0 0 0 7 5.031V8.5q.031.47.5.5zm-5.5 6h1q.75.031 1.25.5.47.5.5 1.25-.03.75-.5 1.25-.5.47-1.25.5H6v1q-.03.47-.5.5-.469-.03-.5-.5v-4q.031-.469.5-.5m1 2.5q.687-.063.75-.75-.063-.687-.75-.75H6v1.5zm3-2.5h1q.624.03 1.063.438.405.437.437 1.062v2a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 10.5 20h-1q-.469-.03-.5-.5v-4q.031-.469.5-.5m1 4q.47-.03.5-.5v-2q-.03-.469-.5-.5H10v3zm2.5-3.5q.031-.469.5-.5H15q.47.031.5.5-.03.47-.5.5h-1v1h1q.47.031.5.5-.03.47-.5.5h-1v1.5q-.03.47-.5.5-.469-.03-.5-.5v-4' />
    </g>
    <defs>
      <clipPath id='889195467eac25d8e0a5d10e9ecd0015__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfMdRegularIcon);
export default ForwardRef;
