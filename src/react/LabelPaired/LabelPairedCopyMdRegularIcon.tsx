import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 15a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 14V7.625a.42.42 0 0 0-.156-.344l-2.125-2.125A.42.42 0 0 0 10.375 5H7a.97.97 0 0 0-.719.281A.97.97 0 0 0 6 6v8q0 .438.281.719A.97.97 0 0 0 7 15zm1.563-8.437Q14 6.999 14 7.625V14q-.03.844-.594 1.406-.563.563-1.406.594H7q-.843-.03-1.406-.594Q5.032 14.843 5 14V6q.03-.843.594-1.406Q6.156 4.032 7 4h3.375q.624 0 1.063.438zM2 8h2v1H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 10v8q0 .438.281.719A.97.97 0 0 0 2 19h5a.97.97 0 0 0 .719-.281A.97.97 0 0 0 8 18v-1h1v1q-.03.844-.594 1.406Q7.843 19.97 7 20H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-8q.03-.843.594-1.406Q1.157 8.032 2 8' />
    </g>
    <defs>
      <clipPath id='6b31127738bcadb281813a2cfd12332e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyMdRegularIcon);
export default ForwardRef;
