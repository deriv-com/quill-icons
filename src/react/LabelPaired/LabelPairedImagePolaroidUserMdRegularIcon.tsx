import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserMdRegularIcon = (
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
      <path d='M10.5 16H1v1q0 .438.281.719A.97.97 0 0 0 2 18h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 17v-1zm-.062-1H13V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 6H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v8h2.563a2.54 2.54 0 0 1 .843-1.437Q5.063 13.03 6 13h2q.937.03 1.594.563.656.562.844 1.437m-5.844 0h4.812Q9.031 14.063 8 14H6q-1.03.063-1.406 1M14 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7m-6 3a.97.97 0 0 0-.281-.719A.97.97 0 0 0 7 9a.97.97 0 0 0-.719.281A.97.97 0 0 0 6 10q0 .438.281.719A.97.97 0 0 0 7 11a.97.97 0 0 0 .719-.281A.97.97 0 0 0 8 10M7 8q1.125.03 1.719 1 .563 1 0 2-.594.97-1.719 1-1.125-.03-1.719-1-.562-1 0-2Q5.875 8.03 7 8' />
    </g>
    <defs>
      <clipPath id='6869020cbacba47f5379b4c9fb830251__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserMdRegularIcon);
export default ForwardRef;
