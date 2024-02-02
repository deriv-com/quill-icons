import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenMdRegularIcon = (
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
      <path d='M12 5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v8h12V6a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 5m1 10H1v3q0 .438.281.719A.97.97 0 0 0 2 19h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 18zM2 4h10q.844.03 1.406.594Q13.97 5.156 14 6v12q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4m3.5 13q.031-.469.5-.5h2q.47.031.5.5-.03.47-.5.5H6q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='c5ea46b99765c7f8__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenMdRegularIcon);
export default ForwardRef;
