import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeMdRegularIcon = (
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
      <path d='M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v10q0 .438.281.719A.97.97 0 0 0 2 18h14a.97.97 0 0 0 .719-.281A.97.97 0 0 0 17 17V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 16 6zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h14q.844.03 1.406.594Q17.97 6.156 18 7v10q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm3 1.5q.031-.469.5-.5.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5zm9 0q.031-.469.5-.5.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5zm2.5-.5q.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5v-7q.031-.469.5-.5M5 8.5q.031-.469.5-.5.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5zM7.5 8q.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5v-7q.031-.469.5-.5m2 .5q.031-.469.5-.5.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5z' />
    </g>
    <defs>
      <clipPath id='4a7e5e0e001933f7e8e47e3a6e848538__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeMdRegularIcon);
export default ForwardRef;
