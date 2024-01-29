import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashMdRegularIcon = (
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
      <path d='m11.844 16 1.25 1H4.375q-.594 0-.969-.406-.405-.375-.406-.969 0-.562.406-1l.094-.062Q4.97 13.03 5 10.906v-.312l1 .781q-.219 2.25-1.812 3.875l-.063.094a.39.39 0 0 0-.125.281q.03.344.375.375zM9.5 5.031V4.5q.031-.469.5-.5.47.031.5.5v.531q1.937.219 3.188 1.594Q14.968 8 15 10v.906q.03 2.126 1.5 3.656l.094.063q.03.063.062.094l-2.343-1.844A6.4 6.4 0 0 1 14 10.906V10q-.03-1.687-1.156-2.844Q11.687 6.031 10 6q-1.719.03-2.844 1.188l-.812-.625Q7.594 5.25 9.5 5.03m-.437 13.313q.25.624.937.656.687-.031.938-.656.186-.438.656-.313.405.188.281.625a2.1 2.1 0 0 1-.719.969Q10.656 20 10 20t-1.156-.375a2.1 2.1 0 0 1-.719-.969q-.125-.437.281-.625.469-.125.656.313M.813 4.094l19 15.031q.343.312.093.688-.343.343-.718.093l-19-15q-.344-.343-.094-.718.344-.313.719-.094' />
    </g>
    <defs>
      <clipPath id='b43c49181e1552001f2d3ca98ccb1e7c__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashMdRegularIcon);
export default ForwardRef;
