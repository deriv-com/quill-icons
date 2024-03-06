import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonMdRegularIcon = (
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
      <path d='M9 5H3a.97.97 0 0 0-.719.281A.97.97 0 0 0 2 6v8h8V6a.97.97 0 0 0-.281-.719A.97.97 0 0 0 9 5m1 10H2v3q0 .438.281.719A.97.97 0 0 0 3 19h6a.97.97 0 0 0 .719-.281A.97.97 0 0 0 10 18zM3 4h6q.844.03 1.406.594Q10.97 5.156 11 6v12q-.03.844-.594 1.406Q9.843 19.97 9 20H3q-.843-.03-1.406-.594Q1.032 18.844 1 18V6q.03-.843.594-1.406Q2.156 4.032 3 4m1.5 13q.031-.469.5-.5h2q.47.031.5.5-.03.47-.5.5H5q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='f6f8364160ac6650e096df25a3c1f5e7__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonMdRegularIcon);
export default ForwardRef;
