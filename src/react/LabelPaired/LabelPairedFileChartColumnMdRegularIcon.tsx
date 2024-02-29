import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 19a.97.97 0 0 0 .719-.281A.97.97 0 0 0 11 18v-8H7.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 6 8.5V5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v12q0 .438.281.719A.97.97 0 0 0 2 19zM7.5 9H11a.8.8 0 0 0-.156-.219L7.219 5.156A.46.46 0 0 0 7 5.031V8.5q.031.47.5.5M2 4h4.875q.624 0 1.063.438l3.625 3.625Q12 8.499 12 9.125V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4m4.5 7.5v6q-.03.47-.5.5-.469-.03-.5-.5v-6q.031-.469.5-.5.47.031.5.5m3 2v4q-.03.47-.5.5-.469-.03-.5-.5v-4q.031-.469.5-.5.47.031.5.5m-6 2v2q-.03.47-.5.5-.469-.03-.5-.5v-2q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='09a5aaf203fa9d53a513c19fe8316ee5__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnMdRegularIcon);
export default ForwardRef;
