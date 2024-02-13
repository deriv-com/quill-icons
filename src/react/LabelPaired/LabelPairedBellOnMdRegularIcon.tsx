import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.938 4.281q.188.406-.22.657l-2 1q-.436.188-.655-.22-.188-.436.218-.655l2-1q.407-.188.657.218M9.5 4.5q.031-.469.5-.5.47.031.5.5v.531q1.937.219 3.188 1.594Q14.968 8 15 10v.906q.03 2.126 1.5 3.656l.094.094q.406.407.406.969 0 .594-.406.969-.375.406-.969.406H4.375q-.594 0-.969-.406-.405-.375-.406-.969 0-.562.406-1l.094-.062Q4.97 13.03 5 10.906V10q.063-2 1.313-3.375T9.5 5.031zM10 6q-1.687.03-2.844 1.156Q6.031 8.312 6 10v.906q-.03 2.532-1.812 4.344l-.063.094a.39.39 0 0 0-.125.281q.03.344.375.375h11.25q.344-.03.375-.375a.4.4 0 0 0-.125-.281l-.062-.094Q14.03 13.438 14 10.906V10q-.031-1.687-1.187-2.844Q11.688 6.031 10 6m-.937 12.344q.25.624.937.656.687-.031.938-.656.186-.438.656-.313.405.188.281.625a2.1 2.1 0 0 1-.719.969Q10.656 20 10 20t-1.156-.375a2.1 2.1 0 0 1-.719-.969q-.125-.437.281-.625.469-.125.656.313M0 9.5q.031-.469.5-.5H3q.47.031.5.5-.03.47-.5.5H.5q-.469-.03-.5-.5M17 9h2.5q.47.031.5.5-.03.47-.5.5H17q-.469-.03-.5-.5.031-.469.5-.5M1.281 4.938q-.405-.25-.218-.657.218-.405.656-.218l2 1q.406.218.219.656-.219.405-.657.218z' />
    </g>
    <defs>
      <clipPath id='90b5101ee7c3a2ef7766908b0fe3db91__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnMdRegularIcon);
export default ForwardRef;
