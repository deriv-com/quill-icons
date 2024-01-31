import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardMdRegularIcon = (
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
      <path d='M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v1h16V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 16 6zM1 9v2h16V9zm0 3v5q0 .438.281.719A.97.97 0 0 0 2 18h14a.97.97 0 0 0 .719-.281A.97.97 0 0 0 17 17v-5zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h14q.844.03 1.406.594Q17.97 6.156 18 7v10q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm3 8.5q.031-.469.5-.5h2q.47.031.5.5-.03.47-.5.5h-2q-.469-.03-.5-.5m4 0q.031-.469.5-.5h4q.47.031.5.5-.03.47-.5.5h-4q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='3ab45327b9fb485d__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardMdRegularIcon);
export default ForwardRef;
