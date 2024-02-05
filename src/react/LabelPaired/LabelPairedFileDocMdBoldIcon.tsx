import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocMdBoldIcon = (
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
      <path d='M2 18.5h1V20H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h5.188Q8 4 8.594 4.594l2.812 2.812Q12 8 12 8.844V13h-1.5V9H8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 8V5.5H2q-.469.031-.5.5v12q.031.47.5.5M5.5 15h1q.624.03 1.063.438.405.437.437 1.062v2a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 6.5 20h-1q-.469-.03-.5-.5v-4q.031-.469.5-.5m.5 4h.5q.47-.03.5-.5v-2q-.03-.469-.5-.5H6zm8.25-4h.5q.531 0 .875.375.375.344.375.875v.25q-.03.47-.5.5-.469-.03-.5-.5v-.25q-.03-.22-.25-.25h-.5q-.22.03-.25.25v2.5q.03.22.25.25h.5q.22-.03.25-.25v-.25q.031-.469.5-.5.47.031.5.5v.25q0 .531-.375.875-.344.375-.875.375h-.5q-.531 0-.875-.375Q13 19.281 13 18.75v-2.5q0-.531.375-.875.344-.375.875-.375M9 16.25q0-.531.375-.875.344-.375.875-.375h.5q.531 0 .875.375.375.344.375.875v2.5q0 .531-.375.875-.344.375-.875.375h-.5q-.531 0-.875-.375Q9 19.281 9 18.75zm1.25-.25q-.22.03-.25.25v2.5q.03.22.25.25h.5q.22-.03.25-.25v-2.5q-.03-.22-.25-.25z' />
    </g>
    <defs>
      <clipPath id='b4924779d1d593af6fafdaceb5f75998__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocMdBoldIcon);
export default ForwardRef;
