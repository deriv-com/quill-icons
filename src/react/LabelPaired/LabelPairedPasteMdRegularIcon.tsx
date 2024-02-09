import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteMdRegularIcon = (
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
      <path d='M5 5q-.593.03-.719.594-.125.375-.5.406H3.5q-.469.031-.5.5V7h4v-.5q-.03-.469-.5-.5h-.281q-.375-.03-.469-.406Q5.594 5.032 5 5M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v9q0 .438.281.719A.97.97 0 0 0 2 17h4v1H2q-.843-.03-1.406-.594Q.032 16.844 0 16V7q.03-.843.594-1.406Q1.157 5.032 2 5h1.406q.5-.937 1.594-1 1.094.063 1.594 1H8q.844.03 1.406.594Q9.97 6.156 10 7H9a.97.97 0 0 0-.281-.719A.97.97 0 0 0 8 6h-.094Q8 6.25 8 6.5V7a.97.97 0 0 1-.281.719A.97.97 0 0 1 7 8H3a.97.97 0 0 1-.719-.281A.97.97 0 0 1 2 7v-.5q0-.25.094-.5zm7 13h5a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 18v-6h-1.75q-.531 0-.875-.375Q12 11.281 12 10.75V9H9a.97.97 0 0 0-.719.281A.97.97 0 0 0 8 10v8q0 .438.281.719A.97.97 0 0 0 9 19m4-9.844v1.594q.03.22.25.25h1.594zM14 20H9q-.843-.03-1.406-.594Q7.032 18.844 7 18v-8q.03-.843.594-1.406Q8.156 8.032 9 8h3.625q.624 0 1.063.438l1.874 1.874q.438.438.438 1.063V18q-.03.844-.594 1.406-.563.563-1.406.594' />
    </g>
    <defs>
      <clipPath id='99b34a4c2207bdd0579ad7295b02aeeb__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteMdRegularIcon);
export default ForwardRef;
