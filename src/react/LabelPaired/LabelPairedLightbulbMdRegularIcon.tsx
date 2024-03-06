import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbMdRegularIcon = (
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
      <path d='M9.688 12.063q.78-1.095.812-2.563-.063-1.905-1.312-3.187Q7.906 5.063 6 5q-1.905.063-3.187 1.313Q1.563 7.593 1.5 9.5q.03 1.469.813 2.563.125.187.28.406l.126.187q.03.032.031.063.625.812 1.156 1.719.407.78.531 1.562h-1.03a3.2 3.2 0 0 0-.376-1.062 13.6 13.6 0 0 0-1.062-1.626l-.5-.687Q.532 11.281.5 9.5q.063-2.343 1.625-3.875Q3.656 4.063 6 4q2.344.063 3.875 1.625Q11.438 7.156 11.5 9.5q-.03 1.782-.969 3.125-.25.345-.5.656v.031q-.594.782-1.062 1.594A3.6 3.6 0 0 0 8.594 16h-1q.093-.781.5-1.562.531-.939 1.156-1.782h.031q.219-.312.406-.594M6 7q-1.062.03-1.781.719Q3.53 8.438 3.5 9.5q-.03.47-.5.5-.469-.03-.5-.5.031-1.5 1.031-2.469Q4.5 6.031 6 6q.47.031.5.5-.03.47-.5.5M4.594 18q.375.937 1.406 1 1.032-.063 1.406-1zM3.5 17.5v-.156q.03-.313.344-.344h4.312q.313.03.344.344v.156q-.03 1.062-.719 1.781Q7.062 19.97 6 20q-1.062-.03-1.781-.719-.688-.719-.719-1.781' />
    </g>
    <defs>
      <clipPath id='8ed0246136bac35337420c51131be6b1__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbMdRegularIcon);
export default ForwardRef;
