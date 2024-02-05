import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoMdRegularIcon = (
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
      <path d='M2 19h7.25q.47.563 1.063.969-.157.03-.313.031H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h4.875q.624 0 1.063.438l3.625 3.625Q12 8.499 12 9.125v1.063a5.3 5.3 0 0 0-1 .406V10H7.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 6 8.5V5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v12q0 .438.281.719A.97.97 0 0 0 2 19m9-10a.8.8 0 0 0-.156-.219L7.219 5.156A.46.46 0 0 0 7 5.031V8.5q.031.47.5.5zm6 6.5q0-.937-.469-1.75a3.44 3.44 0 0 0-1.281-1.281A3.44 3.44 0 0 0 13.5 12q-.937 0-1.75.469t-1.281 1.281A3.44 3.44 0 0 0 10 15.5q0 .937.469 1.75t1.281 1.281A3.44 3.44 0 0 0 13.5 19q.937 0 1.75-.469t1.281-1.281A3.44 3.44 0 0 0 17 15.5m-8 0q0-1.218.594-2.25a4.5 4.5 0 0 1 1.656-1.656A4.54 4.54 0 0 1 13.5 11q1.188 0 2.25.594a4.5 4.5 0 0 1 1.656 1.656A4.43 4.43 0 0 1 18 15.5a4.43 4.43 0 0 1-.594 2.25 4.5 4.5 0 0 1-1.656 1.656A4.54 4.54 0 0 1 13.5 20a4.54 4.54 0 0 1-2.25-.594 4.5 4.5 0 0 1-1.656-1.656A4.43 4.43 0 0 1 9 15.5m4.5-1q-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75-.063.687-.75.75m-1 3q.031-.469.5-.5v-1q-.469-.03-.5-.5.031-.469.5-.5h.5q.47.031.5.5V17q.47.031.5.5-.03.47-.5.5h-1q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='c6777517fe82250a46e42903cc79874c__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoMdRegularIcon);
export default ForwardRef;
