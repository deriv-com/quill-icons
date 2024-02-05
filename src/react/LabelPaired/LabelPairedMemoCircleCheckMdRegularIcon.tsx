import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v12q0 .438.281.719A.97.97 0 0 0 2 19h7.25q.47.563 1.063.969-.157.03-.313.031H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h8q.844.03 1.406.594Q11.97 5.156 12 6v4.219a4.1 4.1 0 0 0-1 .375V6a.97.97 0 0 0-.281-.719A.97.97 0 0 0 10 5M2 8.5q.031-.469.5-.5h7q.47.031.5.5-.03.47-.5.5h-7q-.469-.03-.5-.5m.5 2.5h6q.47.031.5.5-.03.47-.5.5h-6q-.469-.03-.5-.5.031-.469.5-.5m0 3h4q.47.031.5.5-.03.47-.5.5h-4q-.469-.03-.5-.5.031-.469.5-.5m11 5q.937 0 1.75-.469t1.281-1.281A3.44 3.44 0 0 0 17 15.5q0-.937-.469-1.75a3.44 3.44 0 0 0-1.281-1.281A3.44 3.44 0 0 0 13.5 12q-.937 0-1.75.469t-1.281 1.281A3.44 3.44 0 0 0 10 15.5q0 .937.469 1.75t1.281 1.281A3.44 3.44 0 0 0 13.5 19m0-8a4.43 4.43 0 0 1 2.25.594 4.5 4.5 0 0 1 1.656 1.656Q18 14.312 18 15.5t-.594 2.25a4.5 4.5 0 0 1-1.656 1.656A4.43 4.43 0 0 1 13.5 20a4.43 4.43 0 0 1-2.25-.594 4.5 4.5 0 0 1-1.656-1.656A4.54 4.54 0 0 1 9 15.5q0-1.188.594-2.25a4.5 4.5 0 0 1 1.656-1.656A4.43 4.43 0 0 1 13.5 11m1.406 3.156q.345-.312.688 0 .312.345 0 .688l-2.25 2.25q-.345.312-.688 0l-1.25-1.25q-.312-.345 0-.688.345-.312.688 0l.906.875z' />
    </g>
    <defs>
      <clipPath id='3e99ae24141727c7d287303956f3f1f2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckMdRegularIcon);
export default ForwardRef;
